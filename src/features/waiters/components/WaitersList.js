import React from 'react';
import {Message, Table} from "semantic-ui-react";
import {WaiterTableRow} from "./WaiterTableRow";

export const WaitersList = ({waiters, error, loading, onEditClick, onRemoveClick}) => {
  return (
    <React.Fragment>
      {error && (
        <Message negative>
          <Message.Header>Ошибка получения данных</Message.Header>
          <p>{error}</p>
        </Message>
      )}
      <Table>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell>ID</Table.HeaderCell>
            <Table.HeaderCell>Имя</Table.HeaderCell>
            <Table.HeaderCell>Фамилия</Table.HeaderCell>
            <Table.HeaderCell>Действия</Table.HeaderCell>
          </Table.Row>
        </Table.Header>
        <Table.Body>
          {waiters.map((item) => (
            <WaiterTableRow
              waiter={item}
              key={item.id}
              onEditClick={onEditClick}
              onRemoveClick={onRemoveClick}
            />
          ))}
        </Table.Body>
      </Table>
    </React.Fragment>
  );
};
