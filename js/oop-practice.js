// STEP 1

// class Cat {
//     constructor(breed, size) {
//         this.breed = breed;
//         this.size = size;
//     }
// };

// const Dog = class {
//     constructor(breed, size) {
//         this.breed = breed;
//         this.size = size;
//     }
// };


// STEP 2

// class Cat {
//     constructor(breed, size) {
//         this.breed = breed;
//         this.size = size;
//     }
// };

// const Dog = class {
//     constructor(breed, size) {
//         this.breed = breed;
//         this.size = size;
//     }
// };

// const cat2 = new Cat("Derpy Orange", "Medium");

// const dog2 = new Dog("French Bulldog", "Small");


// STEP 3

// class Animal {
//     constructor() {
//         console.log("The Animal has been created")
//     }
// };

// const animal2 = new Animal();


// STEP 4

// class Animal {
//     constructor(message) {
//         console.log(message);
//     }
// };

// const animal2 = new Animal("Here is a custom message!");


// STEP 5

// class Animal {
//     constructor(length, type, height, color, breed) {
//         this.length = length;
//         this.type = type;
//         this.height = height;
//         this.color = color;
//         this.breed = breed;
//     }
// };

// const animal2 = new Animal(60, "Cat", 25, "Tabby", "Weird");

// console.log(animal2.length);

// console.log(animal2.type);

// console.log(animal2.height);

// console.log(animal2.color);

// console.log(animal2.breed);


// STEP 6

// class Animal {
//     constructor(length, type, height, color, breed) {
//         this.length = length;
//         this.type = type;
//         this.height = height;
//         this.color = color;
//         this.breed = breed;
//     }
// };

// const animal2 = new Animal(60, "Cat", "Short", 25, "Tabby");

// for (let property in animal2) {
//     console.log(property + ": " + animal2[property]);
// };


// STEP 7

// class Animal {
//     constructor(length, type, height, color, breed) {
//         this.length = length;
//         this.type = type;
//         this.height = height;
//         this.color = color;
//         this.breed = breed;
//     }

//     speak() {
//         if (this.type === "Dog") {
//             return `The ${this.color} dog is barking!`;
//         } else if (this.type === "Cat") {
//             return `The ${this.color} cat is meowing!`;
//         } else {
//             return "Animal type: Unknown"
//         }
//     }
// };

// const animal2 = new Animal(100, "Dog", 60, "Golden", "Retriever");

// const animal3 = new Animal(60, "Cat", 30, "Orange", "Weird");

// console.log(animal2.speak());

// console.log(animal3.speak());


// STEP 8

// class Animal {
//     constructor(length, type, height, color, breed) {
//         let _length = length;
//         let _type = type;
//         let _height = height;
//         let _color = color;
//         let _breed = breed;

//         let checkType = function() {
//             if (_type === "Dog") {
//                 return "dog";
//             } else {
//                 return "cat";
//             }
//         };

//         this.speak = function() {
//             let animalType = checkType();
//             return `The ${animalType} has made a noise!`;
//         };
//     }
// };

// const animal2 = new Animal(100,"Dog", 60, "Golden", "Retriever");

// const animal3 = new Animal(60, "Cat", 30, "Orange", "Weird");

// console.log(animal2.speak());

// console.log(animal3.speak());


// STEP 9

// String.prototype.findWords = function(word) {
//     const regex = new RegExp(`\\b${word}\\b`, "gi");

//     const matches = this.match(regex);

//     if (matches === null) {
//         console.log(`The word "${word}" was not found.`);
//         return 0;
//     }

//     const count = matches.length;
//     console.log(`The word "${word}" was found ${count} time(s).`);
//     return count;
// };

// const paragraph = "The quick brown fox jumps over the lazy dog. The dog still sleeps and the fox is stealthy.";

// paragraph.findWords("the");
// paragraph.findWords("and");
// paragraph.findWords("is");
// paragraph.findWords("fox");
// paragraph.findWords("dog");