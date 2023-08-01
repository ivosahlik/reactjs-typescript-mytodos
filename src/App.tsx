import React, {useState} from 'react';
import './App.css';
import { TodoTable } from './components/TodoTable';
import { NewTodoForm } from './components/NewTodoForm';

export const App = () => {

  const [showAddTodoForm, setShowAddTodoForm] = useState(false);

  const [todos, setTodos] = useState([
        {rowNumber: 1, rowDescription: 'Java 17', rowAssigned: 'User One'},
        {rowNumber: 2, rowDescription: 'React JS', rowAssigned: 'User Two'},
        {rowNumber: 3, rowDescription: 'Spring boot 3.x', rowAssigned: 'User One'},
        {rowNumber: 4, rowDescription: 'Azure', rowAssigned: 'User One'},
        {rowNumber: 5, rowDescription: 'Aws', rowAssigned: 'User One'},
        {rowNumber: 6, rowDescription: 'Google Cloud', rowAssigned: 'User One'}
  ]
  )

  const addTodo = (description: string,
                   assigned: string) => {
    let rowNumber: number;
    rowNumber = todos.length > 0 ? todos[todos.length - 1].rowNumber + 1 : 1;
    const newTodo = {
        rowNumber: rowNumber,
        rowDescription: description,
        rowAssigned: assigned
      };
      setTodos(todos => [...todos, newTodo])
  }

  const deleteTodo = (deleteTodoRowNumber: number) => {
    let filtered = todos.filter(function (value) {
      return value.rowNumber !== deleteTodoRowNumber;
    });
    setTodos(filtered);
  }

  return (
    <div className='mt-5 container'>
      <div className="card">
        <div className="card-header">
          My Todo's
        </div>
        <div className="card-body">
          <TodoTable todos={todos} deleteTodo={deleteTodo}/>
          <button onClick={() => setShowAddTodoForm(!showAddTodoForm)} className='btn btn-primary'>
            {showAddTodoForm ? 'Close New Todo' : 'New Todo'}
          </button>
        {showAddTodoForm && 
          <NewTodoForm addTodo={addTodo}/>
        }
        </div>
      </div>
    </div>
  );
}