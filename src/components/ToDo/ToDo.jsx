import "./ToDo.css";
import { MdDeleteForever, MdOutlineCheckCircleOutline } from "react-icons/md";

export default function ToDo() {
    return (
        <div id="toDoContainer">
            <div id="toDo">
                <p>This is a example to-do task for this project.</p>
                <span>
                    <button id="delete"><MdDeleteForever size={45} className="react-icons" /></button>
                    <button id="check"><MdOutlineCheckCircleOutline size={45} className="react-icons" /></button>
                </span>
            </div>
        </div>
    );
}