import React from "react";
import TodosList from "./TodosList";
import AddTodoForm from "./AddTodoForm";

function ToodoApp() {
  return (
    <div>
      <h1>TodoApp</h1>
      <TodosList />
      <AddTodoForm />
    </div>
  );
}

export default ToodoApp;
