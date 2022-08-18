import "./Main.css";
import ToDoInput from '../ToDoInput/ToDoInput';
import ToDo from '../ToDo/ToDo';

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
        <ToDo />
        <ToDo />
        <ToDo />
      </div>
    </div>
  );
}