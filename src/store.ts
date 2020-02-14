import { createStore } from "redux";
import { reducer, emptyState } from "./features/todo/todo-schema";

const store = createStore(reducer, emptyState)

export const {dispatch, getState} = store;