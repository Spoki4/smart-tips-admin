import React from 'react';
import {Form} from "semantic-ui-react";

export class CafeForm extends React.Component {
  state = {name: "", address: "", description: "", prevCafe: null};

  static getDerivedStateFromProps(props, state) {
    if (props.cafe !== state.prevCafe)
      return {
        name: props.cafe.name,
        address: props.cafe.address,
        description: props.cafe.description,
        prevCafe: props.cafe
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
      address: this.state.address,
      description: this.state.description,
    };

    this.props.onSubmit(data)
  };

  render() {
    const {name, address, description} = this.state;
    return (
      <Form onSubmit={this.onSubmit}>
        <Form.Input label="Название:" onChange={this.onChange("name")} value={name} placeholder="Восток"/>
        <Form.Input label="Адрес:" onChange={this.onChange("address")} value={address}
                    placeholder="г.Москва, Николоямская ул., 1"/>
        <Form.TextArea label="Описание:" onChange={this.onChange("description")} value={description}
                       placeholder="Восток, возможно и не Восток"/>
        <Form.Button color="green">Сохранить</Form.Button>
      </Form>
    );
  }
}
