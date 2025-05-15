import './App.css';
import {
  useState,
  type ChangeEvent,
  type FormEvent,
  type ReactNode,
} from 'react';
import TodoItem from './TodoItem';
import type { Todo } from './todo';

function App(): ReactNode {
  const [todos, setTodos] = useState<Todo[]>([
    { id: 123, title: 'ABC', completed: false },
    { id: 456, title: 'DEF', completed: true },
    { id: 789, title: 'XYZ', completed: false },
  ]);
  const [newTodo, setNewTodo] = useState('HIJ');

  const editingId = 789;

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setTodos([...todos, { id: Date.now(), title: newTodo, completed: false }]);
    setNewTodo('');
  }

  function handleToggleClick(event: ChangeEvent<HTMLInputElement>) {
    const isChecked = event.currentTarget.checked;
    setTodos(
      todos.map((todo) => {
        if (todo.completed !== isChecked) {
          return { ...todo, completed: isChecked };
        }
        return todo;
      }),
    );
  }

  return (
    <>
      <form className="todos-form" onSubmit={handleSubmit}>
        <input
          type="checkbox"
          className="todos-toggle-checked"
          onChange={handleToggleClick}
        />
        <input
          type="text"
          className="todos-new-input"
          value={newTodo}
          onChange={(e) => setNewTodo(e.target.value)}
        />
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
