import React, { useState } from "react";
import AppHeading from "./components/AppHeading/AppHeading";
import AddTodo from "./components/AddTodo/AddTodo";
import TodoList from "./components/TodoList/TodoList";
import "./App.scss";

function App() {
  const [todo, setTodo] = useState("");
  return (
    <div className="App App--flex">
      <div className="App__content App__content--xy-center">
        <AppHeading heading="Todo App" />
        <AddTodo todo={todo} setTodo={setTodo} />
        <TodoList todo={todo} />
      </div>
    </div>
  );
}

export default App;
