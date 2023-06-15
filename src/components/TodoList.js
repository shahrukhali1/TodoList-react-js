import React from "react";

const TodoList = ({ todos, deleteTodo, editTodo }) => {
  return (
    <ul>
      {todos.map((todo, index) => (
        <li key={index}>
          <span>{todo}</span>
          <button onClick={() => deleteTodo(index)}>Delete</button>
          <button onClick={() => editTodo(index)}>Edit</button>
        </li>
      ))}
    </ul>
  );
};

export default TodoList;
