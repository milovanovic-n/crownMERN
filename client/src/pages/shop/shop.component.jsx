import React, {lazy, Suspense} from 'react';
import { Route } from 'react-router-dom';
import {
  ShopPageContainer
} from "./shop.styles";

import Spinner from "../../components/spinner/spinner.component";
import ErrorBoundary from "../../components/error-boundary/error-boundary.component";

const CollectionsOverview = lazy(() => import("../../components/collections-overview/collections-overview.container"));
const CollectionPage = lazy(() => import("../collection/collection.container"));

const ShopPage = ({ match }) => (
  <ShopPageContainer>
    <ErrorBoundary>
      <Suspense fallback={<Spinner />}>
        <Route exact path={`${match.path}`} component={CollectionsOverview} />
        <Route exact path={`${match.path}/:collectionId`} component={CollectionPage} />
      </Suspense>
    </ErrorBoundary>
  </ShopPageContainer>
);

export default ShopPage;
