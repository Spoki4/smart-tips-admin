import React from "react";
import {Container, Icon, Menu} from "semantic-ui-react";
import history from "../utils/history";


export class PageWrapper extends React.Component {
  state = {activeItem: ""};

  constructor() {
    super();
    if (location.pathname.includes("/cafes"))
      this.state = {activeItem: "cafes"};
    else if (location.pathname.includes("/waiters"))
      this.state = {activeItem: "waiters"};
    else this.state = {activeItem: ""};
  }

  onHandleClick = (_, data) => {
    this.setState({activeItem: data.name});
    history.push(`/${data.name}`);
  };

  render() {
    const {activeItem} = this.state;

    return (
      <Container fluid>
        <Menu>
          <Menu.Menu position="left">
            <Menu.Item>SmartTips Admin Panel</Menu.Item>
          </Menu.Menu>
          <Menu.Menu position="right">
            <Menu.Item
              name="cafes"
              link
              active={activeItem === "cafes"}
              onClick={this.onHandleClick}
            >
              <Icon name="home" size="large"/>
              Рестораны
            </Menu.Item>
            <Menu.Item
              name="waiters"
              link
              active={activeItem === "waiters"}
              onClick={this.onHandleClick}
            >
              <Icon name="id card" size="large"/>
              Официанты
            </Menu.Item>
          </Menu.Menu>
        </Menu>
        {this.props.children}
      </Container>
    )
  }
}