import { useEffect, useState, type ChangeEvent, type FormEvent, type ReactNode } from "react";
import TodoItem from "./TodoItem";
import type { Todo } from "./todo";
import { fetchTodos } from "./api";
import { useDispatch, useSelector } from "react-redux";
import { todosLoadingSelector, todosSelector } from "./store/selectors";
import { addTodo, receiveTodos, requestTodos } from "./store/slices";

function TodosPage(): ReactNode {
  // const [todos, setTodos] = useImmer<Todo[]>([]);
  const [newTodo, setNewTodo] = useState("HIJ");
  const [editingId, setEditingId] = useState(-1);

  const todos = useSelector(todosSelector);
  const isLoading = useSelector(todosLoadingSelector);
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
        setEditingId(-1);
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
    
    setNewTodo("");
  }

  function handleToggleClick(event: ChangeEvent<HTMLInputElement>) {
    const isChecked = event.currentTarget.checked;
    // setTodos(
    //   todos.map((todo) => {
    //     if (todo.completed !== isChecked) {
    //       return { ...todo, completed: isChecked };
    //     }
    //     return todo;
    //   }),
    // );
    // setTodos((draft) => {
    //   for (const todo of draft) {
    //     todo.completed = isChecked;
    //   }
    // });
  }

  function handleTodoDelete(id: number) {
    // setTodos(todos.filter((todo) => todo.id !== id));
  }

  function handleTodoEdit(todo: Todo) {
    // setTodos((draft) => {
    //   const index = draft.findIndex((t) => t.id === todo.id);
    //   if (index !== -1) {
    //     draft[index] = todo;
    //   }
    // });
  }

  return (
    <>
      {isLoading && <div>Loading...</div>}
      <form className="todos-form" onSubmit={handleSubmit}>
        <input type="checkbox" className="todos-toggle-checked" onChange={handleToggleClick} />
        <input type="text" className="todos-new-input" value={newTodo} onChange={(e) => setNewTodo(e.target.value)} />
        <button>+</button>
      </form>
      <div className="todos-container">
        {todos.map((todo) => (
          <TodoItem
            key={todo.id}
            todo={todo}
            isEditing={todo.id === editingId}
            onDelete={handleTodoDelete}
            onToggleEdit={(id) => setEditingId(id)}
            onEdit={handleTodoEdit}
          />
        ))}
      </div>
    </>
  );
}

export default TodosPage;
