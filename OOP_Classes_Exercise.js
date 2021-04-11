// Part One

class Vehicle {
	constructor(make, model, year) {
		this.make = make;
		this.model = model;
		this.year = year;
	}
	honk() {
		return 'Beep.';
	}
	toString() {
		return `This vehicle is a ${this.make} ${this.model} from ${this.year}.`;
	}
}

// Part Two

class Car extends Vehicle {
	constructor(make, model, year) {
		super(make, model, year);
		this.numWheels = 4;
	}
}

// Part Three

class Motorcycle extends Vehicle {
	constructor(make, model, year) {
		super(make, model, year);
		this.numWheels = 2;
	}
	revEngine() {
		return 'VROOM!!!';
	}
}

// Part Four

class Garage {
	constructor(capacity) {
		this.vehicles = [];
		this.capacity = capacity;
	}
	add(vehicle) {
		if (this.vehicles.length < this.capacity) {
			if (vehicle instanceof Vehicle) {
				this.vehicles.push(vehicle);
				return 'Vehicle added!';
			}
			return 'Only vehicles are allowed in here!';
		}
		return "Sorry, we're full.";
	}
}
