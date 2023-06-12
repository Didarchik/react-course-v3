import React from 'react'
import { ACTION } from './App';


function Todo({ todo, dispatch}) {
  const removeItem = () => {
    console.log(todo);
    dispatch({type: ACTION.REMOVE, payload: {id: todo.id}})
  }
  
  const crossItem = () => {
    //console.log(todo.id);
    dispatch({type: ACTION.DONE, payload: {id: todo.id}});
  }

  return <div className='single-item'>
    <input type='checkbox' onClick={crossItem}/>
    <p style={{textDecoration: todo.complete ? 'line-through' : 'none', textTransform: 'capitalize'}}>{todo.task}</p>
    <button className='btn remove-btn' onClick={removeItem}>delete</button>
  </div>
}

export default Todo;