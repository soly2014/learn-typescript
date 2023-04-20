/**
 *  in apps like React and Vue TypeScript already installed in Dev dependencies
 *  if you want to use it in your project ts files you need to install it globaly first
 *  run tsc filename.js anf if you wanna watch and update live run rsc -w filename.ts
 *
 *  run tsc --init to generate tsconfig.json file
 *  look at the generated tsconfig.json file for more details
 *
 *  sourcemaps is different than transpiled dist files
 *
 *  Now after you have generated tsconfig.json you can run tsc or tsc -w  only not tsc filename.ts
 *
 *  Statically typed language  like c++, Rust, C you can't change var type after declare it with a type
 *  Dynamically typed language  like Javacript, PHP, Python you  change var type after declare it with a type
 *
 *  if you don't give a type to a variable the typescript compiler will infer [ guess ] it
 *
 */

/**
 *  Big Not About Rebase
 *
 *  git pull origin develop --rebase => will rebase from remote
 *
 *  git rebase develop => will rebase from local [ always don't required ]
 *
 *  when rebase the git rebases commit by commit so if you found conflict you should solve and git add .
 *
 *  the terminal may open vim end it with :wq
 *
 *   and then type git rebase --continue and so on till rebase finished
 *
 *  then git push --force
 *
 *  if someone work with u on the same branch you should merge instead of rebase and abort rebase git rebase --abort
 *
 */
console.log(Math.round(Math.random() * 300));

let myName = "soliman"; // if you don't give a type to a variable the typescript compiler will infer [ guess ] it

// in Javascript if num1 is a string the compiler run without errors
const sum = (num1: number, num2: number): number => {
	return num1 + num2;
};

console.log(typeof myName);
// typeof before variable will return the var type

console.log(typeof sum(1, 3));
// typeof before function will return the function return type

// type array
const array: (string | number)[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, "ko"];

let MultiDimensionalArray: (string | number | string[])[] = [
	1,
	3,
	"A",
	"B",
	["D", "E"],
];

// spread operator
const sumWithSpreadOperator = (...nums: number[]): number => {
	let result = 0;
	for (let i = 0; i < nums.length; i++) {
		result += nums[i];
	}
	//  nums.forEach((num:number) => result += num)
	return result;
};

// Important when using spread operator don't add args as an array like sumWithSpreadOperator([1,2,3,4])
console.log(sumWithSpreadOperator(1, 2, 3, 4, 5, 6));

// type extend can be done with & operator
type NameType = { name: string };
type MyType = NameType & { age: number };

// Note the functionWothObjectParam will take an object as parameter
type ObjectParam = { name: string; age: number };
const functionWothObjectParam = (args: ObjectParam) => null;
functionWothObjectParam({ name: "s", age: 2 });

export default NameType;
