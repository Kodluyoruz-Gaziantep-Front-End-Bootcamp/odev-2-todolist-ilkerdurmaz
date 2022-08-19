import "./ToDo.css";
import { MdOutlineRemoveCircleOutline, MdOutlineCheckCircleOutline } from "react-icons/md";

export default function ToDo({ message, index, deleteT, checkMark, isDone }) {

    return (
        <div id="toDoContainer" data-key={index}>
            <div id="toDo">
                <p>{message}</p>
                <span>
                    <button id="delete" onClick={() => deleteT(index)}><MdOutlineRemoveCircleOutline size={25} className="react-icons" /></button>

                    <button id="check" onClick={() => checkMark(index)} className={isDone ? 'icon-color' : ''}> <MdOutlineCheckCircleOutline size={45} className="react-icons" /> </button>
                </span>
            </div>
        </div>
    );
}