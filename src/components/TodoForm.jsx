import React, { useState } from "react";

export const TodoForm = ({ addTodo }) => {
  const [value, setValue] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    addTodo(value);

    setValue("");
  };

  return (
    <form className="TodoForm" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="What is the task for today?"
        value={value}
        className="todo-input"
        onChange={(e) => setValue(e.target.value)} // when the user start typing we save each character as a string in the 'value' variable
      />
      <button type="submit" className="todo-btn">
        Add Task
      </button>
    </form>
  );
};
