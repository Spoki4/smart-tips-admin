import {hot} from "react-hot-loader";
import React from "react";
import Router from "react-router-dom/es/Router";
import Routes from "./features/routes"
import history from "./utils/history"
import {PageWrapper} from "./pages/PageWrapper";

const App = () => (
  <Router history={history}>
    <PageWrapper>
      <Routes />
    </PageWrapper>
  </Router>
)

export default hot(module)(App)