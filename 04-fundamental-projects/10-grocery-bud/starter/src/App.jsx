import { useReducer, useState } from "react";
import Todo from "./Todo";

export const ACTION = {
  ADD: 'add',
  REMOVE: 'remove',
  DONE: 'done'
}



const App = () => {

  
  const [task, setTask] = useState('');
  const handle = (e) => {
    e.preventDefault();
    dispatch({type: ACTION.ADD, payload: {task: task}});
    setTask('');
  }

  const reducer = (todos, action) => {
    switch (action.type){
      case ACTION.ADD:
        return [...todos, newTodo(action.payload.task)];
      case ACTION.REMOVE:
        return todos.filter(todo => {
          return todo.id !== action.payload.id;
        });
      case ACTION.DONE:
        const newArr = todos.map(todo => {
          if (todo.id === action.payload.id){
            return {...todo, complete: !todo.complete}
          }
          return todo;
        })
        return newArr;
    }
  }

  const newTodo = (task) => {
    const newTask = {
      id: Date.now(), 
      task: task, 
      complete: false
    }
    return newTask;
    
  }
  const defaultList = JSON.parse(localStorage.getItem('list') || '[]');
  const [todos, dispatch] = useReducer(reducer, defaultList );
  
  localStorage.setItem('list', JSON.stringify(todos));

  return <section className="section-center">
    <form onSubmit={handle}>
      <h4>Grocery Bud</h4>
      <div className="form-control">
        <input type="text" className="form-input" value={task} onChange={e => setTask(e.target.value)}/>
        <button className="btn">add item</button>
      </div>
    </form>
    <div className="items">
      {todos ? todos.map(todo => 
        <Todo key={todo.id} todo={todo} dispatch={dispatch} />
      ) :
        <h1>Hell</h1>
      }
    </div>
  </section>
};

export default App;