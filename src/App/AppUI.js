import React from "react";
import {TodoCounter} from '../TodoCounter';
import { TodoSearch } from '../TodoSearch';
import { TodoItem } from '../TodoItem';
import { TodoList } from '../TodoList';
import { CreateTodoButton } from '../CreateTodoButton';
import {TodoContext} from '../TodoContext';
import {Modal} from '../Modal';
import {TodoForm} from '../TodoForm'



function AppUI(){
  const {error, 
        loading, 
        searchedTodos, 
        completeTodo, 
        deleteTodo, 
        openModal, 
        setOpenModal
      } = React.useContext(TodoContext) 

  return(
    <React.Fragment>

        <TodoCounter />
  
      <TodoSearch />
  
     <TodoList>
    {error && <p>Desesperate hubo un error</p>}
    {loading && <p>Estamos cargando, no desesperes</p>}
    {(!loading && !searchedTodos.length) && <p>Crea tu primer TODOs</p> }

    {searchedTodos.map(todo => (
      <TodoItem 
      key={todo.text} 
      text={todo.text} 
      complete={todo.complete}
      onComplete = {() => completeTodo(todo.text)}
      onDelete = {() => deleteTodo(todo.text)}
     />
    ))}
   
    <CreateTodoButton 
      setOpenModal={setOpenModal}
      openModal = {openModal}
    />
    </TodoList>

    {!!openModal && (
      <Modal>
      <TodoForm />
    </Modal>
    )}
  
      </React.Fragment>
  )}
    


export {AppUI}