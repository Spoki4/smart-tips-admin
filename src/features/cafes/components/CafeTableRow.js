import React from 'react';
import {Icon, Table} from "semantic-ui-react"

function clipText(string, count = 30) {
  if (string.length < count) return string;
  return string.slice(0, count) + "...";
}

export const CafeTableRow = ({cafe, onEditClick, onRemoveClick}) => {
  return (
    <Table.Row>
      <Table.Cell>{cafe.name}</Table.Cell>
      <Table.Cell>{cafe.address}</Table.Cell>
      <Table.Cell>{cafe.rating ? cafe.rating.toFixed(2) : 0}</Table.Cell>
      <Table.Cell>{clipText(cafe.description)}</Table.Cell>
      <Table.Cell>
        <Icon style={{cursor: "pointer"}} name="edit" size="large" onClick={() => onEditClick(cafe.id)}/>
        <Icon style={{cursor: "pointer", marginLeft: "4px"}} name="trash" size="large" onClick={() => onRemoveClick(cafe.id)}/>
      </Table.Cell>
    </Table.Row>
  );
};
