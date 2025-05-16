import type { Todo } from "../todo";

export type CountState = {
  value: number;
};

export type TodosState = {
  items: Todo[];
  loading: boolean;
};

export type State = {
  count: CountState;
  todos: TodosState;
};
