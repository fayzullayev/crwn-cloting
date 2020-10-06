import React from "react";
import { connect } from "react-redux";
import CollectionPreview from "../collection-preview/collection-preview.component";
import { selectCollectionsPreview } from "../../redux/shop/shop.selector";
import { createStructuredSelector } from "reselect";

import "./collections-overview.styles.scss";

export const CollectionsOverview = ({ collections }) => {
  return (
    <div className="collections-overview">
      {collections.map((collection) => (
        <CollectionPreview key={collection.id} {...collection} />
      ))}
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  collections: selectCollectionsPreview,
});

export default connect(mapStateToProps)(CollectionsOverview);
