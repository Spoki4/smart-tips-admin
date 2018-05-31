import React from 'react';
import {Form} from "semantic-ui-react";

export class WaiterForm extends React.Component {
  state = {name: "", surname: "", prevWaiter: null};

  static getDerivedStateFromProps(props, state) {
    if (props.waiter !== state.prevWaiter)
      return {
        name: props.waiter.name,
        surname: props.waiter.surname,
        prevWaiter: props.waiter
      };
    return null;
  }

  onChange = (field) => (_, {value}) => {
    this.setState({[field]: value})
  };

  onSubmit = (e) => {
    e.preventDefault();
    const data = {
      name: this.state.name,
      surname: this.state.surname
    };

    this.props.onSubmit(data)
  };

  render() {
    const {name, surname} = this.state;
    return (
      <Form onSubmit={this.onSubmit}>
        <Form.Input label="Имя:" onChange={this.onChange("name")} value={name} placeholder="Иван"/>
        <Form.Input label="Фамилия:" onChange={this.onChange("surname")} value={surname} placeholder="Иванов"/>
        <Form.Button color="green">Сохранить</Form.Button>
      </Form>
    );
  }
}
