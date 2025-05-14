import './App.css';
import type { ReactNode } from 'react';
import TodoItem from './TodoItem';

function App(): ReactNode {
  const todos = [
    { id: 123, title: 'ABC', completed: false },
    { id: 456, title: 'DEF', completed: true },
    { id: 789, title: 'XYZ', completed: false },
  ];
  const editingId = 789;

  return (
    <>
      <form className="todos-form">
        <input type="checkbox" className="todos-toggle-checked" />
        <input type="text" className="todos-new-input" />
        <button>+</button>
      </form>
      <div className="todos-container">
        {todos.map((todo) => (
          <TodoItem
            key={todo.id}
            todo={todo}
            isEditing={todo.id === editingId}
          />
        ))}
      </div>
    </>
  );
}

export default App;
