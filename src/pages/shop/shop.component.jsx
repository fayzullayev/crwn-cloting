import React from "react";
import { Route, Switch } from "react-router-dom";
import CollectionPage from "../collection/collection.component";
import CollectionsOverview from "../../components/collections-overview/collections-overview.component";

const ShopPage = ({ match }) => {
  return (
    <div>
      <Switch>
        <Route exact path={`${match.path}`} component={CollectionsOverview} />
        <Route
          exact
          path={`${match.path}/:collectionId`}
          component={CollectionPage}
        />
      </Switch>
    </div>
  );
};

export default ShopPage;
