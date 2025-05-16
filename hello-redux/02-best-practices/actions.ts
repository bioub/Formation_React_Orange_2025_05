import { ADD_TODO, DECREMENT_COUNT, INCREMENT_COUNT } from "./constants";
import { CountAction, Todo, TodoAction } from "./types";

export function incrementCount(payload = 1): CountAction {
  return {
    type: INCREMENT_COUNT,
    payload
  };
}

export function decrementCount(payload = 1): CountAction {
  return {
    type: DECREMENT_COUNT,
    payload
  };
}

export function addTodo(payload: Todo): TodoAction {
  return {
    type: ADD_TODO,
    payload
  };
}