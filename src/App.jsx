import React from 'react';

import './App.css';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';

function App()
{
    return(
        <div className="todo-app">
            <TodoList></TodoList>
        </div>
    )
}

export default App;