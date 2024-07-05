import { ActionIcon, Autocomplete, Badge, Card, Group, Loader, Stack, Text } from '@mantine/core';
import { useDebouncedValue } from '@mantine/hooks';
import { IconSearch, IconX } from '@tabler/icons-react';
import { useRef, useState } from 'react';
import { useHiddenPreferencesData, useToggleHiddenPreferences } from '~/hooks/hidden-preferences';

import { trpc } from '~/utils/trpc';

export function HiddenUsersSection() {
  const searchInputRef = useRef<HTMLInputElement>(null);
  const [search, setSearch] = useState('');
  const [debouncedSearch] = useDebouncedValue(search, 300);

  const hiddenUsers = useHiddenPreferencesData().hiddenUsers;

  const { data, isLoading, isFetching } = trpc.user.getAll.useQuery(
    { query: debouncedSearch.trim(), limit: 10 },
    { enabled: debouncedSearch !== '' }
  );
  const options =
    data?.filter((x) => x.username).map(({ id, username }) => ({ id, value: username ?? '' })) ??
    [];

  const toggleHiddenMutation = useToggleHiddenPreferences();

  const handleToggleBlocked = async ({
    id,
    username,
  }: {
    id: number;
    username?: string | null;
  }) => {
    await toggleHiddenMutation.mutateAsync({ kind: 'user', data: [{ id, username }] });
    setSearch('');
  };

  return (
    <Card withBorder>
      <Card.Section withBorder inheritPadding py="xs">
        <Text weight={500}>Hidden Users</Text>
      </Card.Section>
      <Card.Section withBorder sx={{ marginTop: -1 }}>
        <Autocomplete
          name="tag"
          ref={searchInputRef}
          placeholder="Search users to hide"
          data={options}
          value={search}
          onChange={setSearch}
          icon={isLoading && isFetching ? <Loader size="xs" /> : <IconSearch size={14} />}
          onItemSubmit={({ id, value: username }: { value: string; id: number }) => {
            handleToggleBlocked({ id, username });
            searchInputRef.current?.focus();
          }}
          withinPortal
          variant="unstyled"
        />
      </Card.Section>
      <Card.Section inheritPadding py="md">
        <Stack spacing={5}>
          {hiddenUsers.length > 0 && (
            <Group spacing={4}>
              {hiddenUsers.map((user) => (
                <Badge
                  key={user.id}
                  sx={{ paddingRight: 3 }}
                  rightSection={
                    <ActionIcon
                      size="xs"
                      color="blue"
                      radius="xl"
                      variant="transparent"
                      onClick={() => handleToggleBlocked(user)}
                    >
                      <IconX size={10} />
                    </ActionIcon>
                  }
                >
                  {user.username}
                </Badge>
              ))}
            </Group>
          )}
          <Text color="dimmed" size="xs">
            {`We'll hide content from these users throughout the site.`}
          </Text>
        </Stack>
      </Card.Section>
    </Card>
  );
}
