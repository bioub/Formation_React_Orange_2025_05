import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { State, Todo } from "./types";

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
  },
});
export const { addTodo } = todosSlice.actions;
export const todosReducer = todosSlice.reducer;
