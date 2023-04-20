import { TODO, TODOAction } from "./actions";
import { ActionTypes } from "./types";

const todosInitialState: TODO[] = [];
const Todos = (state = todosInitialState, action: TODOAction) => {
	switch (action.type) {
		case ActionTypes.fetchTodos:
			return state;
		default:
			return state;
	}
};

export default Todos;
