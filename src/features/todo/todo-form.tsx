import { Form, Field } from "react-final-form";
import React, { useReducer, useState } from "react";
import { reducer, emptyState, actionCreators, entities, selectors } from "./todo-schema";


const TodoForm = () => {
  const [todosVisible, setTodosVisible] = useState(false)
  const [state, dispatch] = useReducer(reducer, emptyState);
  const { add } = actionCreators;
  const { todo } = entities;

  const addtodo = (values: any) => {
    dispatch(add(todo, values));
    console.log(state);
    console.log(getTodos())
  };

  type Todo = {
    todoId: string;
  }

  const getTodos = () => {
    return selectors.getResources(state, {entity: todo}) as Record<string, Todo>;
  }

  const showTodos = () => {
    setTodosVisible(true);
  }

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
          <button onSubmit={showTodos} type="submit">
            Show
          </button>
          {todosVisible && <div>{getTodos()}</div>}
        </>
      )}
    />
  );
};

export { TodoForm };
