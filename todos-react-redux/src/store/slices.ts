import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type { State } from "./types";
import type { Todo } from "../todo";

const initialState: State = {
  count: {
    value: 0,
  },
  todos: {
    items: [],
    loading: false,
  },
};

const countSlice = createSlice({
  name: "count",
  initialState: initialState.count,
  reducers: {
    incrementCount: (state, action: PayloadAction<number | undefined>) => {
      state.value += action.payload ?? 1;
    },
    decrementCount: (state, action: PayloadAction<number | undefined>) => { 
      state.value -= action.payload ?? 1;
    }
  },
});

export const { incrementCount, decrementCount } = countSlice.actions;
export const countReducer = countSlice.reducer;

const todosSlice = createSlice({
  name: "todos",
  initialState: initialState.todos,
  reducers: {
    addTodo: (state, action: PayloadAction<Todo>) => {
      state.items.push(action.payload);
    },
    requestTodos: (state) => {
      state.loading = true;
    },
    receiveTodos: (state, action: PayloadAction<Todo[]>) => {
      state.loading = false;
      state.items = action.payload;
    },
  },
});
export const { addTodo, requestTodos, receiveTodos } = todosSlice.actions;
export const todosReducer = todosSlice.reducer;
