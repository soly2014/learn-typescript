import axios from "axios";
import { Dispatch } from "redux";
import { ActionTypes } from "./types";

export interface TODO {
	id: number;
	completed: boolean;
	title: string;
}

export interface TODOAction {
	type: ActionTypes.fetchTodos;
	data: TODO[];
}

export const Todos = () => {
	return async (dispatch: Dispatch) => {
		const URL = "https://jsonplaceholder.typicode.com/todos";
		const response = await axios.get<TODO[]>(URL);
		dispatch<TODOAction>({
			type: ActionTypes.fetchTodos,
			data: response.data
		});
	};
};
