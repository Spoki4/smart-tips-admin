import React from 'react';
import {Container, Grid, Message, Segment} from "semantic-ui-react";
import {CafeForm} from "./CafeForm";
import {WaitersList} from "./WaitersList";
import history from "../../../utils/history";

export class CafesFormPage extends React.Component {
  render() {
    return (
      <Container fluid>
        <Grid>
          <Grid.Row  style={{margin: "0 8px"}}>
            <Grid.Column width={4}>
              <Segment>
                <h3>Официанты</h3>
                <WaitersList
                  disabled={this.props.isCreating}
                  waiters={this.props.waiters.list}
                  error={this.props.waiters.error}
                  loading={this.props.waiters.loading}
                  onCreateWaiter={() => history.push(`/waiters/create?cafeId=${this.props.cafe.id}`)}
                />
              </Segment>
            </Grid.Column>
            <Grid.Column width={12}>
              <Segment loading={this.props.loading}>
                <h3>Ресторан</h3>
                {this.props.error || this.props.message && (
                  <Message
                    positive={this.props.message && !this.props.error}
                    negative={!this.props.message && this.props.error}
                  >
                    <Message.Header>{this.props.error ? "Ошибка" : "Успех"}</Message.Header>
                    <p>{this.props.error || this.props.message}</p>
                  </Message>)
                }
                <CafeForm cafe={this.props.cafe} onSubmit={this.props.onSave}/>
              </Segment>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Container>
    );
  }
}
