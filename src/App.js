import React, { useState } from "react";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";

function App() {
  const [todos, setTodos] = useState([]);
  const [editIndex, setEditIndex] = useState(null);

  const addTodo = (text) => {
    if (editIndex !== null) {
      const updatedTodos = [...todos];
      updatedTodos[editIndex] = text;
      setTodos(updatedTodos);
      setEditIndex(null);
    } else {
      setTodos([...todos, text]);
    }
  };

  const deleteTodo = (index) => {
    const newTodos = todos.filter((_, i) => i !== index);
    setTodos(newTodos);
  };

  const editTodo = (index) => {
    setEditIndex(index);
  };

  return (
    <div className="App">
      <h1>Todo List</h1>
      <TodoForm
        addTodo={addTodo}
        editTodo={editIndex !== null ? todos[editIndex] : null}
      />
      <TodoList todos={todos} deleteTodo={deleteTodo} editTodo={editTodo} />
    </div>
  );
}

export default App;
