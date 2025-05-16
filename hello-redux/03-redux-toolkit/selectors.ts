import { State, Todo } from "./types";

export function countSelector(state: State): number {
  return state.count.value;
}

export function todosSelector(state: State): Todo[] {
  return state.todos.items;
}