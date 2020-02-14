import { Form, Field } from "react-final-form";
import React, { useReducer, useState } from "react";
import {
  reducer,
  emptyState,
  actionCreators,
  entities,
  selectors
} from "./todo-schema";

type Todo = {
  todoId: string;
  text: string;
};

const TodoForm = () => {
  let [id, setId] = useState(0);
  const [todosVisible, setTodosVisible] = useState(true);
  const [state, dispatch] = useReducer(reducer, emptyState);
  const { add } = actionCreators;
  const { todo } = entities;

  const addTodo = (values: any) => {
    dispatch(add(todo, id.toString(), values));
    setId(id + 1);
  };

  const ids = selectors.getIds(state, { entity: todo });

  return (
    <Form
      onSubmit={addTodo}
      render={({ handleSubmit }) => (
        <>
          <form onSubmit={handleSubmit}>
            <Field name="todoId" component="input"></Field>
            <Field name="text" component="input"></Field>
            <button type="submit">Add</button>
          </form>
          {ids.map(id => {
            const item = selectors.getResource(state, { entity: todo, id }) as Todo;
            return <p key={item.todoId}>{item.todoId + " " + item.text}</p>
          })}
        </>
      )}
    />
  );
};

export { TodoForm };
