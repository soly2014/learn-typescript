interface Vehicle {
	brand: string;
	year: Date;
	power: number;
	summery(): string; // we can add function that return string
}

const OldCivic: Vehicle = {
	brand: "Civic",
	year: new Date(),
	power: 2000,
	summery(): string {
		return `thi is ${this.brand}`;
	},
};

OldCivic.brand = "false";

const myame = { name: "Civic" };

export { myame };
