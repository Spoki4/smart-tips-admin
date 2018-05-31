import React from "react";
import {Button, Container, Form, Input, Message} from "semantic-ui-react";


export class LoginPage extends React.Component {
  state = {login: "", password: ""};

  onChange = (field) => (e, data) => {
    this.setState({[field]: data.value})
  };

  onSubmit = (e) => {
    e.preventDefault();
    this.props.onSubmit(this.state)
  };

  renderError = () => {
    if (!this.props.error)
      return null;
    return (
      <Message negative>
        <Message.Header>Ошибка авторизации</Message.Header>
        <p>{this.props.error}</p>
      </Message>
    )
  };

  render() {
    return (
      <Container style={{width: "500px"}}>
        {this.renderError()}
        <Form onSubmit={this.onSubmit} loading={this.props.loading}>
          <Form.Field>
            <label>Логин</label>
            <Input placeholder="Логин" onChange={this.onChange("login")}/>
          </Form.Field>
          <Form.Field>
            <label>Пароль</label>
            <Input placeholder="Пароль" type="password" onChange={this.onChange("password")}/>
          </Form.Field>
          <Button type="submit">Войти</Button>
        </Form>
      </Container>
    )
  }
}