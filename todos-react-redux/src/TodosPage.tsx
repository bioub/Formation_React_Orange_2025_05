import { useEffect, type ChangeEvent, type FormEvent, type ReactNode } from "react";
import TodoItem from "./TodoItem";
import type { Todo } from "./todo";
import { fetchTodos } from "./api";
import { useDispatch, useSelector } from "react-redux";
import { todosEditingIdSelector, todosLoadingSelector, todosNewTodoSelector, todosSelector } from "./store/selectors";
import { addTodo, deleteTodo, receiveTodos, requestTodos, setEditingId, setNewTodo, toggleAllCompleted, updateTodo } from "./store/slices";

function TodosPage(): ReactNode {
  const todos = useSelector(todosSelector);
  const isLoading = useSelector(todosLoadingSelector);
  const newTodo = useSelector(todosNewTodoSelector);
  const editingId = useSelector(todosEditingIdSelector);
  const dispatch = useDispatch();

  useEffect(() => {
    if (todos.length > 0) {
      return;
    }
    dispatch(requestTodos())
    fetchTodos().then((data) => {
      dispatch(receiveTodos(data));
    });
  }, [dispatch]);

  useEffect(() => {
    function handleClick(event: MouseEvent) {
      const target = event.target as HTMLElement;

      // TODO: utiliser useRef pour que le code soit plus maintenable
      // si on change le nom de la classe, il faudrait changer le code ici
      // pas avec une ref
      if (!target.classList.contains("todosInputValue")) {
        dispatch(setEditingId(-1));
      }
    }

    window.addEventListener('click', handleClick);
    return () => {
      window.removeEventListener('click', handleClick);
    }
  }, []);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    
    dispatch(addTodo({ id: Date.now(), title: newTodo, completed: false }));
  }

  function handleToggleClick(event: ChangeEvent<HTMLInputElement>) {
    const isChecked = event.currentTarget.checked;
    dispatch(toggleAllCompleted(isChecked));
  }

  function handleTodoDelete(id: number) {
    dispatch(deleteTodo(id));
  }

  function handleTodoEdit(todo: Todo) {
    dispatch(updateTodo(todo));
  }

  return (
    <>
      {isLoading && <div>Loading...</div>}
      <form className="todos-form" onSubmit={handleSubmit}>
        <input type="checkbox" className="todos-toggle-checked" onChange={handleToggleClick} />
        <input type="text" className="todos-new-input" value={newTodo} onChange={(e) => dispatch(setNewTodo(e.target.value))} />
        <button>+</button>
      </form>
      <div className="todos-container">
        {todos.map((todo) => (
          <TodoItem
            key={todo.id}
            todo={todo}
            isEditing={todo.id === editingId}
            onDelete={handleTodoDelete}
            onToggleEdit={(id) => dispatch(setEditingId(id))}
            onEdit={handleTodoEdit}
          />
        ))}
      </div>
    </>
  );
}

export default TodosPage;
