import React, { useState } from "react";
import "./AddTodo.scss";

const AddTodo = ({ todo, setTodo }) => {
  const [input, setInput] = useState(todo);
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!input) return;
    setTodo(input);
    setInput("");
  };

  return (
    <form className="form form--flex" onSubmit={handleSubmit}>
      <input
        className="form__textField"
        type="text"
        placeholder="Add new todo"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button className="form__cta">
        <span className="lnr lnr-arrow-right form__cta-arrow"></span>
      </button>
    </form>
  );
};

export default AddTodo;
