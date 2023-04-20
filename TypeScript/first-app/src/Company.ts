// if this error happened [ can't find a declaration file for module faker ] this means
// this lib doesn't contain TS so search in DefinitelyTyped project you will find someone who wrote it
// in most cases under name @types/{moduleName} = yarn add @types/faker
// now you will find a new file added usually named index.d.ts with all TS definition types
import faker from "faker";

export class Company {
	name: string;
	location: {
		lng: number;
		lat: number;
	};
	constructor() {
		this.name = faker.company.companyName();
		this.location = {
			lng: parseFloat(faker.address.longitude()),
			lat: parseFloat(faker.address.latitude())
		};
	}
}
