import React from "react";
import {LoginPage} from "../components/LoginPage";
import {LoginApi} from "../services/login";
import history from "../../../utils/history";


export class LoginContainer extends React.Component {
  state = {loading: false, error: null}

  onLogin = (data) => {
    this.setState({loading: true, error: null})
    LoginApi.login(data)
      .then((response) => {
        this.setState({loading: false})
        localStorage.setItem("token", response.token)
        history.push("/cafes")
      })
      .catch(err => this.setState({error: err.message, loading: false}))
  }

  render() {
    return <LoginPage
      loading={this.state.loading}
      error={this.state.error}
      onSubmit={this.onLogin}
    />
  }
}