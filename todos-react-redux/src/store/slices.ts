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
    editingId: -1,
    newTodo: "",
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
    },
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
      state.newTodo = "";
    },
    requestTodos: (state) => {
      state.loading = true;
    },
    receiveTodos: (state, action: PayloadAction<Todo[]>) => {
      state.loading = false;
      state.items = action.payload;
    },
    deleteTodo: (state, action: PayloadAction<number>) => {
      state.items = state.items.filter((todo) => todo.id !== action.payload);
    },
    toggleAllCompleted: (state, action: PayloadAction<boolean>) => {
      for (const todo of state.items) {
        todo.completed = action.payload;
      }
    },
    updateTodo: (state, action: PayloadAction<Todo>) => {
      const index = state.items.findIndex((todo) => todo.id === action.payload.id);
      if (index !== -1) {
        state.items[index] = action.payload;
      }
    },
    setEditingId: (state, action: PayloadAction<number>) => {
      state.editingId = action.payload;
    },
    setNewTodo: (state, action: PayloadAction<string>) => {
      state.newTodo = action.payload;
    },
  },
});
export const {
  addTodo,
  requestTodos,
  receiveTodos,
  deleteTodo,
  toggleAllCompleted,
  updateTodo,
  setEditingId,
  setNewTodo,
} = todosSlice.actions;
export const todosReducer = todosSlice.reducer;
