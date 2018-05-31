import React from 'react';
import {Button, Container, Grid, Segment, Sticky} from "semantic-ui-react";
import {WaitersList} from "./WaitersList";

export class WaitersListPage extends React.Component {
  render() {
    const {waiters, loading, error, onEditClick, onRemoveClick} = this.props;

    return (
      <Container fluid>
        <Grid>
          <Grid.Row  style={{margin: "0 8px"}}>
            <Grid.Column width={16}>
              <Segment loading={loading}>
                <h3>Список</h3>
                <WaitersList
                  waiters={waiters}
                  error={error}
                  loading={loading}
                  onEditClick={onEditClick}
                  onRemoveClick={onRemoveClick}
                />
              </Segment>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Container>
    )
  }
}

