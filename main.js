class Pet {
    constructor(species) {
        this.species = species
    }

    describe() {
        console.log(`This pet is a ${this.species}.`)
    }
}

class Dog extends Pet {
    constructor(owner, breed, age) {
        super('dog');
        this.owner = owner;
        this.breed = breed;
        this.age = age;
    }
    describe() {
        console.log(`${this.owner} loves his ${this.breed}.`);
    }
    bark() {
        console.log('bark bark');
    } 
}

class Cat extends Pet {
    constructor(owner, breed, age) {
        super('cat');
        this.owner = owner;
        this.breed = breed;
        this.age = age;
    }
    describe() {
        console.log(`This cat is a ${this.breed} and it is ${this.age} years old.`);
    }
    purrr() {
        console.log('purrr');
    }
}

class App {
    static main() {
        const myPet = new Pet('dog');
        const myDog = new Dog('Parish', 'Shi Tzu', '20');
        const myCat = new Cat('Parish', 'Calico', '16');
        myPet.describe();
        myDog.describe();
        myDog.bark();
        myCat.describe();
        myCat.purrr();
    }
}

App.main();