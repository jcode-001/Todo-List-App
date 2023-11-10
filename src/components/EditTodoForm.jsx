import React, { useState } from "react";

export const EditTodoForm = ({ editTodo, task }) => {
  const [value, setValue] = useState(task.task);

  const handleSubmit = (e) => {
    e.preventDefault();
    editTodo(value, task.id);

    setValue("");
  };

  return (
    <form className="TodoForm" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Update Task:"
        value={value}
        className="todo-input"
        onChange={(e) => setValue(e.target.value)} // when the user start typing we save each character as a string in the 'value' variable
      />
      <button type="submit" className="todo-btn">
        Update Task
      </button>
    </form>
  );
};
