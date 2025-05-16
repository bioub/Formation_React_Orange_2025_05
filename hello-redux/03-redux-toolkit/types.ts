export interface Todo {
  id: number;
  title: string;
  completed: boolean;
}

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
