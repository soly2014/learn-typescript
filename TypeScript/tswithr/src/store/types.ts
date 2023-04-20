// By default enums will assign values 0,1,2,3 to the list so fetchTodos now will be 0
// in old ActionTypes definitions has been fetchTodos = 'FETCH_TODOS' and that not necessary now
// because we have a unique value for Enum's

export enum ActionTypes {
	fetchTodos
}

//  you can use this trick to annotate reducers with action types
interface FetchTodoAction {}
interface DeleteTodoAction {}
export type action = FetchTodoAction | DeleteTodoAction;
