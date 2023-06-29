class Person {
    constructor(name, favoriteColor) {
        this.name = name;
        this.favoriteColor = favoriteColor;

    }
    greet() {
        console.log(
            "Heloo? My name is " + 
            this.name + ". My fav color is " + 
            this.favoriteColor + "."
        );
    }
}


export default Person;