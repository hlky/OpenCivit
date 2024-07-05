
Object.defineProperty(exports, "__esModule", { value: true });

const {
  Decimal,
  objectEnumValues,
  makeStrictEnum,
  Public,
  detectRuntime,
} = require('@prisma/client/runtime/index-browser.js')


const Prisma = {}

exports.Prisma = Prisma
exports.$Enums = {}

/**
 * Prisma Client JS version: 5.9.1
 * Query Engine version: 23fdc5965b1e05fc54e5f26ed3de66776b93de64
 */
Prisma.prismaVersion = {
  client: "5.9.1",
  engine: "23fdc5965b1e05fc54e5f26ed3de66776b93de64"
}

Prisma.PrismaClientKnownRequestError = () => {
  throw new Error(`PrismaClientKnownRequestError is unable to be run ${runtimeDescription}.
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)};
Prisma.PrismaClientUnknownRequestError = () => {
  throw new Error(`PrismaClientUnknownRequestError is unable to be run ${runtimeDescription}.
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.PrismaClientRustPanicError = () => {
  throw new Error(`PrismaClientRustPanicError is unable to be run ${runtimeDescription}.
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.PrismaClientInitializationError = () => {
  throw new Error(`PrismaClientInitializationError is unable to be run ${runtimeDescription}.
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.PrismaClientValidationError = () => {
  throw new Error(`PrismaClientValidationError is unable to be run ${runtimeDescription}.
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.NotFoundError = () => {
  throw new Error(`NotFoundError is unable to be run ${runtimeDescription}.
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.Decimal = Decimal

/**
 * Re-export of sql-template-tag
 */
Prisma.sql = () => {
  throw new Error(`sqltag is unable to be run ${runtimeDescription}.
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.empty = () => {
  throw new Error(`empty is unable to be run ${runtimeDescription}.
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.join = () => {
  throw new Error(`join is unable to be run ${runtimeDescription}.
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.raw = () => {
  throw new Error(`raw is unable to be run ${runtimeDescription}.
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.validator = Public.validator

/**
* Extensions
*/
Prisma.getExtensionContext = () => {
  throw new Error(`Extensions.getExtensionContext is unable to be run ${runtimeDescription}.
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.defineExtension = () => {
  throw new Error(`Extensions.defineExtension is unable to be run ${runtimeDescription}.
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}

/**
 * Shorthand utilities for JSON filtering
 */
Prisma.DbNull = objectEnumValues.instances.DbNull
Prisma.JsonNull = objectEnumValues.instances.JsonNull
Prisma.AnyNull = objectEnumValues.instances.AnyNull

Prisma.NullTypes = {
  DbNull: objectEnumValues.classes.DbNull,
  JsonNull: objectEnumValues.classes.JsonNull,
  AnyNull: objectEnumValues.classes.AnyNull
}

/**
 * Enums
 */

exports.Prisma.TransactionIsolationLevel = makeStrictEnum({
  ReadUncommitted: 'ReadUncommitted',
  ReadCommitted: 'ReadCommitted',
  RepeatableRead: 'RepeatableRead',
  Serializable: 'Serializable'
});

exports.Prisma.AccountScalarFieldEnum = {
  id: 'id',
  userId: 'userId',
  type: 'type',
  provider: 'provider',
  providerAccountId: 'providerAccountId',
  refresh_token: 'refresh_token',
  access_token: 'access_token',
  expires_at: 'expires_at',
  token_type: 'token_type',
  scope: 'scope',
  id_token: 'id_token',
  session_state: 'session_state',
  metadata: 'metadata'
};

exports.Prisma.SessionScalarFieldEnum = {
  id: 'id',
  sessionToken: 'sessionToken',
  userId: 'userId',
  expires: 'expires'
};

exports.Prisma.SessionInvalidationScalarFieldEnum = {
  userId: 'userId',
  invalidatedAt: 'invalidatedAt'
};

exports.Prisma.UserReferralScalarFieldEnum = {
  id: 'id',
  userReferralCodeId: 'userReferralCodeId',
  source: 'source',
  landingPage: 'landingPage',
  loginRedirectReason: 'loginRedirectReason',
  createdAt: 'createdAt',
  userId: 'userId',
  note: 'note'
};

exports.Prisma.UserReferralCodeScalarFieldEnum = {
  id: 'id',
  userId: 'userId',
  code: 'code',
  note: 'note',
  deletedAt: 'deletedAt',
  createdAt: 'createdAt'
};

exports.Prisma.UserStripeConnectScalarFieldEnum = {
  userId: 'userId',
  connectedAccountId: 'connectedAccountId',
  status: 'status',
  payoutsEnabled: 'payoutsEnabled',
  chargesEnabled: 'chargesEnabled'
};

exports.Prisma.BuzzWithdrawalRequestHistoryScalarFieldEnum = {
  id: 'id',
  requestId: 'requestId',
  updatedById: 'updatedById',
  status: 'status',
  note: 'note',
  createdAt: 'createdAt',
  metadata: 'metadata'
};

exports.Prisma.BuzzWithdrawalRequestScalarFieldEnum = {
  id: 'id',
  userId: 'userId',
  connectedAccountId: 'connectedAccountId',
  buzzWithdrawalTransactionId: 'buzzWithdrawalTransactionId',
  requestedBuzzAmount: 'requestedBuzzAmount',
  platformFeeRate: 'platformFeeRate',
  transferredAmount: 'transferredAmount',
  transferId: 'transferId',
  currency: 'currency',
  metadata: 'metadata',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt',
  status: 'status'
};

exports.Prisma.UserScalarFieldEnum = {
  id: 'id',
  name: 'name',
  username: 'username',
  email: 'email',
  emailVerified: 'emailVerified',
  image: 'image',
  showNsfw: 'showNsfw',
  blurNsfw: 'blurNsfw',
  browsingLevel: 'browsingLevel',
  onboarding: 'onboarding',
  isModerator: 'isModerator',
  createdAt: 'createdAt',
  deletedAt: 'deletedAt',
  customerId: 'customerId',
  subscriptionId: 'subscriptionId',
  mutedAt: 'mutedAt',
  muted: 'muted',
  muteConfirmedAt: 'muteConfirmedAt',
  bannedAt: 'bannedAt',
  autoplayGifs: 'autoplayGifs',
  filePreferences: 'filePreferences',
  leaderboardShowcase: 'leaderboardShowcase',
  excludeFromLeaderboards: 'excludeFromLeaderboards',
  rewardsEligibility: 'rewardsEligibility',
  eligibilityChangedAt: 'eligibilityChangedAt',
  profilePictureId: 'profilePictureId',
  settings: 'settings',
  publicSettings: 'publicSettings'
};

exports.Prisma.CustomerSubscriptionScalarFieldEnum = {
  id: 'id',
  userId: 'userId',
  metadata: 'metadata',
  status: 'status',
  priceId: 'priceId',
  productId: 'productId',
  cancelAtPeriodEnd: 'cancelAtPeriodEnd',
  cancelAt: 'cancelAt',
  canceledAt: 'canceledAt',
  currentPeriodStart: 'currentPeriodStart',
  currentPeriodEnd: 'currentPeriodEnd',
  createdAt: 'createdAt',
  endedAt: 'endedAt',
  updatedAt: 'updatedAt'
};

exports.Prisma.ProductScalarFieldEnum = {
  id: 'id',
  active: 'active',
  name: 'name',
  description: 'description',
  metadata: 'metadata',
  defaultPriceId: 'defaultPriceId'
};

exports.Prisma.PriceScalarFieldEnum = {
  id: 'id',
  productId: 'productId',
  active: 'active',
  currency: 'currency',
  description: 'description',
  type: 'type',
  unitAmount: 'unitAmount',
  interval: 'interval',
  intervalCount: 'intervalCount',
  metadata: 'metadata'
};

exports.Prisma.PurchaseScalarFieldEnum = {
  id: 'id',
  customerId: 'customerId',
  productId: 'productId',
  priceId: 'priceId',
  status: 'status',
  createdAt: 'createdAt'
};

exports.Prisma.UserEngagementScalarFieldEnum = {
  userId: 'userId',
  targetUserId: 'targetUserId',
  type: 'type',
  createdAt: 'createdAt'
};

exports.Prisma.UserMetricScalarFieldEnum = {
  userId: 'userId',
  timeframe: 'timeframe',
  followingCount: 'followingCount',
  followerCount: 'followerCount',
  reactionCount: 'reactionCount',
  hiddenCount: 'hiddenCount',
  uploadCount: 'uploadCount',
  reviewCount: 'reviewCount',
  answerCount: 'answerCount',
  answerAcceptCount: 'answerAcceptCount',
  updatedAt: 'updatedAt'
};

exports.Prisma.UserLinkScalarFieldEnum = {
  id: 'id',
  userId: 'userId',
  url: 'url',
  type: 'type'
};

exports.Prisma.VerificationTokenScalarFieldEnum = {
  identifier: 'identifier',
  token: 'token',
  expires: 'expires'
};

exports.Prisma.ImportScalarFieldEnum = {
  id: 'id',
  userId: 'userId',
  createdAt: 'createdAt',
  startedAt: 'startedAt',
  finishedAt: 'finishedAt',
  source: 'source',
  status: 'status',
  data: 'data',
  parentId: 'parentId',
  importId: 'importId'
};

exports.Prisma.ModelScalarFieldEnum = {
  id: 'id',
  name: 'name',
  description: 'description',
  type: 'type',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt',
  lastVersionAt: 'lastVersionAt',
  nsfw: 'nsfw',
  tosViolation: 'tosViolation',
  poi: 'poi',
  minor: 'minor',
  userId: 'userId',
  status: 'status',
  publishedAt: 'publishedAt',
  fromImportId: 'fromImportId',
  meta: 'meta',
  deletedAt: 'deletedAt',
  deletedBy: 'deletedBy',
  checkpointType: 'checkpointType',
  uploadType: 'uploadType',
  locked: 'locked',
  underAttack: 'underAttack',
  earlyAccessDeadline: 'earlyAccessDeadline',
  mode: 'mode',
  unlisted: 'unlisted',
  gallerySettings: 'gallerySettings',
  availability: 'availability',
  nsfwLevel: 'nsfwLevel',
  lockedProperties: 'lockedProperties',
  allowNoCredit: 'allowNoCredit',
  allowCommercialUse: 'allowCommercialUse',
  allowDerivatives: 'allowDerivatives',
  allowDifferentLicense: 'allowDifferentLicense'
};

exports.Prisma.LicenseScalarFieldEnum = {
  id: 'id',
  name: 'name',
  url: 'url'
};

exports.Prisma.ModelInterestScalarFieldEnum = {
  userId: 'userId',
  modelId: 'modelId',
  createdAt: 'createdAt'
};

exports.Prisma.ModelEngagementScalarFieldEnum = {
  userId: 'userId',
  modelId: 'modelId',
  type: 'type',
  createdAt: 'createdAt'
};

exports.Prisma.ModelVersionSponsorshipSettingsScalarFieldEnum = {
  id: 'id',
  modelVersionMonetizationId: 'modelVersionMonetizationId',
  type: 'type',
  currency: 'currency',
  unitAmount: 'unitAmount'
};

exports.Prisma.ModelVersionMonetizationScalarFieldEnum = {
  id: 'id',
  modelVersionId: 'modelVersionId',
  type: 'type',
  currency: 'currency',
  unitAmount: 'unitAmount'
};

exports.Prisma.ModelVersionScalarFieldEnum = {
  id: 'id',
  index: 'index',
  name: 'name',
  description: 'description',
  modelId: 'modelId',
  trainedWords: 'trainedWords',
  steps: 'steps',
  epochs: 'epochs',
  clipSkip: 'clipSkip',
  vaeId: 'vaeId',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt',
  publishedAt: 'publishedAt',
  status: 'status',
  trainingStatus: 'trainingStatus',
  trainingDetails: 'trainingDetails',
  fromImportId: 'fromImportId',
  inaccurate: 'inaccurate',
  baseModel: 'baseModel',
  baseModelType: 'baseModelType',
  meta: 'meta',
  earlyAccessTimeFrame: 'earlyAccessTimeFrame',
  requireAuth: 'requireAuth',
  settings: 'settings',
  availability: 'availability',
  nsfwLevel: 'nsfwLevel'
};

exports.Prisma.ModelVersionEngagementScalarFieldEnum = {
  userId: 'userId',
  modelVersionId: 'modelVersionId',
  type: 'type',
  createdAt: 'createdAt'
};

exports.Prisma.RecommendedResourceScalarFieldEnum = {
  id: 'id',
  resourceId: 'resourceId',
  sourceId: 'sourceId',
  settings: 'settings'
};

exports.Prisma.ModelFileHashScalarFieldEnum = {
  fileId: 'fileId',
  type: 'type',
  hash: 'hash',
  createdAt: 'createdAt'
};

exports.Prisma.ModelFileScalarFieldEnum = {
  id: 'id',
  name: 'name',
  overrideName: 'overrideName',
  url: 'url',
  sizeKB: 'sizeKB',
  createdAt: 'createdAt',
  type: 'type',
  modelVersionId: 'modelVersionId',
  pickleScanResult: 'pickleScanResult',
  exists: 'exists',
  pickleScanMessage: 'pickleScanMessage',
  virusScanResult: 'virusScanResult',
  virusScanMessage: 'virusScanMessage',
  scannedAt: 'scannedAt',
  scanRequestedAt: 'scanRequestedAt',
  rawScanResult: 'rawScanResult',
  metadata: 'metadata',
  headerData: 'headerData',
  visibility: 'visibility',
  dataPurged: 'dataPurged'
};

exports.Prisma.FileScalarFieldEnum = {
  id: 'id',
  name: 'name',
  url: 'url',
  sizeKB: 'sizeKB',
  createdAt: 'createdAt',
  entityId: 'entityId',
  entityType: 'entityType',
  metadata: 'metadata'
};

exports.Prisma.ModelMetricScalarFieldEnum = {
  modelId: 'modelId',
  timeframe: 'timeframe',
  rating: 'rating',
  ratingCount: 'ratingCount',
  downloadCount: 'downloadCount',
  favoriteCount: 'favoriteCount',
  commentCount: 'commentCount',
  collectedCount: 'collectedCount',
  imageCount: 'imageCount',
  tippedCount: 'tippedCount',
  tippedAmountCount: 'tippedAmountCount',
  generationCount: 'generationCount',
  thumbsUpCount: 'thumbsUpCount',
  thumbsDownCount: 'thumbsDownCount',
  updatedAt: 'updatedAt'
};

exports.Prisma.ModelVersionMetricScalarFieldEnum = {
  modelVersionId: 'modelVersionId',
  timeframe: 'timeframe',
  rating: 'rating',
  ratingCount: 'ratingCount',
  downloadCount: 'downloadCount',
  favoriteCount: 'favoriteCount',
  commentCount: 'commentCount',
  collectedCount: 'collectedCount',
  imageCount: 'imageCount',
  tippedCount: 'tippedCount',
  tippedAmountCount: 'tippedAmountCount',
  generationCount: 'generationCount',
  thumbsUpCount: 'thumbsUpCount',
  thumbsDownCount: 'thumbsDownCount',
  updatedAt: 'updatedAt'
};

exports.Prisma.ModelMetricDailyScalarFieldEnum = {
  modelId: 'modelId',
  modelVersionId: 'modelVersionId',
  type: 'type',
  date: 'date',
  count: 'count'
};

exports.Prisma.ModelAssociationsScalarFieldEnum = {
  id: 'id',
  fromModelId: 'fromModelId',
  toModelId: 'toModelId',
  toArticleId: 'toArticleId',
  associatedById: 'associatedById',
  createdAt: 'createdAt',
  type: 'type',
  index: 'index'
};

exports.Prisma.DownloadHistoryScalarFieldEnum = {
  userId: 'userId',
  modelVersionId: 'modelVersionId',
  downloadAt: 'downloadAt',
  hidden: 'hidden'
};

exports.Prisma.ModActivityScalarFieldEnum = {
  id: 'id',
  userId: 'userId',
  activity: 'activity',
  entityType: 'entityType',
  entityId: 'entityId',
  createdAt: 'createdAt'
};

exports.Prisma.ReportScalarFieldEnum = {
  id: 'id',
  userId: 'userId',
  reason: 'reason',
  createdAt: 'createdAt',
  details: 'details',
  internalNotes: 'internalNotes',
  previouslyReviewedCount: 'previouslyReviewedCount',
  alsoReportedBy: 'alsoReportedBy',
  status: 'status',
  statusSetAt: 'statusSetAt',
  statusSetBy: 'statusSetBy'
};

exports.Prisma.ResourceReviewReportScalarFieldEnum = {
  resourceReviewId: 'resourceReviewId',
  reportId: 'reportId'
};

exports.Prisma.ModelReportScalarFieldEnum = {
  modelId: 'modelId',
  reportId: 'reportId'
};

exports.Prisma.CommentReportScalarFieldEnum = {
  commentId: 'commentId',
  reportId: 'reportId'
};

exports.Prisma.CommentV2ReportScalarFieldEnum = {
  commentV2Id: 'commentV2Id',
  reportId: 'reportId'
};

exports.Prisma.ImageReportScalarFieldEnum = {
  imageId: 'imageId',
  reportId: 'reportId'
};

exports.Prisma.ArticleReportScalarFieldEnum = {
  articleId: 'articleId',
  reportId: 'reportId'
};

exports.Prisma.PostReportScalarFieldEnum = {
  postId: 'postId',
  reportId: 'reportId'
};

exports.Prisma.UserReportScalarFieldEnum = {
  userId: 'userId',
  reportId: 'reportId'
};

exports.Prisma.CollectionReportScalarFieldEnum = {
  collectionId: 'collectionId',
  reportId: 'reportId'
};

exports.Prisma.BountyReportScalarFieldEnum = {
  bountyId: 'bountyId',
  reportId: 'reportId'
};

exports.Prisma.BountyEntryReportScalarFieldEnum = {
  bountyEntryId: 'bountyEntryId',
  reportId: 'reportId'
};

exports.Prisma.ChatReportScalarFieldEnum = {
  chatId: 'chatId',
  reportId: 'reportId'
};

exports.Prisma.ResourceReviewScalarFieldEnum = {
  id: 'id',
  modelId: 'modelId',
  modelVersionId: 'modelVersionId',
  rating: 'rating',
  recommended: 'recommended',
  details: 'details',
  userId: 'userId',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt',
  exclude: 'exclude',
  nsfw: 'nsfw',
  tosViolation: 'tosViolation',
  metadata: 'metadata'
};

exports.Prisma.ResourceReviewReactionScalarFieldEnum = {
  id: 'id',
  reviewId: 'reviewId',
  userId: 'userId',
  reaction: 'reaction',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
};

exports.Prisma.PostScalarFieldEnum = {
  id: 'id',
  nsfw: 'nsfw',
  title: 'title',
  detail: 'detail',
  userId: 'userId',
  modelVersionId: 'modelVersionId',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt',
  publishedAt: 'publishedAt',
  metadata: 'metadata',
  tosViolation: 'tosViolation',
  collectionId: 'collectionId',
  unlisted: 'unlisted',
  availability: 'availability',
  nsfwLevel: 'nsfwLevel'
};

exports.Prisma.PostMetricScalarFieldEnum = {
  postId: 'postId',
  timeframe: 'timeframe',
  likeCount: 'likeCount',
  dislikeCount: 'dislikeCount',
  laughCount: 'laughCount',
  cryCount: 'cryCount',
  heartCount: 'heartCount',
  commentCount: 'commentCount',
  collectedCount: 'collectedCount',
  updatedAt: 'updatedAt'
};

exports.Prisma.ImageScalarFieldEnum = {
  id: 'id',
  name: 'name',
  url: 'url',
  userId: 'userId',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt',
  meta: 'meta',
  hash: 'hash',
  height: 'height',
  width: 'width',
  type: 'type',
  metadata: 'metadata',
  nsfw: 'nsfw',
  nsfwLevel: 'nsfwLevel',
  nsfwLevelLocked: 'nsfwLevelLocked',
  tosViolation: 'tosViolation',
  analysis: 'analysis',
  generationProcess: 'generationProcess',
  featuredAt: 'featuredAt',
  postId: 'postId',
  needsReview: 'needsReview',
  hideMeta: 'hideMeta',
  index: 'index',
  scannedAt: 'scannedAt',
  scanRequestedAt: 'scanRequestedAt',
  mimeType: 'mimeType',
  sizeKB: 'sizeKB',
  ingestion: 'ingestion',
  blockedFor: 'blockedFor',
  scanJobs: 'scanJobs'
};

exports.Prisma.ImageConnectionScalarFieldEnum = {
  imageId: 'imageId',
  entityId: 'entityId',
  entityType: 'entityType'
};

exports.Prisma.ImageEngagementScalarFieldEnum = {
  userId: 'userId',
  imageId: 'imageId',
  type: 'type',
  createdAt: 'createdAt'
};

exports.Prisma.ImageResourceScalarFieldEnum = {
  id: 'id',
  modelVersionId: 'modelVersionId',
  name: 'name',
  hash: 'hash',
  imageId: 'imageId',
  strength: 'strength',
  detected: 'detected'
};

exports.Prisma.ImageMetricScalarFieldEnum = {
  imageId: 'imageId',
  timeframe: 'timeframe',
  likeCount: 'likeCount',
  dislikeCount: 'dislikeCount',
  laughCount: 'laughCount',
  cryCount: 'cryCount',
  heartCount: 'heartCount',
  commentCount: 'commentCount',
  collectedCount: 'collectedCount',
  tippedCount: 'tippedCount',
  tippedAmountCount: 'tippedAmountCount',
  viewCount: 'viewCount',
  updatedAt: 'updatedAt'
};

exports.Prisma.ImageRatingRequestScalarFieldEnum = {
  userId: 'userId',
  imageId: 'imageId',
  createdAt: 'createdAt',
  nsfwLevel: 'nsfwLevel',
  status: 'status'
};

exports.Prisma.CollectionMetricScalarFieldEnum = {
  collectionId: 'collectionId',
  timeframe: 'timeframe',
  followerCount: 'followerCount',
  itemCount: 'itemCount',
  contributorCount: 'contributorCount',
  updatedAt: 'updatedAt'
};

exports.Prisma.TagScalarFieldEnum = {
  id: 'id',
  name: 'name',
  color: 'color',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt',
  target: 'target',
  type: 'type',
  nsfw: 'nsfw',
  nsfwLevel: 'nsfwLevel',
  unlisted: 'unlisted',
  unfeatured: 'unfeatured',
  isCategory: 'isCategory',
  adminOnly: 'adminOnly'
};

exports.Prisma.TagsOnTagsScalarFieldEnum = {
  fromTagId: 'fromTagId',
  toTagId: 'toTagId',
  type: 'type',
  createdAt: 'createdAt'
};

exports.Prisma.TagsOnModelsScalarFieldEnum = {
  modelId: 'modelId',
  tagId: 'tagId',
  createdAt: 'createdAt'
};

exports.Prisma.TagsOnModelsVoteScalarFieldEnum = {
  modelId: 'modelId',
  tagId: 'tagId',
  userId: 'userId',
  vote: 'vote',
  createdAt: 'createdAt'
};

exports.Prisma.TagsOnQuestionsScalarFieldEnum = {
  questionId: 'questionId',
  tagId: 'tagId'
};

exports.Prisma.TagsOnImageScalarFieldEnum = {
  imageId: 'imageId',
  tagId: 'tagId',
  createdAt: 'createdAt',
  automated: 'automated',
  confidence: 'confidence',
  disabled: 'disabled',
  disabledAt: 'disabledAt',
  needsReview: 'needsReview',
  source: 'source'
};

exports.Prisma.TagsOnImageVoteScalarFieldEnum = {
  imageId: 'imageId',
  tagId: 'tagId',
  userId: 'userId',
  vote: 'vote',
  createdAt: 'createdAt',
  applied: 'applied'
};

exports.Prisma.TagsOnPostScalarFieldEnum = {
  postId: 'postId',
  tagId: 'tagId',
  createdAt: 'createdAt',
  confidence: 'confidence',
  disabled: 'disabled',
  needsReview: 'needsReview'
};

exports.Prisma.TagsOnArticleScalarFieldEnum = {
  articleId: 'articleId',
  tagId: 'tagId',
  createdAt: 'createdAt'
};

exports.Prisma.TagsOnBountyScalarFieldEnum = {
  bountyId: 'bountyId',
  tagId: 'tagId',
  createdAt: 'createdAt'
};

exports.Prisma.TagsOnPostVoteScalarFieldEnum = {
  postId: 'postId',
  tagId: 'tagId',
  userId: 'userId',
  vote: 'vote',
  createdAt: 'createdAt'
};

exports.Prisma.TagMetricScalarFieldEnum = {
  tagId: 'tagId',
  timeframe: 'timeframe',
  modelCount: 'modelCount',
  imageCount: 'imageCount',
  postCount: 'postCount',
  articleCount: 'articleCount',
  hiddenCount: 'hiddenCount',
  followerCount: 'followerCount',
  updatedAt: 'updatedAt'
};

exports.Prisma.SavedModelScalarFieldEnum = {
  modelId: 'modelId',
  userId: 'userId',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
};

exports.Prisma.RunStrategyScalarFieldEnum = {
  id: 'id',
  modelVersionId: 'modelVersionId',
  partnerId: 'partnerId',
  url: 'url',
  createdAt: 'createdAt'
};

exports.Prisma.PartnerScalarFieldEnum = {
  id: 'id',
  name: 'name',
  homepage: 'homepage',
  tos: 'tos',
  privacy: 'privacy',
  startupTime: 'startupTime',
  onDemand: 'onDemand',
  onDemandStrategy: 'onDemandStrategy',
  onDemandTypes: 'onDemandTypes',
  onDemandBaseModels: 'onDemandBaseModels',
  stepsPerSecond: 'stepsPerSecond',
  pricingModel: 'pricingModel',
  price: 'price',
  about: 'about',
  createdAt: 'createdAt',
  nsfw: 'nsfw',
  poi: 'poi',
  personal: 'personal',
  token: 'token',
  tier: 'tier',
  logo: 'logo'
};

exports.Prisma.KeyValueScalarFieldEnum = {
  key: 'key',
  value: 'value'
};

exports.Prisma.ApiKeyScalarFieldEnum = {
  id: 'id',
  key: 'key',
  name: 'name',
  scope: 'scope',
  userId: 'userId',
  createdAt: 'createdAt'
};

exports.Prisma.CommentScalarFieldEnum = {
  id: 'id',
  content: 'content',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt',
  nsfw: 'nsfw',
  tosViolation: 'tosViolation',
  parentId: 'parentId',
  userId: 'userId',
  modelId: 'modelId',
  locked: 'locked',
  hidden: 'hidden'
};

exports.Prisma.CommentReactionScalarFieldEnum = {
  id: 'id',
  commentId: 'commentId',
  userId: 'userId',
  reaction: 'reaction',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
};

exports.Prisma.LogScalarFieldEnum = {
  id: 'id',
  event: 'event',
  details: 'details',
  createdAt: 'createdAt'
};

exports.Prisma.NotificationScalarFieldEnum = {
  id: 'id',
  userId: 'userId',
  type: 'type',
  category: 'category',
  details: 'details',
  createdAt: 'createdAt'
};

exports.Prisma.NotificationViewedScalarFieldEnum = {
  id: 'id',
  userId: 'userId'
};

exports.Prisma.UserNotificationSettingsScalarFieldEnum = {
  id: 'id',
  userId: 'userId',
  type: 'type',
  disabledAt: 'disabledAt'
};

exports.Prisma.WebhookScalarFieldEnum = {
  id: 'id',
  url: 'url',
  notifyOn: 'notifyOn',
  active: 'active',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt',
  userId: 'userId'
};

exports.Prisma.QuestionScalarFieldEnum = {
  id: 'id',
  userId: 'userId',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt',
  title: 'title',
  content: 'content',
  selectedAnswerId: 'selectedAnswerId'
};

exports.Prisma.QuestionMetricScalarFieldEnum = {
  questionId: 'questionId',
  timeframe: 'timeframe',
  heartCount: 'heartCount',
  commentCount: 'commentCount',
  answerCount: 'answerCount'
};

exports.Prisma.AnswerScalarFieldEnum = {
  id: 'id',
  questionId: 'questionId',
  userId: 'userId',
  content: 'content',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
};

exports.Prisma.AnswerVoteScalarFieldEnum = {
  answerId: 'answerId',
  userId: 'userId',
  vote: 'vote',
  createdAt: 'createdAt'
};

exports.Prisma.AnswerMetricScalarFieldEnum = {
  answerId: 'answerId',
  timeframe: 'timeframe',
  checkCount: 'checkCount',
  crossCount: 'crossCount',
  heartCount: 'heartCount',
  commentCount: 'commentCount'
};

exports.Prisma.CommentV2ScalarFieldEnum = {
  id: 'id',
  content: 'content',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt',
  nsfw: 'nsfw',
  tosViolation: 'tosViolation',
  userId: 'userId',
  threadId: 'threadId',
  metadata: 'metadata',
  hidden: 'hidden'
};

exports.Prisma.ThreadScalarFieldEnum = {
  id: 'id',
  locked: 'locked',
  parentThreadId: 'parentThreadId',
  rootThreadId: 'rootThreadId',
  questionId: 'questionId',
  answerId: 'answerId',
  imageId: 'imageId',
  postId: 'postId',
  reviewId: 'reviewId',
  commentId: 'commentId',
  modelId: 'modelId',
  articleId: 'articleId',
  bountyId: 'bountyId',
  bountyEntryId: 'bountyEntryId',
  clubPostId: 'clubPostId',
  metadata: 'metadata'
};

exports.Prisma.QuestionReactionScalarFieldEnum = {
  id: 'id',
  questionId: 'questionId',
  userId: 'userId',
  reaction: 'reaction',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
};

exports.Prisma.AnswerReactionScalarFieldEnum = {
  id: 'id',
  answerId: 'answerId',
  userId: 'userId',
  reaction: 'reaction',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
};

exports.Prisma.CommentV2ReactionScalarFieldEnum = {
  id: 'id',
  commentId: 'commentId',
  userId: 'userId',
  reaction: 'reaction',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
};

exports.Prisma.ImageReactionScalarFieldEnum = {
  id: 'id',
  imageId: 'imageId',
  userId: 'userId',
  reaction: 'reaction',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
};

exports.Prisma.PostReactionScalarFieldEnum = {
  id: 'id',
  postId: 'postId',
  userId: 'userId',
  reaction: 'reaction',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
};

exports.Prisma.ArticleReactionScalarFieldEnum = {
  id: 'id',
  articleId: 'articleId',
  userId: 'userId',
  reaction: 'reaction',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
};

exports.Prisma.TagEngagementScalarFieldEnum = {
  userId: 'userId',
  tagId: 'tagId',
  type: 'type',
  createdAt: 'createdAt'
};

exports.Prisma.AnnouncementScalarFieldEnum = {
  id: 'id',
  title: 'title',
  content: 'content',
  emoji: 'emoji',
  color: 'color',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt',
  startsAt: 'startsAt',
  endsAt: 'endsAt',
  metadata: 'metadata'
};

exports.Prisma.CosmeticScalarFieldEnum = {
  id: 'id',
  name: 'name',
  description: 'description',
  videoUrl: 'videoUrl',
  type: 'type',
  source: 'source',
  permanentUnlock: 'permanentUnlock',
  data: 'data',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt',
  availableStart: 'availableStart',
  availableEnd: 'availableEnd',
  availableQuery: 'availableQuery',
  productId: 'productId',
  leaderboardId: 'leaderboardId',
  leaderboardPosition: 'leaderboardPosition'
};

exports.Prisma.UserCosmeticScalarFieldEnum = {
  userId: 'userId',
  cosmeticId: 'cosmeticId',
  obtainedAt: 'obtainedAt',
  equippedAt: 'equippedAt',
  data: 'data',
  claimKey: 'claimKey',
  equippedToId: 'equippedToId',
  equippedToType: 'equippedToType',
  forId: 'forId',
  forType: 'forType'
};

exports.Prisma.CosmeticShopSectionScalarFieldEnum = {
  id: 'id',
  addedById: 'addedById',
  title: 'title',
  description: 'description',
  placement: 'placement',
  meta: 'meta',
  imageId: 'imageId',
  published: 'published'
};

exports.Prisma.CosmeticShopItemScalarFieldEnum = {
  id: 'id',
  cosmeticId: 'cosmeticId',
  unitAmount: 'unitAmount',
  addedById: 'addedById',
  createdAt: 'createdAt',
  availableFrom: 'availableFrom',
  availableTo: 'availableTo',
  availableQuantity: 'availableQuantity',
  meta: 'meta',
  title: 'title',
  description: 'description',
  archivedAt: 'archivedAt'
};

exports.Prisma.CosmeticShopSectionItemScalarFieldEnum = {
  shopItemId: 'shopItemId',
  shopSectionId: 'shopSectionId',
  index: 'index',
  createdAt: 'createdAt'
};

exports.Prisma.UserCosmeticShopPurchasesScalarFieldEnum = {
  userId: 'userId',
  cosmeticId: 'cosmeticId',
  shopItemId: 'shopItemId',
  unitAmount: 'unitAmount',
  purchasedAt: 'purchasedAt',
  buzzTransactionId: 'buzzTransactionId',
  refunded: 'refunded'
};

exports.Prisma.BuzzClaimScalarFieldEnum = {
  key: 'key',
  title: 'title',
  description: 'description',
  transactionIdQuery: 'transactionIdQuery',
  amount: 'amount',
  availableStart: 'availableStart',
  availableEnd: 'availableEnd'
};

exports.Prisma.ArticleScalarFieldEnum = {
  id: 'id',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt',
  nsfw: 'nsfw',
  tosViolation: 'tosViolation',
  metadata: 'metadata',
  title: 'title',
  content: 'content',
  cover: 'cover',
  coverId: 'coverId',
  publishedAt: 'publishedAt',
  userId: 'userId',
  availability: 'availability',
  unlisted: 'unlisted',
  nsfwLevel: 'nsfwLevel',
  userNsfwLevel: 'userNsfwLevel',
  lockedProperties: 'lockedProperties'
};

exports.Prisma.PressMentionScalarFieldEnum = {
  id: 'id',
  title: 'title',
  url: 'url',
  source: 'source',
  publishedAt: 'publishedAt',
  createdAt: 'createdAt'
};

exports.Prisma.ArticleEngagementScalarFieldEnum = {
  userId: 'userId',
  articleId: 'articleId',
  type: 'type',
  createdAt: 'createdAt'
};

exports.Prisma.ArticleMetricScalarFieldEnum = {
  articleId: 'articleId',
  timeframe: 'timeframe',
  likeCount: 'likeCount',
  dislikeCount: 'dislikeCount',
  laughCount: 'laughCount',
  cryCount: 'cryCount',
  heartCount: 'heartCount',
  commentCount: 'commentCount',
  viewCount: 'viewCount',
  favoriteCount: 'favoriteCount',
  hideCount: 'hideCount',
  collectedCount: 'collectedCount',
  tippedCount: 'tippedCount',
  tippedAmountCount: 'tippedAmountCount',
  updatedAt: 'updatedAt'
};

exports.Prisma.LeaderboardScalarFieldEnum = {
  id: 'id',
  index: 'index',
  title: 'title',
  description: 'description',
  scoringDescription: 'scoringDescription',
  query: 'query',
  active: 'active',
  public: 'public'
};

exports.Prisma.LeaderboardResultScalarFieldEnum = {
  leaderboardId: 'leaderboardId',
  date: 'date',
  position: 'position',
  userId: 'userId',
  score: 'score',
  metrics: 'metrics',
  createdAt: 'createdAt'
};

exports.Prisma.ModelVersionExplorationScalarFieldEnum = {
  index: 'index',
  name: 'name',
  prompt: 'prompt',
  modelVersionId: 'modelVersionId'
};

exports.Prisma.GenerationServiceProviderScalarFieldEnum = {
  name: 'name',
  schedulers: 'schedulers'
};

exports.Prisma.CollectionScalarFieldEnum = {
  id: 'id',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt',
  name: 'name',
  description: 'description',
  nsfw: 'nsfw',
  userId: 'userId',
  imageId: 'imageId',
  write: 'write',
  read: 'read',
  type: 'type',
  mode: 'mode',
  metadata: 'metadata',
  availability: 'availability',
  nsfwLevel: 'nsfwLevel'
};

exports.Prisma.CollectionItemScalarFieldEnum = {
  id: 'id',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt',
  collectionId: 'collectionId',
  articleId: 'articleId',
  postId: 'postId',
  imageId: 'imageId',
  modelId: 'modelId',
  addedById: 'addedById',
  reviewedById: 'reviewedById',
  reviewedAt: 'reviewedAt',
  note: 'note',
  status: 'status',
  randomId: 'randomId',
  tagId: 'tagId'
};

exports.Prisma.CollectionContributorScalarFieldEnum = {
  createdAt: 'createdAt',
  updatedAt: 'updatedAt',
  userId: 'userId',
  collectionId: 'collectionId',
  permissions: 'permissions'
};

exports.Prisma.TagsOnCollectionScalarFieldEnum = {
  collectionId: 'collectionId',
  tagId: 'tagId',
  createdAt: 'createdAt'
};

exports.Prisma.HomeBlockScalarFieldEnum = {
  id: 'id',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt',
  userId: 'userId',
  metadata: 'metadata',
  index: 'index',
  type: 'type',
  permanent: 'permanent',
  sourceId: 'sourceId'
};

exports.Prisma.BuzzTipScalarFieldEnum = {
  entityType: 'entityType',
  entityId: 'entityId',
  toUserId: 'toUserId',
  fromUserId: 'fromUserId',
  amount: 'amount',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
};

exports.Prisma.BountyScalarFieldEnum = {
  id: 'id',
  userId: 'userId',
  name: 'name',
  description: 'description',
  startsAt: 'startsAt',
  expiresAt: 'expiresAt',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt',
  details: 'details',
  mode: 'mode',
  entryMode: 'entryMode',
  type: 'type',
  minBenefactorUnitAmount: 'minBenefactorUnitAmount',
  maxBenefactorUnitAmount: 'maxBenefactorUnitAmount',
  entryLimit: 'entryLimit',
  nsfw: 'nsfw',
  poi: 'poi',
  complete: 'complete',
  refunded: 'refunded',
  availability: 'availability',
  nsfwLevel: 'nsfwLevel',
  lockedProperties: 'lockedProperties'
};

exports.Prisma.BountyEntryScalarFieldEnum = {
  id: 'id',
  userId: 'userId',
  bountyId: 'bountyId',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt',
  locked: 'locked',
  description: 'description',
  nsfwLevel: 'nsfwLevel'
};

exports.Prisma.BountyEntryReactionScalarFieldEnum = {
  bountyEntryId: 'bountyEntryId',
  userId: 'userId',
  reaction: 'reaction',
  createdAt: 'createdAt'
};

exports.Prisma.BountyBenefactorScalarFieldEnum = {
  userId: 'userId',
  bountyId: 'bountyId',
  unitAmount: 'unitAmount',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt',
  awardedAt: 'awardedAt',
  awardedToId: 'awardedToId',
  currency: 'currency'
};

exports.Prisma.BountyEngagementScalarFieldEnum = {
  userId: 'userId',
  bountyId: 'bountyId',
  type: 'type',
  createdAt: 'createdAt'
};

exports.Prisma.TipConnectionScalarFieldEnum = {
  transactionId: 'transactionId',
  entityId: 'entityId',
  entityType: 'entityType'
};

exports.Prisma.BountyMetricScalarFieldEnum = {
  bountyId: 'bountyId',
  timeframe: 'timeframe',
  favoriteCount: 'favoriteCount',
  trackCount: 'trackCount',
  entryCount: 'entryCount',
  benefactorCount: 'benefactorCount',
  unitAmountCount: 'unitAmountCount',
  commentCount: 'commentCount',
  updatedAt: 'updatedAt'
};

exports.Prisma.BountyEntryMetricScalarFieldEnum = {
  bountyEntryId: 'bountyEntryId',
  timeframe: 'timeframe',
  likeCount: 'likeCount',
  dislikeCount: 'dislikeCount',
  laughCount: 'laughCount',
  cryCount: 'cryCount',
  heartCount: 'heartCount',
  unitAmountCount: 'unitAmountCount',
  tippedCount: 'tippedCount',
  tippedAmountCount: 'tippedAmountCount',
  updatedAt: 'updatedAt'
};

exports.Prisma.CsamReportScalarFieldEnum = {
  id: 'id',
  userId: 'userId',
  createdAt: 'createdAt',
  reportedById: 'reportedById',
  reportSentAt: 'reportSentAt',
  archivedAt: 'archivedAt',
  contentRemovedAt: 'contentRemovedAt',
  reportId: 'reportId',
  details: 'details',
  images: 'images',
  type: 'type'
};

exports.Prisma.LinkScalarFieldEnum = {
  id: 'id',
  url: 'url',
  type: 'type',
  entityId: 'entityId',
  entityType: 'entityType'
};

exports.Prisma.EntityAccessScalarFieldEnum = {
  accessToId: 'accessToId',
  accessToType: 'accessToType',
  accessorId: 'accessorId',
  accessorType: 'accessorType',
  addedById: 'addedById',
  addedAt: 'addedAt'
};

exports.Prisma.EntityCollaboratorScalarFieldEnum = {
  entityType: 'entityType',
  entityId: 'entityId',
  userId: 'userId',
  status: 'status',
  createdAt: 'createdAt',
  createdBy: 'createdBy',
  lastMessageSentAt: 'lastMessageSentAt'
};

exports.Prisma.ClubScalarFieldEnum = {
  id: 'id',
  userId: 'userId',
  coverImageId: 'coverImageId',
  headerImageId: 'headerImageId',
  avatarId: 'avatarId',
  name: 'name',
  description: 'description',
  nsfw: 'nsfw',
  billing: 'billing',
  unlisted: 'unlisted'
};

exports.Prisma.ClubTierScalarFieldEnum = {
  id: 'id',
  clubId: 'clubId',
  unitAmount: 'unitAmount',
  currency: 'currency',
  name: 'name',
  description: 'description',
  coverImageId: 'coverImageId',
  unlisted: 'unlisted',
  joinable: 'joinable',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt',
  memberLimit: 'memberLimit',
  oneTimeFee: 'oneTimeFee'
};

exports.Prisma.ClubAdminInviteScalarFieldEnum = {
  id: 'id',
  expiresAt: 'expiresAt',
  clubId: 'clubId',
  createdAt: 'createdAt',
  permissions: 'permissions'
};

exports.Prisma.ClubAdminScalarFieldEnum = {
  userId: 'userId',
  clubId: 'clubId',
  createdAt: 'createdAt',
  permissions: 'permissions'
};

exports.Prisma.ClubMembershipScalarFieldEnum = {
  id: 'id',
  userId: 'userId',
  clubId: 'clubId',
  clubTierId: 'clubTierId',
  startedAt: 'startedAt',
  expiresAt: 'expiresAt',
  cancelledAt: 'cancelledAt',
  nextBillingAt: 'nextBillingAt',
  unitAmount: 'unitAmount',
  currency: 'currency',
  downgradeClubTierId: 'downgradeClubTierId',
  billingPausedAt: 'billingPausedAt'
};

exports.Prisma.ClubMembershipChargeScalarFieldEnum = {
  id: 'id',
  userId: 'userId',
  clubId: 'clubId',
  clubTierId: 'clubTierId',
  chargedAt: 'chargedAt',
  status: 'status',
  invoiceId: 'invoiceId',
  unitAmount: 'unitAmount',
  unitAmountPurchased: 'unitAmountPurchased',
  currency: 'currency'
};

exports.Prisma.ClubPostScalarFieldEnum = {
  id: 'id',
  clubId: 'clubId',
  createdById: 'createdById',
  createdAt: 'createdAt',
  membersOnly: 'membersOnly',
  title: 'title',
  description: 'description',
  coverImageId: 'coverImageId',
  entityId: 'entityId',
  entityType: 'entityType'
};

exports.Prisma.ClubPostReactionScalarFieldEnum = {
  id: 'id',
  clubPostId: 'clubPostId',
  userId: 'userId',
  reaction: 'reaction',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
};

exports.Prisma.ClubPostMetricScalarFieldEnum = {
  clubPostId: 'clubPostId',
  timeframe: 'timeframe',
  likeCount: 'likeCount',
  dislikeCount: 'dislikeCount',
  laughCount: 'laughCount',
  cryCount: 'cryCount',
  heartCount: 'heartCount'
};

exports.Prisma.ClubMetricScalarFieldEnum = {
  clubId: 'clubId',
  timeframe: 'timeframe',
  memberCount: 'memberCount',
  clubPostCount: 'clubPostCount',
  resourceCount: 'resourceCount'
};

exports.Prisma.ChatScalarFieldEnum = {
  id: 'id',
  createdAt: 'createdAt',
  hash: 'hash',
  ownerId: 'ownerId'
};

exports.Prisma.ChatMemberScalarFieldEnum = {
  id: 'id',
  createdAt: 'createdAt',
  userId: 'userId',
  chatId: 'chatId',
  isOwner: 'isOwner',
  isMuted: 'isMuted',
  status: 'status',
  lastViewedMessageId: 'lastViewedMessageId',
  joinedAt: 'joinedAt',
  ignoredAt: 'ignoredAt',
  leftAt: 'leftAt',
  kickedAt: 'kickedAt',
  unkickedAt: 'unkickedAt'
};

exports.Prisma.ChatMessageScalarFieldEnum = {
  id: 'id',
  createdAt: 'createdAt',
  userId: 'userId',
  chatId: 'chatId',
  content: 'content',
  contentType: 'contentType',
  referenceMessageId: 'referenceMessageId',
  editedAt: 'editedAt'
};

exports.Prisma.BuildGuideScalarFieldEnum = {
  id: 'id',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt',
  name: 'name',
  message: 'message',
  userId: 'userId',
  components: 'components',
  capabilities: 'capabilities'
};

exports.Prisma.PurchasableRewardScalarFieldEnum = {
  id: 'id',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt',
  title: 'title',
  unitPrice: 'unitPrice',
  about: 'about',
  redeemDetails: 'redeemDetails',
  termsOfUse: 'termsOfUse',
  usage: 'usage',
  codes: 'codes',
  archived: 'archived',
  availableFrom: 'availableFrom',
  availableTo: 'availableTo',
  availableCount: 'availableCount',
  addedById: 'addedById',
  coverImageId: 'coverImageId'
};

exports.Prisma.UserPurchasedRewardsScalarFieldEnum = {
  buzzTransactionId: 'buzzTransactionId',
  userId: 'userId',
  purchasableRewardId: 'purchasableRewardId',
  createdAt: 'createdAt',
  meta: 'meta',
  code: 'code'
};

exports.Prisma.JobQueueScalarFieldEnum = {
  type: 'type',
  entityType: 'entityType',
  entityId: 'entityId',
  createdAt: 'createdAt'
};

exports.Prisma.VaultItemScalarFieldEnum = {
  id: 'id',
  vaultId: 'vaultId',
  status: 'status',
  files: 'files',
  modelVersionId: 'modelVersionId',
  modelId: 'modelId',
  modelName: 'modelName',
  versionName: 'versionName',
  creatorId: 'creatorId',
  creatorName: 'creatorName',
  type: 'type',
  baseModel: 'baseModel',
  category: 'category',
  createdAt: 'createdAt',
  addedAt: 'addedAt',
  refreshedAt: 'refreshedAt',
  modelSizeKb: 'modelSizeKb',
  detailsSizeKb: 'detailsSizeKb',
  imagesSizeKb: 'imagesSizeKb',
  notes: 'notes',
  meta: 'meta'
};

exports.Prisma.VaultScalarFieldEnum = {
  userId: 'userId',
  storageKb: 'storageKb',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt',
  meta: 'meta'
};

exports.Prisma.RedeemableCodeScalarFieldEnum = {
  code: 'code',
  unitValue: 'unitValue',
  userId: 'userId',
  createdAt: 'createdAt',
  type: 'type',
  expiresAt: 'expiresAt',
  redeemedAt: 'redeemedAt',
  transactionId: 'transactionId'
};

exports.Prisma.ToolScalarFieldEnum = {
  id: 'id',
  name: 'name',
  icon: 'icon',
  createdAt: 'createdAt',
  enabled: 'enabled',
  type: 'type',
  domain: 'domain',
  priority: 'priority',
  description: 'description',
  metadata: 'metadata'
};

exports.Prisma.ImageToolScalarFieldEnum = {
  imageId: 'imageId',
  toolId: 'toolId',
  notes: 'notes',
  createdAt: 'createdAt'
};

exports.Prisma.TechniqueScalarFieldEnum = {
  id: 'id',
  name: 'name',
  createdAt: 'createdAt',
  enabled: 'enabled',
  type: 'type'
};

exports.Prisma.ImageTechniqueScalarFieldEnum = {
  imageId: 'imageId',
  techniqueId: 'techniqueId',
  notes: 'notes',
  createdAt: 'createdAt'
};

exports.Prisma.QuestionRankScalarFieldEnum = {
  questionId: 'questionId',
  answerCountDay: 'answerCountDay',
  answerCountWeek: 'answerCountWeek',
  answerCountMonth: 'answerCountMonth',
  answerCountYear: 'answerCountYear',
  answerCountAllTime: 'answerCountAllTime',
  heartCountDay: 'heartCountDay',
  heartCountWeek: 'heartCountWeek',
  heartCountMonth: 'heartCountMonth',
  heartCountYear: 'heartCountYear',
  heartCountAllTime: 'heartCountAllTime',
  commentCountDay: 'commentCountDay',
  commentCountWeek: 'commentCountWeek',
  commentCountMonth: 'commentCountMonth',
  commentCountYear: 'commentCountYear',
  commentCountAllTime: 'commentCountAllTime',
  answerCountDayRank: 'answerCountDayRank',
  answerCountWeekRank: 'answerCountWeekRank',
  answerCountMonthRank: 'answerCountMonthRank',
  answerCountYearRank: 'answerCountYearRank',
  answerCountAllTimeRank: 'answerCountAllTimeRank',
  heartCountDayRank: 'heartCountDayRank',
  heartCountWeekRank: 'heartCountWeekRank',
  heartCountMonthRank: 'heartCountMonthRank',
  heartCountYearRank: 'heartCountYearRank',
  heartCountAllTimeRank: 'heartCountAllTimeRank',
  commentCountDayRank: 'commentCountDayRank',
  commentCountWeekRank: 'commentCountWeekRank',
  commentCountMonthRank: 'commentCountMonthRank',
  commentCountYearRank: 'commentCountYearRank',
  commentCountAllTimeRank: 'commentCountAllTimeRank'
};

exports.Prisma.AnswerRankScalarFieldEnum = {
  answerId: 'answerId',
  checkCountDay: 'checkCountDay',
  checkCountWeek: 'checkCountWeek',
  checkCountMonth: 'checkCountMonth',
  checkCountYear: 'checkCountYear',
  checkCountAllTime: 'checkCountAllTime',
  crossCountDay: 'crossCountDay',
  crossCountWeek: 'crossCountWeek',
  crossCountMonth: 'crossCountMonth',
  crossCountYear: 'crossCountYear',
  crossCountAllTime: 'crossCountAllTime',
  heartCountDay: 'heartCountDay',
  heartCountWeek: 'heartCountWeek',
  heartCountMonth: 'heartCountMonth',
  heartCountYear: 'heartCountYear',
  heartCountAllTime: 'heartCountAllTime',
  commentCountDay: 'commentCountDay',
  commentCountWeek: 'commentCountWeek',
  commentCountMonth: 'commentCountMonth',
  commentCountYear: 'commentCountYear',
  commentCountAllTime: 'commentCountAllTime',
  checkCountDayRank: 'checkCountDayRank',
  checkCountWeekRank: 'checkCountWeekRank',
  checkCountMonthRank: 'checkCountMonthRank',
  checkCountYearRank: 'checkCountYearRank',
  checkCountAllTimeRank: 'checkCountAllTimeRank',
  crossCountDayRank: 'crossCountDayRank',
  crossCountWeekRank: 'crossCountWeekRank',
  crossCountMonthRank: 'crossCountMonthRank',
  crossCountYearRank: 'crossCountYearRank',
  crossCountAllTimeRank: 'crossCountAllTimeRank',
  heartCountDayRank: 'heartCountDayRank',
  heartCountWeekRank: 'heartCountWeekRank',
  heartCountMonthRank: 'heartCountMonthRank',
  heartCountYearRank: 'heartCountYearRank',
  heartCountAllTimeRank: 'heartCountAllTimeRank',
  commentCountDayRank: 'commentCountDayRank',
  commentCountWeekRank: 'commentCountWeekRank',
  commentCountMonthRank: 'commentCountMonthRank',
  commentCountYearRank: 'commentCountYearRank',
  commentCountAllTimeRank: 'commentCountAllTimeRank'
};

exports.Prisma.ModelReportStatScalarFieldEnum = {
  modelId: 'modelId',
  tosViolationPending: 'tosViolationPending',
  tosViolationUnactioned: 'tosViolationUnactioned',
  tosViolationActioned: 'tosViolationActioned',
  nsfwPending: 'nsfwPending',
  nsfwUnactioned: 'nsfwUnactioned',
  nsfwActioned: 'nsfwActioned',
  ownershipPending: 'ownershipPending',
  ownershipProcessing: 'ownershipProcessing',
  ownershipActioned: 'ownershipActioned',
  ownershipUnactioned: 'ownershipUnactioned',
  adminAttentionPending: 'adminAttentionPending',
  adminAttentionActioned: 'adminAttentionActioned',
  adminAttentionUnactioned: 'adminAttentionUnactioned',
  claimPending: 'claimPending',
  claimActioned: 'claimActioned',
  claimUnactioned: 'claimUnactioned'
};

exports.Prisma.ArticleStatScalarFieldEnum = {
  articleId: 'articleId',
  cryCountDay: 'cryCountDay',
  cryCountWeek: 'cryCountWeek',
  cryCountMonth: 'cryCountMonth',
  cryCountYear: 'cryCountYear',
  cryCountAllTime: 'cryCountAllTime',
  dislikeCountDay: 'dislikeCountDay',
  dislikeCountWeek: 'dislikeCountWeek',
  dislikeCountMonth: 'dislikeCountMonth',
  dislikeCountYear: 'dislikeCountYear',
  dislikeCountAllTime: 'dislikeCountAllTime',
  heartCountDay: 'heartCountDay',
  heartCountWeek: 'heartCountWeek',
  heartCountMonth: 'heartCountMonth',
  heartCountYear: 'heartCountYear',
  heartCountAllTime: 'heartCountAllTime',
  laughCountDay: 'laughCountDay',
  laughCountWeek: 'laughCountWeek',
  laughCountMonth: 'laughCountMonth',
  laughCountYear: 'laughCountYear',
  laughCountAllTime: 'laughCountAllTime',
  likeCountDay: 'likeCountDay',
  likeCountWeek: 'likeCountWeek',
  likeCountMonth: 'likeCountMonth',
  likeCountYear: 'likeCountYear',
  likeCountAllTime: 'likeCountAllTime',
  commentCountDay: 'commentCountDay',
  commentCountWeek: 'commentCountWeek',
  commentCountMonth: 'commentCountMonth',
  commentCountYear: 'commentCountYear',
  commentCountAllTime: 'commentCountAllTime',
  reactionCountDay: 'reactionCountDay',
  reactionCountWeek: 'reactionCountWeek',
  reactionCountMonth: 'reactionCountMonth',
  reactionCountYear: 'reactionCountYear',
  reactionCountAllTime: 'reactionCountAllTime',
  viewCountDay: 'viewCountDay',
  viewCountWeek: 'viewCountWeek',
  viewCountMonth: 'viewCountMonth',
  viewCountYear: 'viewCountYear',
  viewCountAllTime: 'viewCountAllTime',
  favoriteCountDay: 'favoriteCountDay',
  favoriteCountWeek: 'favoriteCountWeek',
  favoriteCountMonth: 'favoriteCountMonth',
  favoriteCountYear: 'favoriteCountYear',
  favoriteCountAllTime: 'favoriteCountAllTime',
  collectedCountDay: 'collectedCountDay',
  collectedCountWeek: 'collectedCountWeek',
  collectedCountMonth: 'collectedCountMonth',
  collectedCountYear: 'collectedCountYear',
  collectedCountAllTime: 'collectedCountAllTime',
  hideCountDay: 'hideCountDay',
  hideCountWeek: 'hideCountWeek',
  hideCountMonth: 'hideCountMonth',
  hideCountYear: 'hideCountYear',
  hideCountAllTime: 'hideCountAllTime',
  tippedCountDay: 'tippedCountDay',
  tippedCountWeek: 'tippedCountWeek',
  tippedCountMonth: 'tippedCountMonth',
  tippedCountYear: 'tippedCountYear',
  tippedCountAllTime: 'tippedCountAllTime',
  tippedAmountCountDay: 'tippedAmountCountDay',
  tippedAmountCountWeek: 'tippedAmountCountWeek',
  tippedAmountCountMonth: 'tippedAmountCountMonth',
  tippedAmountCountYear: 'tippedAmountCountYear',
  tippedAmountCountAllTime: 'tippedAmountCountAllTime'
};

exports.Prisma.ArticleRankScalarFieldEnum = {
  articleId: 'articleId',
  cryCountDayRank: 'cryCountDayRank',
  cryCountWeekRank: 'cryCountWeekRank',
  cryCountMonthRank: 'cryCountMonthRank',
  cryCountYearRank: 'cryCountYearRank',
  cryCountAllTimeRank: 'cryCountAllTimeRank',
  dislikeCountDayRank: 'dislikeCountDayRank',
  dislikeCountWeekRank: 'dislikeCountWeekRank',
  dislikeCountMonthRank: 'dislikeCountMonthRank',
  dislikeCountYearRank: 'dislikeCountYearRank',
  dislikeCountAllTimeRank: 'dislikeCountAllTimeRank',
  heartCountDayRank: 'heartCountDayRank',
  heartCountWeekRank: 'heartCountWeekRank',
  heartCountMonthRank: 'heartCountMonthRank',
  heartCountYearRank: 'heartCountYearRank',
  heartCountAllTimeRank: 'heartCountAllTimeRank',
  laughCountDayRank: 'laughCountDayRank',
  laughCountWeekRank: 'laughCountWeekRank',
  laughCountMonthRank: 'laughCountMonthRank',
  laughCountYearRank: 'laughCountYearRank',
  laughCountAllTimeRank: 'laughCountAllTimeRank',
  likeCountDayRank: 'likeCountDayRank',
  likeCountWeekRank: 'likeCountWeekRank',
  likeCountMonthRank: 'likeCountMonthRank',
  likeCountYearRank: 'likeCountYearRank',
  likeCountAllTimeRank: 'likeCountAllTimeRank',
  commentCountDayRank: 'commentCountDayRank',
  commentCountWeekRank: 'commentCountWeekRank',
  commentCountMonthRank: 'commentCountMonthRank',
  commentCountYearRank: 'commentCountYearRank',
  commentCountAllTimeRank: 'commentCountAllTimeRank',
  reactionCountDayRank: 'reactionCountDayRank',
  reactionCountWeekRank: 'reactionCountWeekRank',
  reactionCountMonthRank: 'reactionCountMonthRank',
  reactionCountYearRank: 'reactionCountYearRank',
  reactionCountAllTimeRank: 'reactionCountAllTimeRank',
  viewCountDayRank: 'viewCountDayRank',
  viewCountWeekRank: 'viewCountWeekRank',
  viewCountMonthRank: 'viewCountMonthRank',
  viewCountYearRank: 'viewCountYearRank',
  viewCountAllTimeRank: 'viewCountAllTimeRank',
  favoriteCountDayRank: 'favoriteCountDayRank',
  favoriteCountWeekRank: 'favoriteCountWeekRank',
  favoriteCountMonthRank: 'favoriteCountMonthRank',
  favoriteCountYearRank: 'favoriteCountYearRank',
  favoriteCountAllTimeRank: 'favoriteCountAllTimeRank',
  hideCountDayRank: 'hideCountDayRank',
  hideCountWeekRank: 'hideCountWeekRank',
  hideCountMonthRank: 'hideCountMonthRank',
  hideCountYearRank: 'hideCountYearRank',
  hideCountAllTimeRank: 'hideCountAllTimeRank',
  collectedCountDayRank: 'collectedCountDayRank',
  collectedCountWeekRank: 'collectedCountWeekRank',
  collectedCountMonthRank: 'collectedCountMonthRank',
  collectedCountYearRank: 'collectedCountYearRank',
  collectedCountAllTimeRank: 'collectedCountAllTimeRank',
  tippedCountDayRank: 'tippedCountDayRank',
  tippedCountWeekRank: 'tippedCountWeekRank',
  tippedCountMonthRank: 'tippedCountMonthRank',
  tippedCountYearRank: 'tippedCountYearRank',
  tippedCountAllTimeRank: 'tippedCountAllTimeRank',
  tippedAmountCountDayRank: 'tippedAmountCountDayRank',
  tippedAmountCountWeekRank: 'tippedAmountCountWeekRank',
  tippedAmountCountMonthRank: 'tippedAmountCountMonthRank',
  tippedAmountCountYearRank: 'tippedAmountCountYearRank',
  tippedAmountCountAllTimeRank: 'tippedAmountCountAllTimeRank'
};

exports.Prisma.UserStatScalarFieldEnum = {
  userId: 'userId',
  uploadCountDay: 'uploadCountDay',
  uploadCountWeek: 'uploadCountWeek',
  uploadCountMonth: 'uploadCountMonth',
  uploadCountYear: 'uploadCountYear',
  uploadCountAllTime: 'uploadCountAllTime',
  reviewCountDay: 'reviewCountDay',
  reviewCountWeek: 'reviewCountWeek',
  reviewCountMonth: 'reviewCountMonth',
  reviewCountYear: 'reviewCountYear',
  reviewCountAllTime: 'reviewCountAllTime',
  downloadCountDay: 'downloadCountDay',
  downloadCountWeek: 'downloadCountWeek',
  downloadCountMonth: 'downloadCountMonth',
  downloadCountYear: 'downloadCountYear',
  downloadCountAllTime: 'downloadCountAllTime',
  generationCountDay: 'generationCountDay',
  generationCountWeek: 'generationCountWeek',
  generationCountMonth: 'generationCountMonth',
  generationCountYear: 'generationCountYear',
  generationCountAllTime: 'generationCountAllTime',
  ratingCountDay: 'ratingCountDay',
  ratingCountWeek: 'ratingCountWeek',
  ratingCountMonth: 'ratingCountMonth',
  ratingCountYear: 'ratingCountYear',
  ratingCountAllTime: 'ratingCountAllTime',
  followingCountDay: 'followingCountDay',
  followingCountWeek: 'followingCountWeek',
  followingCountMonth: 'followingCountMonth',
  followingCountYear: 'followingCountYear',
  followingCountAllTime: 'followingCountAllTime',
  followerCountDay: 'followerCountDay',
  followerCountWeek: 'followerCountWeek',
  followerCountMonth: 'followerCountMonth',
  followerCountYear: 'followerCountYear',
  followerCountAllTime: 'followerCountAllTime',
  hiddenCountDay: 'hiddenCountDay',
  hiddenCountWeek: 'hiddenCountWeek',
  hiddenCountMonth: 'hiddenCountMonth',
  hiddenCountYear: 'hiddenCountYear',
  hiddenCountAllTime: 'hiddenCountAllTime',
  ratingDay: 'ratingDay',
  ratingWeek: 'ratingWeek',
  ratingMonth: 'ratingMonth',
  ratingYear: 'ratingYear',
  ratingAllTime: 'ratingAllTime',
  favoriteCountDay: 'favoriteCountDay',
  favoriteCountWeek: 'favoriteCountWeek',
  favoriteCountMonth: 'favoriteCountMonth',
  favoriteCountYear: 'favoriteCountYear',
  favoriteCountAllTime: 'favoriteCountAllTime',
  answerCountDay: 'answerCountDay',
  answerCountWeek: 'answerCountWeek',
  answerCountMonth: 'answerCountMonth',
  answerCountYear: 'answerCountYear',
  answerCountAllTime: 'answerCountAllTime',
  answerAcceptCountDay: 'answerAcceptCountDay',
  answerAcceptCountWeek: 'answerAcceptCountWeek',
  answerAcceptCountMonth: 'answerAcceptCountMonth',
  answerAcceptCountYear: 'answerAcceptCountYear',
  answerAcceptCountAllTime: 'answerAcceptCountAllTime',
  thumbsUpCountDay: 'thumbsUpCountDay',
  thumbsUpCountWeek: 'thumbsUpCountWeek',
  thumbsUpCountMonth: 'thumbsUpCountMonth',
  thumbsUpCountYear: 'thumbsUpCountYear',
  thumbsUpCountAllTime: 'thumbsUpCountAllTime',
  thumbsDownCountDay: 'thumbsDownCountDay',
  thumbsDownCountWeek: 'thumbsDownCountWeek',
  thumbsDownCountMonth: 'thumbsDownCountMonth',
  thumbsDownCountYear: 'thumbsDownCountYear',
  thumbsDownCountAllTime: 'thumbsDownCountAllTime',
  reactionCountDay: 'reactionCountDay',
  reactionCountWeek: 'reactionCountWeek',
  reactionCountMonth: 'reactionCountMonth',
  reactionCountYear: 'reactionCountYear',
  reactionCountAllTime: 'reactionCountAllTime'
};

exports.Prisma.UserRankScalarFieldEnum = {
  userId: 'userId',
  downloadCountDayRank: 'downloadCountDayRank',
  downloadCountWeekRank: 'downloadCountWeekRank',
  downloadCountMonthRank: 'downloadCountMonthRank',
  downloadCountYearRank: 'downloadCountYearRank',
  downloadCountAllTimeRank: 'downloadCountAllTimeRank',
  ratingCountDayRank: 'ratingCountDayRank',
  ratingCountWeekRank: 'ratingCountWeekRank',
  ratingCountMonthRank: 'ratingCountMonthRank',
  ratingCountYearRank: 'ratingCountYearRank',
  ratingCountAllTimeRank: 'ratingCountAllTimeRank',
  followerCountDayRank: 'followerCountDayRank',
  followerCountWeekRank: 'followerCountWeekRank',
  followerCountMonthRank: 'followerCountMonthRank',
  followerCountYearRank: 'followerCountYearRank',
  followerCountAllTimeRank: 'followerCountAllTimeRank',
  ratingDayRank: 'ratingDayRank',
  ratingWeekRank: 'ratingWeekRank',
  ratingMonthRank: 'ratingMonthRank',
  ratingYearRank: 'ratingYearRank',
  ratingAllTimeRank: 'ratingAllTimeRank',
  favoriteCountDayRank: 'favoriteCountDayRank',
  favoriteCountWeekRank: 'favoriteCountWeekRank',
  favoriteCountMonthRank: 'favoriteCountMonthRank',
  favoriteCountYearRank: 'favoriteCountYearRank',
  favoriteCountAllTimeRank: 'favoriteCountAllTimeRank',
  answerCountDayRank: 'answerCountDayRank',
  answerCountWeekRank: 'answerCountWeekRank',
  answerCountMonthRank: 'answerCountMonthRank',
  answerCountYearRank: 'answerCountYearRank',
  answerCountAllTimeRank: 'answerCountAllTimeRank',
  answerAcceptCountDayRank: 'answerAcceptCountDayRank',
  answerAcceptCountWeekRank: 'answerAcceptCountWeekRank',
  answerAcceptCountMonthRank: 'answerAcceptCountMonthRank',
  answerAcceptCountYearRank: 'answerAcceptCountYearRank',
  answerAcceptCountAllTimeRank: 'answerAcceptCountAllTimeRank',
  thumbsUpCountDayRank: 'thumbsUpCountDayRank',
  thumbsUpCountWeekRank: 'thumbsUpCountWeekRank',
  thumbsUpCountMonthRank: 'thumbsUpCountMonthRank',
  thumbsUpCountYearRank: 'thumbsUpCountYearRank',
  thumbsUpCountAllTimeRank: 'thumbsUpCountAllTimeRank',
  thumbsDownCountDayRank: 'thumbsDownCountDayRank',
  thumbsDownCountWeekRank: 'thumbsDownCountWeekRank',
  thumbsDownCountMonthRank: 'thumbsDownCountMonthRank',
  thumbsDownCountYearRank: 'thumbsDownCountYearRank',
  thumbsDownCountAllTimeRank: 'thumbsDownCountAllTimeRank',
  leaderboardRank: 'leaderboardRank',
  leaderboardId: 'leaderboardId',
  leaderboardTitle: 'leaderboardTitle',
  leaderboardCosmetic: 'leaderboardCosmetic'
};

exports.Prisma.TagStatScalarFieldEnum = {
  tagId: 'tagId',
  followerCountDay: 'followerCountDay',
  followerCountWeek: 'followerCountWeek',
  followerCountMonth: 'followerCountMonth',
  followerCountYear: 'followerCountYear',
  followerCountAllTime: 'followerCountAllTime',
  hiddenCountDay: 'hiddenCountDay',
  hiddenCountWeek: 'hiddenCountWeek',
  hiddenCountMonth: 'hiddenCountMonth',
  hiddenCountYear: 'hiddenCountYear',
  hiddenCountAllTime: 'hiddenCountAllTime',
  modelCountDay: 'modelCountDay',
  modelCountWeek: 'modelCountWeek',
  modelCountMonth: 'modelCountMonth',
  modelCountYear: 'modelCountYear',
  modelCountAllTime: 'modelCountAllTime',
  imageCountDay: 'imageCountDay',
  imageCountWeek: 'imageCountWeek',
  imageCountMonth: 'imageCountMonth',
  imageCountYear: 'imageCountYear',
  imageCountAllTime: 'imageCountAllTime',
  postCountDay: 'postCountDay',
  postCountWeek: 'postCountWeek',
  postCountMonth: 'postCountMonth',
  postCountYear: 'postCountYear',
  postCountAllTime: 'postCountAllTime'
};

exports.Prisma.TagRankScalarFieldEnum = {
  tagId: 'tagId',
  followerCountDayRank: 'followerCountDayRank',
  followerCountWeekRank: 'followerCountWeekRank',
  followerCountMonthRank: 'followerCountMonthRank',
  followerCountYearRank: 'followerCountYearRank',
  followerCountAllTimeRank: 'followerCountAllTimeRank',
  hiddenCountDayRank: 'hiddenCountDayRank',
  hiddenCountWeekRank: 'hiddenCountWeekRank',
  hiddenCountMonthRank: 'hiddenCountMonthRank',
  hiddenCountYearRank: 'hiddenCountYearRank',
  hiddenCountAllTimeRank: 'hiddenCountAllTimeRank',
  modelCountDayRank: 'modelCountDayRank',
  modelCountWeekRank: 'modelCountWeekRank',
  modelCountMonthRank: 'modelCountMonthRank',
  modelCountYearRank: 'modelCountYearRank',
  modelCountAllTimeRank: 'modelCountAllTimeRank',
  imageCountDayRank: 'imageCountDayRank',
  imageCountWeekRank: 'imageCountWeekRank',
  imageCountMonthRank: 'imageCountMonthRank',
  imageCountYearRank: 'imageCountYearRank',
  imageCountAllTimeRank: 'imageCountAllTimeRank',
  postCountDayRank: 'postCountDayRank',
  postCountWeekRank: 'postCountWeekRank',
  postCountMonthRank: 'postCountMonthRank',
  postCountYearRank: 'postCountYearRank',
  postCountAllTimeRank: 'postCountAllTimeRank',
  articleCountDayRank: 'articleCountDayRank',
  articleCountWeekRank: 'articleCountWeekRank',
  articleCountMonthRank: 'articleCountMonthRank',
  articleCountYearRank: 'articleCountYearRank',
  articleCountAllTimeRank: 'articleCountAllTimeRank'
};

exports.Prisma.ImageStatScalarFieldEnum = {
  imageId: 'imageId',
  cryCountDay: 'cryCountDay',
  cryCountWeek: 'cryCountWeek',
  cryCountMonth: 'cryCountMonth',
  cryCountYear: 'cryCountYear',
  cryCountAllTime: 'cryCountAllTime',
  dislikeCountDay: 'dislikeCountDay',
  dislikeCountWeek: 'dislikeCountWeek',
  dislikeCountMonth: 'dislikeCountMonth',
  dislikeCountYear: 'dislikeCountYear',
  dislikeCountAllTime: 'dislikeCountAllTime',
  heartCountDay: 'heartCountDay',
  heartCountWeek: 'heartCountWeek',
  heartCountMonth: 'heartCountMonth',
  heartCountYear: 'heartCountYear',
  heartCountAllTime: 'heartCountAllTime',
  laughCountDay: 'laughCountDay',
  laughCountWeek: 'laughCountWeek',
  laughCountMonth: 'laughCountMonth',
  laughCountYear: 'laughCountYear',
  laughCountAllTime: 'laughCountAllTime',
  likeCountDay: 'likeCountDay',
  likeCountWeek: 'likeCountWeek',
  likeCountMonth: 'likeCountMonth',
  likeCountYear: 'likeCountYear',
  likeCountAllTime: 'likeCountAllTime',
  commentCountDay: 'commentCountDay',
  commentCountWeek: 'commentCountWeek',
  commentCountMonth: 'commentCountMonth',
  commentCountYear: 'commentCountYear',
  commentCountAllTime: 'commentCountAllTime',
  reactionCountDay: 'reactionCountDay',
  reactionCountWeek: 'reactionCountWeek',
  reactionCountMonth: 'reactionCountMonth',
  reactionCountYear: 'reactionCountYear',
  reactionCountAllTime: 'reactionCountAllTime',
  collectedCountDay: 'collectedCountDay',
  collectedCountWeek: 'collectedCountWeek',
  collectedCountMonth: 'collectedCountMonth',
  collectedCountYear: 'collectedCountYear',
  collectedCountAllTime: 'collectedCountAllTime',
  tippedCountDay: 'tippedCountDay',
  tippedCountWeek: 'tippedCountWeek',
  tippedCountMonth: 'tippedCountMonth',
  tippedCountYear: 'tippedCountYear',
  tippedCountAllTime: 'tippedCountAllTime',
  tippedAmountCountDay: 'tippedAmountCountDay',
  tippedAmountCountWeek: 'tippedAmountCountWeek',
  tippedAmountCountMonth: 'tippedAmountCountMonth',
  tippedAmountCountYear: 'tippedAmountCountYear',
  tippedAmountCountAllTime: 'tippedAmountCountAllTime',
  viewCountDay: 'viewCountDay',
  viewCountWeek: 'viewCountWeek',
  viewCountMonth: 'viewCountMonth',
  viewCountYear: 'viewCountYear',
  viewCountAllTime: 'viewCountAllTime'
};

exports.Prisma.ImageModHelperScalarFieldEnum = {
  imageId: 'imageId',
  assessedNSFW: 'assessedNSFW',
  nsfwReportCount: 'nsfwReportCount'
};

exports.Prisma.ModelHashScalarFieldEnum = {
  modelId: 'modelId',
  modelVersionId: 'modelVersionId',
  hashType: 'hashType',
  fileType: 'fileType',
  hash: 'hash'
};

exports.Prisma.PostHelperScalarFieldEnum = {
  postId: 'postId',
  scanned: 'scanned'
};

exports.Prisma.PostStatScalarFieldEnum = {
  postId: 'postId',
  cryCountDay: 'cryCountDay',
  cryCountWeek: 'cryCountWeek',
  cryCountMonth: 'cryCountMonth',
  cryCountYear: 'cryCountYear',
  cryCountAllTime: 'cryCountAllTime',
  dislikeCountDay: 'dislikeCountDay',
  dislikeCountWeek: 'dislikeCountWeek',
  dislikeCountMonth: 'dislikeCountMonth',
  dislikeCountYear: 'dislikeCountYear',
  dislikeCountAllTime: 'dislikeCountAllTime',
  heartCountDay: 'heartCountDay',
  heartCountWeek: 'heartCountWeek',
  heartCountMonth: 'heartCountMonth',
  heartCountYear: 'heartCountYear',
  heartCountAllTime: 'heartCountAllTime',
  laughCountDay: 'laughCountDay',
  laughCountWeek: 'laughCountWeek',
  laughCountMonth: 'laughCountMonth',
  laughCountYear: 'laughCountYear',
  laughCountAllTime: 'laughCountAllTime',
  likeCountDay: 'likeCountDay',
  likeCountWeek: 'likeCountWeek',
  likeCountMonth: 'likeCountMonth',
  likeCountYear: 'likeCountYear',
  likeCountAllTime: 'likeCountAllTime',
  commentCountDay: 'commentCountDay',
  commentCountWeek: 'commentCountWeek',
  commentCountMonth: 'commentCountMonth',
  commentCountYear: 'commentCountYear',
  commentCountAllTime: 'commentCountAllTime',
  reactionCountDay: 'reactionCountDay',
  reactionCountWeek: 'reactionCountWeek',
  reactionCountMonth: 'reactionCountMonth',
  reactionCountYear: 'reactionCountYear',
  reactionCountAllTime: 'reactionCountAllTime'
};

exports.Prisma.PostRankScalarFieldEnum = {
  postId: 'postId',
  cryCountDayRank: 'cryCountDayRank',
  cryCountWeekRank: 'cryCountWeekRank',
  cryCountMonthRank: 'cryCountMonthRank',
  cryCountYearRank: 'cryCountYearRank',
  cryCountAllTimeRank: 'cryCountAllTimeRank',
  dislikeCountDayRank: 'dislikeCountDayRank',
  dislikeCountWeekRank: 'dislikeCountWeekRank',
  dislikeCountMonthRank: 'dislikeCountMonthRank',
  dislikeCountYearRank: 'dislikeCountYearRank',
  dislikeCountAllTimeRank: 'dislikeCountAllTimeRank',
  heartCountDayRank: 'heartCountDayRank',
  heartCountWeekRank: 'heartCountWeekRank',
  heartCountMonthRank: 'heartCountMonthRank',
  heartCountYearRank: 'heartCountYearRank',
  heartCountAllTimeRank: 'heartCountAllTimeRank',
  laughCountDayRank: 'laughCountDayRank',
  laughCountWeekRank: 'laughCountWeekRank',
  laughCountMonthRank: 'laughCountMonthRank',
  laughCountYearRank: 'laughCountYearRank',
  laughCountAllTimeRank: 'laughCountAllTimeRank',
  likeCountDayRank: 'likeCountDayRank',
  likeCountWeekRank: 'likeCountWeekRank',
  likeCountMonthRank: 'likeCountMonthRank',
  likeCountYearRank: 'likeCountYearRank',
  likeCountAllTimeRank: 'likeCountAllTimeRank',
  commentCountDayRank: 'commentCountDayRank',
  commentCountWeekRank: 'commentCountWeekRank',
  commentCountMonthRank: 'commentCountMonthRank',
  commentCountYearRank: 'commentCountYearRank',
  commentCountAllTimeRank: 'commentCountAllTimeRank',
  reactionCountDayRank: 'reactionCountDayRank',
  reactionCountWeekRank: 'reactionCountWeekRank',
  reactionCountMonthRank: 'reactionCountMonthRank',
  reactionCountYearRank: 'reactionCountYearRank',
  reactionCountAllTimeRank: 'reactionCountAllTimeRank',
  collectedCountDayRank: 'collectedCountDayRank',
  collectedCountWeekRank: 'collectedCountWeekRank',
  collectedCountMonthRank: 'collectedCountMonthRank',
  collectedCountYearRank: 'collectedCountYearRank',
  collectedCountAllTimeRank: 'collectedCountAllTimeRank'
};

exports.Prisma.CollectionStatScalarFieldEnum = {
  collectionId: 'collectionId',
  followerCountDay: 'followerCountDay',
  followerCountWeek: 'followerCountWeek',
  followerCountMonth: 'followerCountMonth',
  followerCountYear: 'followerCountYear',
  followerCountAllTime: 'followerCountAllTime',
  itemCountDay: 'itemCountDay',
  itemCountWeek: 'itemCountWeek',
  itemCountMonth: 'itemCountMonth',
  itemCountYear: 'itemCountYear',
  itemCountAllTime: 'itemCountAllTime',
  contributorCountDay: 'contributorCountDay',
  contributorCountWeek: 'contributorCountWeek',
  contributorCountMonth: 'contributorCountMonth',
  contributorCountYear: 'contributorCountYear',
  contributorCountAllTime: 'contributorCountAllTime'
};

exports.Prisma.CollectionRankScalarFieldEnum = {
  collectionId: 'collectionId',
  followerCountDayRank: 'followerCountDayRank',
  followerCountWeekRank: 'followerCountWeekRank',
  followerCountMonthRank: 'followerCountMonthRank',
  followerCountYearRank: 'followerCountYearRank',
  followerCountAllTimeRank: 'followerCountAllTimeRank',
  itemCountDayRank: 'itemCountDayRank',
  itemCountWeekRank: 'itemCountWeekRank',
  itemCountMonthRank: 'itemCountMonthRank',
  itemCountYearRank: 'itemCountYearRank',
  itemCountAllTimeRank: 'itemCountAllTimeRank',
  contributorCountDayRank: 'contributorCountDayRank',
  contributorCountWeekRank: 'contributorCountWeekRank',
  contributorCountMonthRank: 'contributorCountMonthRank',
  contributorCountYearRank: 'contributorCountYearRank',
  contributorCountAllTimeRank: 'contributorCountAllTimeRank'
};

exports.Prisma.ImageTagScalarFieldEnum = {
  imageId: 'imageId',
  tagId: 'tagId',
  tagName: 'tagName',
  tagType: 'tagType',
  tagNsfw: 'tagNsfw',
  tagNsfwLevel: 'tagNsfwLevel',
  automated: 'automated',
  confidence: 'confidence',
  score: 'score',
  upVotes: 'upVotes',
  downVotes: 'downVotes',
  needsReview: 'needsReview',
  concrete: 'concrete',
  lastUpvote: 'lastUpvote',
  source: 'source'
};

exports.Prisma.ModelTagScalarFieldEnum = {
  modelId: 'modelId',
  tagId: 'tagId',
  tagName: 'tagName',
  tagType: 'tagType',
  score: 'score',
  upVotes: 'upVotes',
  downVotes: 'downVotes',
  needsReview: 'needsReview'
};

exports.Prisma.ImageResourceHelperScalarFieldEnum = {
  id: 'id',
  imageId: 'imageId',
  reviewId: 'reviewId',
  reviewRating: 'reviewRating',
  reviewDetails: 'reviewDetails',
  reviewCreatedAt: 'reviewCreatedAt',
  name: 'name',
  hash: 'hash',
  modelVersionId: 'modelVersionId',
  modelVersionName: 'modelVersionName',
  modelVersionCreatedAt: 'modelVersionCreatedAt',
  modelId: 'modelId',
  modelName: 'modelName',
  modelDownloadCount: 'modelDownloadCount',
  modelCommentCount: 'modelCommentCount',
  modelThumbsUpCount: 'modelThumbsUpCount',
  modelThumbsDownCount: 'modelThumbsDownCount',
  modelType: 'modelType'
};

exports.Prisma.PostResourceHelperScalarFieldEnum = {
  id: 'id',
  postId: 'postId',
  reviewId: 'reviewId',
  reviewRating: 'reviewRating',
  reviewRecommended: 'reviewRecommended',
  reviewDetails: 'reviewDetails',
  reviewCreatedAt: 'reviewCreatedAt',
  name: 'name',
  modelVersionId: 'modelVersionId',
  modelVersionName: 'modelVersionName',
  modelVersionCreatedAt: 'modelVersionCreatedAt',
  modelId: 'modelId',
  modelName: 'modelName',
  modelDownloadCount: 'modelDownloadCount',
  modelCommentCount: 'modelCommentCount',
  modelThumbsUpCount: 'modelThumbsUpCount',
  modelThumbsDownCount: 'modelThumbsDownCount',
  modelType: 'modelType'
};

exports.Prisma.PostImageTagScalarFieldEnum = {
  postId: 'postId',
  tagId: 'tagId'
};

exports.Prisma.PostTagScalarFieldEnum = {
  postId: 'postId',
  tagId: 'tagId',
  tagName: 'tagName',
  tagType: 'tagType',
  score: 'score',
  upVotes: 'upVotes',
  downVotes: 'downVotes'
};

exports.Prisma.ResourceReviewHelperScalarFieldEnum = {
  resourceReviewId: 'resourceReviewId',
  imageCount: 'imageCount'
};

exports.Prisma.GenerationCoverageScalarFieldEnum = {
  modelId: 'modelId',
  modelVersionId: 'modelVersionId',
  covered: 'covered'
};

exports.Prisma.UserProfileScalarFieldEnum = {
  userId: 'userId',
  coverImageId: 'coverImageId',
  bio: 'bio',
  message: 'message',
  messageAddedAt: 'messageAddedAt',
  location: 'location',
  nsfw: 'nsfw',
  privacySettings: 'privacySettings',
  profileSectionsSettings: 'profileSectionsSettings',
  showcaseItems: 'showcaseItems'
};

exports.Prisma.BountyStatScalarFieldEnum = {
  bountyId: 'bountyId',
  favoriteCountDay: 'favoriteCountDay',
  favoriteCountWeek: 'favoriteCountWeek',
  favoriteCountMonth: 'favoriteCountMonth',
  favoriteCountYear: 'favoriteCountYear',
  favoriteCountAllTime: 'favoriteCountAllTime',
  trackCountDay: 'trackCountDay',
  trackCountWeek: 'trackCountWeek',
  trackCountMonth: 'trackCountMonth',
  trackCountYear: 'trackCountYear',
  trackCountAllTime: 'trackCountAllTime',
  entryCountDay: 'entryCountDay',
  entryCountWeek: 'entryCountWeek',
  entryCountMonth: 'entryCountMonth',
  entryCountYear: 'entryCountYear',
  entryCountAllTime: 'entryCountAllTime',
  benefactorCountDay: 'benefactorCountDay',
  benefactorCountWeek: 'benefactorCountWeek',
  benefactorCountMonth: 'benefactorCountMonth',
  benefactorCountYear: 'benefactorCountYear',
  benefactorCountAllTime: 'benefactorCountAllTime',
  unitAmountCountDay: 'unitAmountCountDay',
  unitAmountCountWeek: 'unitAmountCountWeek',
  unitAmountCountMonth: 'unitAmountCountMonth',
  unitAmountCountYear: 'unitAmountCountYear',
  unitAmountCountAllTime: 'unitAmountCountAllTime',
  commentCountDay: 'commentCountDay',
  commentCountWeek: 'commentCountWeek',
  commentCountMonth: 'commentCountMonth',
  commentCountYear: 'commentCountYear',
  commentCountAllTime: 'commentCountAllTime'
};

exports.Prisma.BountyRankScalarFieldEnum = {
  bountyId: 'bountyId',
  favoriteCountDayRank: 'favoriteCountDayRank',
  favoriteCountWeekRank: 'favoriteCountWeekRank',
  favoriteCountMonthRank: 'favoriteCountMonthRank',
  favoriteCountYearRank: 'favoriteCountYearRank',
  favoriteCountAllTimeRank: 'favoriteCountAllTimeRank',
  trackCountDayRank: 'trackCountDayRank',
  trackCountWeekRank: 'trackCountWeekRank',
  trackCountMonthRank: 'trackCountMonthRank',
  trackCountYearRank: 'trackCountYearRank',
  trackCountAllTimeRank: 'trackCountAllTimeRank',
  entryCountDayRank: 'entryCountDayRank',
  entryCountWeekRank: 'entryCountWeekRank',
  entryCountMonthRank: 'entryCountMonthRank',
  entryCountYearRank: 'entryCountYearRank',
  entryCountAllTimeRank: 'entryCountAllTimeRank',
  benefactorCountDayRank: 'benefactorCountDayRank',
  benefactorCountWeekRank: 'benefactorCountWeekRank',
  benefactorCountMonthRank: 'benefactorCountMonthRank',
  benefactorCountYearRank: 'benefactorCountYearRank',
  benefactorCountAllTimeRank: 'benefactorCountAllTimeRank',
  unitAmountCountDayRank: 'unitAmountCountDayRank',
  unitAmountCountWeekRank: 'unitAmountCountWeekRank',
  unitAmountCountMonthRank: 'unitAmountCountMonthRank',
  unitAmountCountYearRank: 'unitAmountCountYearRank',
  unitAmountCountAllTimeRank: 'unitAmountCountAllTimeRank',
  commentCountDayRank: 'commentCountDayRank',
  commentCountWeekRank: 'commentCountWeekRank',
  commentCountMonthRank: 'commentCountMonthRank',
  commentCountYearRank: 'commentCountYearRank',
  commentCountAllTimeRank: 'commentCountAllTimeRank'
};

exports.Prisma.BountyEntryStatScalarFieldEnum = {
  bountyEntryId: 'bountyEntryId',
  cryCountDay: 'cryCountDay',
  cryCountWeek: 'cryCountWeek',
  cryCountMonth: 'cryCountMonth',
  cryCountYear: 'cryCountYear',
  cryCountAllTime: 'cryCountAllTime',
  dislikeCountDay: 'dislikeCountDay',
  dislikeCountWeek: 'dislikeCountWeek',
  dislikeCountMonth: 'dislikeCountMonth',
  dislikeCountYear: 'dislikeCountYear',
  dislikeCountAllTime: 'dislikeCountAllTime',
  heartCountDay: 'heartCountDay',
  heartCountWeek: 'heartCountWeek',
  heartCountMonth: 'heartCountMonth',
  heartCountYear: 'heartCountYear',
  heartCountAllTime: 'heartCountAllTime',
  laughCountDay: 'laughCountDay',
  laughCountWeek: 'laughCountWeek',
  laughCountMonth: 'laughCountMonth',
  laughCountYear: 'laughCountYear',
  laughCountAllTime: 'laughCountAllTime',
  likeCountDay: 'likeCountDay',
  likeCountWeek: 'likeCountWeek',
  likeCountMonth: 'likeCountMonth',
  likeCountYear: 'likeCountYear',
  likeCountAllTime: 'likeCountAllTime',
  reactionCountDay: 'reactionCountDay',
  reactionCountWeek: 'reactionCountWeek',
  reactionCountMonth: 'reactionCountMonth',
  reactionCountYear: 'reactionCountYear',
  reactionCountAllTime: 'reactionCountAllTime',
  unitAmountCountDay: 'unitAmountCountDay',
  unitAmountCountWeek: 'unitAmountCountWeek',
  unitAmountCountMonth: 'unitAmountCountMonth',
  unitAmountCountYear: 'unitAmountCountYear',
  unitAmountCountAllTime: 'unitAmountCountAllTime',
  tippedCountDay: 'tippedCountDay',
  tippedCountWeek: 'tippedCountWeek',
  tippedCountMonth: 'tippedCountMonth',
  tippedCountYear: 'tippedCountYear',
  tippedCountAllTime: 'tippedCountAllTime',
  tippedAmountCountDay: 'tippedAmountCountDay',
  tippedAmountCountWeek: 'tippedAmountCountWeek',
  tippedAmountCountMonth: 'tippedAmountCountMonth',
  tippedAmountCountYear: 'tippedAmountCountYear',
  tippedAmountCountAllTime: 'tippedAmountCountAllTime'
};

exports.Prisma.BountyEntryRankScalarFieldEnum = {
  bountyEntryId: 'bountyEntryId',
  cryCountDayRank: 'cryCountDayRank',
  cryCountWeekRank: 'cryCountWeekRank',
  cryCountMonthRank: 'cryCountMonthRank',
  cryCountYearRank: 'cryCountYearRank',
  cryCountAllTimeRank: 'cryCountAllTimeRank',
  dislikeCountDayRank: 'dislikeCountDayRank',
  dislikeCountWeekRank: 'dislikeCountWeekRank',
  dislikeCountMonthRank: 'dislikeCountMonthRank',
  dislikeCountYearRank: 'dislikeCountYearRank',
  dislikeCountAllTimeRank: 'dislikeCountAllTimeRank',
  heartCountDayRank: 'heartCountDayRank',
  heartCountWeekRank: 'heartCountWeekRank',
  heartCountMonthRank: 'heartCountMonthRank',
  heartCountYearRank: 'heartCountYearRank',
  heartCountAllTimeRank: 'heartCountAllTimeRank',
  laughCountDayRank: 'laughCountDayRank',
  laughCountWeekRank: 'laughCountWeekRank',
  laughCountMonthRank: 'laughCountMonthRank',
  laughCountYearRank: 'laughCountYearRank',
  laughCountAllTimeRank: 'laughCountAllTimeRank',
  likeCountDayRank: 'likeCountDayRank',
  likeCountWeekRank: 'likeCountWeekRank',
  likeCountMonthRank: 'likeCountMonthRank',
  likeCountYearRank: 'likeCountYearRank',
  likeCountAllTimeRank: 'likeCountAllTimeRank',
  reactionCountDayRank: 'reactionCountDayRank',
  reactionCountWeekRank: 'reactionCountWeekRank',
  reactionCountMonthRank: 'reactionCountMonthRank',
  reactionCountYearRank: 'reactionCountYearRank',
  reactionCountAllTimeRank: 'reactionCountAllTimeRank',
  unitAmountCountDayRank: 'unitAmountCountDayRank',
  unitAmountCountWeekRank: 'unitAmountCountWeekRank',
  unitAmountCountMonthRank: 'unitAmountCountMonthRank',
  unitAmountCountYearRank: 'unitAmountCountYearRank',
  unitAmountCountAllTimeRank: 'unitAmountCountAllTimeRank',
  tippedCountDayRank: 'tippedCountDayRank',
  tippedCountWeekRank: 'tippedCountWeekRank',
  tippedCountMonthRank: 'tippedCountMonthRank',
  tippedCountYearRank: 'tippedCountYearRank',
  tippedCountAllTimeRank: 'tippedCountAllTimeRank',
  tippedAmountCountDayRank: 'tippedAmountCountDayRank',
  tippedAmountCountWeekRank: 'tippedAmountCountWeekRank',
  tippedAmountCountMonthRank: 'tippedAmountCountMonthRank',
  tippedAmountCountYearRank: 'tippedAmountCountYearRank',
  tippedAmountCountAllTimeRank: 'tippedAmountCountAllTimeRank'
};

exports.Prisma.ClubStatScalarFieldEnum = {
  clubId: 'clubId',
  memberCountDay: 'memberCountDay',
  memberCountWeek: 'memberCountWeek',
  memberCountMonth: 'memberCountMonth',
  memberCountYear: 'memberCountYear',
  memberCountAllTime: 'memberCountAllTime',
  resourceCountDay: 'resourceCountDay',
  resourceCountWeek: 'resourceCountWeek',
  resourceCountMonth: 'resourceCountMonth',
  resourceCountYear: 'resourceCountYear',
  resourceCountAllTime: 'resourceCountAllTime',
  clubPostCountDay: 'clubPostCountDay',
  clubPostCountWeek: 'clubPostCountWeek',
  clubPostCountMonth: 'clubPostCountMonth',
  clubPostCountYear: 'clubPostCountYear',
  clubPostCountAllTime: 'clubPostCountAllTime'
};

exports.Prisma.ClubRankScalarFieldEnum = {
  clubId: 'clubId',
  memberCountDayRank: 'memberCountDayRank',
  memberCountWeekRank: 'memberCountWeekRank',
  memberCountMonthRank: 'memberCountMonthRank',
  memberCountYearRank: 'memberCountYearRank',
  memberCountAllTimeRank: 'memberCountAllTimeRank',
  resourceCountDayRank: 'resourceCountDayRank',
  resourceCountWeekRank: 'resourceCountWeekRank',
  resourceCountMonthRank: 'resourceCountMonthRank',
  resourceCountYearRank: 'resourceCountYearRank',
  resourceCountAllTimeRank: 'resourceCountAllTimeRank',
  clubPostCountDayRank: 'clubPostCountDayRank',
  clubPostCountWeekRank: 'clubPostCountWeekRank',
  clubPostCountMonthRank: 'clubPostCountMonthRank',
  clubPostCountYearRank: 'clubPostCountYearRank',
  clubPostCountAllTimeRank: 'clubPostCountAllTimeRank'
};

exports.Prisma.SortOrder = {
  asc: 'asc',
  desc: 'desc'
};

exports.Prisma.JsonNullValueInput = {
  JsonNull: Prisma.JsonNull
};

exports.Prisma.NullableJsonNullValueInput = {
  DbNull: Prisma.DbNull,
  JsonNull: Prisma.JsonNull
};

exports.Prisma.QueryMode = {
  default: 'default',
  insensitive: 'insensitive'
};

exports.Prisma.JsonNullValueFilter = {
  DbNull: Prisma.DbNull,
  JsonNull: Prisma.JsonNull,
  AnyNull: Prisma.AnyNull
};

exports.Prisma.NullsOrder = {
  first: 'first',
  last: 'last'
};
exports.StripeConnectStatus = exports.$Enums.StripeConnectStatus = {
  PendingOnboarding: 'PendingOnboarding',
  Approved: 'Approved',
  PendingVerification: 'PendingVerification',
  Rejected: 'Rejected'
};

exports.BuzzWithdrawalRequestStatus = exports.$Enums.BuzzWithdrawalRequestStatus = {
  Requested: 'Requested',
  Canceled: 'Canceled',
  Rejected: 'Rejected',
  Approved: 'Approved',
  Reverted: 'Reverted',
  Transferred: 'Transferred',
  ExternallyResolved: 'ExternallyResolved'
};

exports.Currency = exports.$Enums.Currency = {
  USD: 'USD',
  BUZZ: 'BUZZ'
};

exports.RewardsEligibility = exports.$Enums.RewardsEligibility = {
  Eligible: 'Eligible',
  Ineligible: 'Ineligible',
  Protected: 'Protected'
};

exports.UserEngagementType = exports.$Enums.UserEngagementType = {
  Follow: 'Follow',
  Hide: 'Hide',
  Block: 'Block'
};

exports.MetricTimeframe = exports.$Enums.MetricTimeframe = {
  Day: 'Day',
  Week: 'Week',
  Month: 'Month',
  Year: 'Year',
  AllTime: 'AllTime'
};

exports.LinkType = exports.$Enums.LinkType = {
  Sponsorship: 'Sponsorship',
  Social: 'Social',
  Other: 'Other'
};

exports.ImportStatus = exports.$Enums.ImportStatus = {
  Pending: 'Pending',
  Processing: 'Processing',
  Failed: 'Failed',
  Completed: 'Completed'
};

exports.ModelType = exports.$Enums.ModelType = {
  Checkpoint: 'Checkpoint',
  TextualInversion: 'TextualInversion',
  Hypernetwork: 'Hypernetwork',
  AestheticGradient: 'AestheticGradient',
  LORA: 'LORA',
  LoCon: 'LoCon',
  DoRA: 'DoRA',
  Controlnet: 'Controlnet',
  Upscaler: 'Upscaler',
  MotionModule: 'MotionModule',
  VAE: 'VAE',
  Poses: 'Poses',
  Wildcards: 'Wildcards',
  Workflows: 'Workflows',
  Other: 'Other'
};

exports.ModelStatus = exports.$Enums.ModelStatus = {
  Draft: 'Draft',
  Training: 'Training',
  Published: 'Published',
  Scheduled: 'Scheduled',
  Unpublished: 'Unpublished',
  UnpublishedViolation: 'UnpublishedViolation',
  GatherInterest: 'GatherInterest',
  Deleted: 'Deleted'
};

exports.CheckpointType = exports.$Enums.CheckpointType = {
  Trained: 'Trained',
  Merge: 'Merge'
};

exports.ModelUploadType = exports.$Enums.ModelUploadType = {
  Created: 'Created',
  Trained: 'Trained'
};

exports.ModelModifier = exports.$Enums.ModelModifier = {
  Archived: 'Archived',
  TakenDown: 'TakenDown'
};

exports.Availability = exports.$Enums.Availability = {
  Public: 'Public',
  Unsearchable: 'Unsearchable',
  Private: 'Private'
};

exports.CommercialUse = exports.$Enums.CommercialUse = {
  None: 'None',
  Image: 'Image',
  RentCivit: 'RentCivit',
  Rent: 'Rent',
  Sell: 'Sell'
};

exports.ModelEngagementType = exports.$Enums.ModelEngagementType = {
  Favorite: 'Favorite',
  Hide: 'Hide',
  Mute: 'Mute',
  Notify: 'Notify'
};

exports.ModelVersionSponsorshipSettingsType = exports.$Enums.ModelVersionSponsorshipSettingsType = {
  FixedPrice: 'FixedPrice',
  Bidding: 'Bidding'
};

exports.ModelVersionMonetizationType = exports.$Enums.ModelVersionMonetizationType = {
  PaidAccess: 'PaidAccess',
  PaidEarlyAccess: 'PaidEarlyAccess',
  PaidGeneration: 'PaidGeneration',
  CivitaiClubOnly: 'CivitaiClubOnly',
  MySubscribersOnly: 'MySubscribersOnly',
  Sponsored: 'Sponsored'
};

exports.TrainingStatus = exports.$Enums.TrainingStatus = {
  Pending: 'Pending',
  Submitted: 'Submitted',
  Paused: 'Paused',
  Denied: 'Denied',
  Processing: 'Processing',
  InReview: 'InReview',
  Failed: 'Failed',
  Approved: 'Approved'
};

exports.ModelVersionEngagementType = exports.$Enums.ModelVersionEngagementType = {
  Notify: 'Notify'
};

exports.ModelHashType = exports.$Enums.ModelHashType = {
  AutoV1: 'AutoV1',
  AutoV2: 'AutoV2',
  AutoV3: 'AutoV3',
  SHA256: 'SHA256',
  CRC32: 'CRC32',
  BLAKE3: 'BLAKE3'
};

exports.ScanResultCode = exports.$Enums.ScanResultCode = {
  Pending: 'Pending',
  Success: 'Success',
  Danger: 'Danger',
  Error: 'Error'
};

exports.ModelFileVisibility = exports.$Enums.ModelFileVisibility = {
  Sensitive: 'Sensitive',
  Private: 'Private',
  Public: 'Public'
};

exports.AssociationType = exports.$Enums.AssociationType = {
  Suggested: 'Suggested'
};

exports.ReportReason = exports.$Enums.ReportReason = {
  TOSViolation: 'TOSViolation',
  NSFW: 'NSFW',
  Ownership: 'Ownership',
  AdminAttention: 'AdminAttention',
  Claim: 'Claim',
  CSAM: 'CSAM'
};

exports.ReportStatus = exports.$Enums.ReportStatus = {
  Pending: 'Pending',
  Processing: 'Processing',
  Actioned: 'Actioned',
  Unactioned: 'Unactioned'
};

exports.ReviewReactions = exports.$Enums.ReviewReactions = {
  Like: 'Like',
  Dislike: 'Dislike',
  Laugh: 'Laugh',
  Cry: 'Cry',
  Heart: 'Heart'
};

exports.MediaType = exports.$Enums.MediaType = {
  image: 'image',
  video: 'video',
  audio: 'audio'
};

exports.NsfwLevel = exports.$Enums.NsfwLevel = {
  None: 'None',
  Soft: 'Soft',
  Mature: 'Mature',
  X: 'X',
  Blocked: 'Blocked'
};

exports.ImageGenerationProcess = exports.$Enums.ImageGenerationProcess = {
  txt2img: 'txt2img',
  txt2imgHiRes: 'txt2imgHiRes',
  img2img: 'img2img',
  inpainting: 'inpainting'
};

exports.ImageIngestionStatus = exports.$Enums.ImageIngestionStatus = {
  Pending: 'Pending',
  Scanned: 'Scanned',
  Error: 'Error',
  Blocked: 'Blocked',
  NotFound: 'NotFound'
};

exports.ImageEngagementType = exports.$Enums.ImageEngagementType = {
  Favorite: 'Favorite',
  Hide: 'Hide'
};

exports.TagType = exports.$Enums.TagType = {
  UserGenerated: 'UserGenerated',
  Label: 'Label',
  Moderation: 'Moderation',
  System: 'System'
};

exports.TagTarget = exports.$Enums.TagTarget = {
  Model: 'Model',
  Question: 'Question',
  Image: 'Image',
  Post: 'Post',
  Tag: 'Tag',
  Article: 'Article',
  Bounty: 'Bounty',
  Collection: 'Collection'
};

exports.TagsOnTagsType = exports.$Enums.TagsOnTagsType = {
  Parent: 'Parent',
  Replace: 'Replace',
  Append: 'Append'
};

exports.TagSource = exports.$Enums.TagSource = {
  User: 'User',
  Rekognition: 'Rekognition',
  WD14: 'WD14',
  Computed: 'Computed'
};

exports.PartnerPricingModel = exports.$Enums.PartnerPricingModel = {
  Duration: 'Duration',
  PerImage: 'PerImage'
};

exports.KeyScope = exports.$Enums.KeyScope = {
  Read: 'Read',
  Write: 'Write'
};

exports.NotificationCategory = exports.$Enums.NotificationCategory = {
  Comment: 'Comment',
  Update: 'Update',
  Milestone: 'Milestone',
  Bounty: 'Bounty',
  Buzz: 'Buzz',
  System: 'System',
  Other: 'Other'
};

exports.TagEngagementType = exports.$Enums.TagEngagementType = {
  Hide: 'Hide',
  Follow: 'Follow',
  Allow: 'Allow'
};

exports.CosmeticType = exports.$Enums.CosmeticType = {
  Badge: 'Badge',
  NamePlate: 'NamePlate',
  ContentDecoration: 'ContentDecoration',
  ProfileDecoration: 'ProfileDecoration',
  ProfileBackground: 'ProfileBackground'
};

exports.CosmeticSource = exports.$Enums.CosmeticSource = {
  Trophy: 'Trophy',
  Purchase: 'Purchase',
  Event: 'Event',
  Membership: 'Membership',
  Claim: 'Claim'
};

exports.CosmeticEntity = exports.$Enums.CosmeticEntity = {
  Model: 'Model',
  Image: 'Image',
  Article: 'Article',
  Post: 'Post'
};

exports.ArticleEngagementType = exports.$Enums.ArticleEngagementType = {
  Favorite: 'Favorite',
  Hide: 'Hide'
};

exports.GenerationSchedulers = exports.$Enums.GenerationSchedulers = {
  EulerA: 'EulerA',
  Euler: 'Euler',
  LMS: 'LMS',
  Heun: 'Heun',
  DPM2: 'DPM2',
  DPM2A: 'DPM2A',
  DPM2SA: 'DPM2SA',
  DPM2M: 'DPM2M',
  DPMSDE: 'DPMSDE',
  DPMFast: 'DPMFast',
  DPMAdaptive: 'DPMAdaptive',
  LMSKarras: 'LMSKarras',
  DPM2Karras: 'DPM2Karras',
  DPM2AKarras: 'DPM2AKarras',
  DPM2SAKarras: 'DPM2SAKarras',
  DPM2MKarras: 'DPM2MKarras',
  DPMSDEKarras: 'DPMSDEKarras',
  DDIM: 'DDIM'
};

exports.CollectionWriteConfiguration = exports.$Enums.CollectionWriteConfiguration = {
  Private: 'Private',
  Public: 'Public',
  Review: 'Review'
};

exports.CollectionReadConfiguration = exports.$Enums.CollectionReadConfiguration = {
  Private: 'Private',
  Public: 'Public',
  Unlisted: 'Unlisted'
};

exports.CollectionType = exports.$Enums.CollectionType = {
  Model: 'Model',
  Article: 'Article',
  Post: 'Post',
  Image: 'Image'
};

exports.CollectionMode = exports.$Enums.CollectionMode = {
  Contest: 'Contest',
  Bookmark: 'Bookmark'
};

exports.CollectionItemStatus = exports.$Enums.CollectionItemStatus = {
  ACCEPTED: 'ACCEPTED',
  REVIEW: 'REVIEW',
  REJECTED: 'REJECTED'
};

exports.CollectionContributorPermission = exports.$Enums.CollectionContributorPermission = {
  VIEW: 'VIEW',
  ADD: 'ADD',
  ADD_REVIEW: 'ADD_REVIEW',
  MANAGE: 'MANAGE'
};

exports.HomeBlockType = exports.$Enums.HomeBlockType = {
  Collection: 'Collection',
  Announcement: 'Announcement',
  Leaderboard: 'Leaderboard',
  Social: 'Social',
  Event: 'Event'
};

exports.BountyMode = exports.$Enums.BountyMode = {
  Individual: 'Individual',
  Split: 'Split'
};

exports.BountyEntryMode = exports.$Enums.BountyEntryMode = {
  Open: 'Open',
  BenefactorsOnly: 'BenefactorsOnly'
};

exports.BountyType = exports.$Enums.BountyType = {
  ModelCreation: 'ModelCreation',
  LoraCreation: 'LoraCreation',
  EmbedCreation: 'EmbedCreation',
  DataSetCreation: 'DataSetCreation',
  DataSetCaption: 'DataSetCaption',
  ImageCreation: 'ImageCreation',
  VideoCreation: 'VideoCreation',
  Other: 'Other'
};

exports.BountyEngagementType = exports.$Enums.BountyEngagementType = {
  Favorite: 'Favorite',
  Track: 'Track'
};

exports.CsamReportType = exports.$Enums.CsamReportType = {
  Image: 'Image',
  TrainingData: 'TrainingData'
};

exports.EntityType = exports.$Enums.EntityType = {
  Image: 'Image',
  Post: 'Post',
  Article: 'Article',
  Bounty: 'Bounty',
  BountyEntry: 'BountyEntry',
  ModelVersion: 'ModelVersion',
  Model: 'Model',
  Collection: 'Collection'
};

exports.EntityCollaboratorStatus = exports.$Enums.EntityCollaboratorStatus = {
  Pending: 'Pending',
  Approved: 'Approved',
  Rejected: 'Rejected'
};

exports.ClubAdminPermission = exports.$Enums.ClubAdminPermission = {
  ManageMemberships: 'ManageMemberships',
  ManageTiers: 'ManageTiers',
  ManagePosts: 'ManagePosts',
  ManageClub: 'ManageClub',
  ManageResources: 'ManageResources',
  ViewRevenue: 'ViewRevenue',
  WithdrawRevenue: 'WithdrawRevenue'
};

exports.ChatMemberStatus = exports.$Enums.ChatMemberStatus = {
  Invited: 'Invited',
  Joined: 'Joined',
  Ignored: 'Ignored',
  Left: 'Left',
  Kicked: 'Kicked'
};

exports.ChatMessageType = exports.$Enums.ChatMessageType = {
  Markdown: 'Markdown',
  Image: 'Image',
  Video: 'Video',
  Audio: 'Audio',
  Embed: 'Embed'
};

exports.PurchasableRewardUsage = exports.$Enums.PurchasableRewardUsage = {
  SingleUse: 'SingleUse',
  MultiUse: 'MultiUse'
};

exports.JobQueueType = exports.$Enums.JobQueueType = {
  CleanUp: 'CleanUp',
  UpdateMetrics: 'UpdateMetrics',
  UpdateNsfwLevel: 'UpdateNsfwLevel',
  UpdateSearchIndex: 'UpdateSearchIndex',
  CleanIfEmpty: 'CleanIfEmpty'
};

exports.VaultItemStatus = exports.$Enums.VaultItemStatus = {
  Pending: 'Pending',
  Stored: 'Stored',
  Failed: 'Failed'
};

exports.RedeemableCodeType = exports.$Enums.RedeemableCodeType = {
  Buzz: 'Buzz',
  Membership: 'Membership'
};

exports.ToolType = exports.$Enums.ToolType = {
  Image: 'Image',
  Video: 'Video',
  MotionCapture: 'MotionCapture',
  Upscalers: 'Upscalers',
  Audio: 'Audio',
  Compute: 'Compute',
  GameEngines: 'GameEngines',
  Editor: 'Editor'
};

exports.TechniqueType = exports.$Enums.TechniqueType = {
  Image: 'Image',
  Video: 'Video'
};

exports.Prisma.ModelName = {
  Account: 'Account',
  Session: 'Session',
  SessionInvalidation: 'SessionInvalidation',
  UserReferral: 'UserReferral',
  UserReferralCode: 'UserReferralCode',
  UserStripeConnect: 'UserStripeConnect',
  BuzzWithdrawalRequestHistory: 'BuzzWithdrawalRequestHistory',
  BuzzWithdrawalRequest: 'BuzzWithdrawalRequest',
  User: 'User',
  CustomerSubscription: 'CustomerSubscription',
  Product: 'Product',
  Price: 'Price',
  Purchase: 'Purchase',
  UserEngagement: 'UserEngagement',
  UserMetric: 'UserMetric',
  UserLink: 'UserLink',
  VerificationToken: 'VerificationToken',
  Import: 'Import',
  Model: 'Model',
  License: 'License',
  ModelInterest: 'ModelInterest',
  ModelEngagement: 'ModelEngagement',
  ModelVersionSponsorshipSettings: 'ModelVersionSponsorshipSettings',
  ModelVersionMonetization: 'ModelVersionMonetization',
  ModelVersion: 'ModelVersion',
  ModelVersionEngagement: 'ModelVersionEngagement',
  RecommendedResource: 'RecommendedResource',
  ModelFileHash: 'ModelFileHash',
  ModelFile: 'ModelFile',
  File: 'File',
  ModelMetric: 'ModelMetric',
  ModelVersionMetric: 'ModelVersionMetric',
  ModelMetricDaily: 'ModelMetricDaily',
  ModelAssociations: 'ModelAssociations',
  DownloadHistory: 'DownloadHistory',
  ModActivity: 'ModActivity',
  Report: 'Report',
  ResourceReviewReport: 'ResourceReviewReport',
  ModelReport: 'ModelReport',
  CommentReport: 'CommentReport',
  CommentV2Report: 'CommentV2Report',
  ImageReport: 'ImageReport',
  ArticleReport: 'ArticleReport',
  PostReport: 'PostReport',
  UserReport: 'UserReport',
  CollectionReport: 'CollectionReport',
  BountyReport: 'BountyReport',
  BountyEntryReport: 'BountyEntryReport',
  ChatReport: 'ChatReport',
  ResourceReview: 'ResourceReview',
  ResourceReviewReaction: 'ResourceReviewReaction',
  Post: 'Post',
  PostMetric: 'PostMetric',
  Image: 'Image',
  ImageConnection: 'ImageConnection',
  ImageEngagement: 'ImageEngagement',
  ImageResource: 'ImageResource',
  ImageMetric: 'ImageMetric',
  ImageRatingRequest: 'ImageRatingRequest',
  CollectionMetric: 'CollectionMetric',
  Tag: 'Tag',
  TagsOnTags: 'TagsOnTags',
  TagsOnModels: 'TagsOnModels',
  TagsOnModelsVote: 'TagsOnModelsVote',
  TagsOnQuestions: 'TagsOnQuestions',
  TagsOnImage: 'TagsOnImage',
  TagsOnImageVote: 'TagsOnImageVote',
  TagsOnPost: 'TagsOnPost',
  TagsOnArticle: 'TagsOnArticle',
  TagsOnBounty: 'TagsOnBounty',
  TagsOnPostVote: 'TagsOnPostVote',
  TagMetric: 'TagMetric',
  SavedModel: 'SavedModel',
  RunStrategy: 'RunStrategy',
  Partner: 'Partner',
  KeyValue: 'KeyValue',
  ApiKey: 'ApiKey',
  Comment: 'Comment',
  CommentReaction: 'CommentReaction',
  Log: 'Log',
  Notification: 'Notification',
  NotificationViewed: 'NotificationViewed',
  UserNotificationSettings: 'UserNotificationSettings',
  Webhook: 'Webhook',
  Question: 'Question',
  QuestionMetric: 'QuestionMetric',
  Answer: 'Answer',
  AnswerVote: 'AnswerVote',
  AnswerMetric: 'AnswerMetric',
  CommentV2: 'CommentV2',
  Thread: 'Thread',
  QuestionReaction: 'QuestionReaction',
  AnswerReaction: 'AnswerReaction',
  CommentV2Reaction: 'CommentV2Reaction',
  ImageReaction: 'ImageReaction',
  PostReaction: 'PostReaction',
  ArticleReaction: 'ArticleReaction',
  TagEngagement: 'TagEngagement',
  Announcement: 'Announcement',
  Cosmetic: 'Cosmetic',
  UserCosmetic: 'UserCosmetic',
  CosmeticShopSection: 'CosmeticShopSection',
  CosmeticShopItem: 'CosmeticShopItem',
  CosmeticShopSectionItem: 'CosmeticShopSectionItem',
  UserCosmeticShopPurchases: 'UserCosmeticShopPurchases',
  BuzzClaim: 'BuzzClaim',
  Article: 'Article',
  PressMention: 'PressMention',
  ArticleEngagement: 'ArticleEngagement',
  ArticleMetric: 'ArticleMetric',
  Leaderboard: 'Leaderboard',
  LeaderboardResult: 'LeaderboardResult',
  ModelVersionExploration: 'ModelVersionExploration',
  GenerationServiceProvider: 'GenerationServiceProvider',
  Collection: 'Collection',
  CollectionItem: 'CollectionItem',
  CollectionContributor: 'CollectionContributor',
  TagsOnCollection: 'TagsOnCollection',
  HomeBlock: 'HomeBlock',
  BuzzTip: 'BuzzTip',
  Bounty: 'Bounty',
  BountyEntry: 'BountyEntry',
  BountyEntryReaction: 'BountyEntryReaction',
  BountyBenefactor: 'BountyBenefactor',
  BountyEngagement: 'BountyEngagement',
  TipConnection: 'TipConnection',
  BountyMetric: 'BountyMetric',
  BountyEntryMetric: 'BountyEntryMetric',
  CsamReport: 'CsamReport',
  Link: 'Link',
  EntityAccess: 'EntityAccess',
  EntityCollaborator: 'EntityCollaborator',
  Club: 'Club',
  ClubTier: 'ClubTier',
  ClubAdminInvite: 'ClubAdminInvite',
  ClubAdmin: 'ClubAdmin',
  ClubMembership: 'ClubMembership',
  ClubMembershipCharge: 'ClubMembershipCharge',
  ClubPost: 'ClubPost',
  ClubPostReaction: 'ClubPostReaction',
  ClubPostMetric: 'ClubPostMetric',
  ClubMetric: 'ClubMetric',
  Chat: 'Chat',
  ChatMember: 'ChatMember',
  ChatMessage: 'ChatMessage',
  BuildGuide: 'BuildGuide',
  PurchasableReward: 'PurchasableReward',
  UserPurchasedRewards: 'UserPurchasedRewards',
  JobQueue: 'JobQueue',
  VaultItem: 'VaultItem',
  Vault: 'Vault',
  RedeemableCode: 'RedeemableCode',
  Tool: 'Tool',
  ImageTool: 'ImageTool',
  Technique: 'Technique',
  ImageTechnique: 'ImageTechnique',
  QuestionRank: 'QuestionRank',
  AnswerRank: 'AnswerRank',
  ModelReportStat: 'ModelReportStat',
  ArticleStat: 'ArticleStat',
  ArticleRank: 'ArticleRank',
  UserStat: 'UserStat',
  UserRank: 'UserRank',
  TagStat: 'TagStat',
  TagRank: 'TagRank',
  ImageStat: 'ImageStat',
  ImageModHelper: 'ImageModHelper',
  ModelHash: 'ModelHash',
  PostHelper: 'PostHelper',
  PostStat: 'PostStat',
  PostRank: 'PostRank',
  CollectionStat: 'CollectionStat',
  CollectionRank: 'CollectionRank',
  ImageTag: 'ImageTag',
  ModelTag: 'ModelTag',
  ImageResourceHelper: 'ImageResourceHelper',
  PostResourceHelper: 'PostResourceHelper',
  PostImageTag: 'PostImageTag',
  PostTag: 'PostTag',
  ResourceReviewHelper: 'ResourceReviewHelper',
  GenerationCoverage: 'GenerationCoverage',
  UserProfile: 'UserProfile',
  BountyStat: 'BountyStat',
  BountyRank: 'BountyRank',
  BountyEntryStat: 'BountyEntryStat',
  BountyEntryRank: 'BountyEntryRank',
  ClubStat: 'ClubStat',
  ClubRank: 'ClubRank'
};

/**
 * This is a stub Prisma Client that will error at runtime if called.
 */
class PrismaClient {
  constructor() {
    return new Proxy(this, {
      get(target, prop) {
        const runtime = detectRuntime()
        const edgeRuntimeName = {
          'workerd': 'Cloudflare Workers',
          'deno': 'Deno and Deno Deploy',
          'netlify': 'Netlify Edge Functions',
          'edge-light': 'Vercel Edge Functions or Edge Middleware',
        }[runtime]

        let message = 'PrismaClient is unable to run in '
        if (edgeRuntimeName !== undefined) {
          message += edgeRuntimeName + '. As an alternative, try Accelerate: https://pris.ly/d/accelerate.'
        } else {
          message += 'this browser environment, or has been bundled for the browser (running in `' + runtime + '`).'
        }
        
        message += `
If this is unexpected, please open an issue: https://pris.ly/prisma-prisma-bug-report`

        throw new Error(message)
      }
    })
  }
}

exports.PrismaClient = PrismaClient

Object.assign(exports, Prisma)
