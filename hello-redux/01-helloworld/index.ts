// npx tsx 01-helloworld/index.ts

import { Action, legacy_createStore } from "redux";

interface Todo {
  id: number;
  title: string;
  completed: boolean;
}

type State = {
  count: number;
  todos: Todo[];
};

const initialState: State = {
  count: 0,
  todos: [],
};

type CountAction = Action<'INCREMENT_COUNT'|'DECREMENT_COUNT'> & {
  step?: number;
};

type TodoAction = Action<'ADD_TODO'> & {
  todo: Todo;
};

// Pure function
// const nextState = reducer(state, action);
function reducer(state = initialState, action: CountAction | TodoAction): State {
  if (action.type === "INCREMENT_COUNT") {
    return {
      ...state,
      count: state.count + (action.step ?? 1),
    };
  }
  if (action.type === "DECREMENT_COUNT") {
    return {
      ...state,
      count: state.count - (action.step ?? 1),
    };
  }
  if (action.type === "ADD_TODO") {
    return {
      ...state,
      todos: [...state.todos, action.todo],
    };
  }
  return state;
}

const store = legacy_createStore(reducer);

console.log("Initial count:", store.getState().count);
console.log("Initial todos:", store.getState().todos);
store.subscribe(() => {
  console.log("Count after dispatch:", store.getState().count);
  console.log("Todos after dispatch:", store.getState().todos);
});

store.dispatch({ type: "INCREMENT_COUNT" });
store.dispatch({ type: "INCREMENT_COUNT" });
store.dispatch({ type: "INCREMENT_COUNT" });
store.dispatch({ type: "DECREMENT_COUNT" });
store.dispatch({ type: "INCREMENT_COUNT", step: 10 });
store.dispatch({ type: "ADD_TODO", todo: {id: 1, title: 'ABC', completed: false} });