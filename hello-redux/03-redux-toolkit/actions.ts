
import { createAction } from "@reduxjs/toolkit";
import { Todo } from "./types";

export const incrementCount = createAction<number|undefined>('@count/incrementCount');
// incrementCount(1); // { type: '@count/incrementCount', payload: 1 }
// incrementCount.type; // '@count/incrementCount'

export const decrementCount = createAction<number|undefined>('@count/decrementCount');

export const addTodo = createAction<Todo>('@todos/addTodo');
