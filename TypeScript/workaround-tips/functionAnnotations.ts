// variable type annotations : (i: number) => void
const getUsers: (i: number) => void = i => {
	console.log(i);
};
// function type annotations : (i: number) => void
const setUser = (i: number): void => {
	console.log(i);
};

const ErrorNever = (i: number): never => {
	throw new Error();
};

// destructuring with annotations
const destructor = ({ date, age }: { date: Date; age: number }): void => {
	console.log(date, age);
};

const man = {
	name: "sol",
	age: 25,
	address: {
		lng: 1.254,
		lat: 4.256
	},
	setAge(age: number): void {
		this.age = age;
	}
};

const { age }: { age: number } = man;
const {
	address: { lng, lat }
}: { address: { lng: number; lat: number } } = man;
