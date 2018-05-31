import React from "react";
import {WaitersListContainer} from "./containers/WaitersListContainer";
import {PrivateRoute} from "../../utils/routes";
import {EditWaiterContainer} from "./containers/EditWaiterContainer";
import {CreateWaiterContainer} from "./containers/CreateWaiterContainer";

export const WaitersRoutes = () => (
  <React.Fragment>
    <PrivateRoute path="/waiters" exact component={WaitersListContainer}/>
    <PrivateRoute path="/waiters/create" component={CreateWaiterContainer}/>
    <PrivateRoute path="/waiters/edit/:id" component={EditWaiterContainer}/>
  </React.Fragment>
);
