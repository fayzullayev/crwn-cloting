import { createSelector } from "reselect";
import memoize from "lodash.memoize";

const shop = (state) => state.shop;

export const selectCollections = createSelector(
  [shop],
  (shop) => shop.collections
);

export const selectCollectionsPreview = createSelector(
  [selectCollections],
  (collections) => Object.values(collections)
);

export const selectCollection = memoize((collectionUrlParam) =>
  createSelector(
    [selectCollections],
    (collections) => collections[collectionUrlParam]
  )
);
