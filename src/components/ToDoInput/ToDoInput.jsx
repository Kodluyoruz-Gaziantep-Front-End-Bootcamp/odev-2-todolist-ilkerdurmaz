import './ToDoInput.css';


export default function ToDo(){
    return (
        <div id='Box'>
                <input type="text" placeholder='Enter a To-Do...' id='todo'/>
            <button id='saveBtn'>Save</button>
        </div>
    );
}