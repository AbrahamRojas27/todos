import React from "react";
import './TodoItem.css'
 
function TodoItem(props){
    return(
        <li className="todo-item">
            <span 
            className={`todo-item-check ${props.complete && 'todo-item-check-active'}`}
            onClick={props.onComplete}
            > 
            </span>

            <p className={`todo-item-text ${props.complete && 'todo-item-text-complete'}`}>{props.text}</p>

            <span 
            className='todo-item-delete'
            onClick={props.onDelete}
            > 
            </span>
        </li>
    )
}

export {TodoItem}