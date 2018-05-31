import React from 'react';
import {Message, Table} from "semantic-ui-react";
import {CafeTableRow} from "./CafeTableRow";

export const CafesList = ({cafes, error, loading, onEditClick, onRemoveClick}) => {
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
            <Table.HeaderCell>Название</Table.HeaderCell>
            <Table.HeaderCell>Адрес</Table.HeaderCell>
            <Table.HeaderCell>Рейтинг</Table.HeaderCell>
            <Table.HeaderCell>Описание</Table.HeaderCell>
            <Table.HeaderCell>Действия</Table.HeaderCell>
          </Table.Row>
        </Table.Header>
        <Table.Body>
          {cafes.map((item) => (
            <CafeTableRow
              cafe={item}
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
