import { ToggleHideCommentInput } from '~/server/schema/commentv2.schema';
import { showErrorNotification } from '~/utils/notifications';
import { trpc } from '~/utils/trpc';

export const useMutateComment = () => {
  const queryUtils = trpc.useContext();
  const toggleHideCommentMutation = trpc.commentv2.toggleHide.useMutation({
    async onSuccess(_, { entityType, entityId }) {
      await queryUtils.commentv2.getThreadDetails.invalidate({ entityType, entityId });
      await queryUtils.commentv2.getThreadDetails.invalidate({
        entityType,
        entityId,
        hidden: true,
      });
      await queryUtils.commentv2.getCount.invalidate({ entityType, entityId });
      await queryUtils.commentv2.getCount.invalidate({ entityType, entityId, hidden: true });
    },
    onError(error) {
      showErrorNotification({ title: 'Unable to hide comment', error: new Error(error.message) });
    },
  });

  const handleToggleHide = (payload: ToggleHideCommentInput) => {
    if (toggleHideCommentMutation.isLoading) return;
    return toggleHideCommentMutation.mutateAsync(payload);
  };

  return {
    toggleHide: handleToggleHide,
    toggling: toggleHideCommentMutation.isLoading,
  };
};
