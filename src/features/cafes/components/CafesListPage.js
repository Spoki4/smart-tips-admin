import React from 'react';
import {Button, Container, Grid, Segment, Sticky} from "semantic-ui-react";
import {CafesList} from "./CafesList";

export class CafesListPage extends React.Component {
  render() {
    const {cafes, loading, error, onEditClick, onRemoveClick, onCreateClick} = this.props;

    return (
      <Container fluid>
        <div ref={(node) => this.contextRef = node}>
          <Grid>
            <Grid.Row  style={{margin: "0 8px"}}>
              <Grid.Column width={3}>
                <Sticky offset={16} context={this.contextRef}>
                  <Segment>
                    <h3 style={{textAlign: "center"}}>Действия</h3>
                    <Button fluid color="green" onClick={onCreateClick}>Добавить ресторан</Button>
                  </Segment>
                </Sticky>
              </Grid.Column>
              <Grid.Column width={13}>
                <Segment loading={loading}>
                  <h3>Список</h3>
                  <CafesList
                    cafes={cafes}
                    error={error}
                    loading={loading}
                    onEditClick={onEditClick}
                    onRemoveClick={onRemoveClick}
                  />
                </Segment>
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </div>
      </Container>
    )
  }
}

