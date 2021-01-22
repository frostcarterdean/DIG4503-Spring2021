class Person {
	constructor(name, favoriteColor) {
		this.name = name;
		this.favoriteColor = favoriteColor;
	}
	speak() {
		console.log(this.name + "'s favorite color is " + this.favoriteColor + ".");
	}
}

export default Person;
