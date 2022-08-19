import './ToDoInput.css';
import { useState } from 'react';



export default function ToDo({ handler }) {
    const [todo, setTodo] = useState('');

    function handleChange(e) {
        setTodo(e.target.value);
    }

    function saveTodo() {
        if (todo.length > 3) {
            handler({
                message: todo,
                isDone: false
            });
            setTodo('');
        }

    }
    return (
        <div id='Box'>
            <input type="text" placeholder='Enter a To-Do...' id='todo' onChange={handleChange} value={todo} />
            <button id='saveBtn' onClick={saveTodo}>Save</button>
        </div>
    );
}