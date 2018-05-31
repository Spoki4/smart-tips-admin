import React from 'react';
import {Button, Icon, List, Loader, Message} from "semantic-ui-react";
import history from "../../../utils/history";

export const WaitersList = ({waiters, loading, error, onCreateWaiter, disabled}) => {
  return (
    <div>
      {error &&(
        <Message negative>
          <Message.header>Ошибка при получении данных</Message.header>
          <p>{error}</p>
        </Message>
      )}
      {loading && <Loader active />}
      {!loading && waiters.length === 0
        ? (
          <p>Нет официантов</p>
        ) : (
          <List relaxed ordered>
            {waiters.map(waiter => (
              <List.Item key={waiter.id}>
                {`${waiter.name} ${waiter.surname}`} <Icon style={{marginLeft: "4px"}} link size="small" name="external" onClick={() => {
                  history.push(`/waiters/edit/${waiter.id}`)
              }}/>
              </List.Item>
            ))}
          </List>
        )
      }
      {!disabled && <Button color="green" onClick={onCreateWaiter}>Добавит официанта</Button>}
    </div>
  );
};
