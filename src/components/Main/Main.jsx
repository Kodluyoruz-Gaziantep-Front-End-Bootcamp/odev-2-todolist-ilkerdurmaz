import "./Main.css";
import ToDoInput from '../ToDoInput/ToDoInput';
import ToDo from '../ToDo/ToDo';
import { useState, useEffect } from "react";


export default function Main() {
  const [todos, setTodos] = useState(localStorage.getItem("todos") ? JSON.parse(localStorage.getItem("todos")) : []);

  function updateTodos(value) {
    setTodos([...todos, value]);
  }

  function deleteTodo(index) {
    setTodos(todos.filter((_, i) => i !== index));
  }

  function checkMark(index) {
    setTodos(
      todos.map((todo, i) => {
        if (i === index) {
          return {
            ...todo,
            isDone: !todo.isDone
          };
        }
        return todo;
      })
    );
  }

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  return (
    <div className="main">
      <div id="Header">
        <h2>To-Do List</h2>
      </div>
      <hr />
      <ToDoInput handler={updateTodos} />
      <hr />
      <div id="toDoList">
        {todos.length > 0 ? todos.map((todo, index) => {
          return <ToDo message={todo.message} key={index} index={index} isDone={todo.isDone} deleteT={deleteTodo} checkMark={checkMark} />;
        }) : <h3>No todos</h3>}

      </div>
    </div>
  );
}