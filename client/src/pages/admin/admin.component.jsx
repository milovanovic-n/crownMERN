import React, {lazy, Suspense} from "react";
import {withRouter, Route, Switch} from "react-router-dom";

import CustomButton from "../../components/custom-button/custom-button.component";
import Spinner from "../../components/spinner/spinner.component";
import ErrorBoundary from "../../components/error-boundary/error-boundary.component";

import "./admin.styles.scss";

const Collections = lazy(() => import("./collection/collections"));
const UpdateCollection = lazy(() => import("./collection/edit-collection"));
const Items = lazy(() => import("./item/items"));
const UpdateItem = lazy(() => import("./item/edit-item"));




const AdminPage = ({history, match}) => (
  <div className="admin__page">
    <div className="buttons__container">
      <CustomButton inverted onClick={() => history.push(`${match.path}/collections`)}>COLLECTIONS</CustomButton>
      <CustomButton inverted onClick={() => history.push(`${match.path}/items`)}>ITEMS</CustomButton>
    </div>
    <div>
      <Switch>
        <ErrorBoundary>
          <Suspense fallback={<Spinner />}>
            <Route exact path={`${match.path}/collections`} component={Collections} />
            <Route path={`${match.path}/collections/edit/:collectionId`} component={UpdateCollection} />
            <Route exact path={`${match.path}/items`} component={Items} />
            <Route path={`${match.path}/items/edit/:itemId`} component={UpdateItem} />
          </Suspense>
        </ErrorBoundary>
      </Switch>
    </div>
  </div>
);

export default withRouter(AdminPage);