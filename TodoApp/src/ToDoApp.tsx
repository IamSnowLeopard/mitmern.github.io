import { useState } from "react";
import TodoInput from "./components/ToDoInput";
import TodoList from "./components/ToDoList";
import "./ToDoApp.css";

interface Todo {
  text: string;
  completed: boolean;
}

export default function TodoApp() {
  const [todos, setTodos] = useState<Todo[]>([]);

  const addTodo = (text: string) => {
    setTodos([...todos, { text, completed: false }]);
  };

  const completeTodo = (index: number) => {
    const newTodos = todos.map((todo, i) =>
      i === index ? { ...todo, completed: !todo.completed } : todo
    );
    setTodos(newTodos);
  };

  const deleteTodo = (index: number) => {
    const newTodos = todos.filter((_, i) => i !== index);
    setTodos(newTodos);
  };

  return (
    <>
      <h1 className="todo-title">Todo App</h1>
      <div className="todo-container">
        <div className="todo-input">
          <TodoInput onAdd={addTodo} />
        </div>
        <div className="todo-list">
          <TodoList
            items={todos}
            onComplete={completeTodo}
            onDelete={deleteTodo}
          />
        </div>
      </div>
    </>
  );
}
