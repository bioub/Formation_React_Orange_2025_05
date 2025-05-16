// npx tsx 02-best-practices/index.ts


import { countSelector, todosSelector } from "./selectors";
import { configureStore } from "@reduxjs/toolkit";
import { addTodo, countReducer, decrementCount, incrementCount, todosReducer } from "./slices";

const store = configureStore({
  reducer: {
    count: countReducer,
    todos: todosReducer,
  }
});

console.log("Initial count:", countSelector(store.getState()));
console.log("Initial todos:", todosSelector(store.getState()));
store.subscribe(() => {
  console.log("Count after dispatch:", countSelector(store.getState()));
  console.log("Todos after dispatch:", todosSelector(store.getState()));
});

store.dispatch(incrementCount());
store.dispatch(incrementCount());
store.dispatch(incrementCount());
store.dispatch(decrementCount());
store.dispatch(incrementCount(10));
store.dispatch(addTodo({id: 1, title: 'ABC', completed: false}));