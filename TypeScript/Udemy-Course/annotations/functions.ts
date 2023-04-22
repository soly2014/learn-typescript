const add = (a: number, b: number) => {
	return a + b;
};

const subtract = (a: number, b: number): number => {
	return a - b;
};

function divide(a: number, b: number): number {
	return a / b;
}

const multiply = function (a: number, b: number): number {
	return a * b;
};

const logger = (message: string): void => {
	console.log(message);
};

/**
 *
 * A function returning 'never' cannot have a reachable end point
 *
 * there is no chance to reach the end of the function
 *
 */
const throwErrorw = (message: string): never => {
	throw new Error(message);
};

// here there is a chance to reach the end of the function
const throwError = (message: string): void => {
	if (!message) {
		throw new Error(message);
	}
};

const todaysWeather: {
	date: Date;
	weather: string;
} = {
	date: new Date(),
	weather: "sunny",
};

const logWeather = ({ date, weather }: { date: Date; weather: string }) => {
	console.log(date);
	console.log(weather);
};

logWeather(todaysWeather);
