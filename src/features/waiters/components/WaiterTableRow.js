import React from 'react';
import {Icon, Table} from "semantic-ui-react"

export const WaiterTableRow = ({waiter, onEditClick, onRemoveClick}) => {
  return (
    <Table.Row>
      <Table.Cell>{waiter.id}</Table.Cell>
      <Table.Cell>{waiter.name}</Table.Cell>
      <Table.Cell>{waiter.surname}</Table.Cell>
      <Table.Cell>
        <Icon style={{cursor: "pointer"}} name="edit" size="large" onClick={() => onEditClick(waiter.id)}/>
        <Icon style={{cursor: "pointer", marginLeft: "4px"}} name="trash" size="large" onClick={() => onRemoveClick(waiter.id)}/>
      </Table.Cell>
    </Table.Row>
  );
};
