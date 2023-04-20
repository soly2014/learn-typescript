import axios from "axios";

const Endpoint = "https://jsonplaceholder.typicode.com/todos/1";

axios.get(Endpoint).then(response => {
	const Todo = response.data;

	const Id = Todo.Id;
	const Title = Todo.Title;
	const Finished = Todo.finished;

	console.log(` id is ${Id} and title is ${Title} and ${Finished}`);
});

// the above request has some errors like [ Id instead of id] so it will return undefined

// typescript can handle this error and help you catch error during development before it appears like so

interface Todo {
	id: Number;
	title: String;
	completed: Boolean;
}

axios.get(Endpoint).then(response => {
	// const Todo: Todo = response.data;// first way to attach interface
	const Todo: Todo = response.data as Todo; // second way to attach interface

	const Id = Todo.Id; // error
	const Title = Todo.Title; // error
	const Finished = Todo.finished; // error

	console.log(` id is ${Id} and title is ${Title} and ${Finished}`);
});

// we can deep dive in typescript
axios.get(Endpoint).then(response => {
	const Todo: Todo = response.data as Todo;
	const Id = Todo.id;
	const Title = Todo.title;
	const Finished = Todo.completed;

	printConsole(Id, Finished, Title); // error
});

const printConsole = (Id: Number, Title: String, Finished: Boolean) => {
	console.log(` id is ${Id} and title is ${Title} and ${Finished}`);
};
