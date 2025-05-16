import { State } from "./types";
import { createReducer } from "@reduxjs/toolkit";
import { addTodo, decrementCount, incrementCount } from "./actions";

const initialState: State = {
  count: {
    value: 0,
  },
  todos: {
    items: [],
    loading: false,
  },
};


export const countReducer = createReducer(initialState.count, (builder) => {
  builder
    .addCase(incrementCount, (state, action) => {
      // embarque immer en interne
      state.value += action.payload ?? 1;
    })
    .addCase(decrementCount, (state, action) => {
      state.value -= action.payload ?? 1;
    });
  });

export const todosReducer = createReducer(initialState.todos, (builder) => {
  builder
    .addCase(addTodo, (state, action) => {
      state.items.push(action.payload);
    });
});
