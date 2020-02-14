import { Form, Field } from "react-final-form";
import React, { useReducer, useState } from "react";
import {
  reducer,
  emptyState,
  actionCreators,
  entities,
  selectors
} from "./todo-schema";

const TodoForm = () => {
  let [id, setId] = useState(0);
  const [todosVisible, setTodosVisible] = useState(true);
  const [state, dispatch] = useReducer(reducer, emptyState);
  const { add } = actionCreators;
  const { todo } = entities;

  const addtodo = (values: any) => {
    dispatch(add(todo, id.toString(), values));
    setId(id + 1);
  };

  type Todo = {
    todoId: string;
    text: string;
  };

  const getTodos = () => {
    const rec = selectors.getResources(state, { entity: todo }) as Record<
      string,
      Todo
    >;
    const todos = [];
    for (let todo in rec) {
      todos.push(rec[todo] as Todo);
    }
    return todos;
  };

  return (
    <Form
      onSubmit={addtodo}
      render={({ handleSubmit }) => (
        <>
          <form onSubmit={handleSubmit}>
            <Field name="todoId" component="input"></Field>
            <Field name="text" component="input"></Field>
            <button type="submit">Add</button>
          </form>
          {getTodos().map(todo => (
            <p key={todo.todoId}>{todo.todoId + " " + todo.text}</p>
          ))}
        </>
      )}
    />
  );
};

export { TodoForm };
