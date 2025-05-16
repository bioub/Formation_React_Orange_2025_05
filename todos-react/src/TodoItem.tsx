import type { ChangeEvent, KeyboardEvent, ReactNode } from "react";
import type { Todo } from "./todo";

type Props = {
  readonly todo: Todo;
  readonly isEditing?: boolean;
  readonly onDelete?: (id: number) => void;
  readonly onToggleEdit?: (id: number) => void;
  readonly onEdit?: (todo: Todo) => void;
};

function TodoItem({
  todo,
  isEditing = false,
  onDelete = () => {},
  onToggleEdit = () => {},
  onEdit = () => {},
}: Props): ReactNode {
  function handleChange(event: ChangeEvent<HTMLInputElement>) {
    const value = event.target.type === "checkbox" ? event.target.checked : event.target.value;
    onEdit({
      ...todo,
      [event.target.name]: value,
    });
  }

  function handleKeyUp(event: KeyboardEvent<HTMLInputElement>) {
    if (event.key === "Enter") {
      onToggleEdit(-1);
    }
  }

  return (
    <div className="todosItem" data-todo-id={todo.id}>
      <input type="checkbox" name="completed" className="todosCompleted" checked={todo.completed} onChange={handleChange}  />
      {isEditing ? (
        <input type="text" name="title" className="todosInputValue" value={todo.title} onChange={handleChange} onKeyUp={handleKeyUp}/>
      ) : (
        <span className="todosSpanValue" onDoubleClick={() => onToggleEdit(todo.id)}>
          {todo.title}
        </span>
      )}
      <button className="todosDeleteBtn" onClick={() => onDelete(todo.id)}>
        -
      </button>
    </div>
  );
}

export default TodoItem;
