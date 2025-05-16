import type { Todo } from "../todo";
import type { State } from "./types";

export function countSelector(state: State): number {
  return state.count.value;
}

export function todosSelector(state: State): Todo[] {
  return state.todos.items;
}

export function todosLoadingSelector(state: State): boolean {
  return state.todos.loading;
}

export function todosEditingIdSelector(state: State): number {
  return state.todos.editingId;
}

export function todosNewTodoSelector(state: State): string {
  return state.todos.newTodo;
}