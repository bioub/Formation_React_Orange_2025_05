import './App.css';
import type { ReactNode } from 'react';
import TodoItem from './TodoItem';

function App(): ReactNode {
  

  return (
    <>
      <form className="todos-form">
        <input type="checkbox" className="todos-toggle-checked" />
        <input type="text" className="todos-new-input" />
        <button>+</button>
      </form>
      <div className="todos-container">
        <TodoItem />
        <TodoItem />
        <TodoItem />
      </div>
    </>
  );
}

export default App;
