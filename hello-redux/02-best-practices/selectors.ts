import { State } from "./types";

export function countSelector(state: State): number {
  return state.count.value;
}

export function todosSelector(state: State) {
  return state.todos.items;
}