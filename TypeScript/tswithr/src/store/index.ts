import { combineReducers } from "redux";
import TodosReducer from "./reducers";
import { TODO } from "./actions";

export interface initialState {
	todos: TODO[];
}

export const reducer = combineReducers<initialState>({ todos: TodosReducer });
