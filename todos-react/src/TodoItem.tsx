import type { ReactNode } from 'react';
import TodoSpanValue from './TodoSpanValue';
import type { Todo } from './todo';
import TodoInputValue from './TodoInputValue';

type Props = {
  readonly todo: Todo;
  readonly isEditing?: boolean;
}

function TodoItem({ todo, isEditing = false }: Props): ReactNode {
  return (
    <div className="todosItem" data-todo-id={todo.id}>
      <input type="checkbox" className="todosCompleted" checked={todo.completed} />
      {isEditing ? <TodoInputValue title={todo.title} /> : <TodoSpanValue title={todo.title} />}
      <button className="todosDeleteBtn">-</button>
    </div>
  );
};

export default TodoItem;