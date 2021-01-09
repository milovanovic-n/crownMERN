import React from "react";
import {withRouter, Route, Switch} from "react-router-dom";

import Collections from "./collection/collections";
import UpdateCollection from "./collection/edit-collection";
import Items from "./item/items";
import UpdateItem from "./item/edit-item";
import CustomButton from "../../components/custom-button/custom-button.component";

import "./admin.styles.scss";


const AdminPage = ({history, match}) => (
  <div className="admin__page">
    <div className="buttons__container">
      <CustomButton inverted onClick={() => history.push(`${match.path}/collections`)}>COLLECTIONS</CustomButton>
      <CustomButton inverted onClick={() => history.push(`${match.path}/items`)}>ITEMS</CustomButton>
    </div>
    <div>
      <Switch>
        <Route exact path={`${match.path}/collections`} component={Collections} />
        <Route path={`${match.path}/collections/edit/:collectionId`} component={UpdateCollection} />
        <Route exact path={`${match.path}/items`} component={Items} />
        <Route path={`${match.path}/items/edit/:itemId`} component={UpdateItem} />
      </Switch>
    </div>
  </div>
);

export default withRouter(AdminPage);