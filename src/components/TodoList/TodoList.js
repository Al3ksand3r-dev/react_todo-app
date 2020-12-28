import React, { useState, useEffect } from "react";

const TodoList = ({ todo }) => {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    setTodos((todos) => [...todos, todo]);
  }, [todo]);
  return (
    <div>
      {todos.length > 0 && (
        <ul className="todo">
          {todos.map((todo, index) => (
            <li key={index}>{todo}</li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default TodoList;
