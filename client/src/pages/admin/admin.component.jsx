import React, {lazy, Suspense} from "react";
import {withRouter, Route, Switch} from "react-router-dom";
import {
  AdminPageContainer,
  AdminButtonsContainer
} from "./admin.styles";

import CustomButton from "../../components/custom-button/custom-button.component";
import Spinner from "../../components/spinner/spinner.component";
import ErrorBoundary from "../../components/error-boundary/error-boundary.component";


const Collections = lazy(() => import("./collection/collections"));
const UpdateCollection = lazy(() => import("./collection/edit-collection/edit-collection"));
const UpdateItem = lazy(() => import("./collection/collection-items-container/collection-item/edit-item"));



const AdminPage = ({history, match}) => (
  <AdminPageContainer>
    <AdminButtonsContainer>
      <CustomButton inverted onClick={() => history.push(`${match.path}/collections`)}>COLLECTIONS</CustomButton>
    </AdminButtonsContainer>
    <div>
      <Switch>
        <ErrorBoundary>
          <Suspense fallback={<Spinner />}>
            <Route exact path={`${match.path}/collections`} component={Collections} />
            <Route path={`${match.path}/collections/edit/:collectionId`} component={UpdateCollection} />
            <Route path={`${match.path}/items/edit/:itemId`} component={UpdateItem} />
          </Suspense>
        </ErrorBoundary>
      </Switch>
    </div>
  </AdminPageContainer>
);

export default withRouter(AdminPage);