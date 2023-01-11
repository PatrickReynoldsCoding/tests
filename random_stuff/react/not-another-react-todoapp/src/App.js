import React, { useRef, useState } from "react";

//components
import Todolist from "./components/Todolist";

function App() {
  const currentTodoRef = useRef(null);
  const todos = [];
  let todoIdGenerator = 0;

  const handleClick = () => {
    const message = currentTodoRef.current.value;
    const newTodo = { message: message, complete: false, _id: todoIdGenerator };
    todoIdGenerator += 1;
    todos.push(newTodo);
    currentTodoRef.current.value = null;
    //this doesnt work because the app is static. you need to re-render the page each time the todos are added, but this also wipes the todos variable. A DB or extenal JSON file is needed.
  };

  return (
    <div>
      <Todolist todos={todos} />
      <input type="text" ref={currentTodoRef} placeholder="enter todo here" />
      <button onClick={handleClick}>add Todo</button>
    </div>
  );
}

export default App;
