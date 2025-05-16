import type { Todo } from "../todo";

export type CountState = {
  value: number;
};

export type TodosState = {
  items: Todo[];
  loading: boolean;
  editingId: number;
  newTodo: string;
};

export type State = {
  count: CountState;
  todos: TodosState;
};
