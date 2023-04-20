// - when we make function private we don't adding any layer of security we only adding restriction for other developers
//   because the may add some overrides to it .
// - if you wanna override function in child class create the function with the same name in parent class.
// - if the child class doesn't have constructor the parent constructor will run and you should give it parent params.
// - if the child has constructor you should add super(parenParams) inside child constructor

class Vehicle {
	public color: string | undefined;

	public drive(): void {
		console.log(`color is  ${this.color}`);
	}
	protected honk(): void {
		console.log(`color is  ${this.color}`);
	}
}

class Toyota extends Vehicle {
	public drive(): void {
		// here you will override the parent method
		console.log(`color is  ${this.color}`);
	}
}
const veh = new Vehicle();

// you can replace this
class Vehicles {
	public color: string;
	constructor(color: string) {
		this.color = color;
	}
}
// with this
class Veh {
	constructor(public color: string) {}
}

export { Vehicle };
