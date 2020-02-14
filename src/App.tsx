import React from "react";
import "./App.css";
import { TodoForm } from "./features/todo/todo-form";

const App = () => {
  return (
    <div className="App">
      <header className="App-header">
        <TodoForm />
      </header>
    </div>
  );
};

export default App;
