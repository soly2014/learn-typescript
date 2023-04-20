// Typescript added anew advantages to js
function test(x: number, y: number, z: string, w: boolean) {
	console.log(x, y, z, w);
}

let numberOne: number;
let favoriteActivities: string[]; // array of strings type
favoriteActivities = ["football"];

let favoriteYears: number[] = [2012, 2015, 2020]; // array of numbers type

//The second way uses a generic array type, Array<elemType>:
let list: Array<number> = [1, 2, 3];

// Enum #
// A helpful addition to the standard set of data types from JavaScript is the enum. As in languages like C#,
// an enum is a way of giving more friendly names to sets of numeric values.
enum Color {
	Red,
	Green,
	Blue,
}
let c: Color = Color.Green;

// By default, enums begin numbering their members starting at 0.
// You can change this by manually setting the value of one of its members.
// For example, we can start the previous example at 1 instead of 0:
enum Size {
	S = 1,
	M,
	L,
}
let s: Size = Size.M;

const person: {
	name: string;
	age: number;
	hobbies: string[];
	role: [number, string]; // if you have a scenario where you need exactly x amount of values in an array and
	// you know the type of each value. you may consider a Tuple instead of array
} = {
	name: "Soli",
	age: 45,
	hobbies: ["coding", "activities"],
	role: [2, "author"],
};

console.log(person.name);

// how to create a type from scratch
// Type Aliases #
// Type aliases create a new name for a type. Type aliases are sometimes similar to interfaces, but can name primitives, unions, tuples, and any other types that you�d otherwise have to write by hand.
//  If you write object-oriented code � use interfaces, if you write functional code � use type aliases.

type Name = string;
type NameResolver = () => string;
type NameOrResolver = Name | NameResolver;
function getName(n: NameOrResolver): Name {
	if (typeof n === "string") {
		return n;
	} else {
		return n();
	}
}

export { getName };
