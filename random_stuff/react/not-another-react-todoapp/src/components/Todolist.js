import React from "react";

// components
import Todo from "./Todo";

export default function Todolist(props) {
  return props.todos.map((todo) => {
    return <Todo key={todo._id} todo={todo} />;
  });
}
