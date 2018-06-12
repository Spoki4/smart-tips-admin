import React from "react";
import {Redirect, Route} from "react-router-dom";
import {isTokenValid} from "./token";


export const PublicRoute = (props) => (
  <Route {...props}/>
);

export const PrivateRoute = (props) => {
  const token = localStorage.getItem("token");
  if (!token || !isTokenValid(token))
    return <Redirect to="/"/>;

  return <Route {...props} />;
};
