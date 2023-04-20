// Generics is like function params

class HoldAnyThing<T> {
	data: T;
}

const genNumber = new HoldAnyThing<number>();
genNumber.data = 4544;

const genString = new HoldAnyThing<string>();
genString.data = "4544";
