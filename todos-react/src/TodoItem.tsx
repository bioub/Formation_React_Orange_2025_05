import type { ReactNode } from 'react';
import TodoSpanValue from './TodoSpanValue';

function TodoItem(): ReactNode {
  return (
    <div className="todosItem" data-todo-id="123abc">
      <input type="checkbox" className="todosCompleted" checked={true} />
      <TodoSpanValue />
      <button className="todosDeleteBtn">-</button>
    </div>
  );
};

export default TodoItem;