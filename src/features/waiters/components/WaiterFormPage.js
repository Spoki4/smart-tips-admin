import React from 'react';
import {Container, Grid, Message, Segment} from "semantic-ui-react";
import {WaiterForm} from "./WaiterForm";

export class WaiterFormPage extends React.Component {
  render() {
    return (
      <Container fluid>
        <Grid>
          <Grid.Row centered style={{margin: "0 8px"}}>
            <Grid.Column width={8}>
              <Segment loading={this.props.loading}>
                <h3>Официант</h3>
                {this.props.cafe && (
                  <Message>
                    <Message.Header>Создания официанта для ресторана {this.props.cafe.name}</Message.Header>
                  </Message>)
                }
                {this.props.error || this.props.message && (
                  <Message
                    positive={this.props.message && !this.props.error}
                    negative={!this.props.message && this.props.error}
                  >
                    <Message.Header>{this.props.error ? "Ошибка" : "Успех"}</Message.Header>
                    <p>{this.props.error || this.props.message}</p>
                  </Message>)
                }
                <WaiterForm waiter={this.props.waiter} onSubmit={this.props.onSave}/>
              </Segment>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Container>
    );
  }
}
