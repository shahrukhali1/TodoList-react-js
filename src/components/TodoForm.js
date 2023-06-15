import React, { useState, useEffect } from "react";

const TodoForm = ({ addTodo, editTodo }) => {
  const [value, setValue] = useState("");

  useEffect(() => {
    if (editTodo) {
      setValue(editTodo);
    }
  }, [editTodo]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (value.trim()) {
      addTodo(value);
      setValue("");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Add a todo..."
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      <button type="submit">{editTodo ? "Update" : "Add"}</button>
    </form>
  );
};

export default TodoForm;
