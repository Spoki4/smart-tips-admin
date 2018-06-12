import {LoginRoutes} from "./login/routes";
import React from "react";
import {Redirect, Switch} from "react-router-dom";
import {PublicRoute} from "../utils/routes";
import {isTokenValid} from "../utils/token";
import {CafesRoutes} from "./cafes/routes";
import {WaitersRoutes} from "./waiters/routes";
import Route from "react-router-dom/es/Route";

export default () => (
  <Switch>
    <PublicRoute path="/" exact render={(props) => {
      const token = localStorage.getItem("token");
      if (token && isTokenValid(token))
        return <Redirect to="/cafes"/>;

        return <LoginRoutes {...props}/>
    }} />
    <Route render={props => (
      <React.Fragment>
        <CafesRoutes />
        <WaitersRoutes />
      </React.Fragment>
    )} />
  </Switch>
)