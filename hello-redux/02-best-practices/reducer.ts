import { combineReducers } from "redux";
import { ADD_TODO, DECREMENT_COUNT, INCREMENT_COUNT } from "./constants";
import { CountAction, CountState, State, TodoAction, TodosState } from "./types";

const initialState: State = {
  count: {
    value: 0,
  },
  todos: {
    items: [],
    loading: false,
  },
};

// Flux standard action
// convention sur les clés de l'action
// type string
// payload: any

// Pure function
// const nextState = reducer(state, action);
// export function reducer(state = initialState, action: CountAction | TodoAction): State {
//   if (action.type === INCREMENT_COUNT) {
//     return {
//       ...state,
//       count: {
//         ...state.count,
//         value: state.count.value + (action.payload ?? 1),
//       },
//     };
//   }
//   if (action.type === DECREMENT_COUNT) {
//     return {
//       ...state,
//       count: {
//         ...state.count,
//         value: state.count.value - (action.payload ?? 1),
//       },
//     };
//   }
//   if (action.type === ADD_TODO) {
//     return {
//       ...state,
//       todos: {
//         ...state.todos,
//         items: [...state.todos.items, action.payload],
//       },
//     };
//   }
//   return state;
// }

export function countReducer(
  state = initialState.count,
  action: CountAction
): CountState {
  switch (action.type) {
    case INCREMENT_COUNT:
      return {
        ...state,
        value: state.value + (action.payload ?? 1),
      };
    case DECREMENT_COUNT:
      return {
        ...state,
        value: state.value - (action.payload ?? 1),
      };
    default:
      return state;
  }
}

export function todosReducer(
  state = initialState.todos,
  action: TodoAction
): TodosState {
  switch (action.type) {
    case ADD_TODO:
      return {
        ...state,
        items: [...state.items, action.payload],
      };
    default:
      return state;
  }
}

export const reducer = combineReducers({
  count: countReducer,
  todos: todosReducer,
});
