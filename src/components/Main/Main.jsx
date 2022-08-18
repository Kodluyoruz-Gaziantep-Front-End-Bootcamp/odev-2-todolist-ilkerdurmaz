import "./Main.css";
import ToDoInput from '../ToDoInput/ToDoInput';

export default function Main() {
  return (
    <div className="main">
      <div id="Header">
        <h2>To-Do List</h2>
      </div>
      <hr />
      <ToDoInput />
      <hr />
      <div id="toDoList">
        <p>todo1</p>
        <p>todo1</p>
        <p>todo1</p>
      </div>
    </div>
  );
}