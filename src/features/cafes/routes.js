import React from "react";
import {CafesListContainer} from "./containers/CafesListContainer";
import {PrivateRoute} from "../../utils/routes";
import {EditCafeContainer} from "./containers/EditCafeContainer";
import {CreateCafeContainer} from "./containers/CreateCafeContainer";

export const CafesRoutes = () => (
  <React.Fragment>
    <PrivateRoute path="/cafes" exact component={CafesListContainer}/>
    <PrivateRoute path="/cafes/create" component={CreateCafeContainer}/>
    <PrivateRoute path="/cafes/edit/:id" component={EditCafeContainer}/>
  </React.Fragment>
);
