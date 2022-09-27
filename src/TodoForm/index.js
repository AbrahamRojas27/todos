import React from 'react';
import { TodoContext } from '../TodoContext';
import './TodoForm.css'

function TodoForm (){
    const [newTodoValue, setNewTodoValue] = React.useState('')

    const {
        addTodo,
        setOpenModal
    } = React.useContext(TodoContext)

    const onChange = (event) =>{
        setNewTodoValue(event.target.value);
    }

    const onCancel = () => {
        setOpenModal(false)
    }

    const onSubmit = (event) =>{
        event.preventDefault();
        addTodo(newTodoValue)
        setOpenModal(false)
    }

    return(
        <form className='form' onSubmit={onSubmit}>
            <label>Añade un nuevo TODOs</label>
            <textarea 
            className='text-area-todo'
            value = {newTodoValue}
            onChange = {onChange}
            placeholder='Introduce tu nuevo TODOs'
            />
            <div className='button-container'>
                <button
                className='cancel-button'
                type='button'
                onClick={onCancel}
                >Cancelar
                </button>

                <button
                className='add-button'
                type='submit'
                >Añadir</button>
            </div>
        </form>
    )
}

export {TodoForm}