import React from "react";
import {Route} from "react-router-dom"
import {LoginContainer} from "./containers/LoginContainer";

export const LoginRoutes = () => (
  <React.Fragment>
    <Route path="/" exact component={LoginContainer}/>
  </React.Fragment>
);
