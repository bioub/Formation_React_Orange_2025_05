import { Action } from "redux";
import { ADD_TODO, DECREMENT_COUNT, INCREMENT_COUNT } from "./constants";

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

export type CountAction = Action<typeof INCREMENT_COUNT|typeof DECREMENT_COUNT> & {
  payload?: number;
};


export type TodoAction = Action<typeof ADD_TODO> & {
  payload: Todo;
};
