const apple: number = 5;
const isHere: boolean = false;
const cost: string = "cheap";
const nothing: null = null;
const noOne: undefined = undefined;

// built in objects
const dateOfBirth: Date = new Date(); // annotation Date should be capital

// array
const hobbies: string[] = ["football", "reading"];
const num: number[] = [2, 4];
const truth: boolean[] = [false, true];

// class
class Car {}
const car: Car = new Car(); // type annotation here isn't Class

// object literal
const user: { name: string; age: number } = {
	// look we separated the annotation by semicolon
	name: "soly",
	age: 87,
};

// variable function type annotations : (i: number) => void
const getUser: (i: number) => void = (i) => {
	console.log(i);
};

const jsonp = '{"id":5,"age":25}';
// here you don't types so typescript will implicit git it any annotations
const parsed = JSON.parse(jsonp);
// that's bad cuz if you write parsed.anyValue will not give an error
// so you may give it annotations like so
const parsedWith: { id: number; age: number } = JSON.parse(jsonp);

// if declaration is separate than initialization
let x: boolean;
x = false;

// you wanna give it a default value [false] but if value it will be a number
// bad code example
let array: number[] = [-10, -1, 12];
let numAboveZero: boolean | number;
for (let i = 0; i < array.length; i++) {
	if (i > 0) {
		numAboveZero = array[i];
	}
}

// tuple represent  known data
type Drink = [string, boolean, number]; // not array
const xc: Drink = ["cheesecake", true, 4];
