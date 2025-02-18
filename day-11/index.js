// ternary operator  () ? if_true : if_false

console.log("ternary operator");
// Voting eligibility

// logic if age > 18 eligible else not eligible

let age = 20;

const eligibility =
  age >= 18 ? "You are eligible for voting" : "You are not eligible for voting";

console.log(eligibility);
console.log("----------");

console.log("multiple condition ternary operator");
// multiple conditions just like if  else if  else

let marks = 85;

const grade = marks >= 90 ? "A" : marks >= 80 ? "B" : marks >= 70 ? "C" : "F";

console.log(`grade : ${grade}`);
console.log("----------");

// do while loop => it executes atleast once evne though if the condition is false
console.log("do-while loop");
let num = 3;

do {
  console.log(`num : ${num}`);
  num++;
} while (num > 5);

// even though num = 3 is less than 5 he do while loop is executed once

console.log("----------");

console.log("for in loop in object");

// for in is used to itterate all the keys in an object

let data = { name: "Monkey D. Luffy", age: 19, anime: "One Piece" };

for (key in data) {
  console.log(`${key} : ${data[key]}`);
}

console.log("----------");

// for in used in array to itterate the indices in an array

console.log("for in used in array");
var array = [1, 2, 3, 4, 5, 6, 7];

for (let index in array) {
  console.log(`index : ${index} : value : ${array[index]}`);
}

console.log("----------");

// for of is used to acces the values in object or array

console.log("for of used in array");

var obj = {
  name: "Awdiz",
  age: 10,
};

// Note : for of cannot be used for objects it shows object is not itterable

var array = [1, 2, 3, 4, 5];

for (let values of array) {
  console.log(`values : ${values}`);
}
console.log("----------");

console.log("Higher Order Function");
// higher order function

// a higher order function is a function where we pass a function as an argument and it returns a function

function HOC(a, b, operation) {
  return operation(a, b);
}

const add = (x, y) => x + y;
const mul = (x, y) => x * y;

console.log(HOC(2, 3, mul));
console.log("----------");

// Imediately Invvoked Function Expressions
// IIEF = >  a function which is called annd executed immediately

// (function (){})();  syntax

(function () {
  console.log("Imediately Invoked Function Expression (IIEF)");
})();

console.log("----------");

console.log("this keyword");
// this keyword

console.log("this keyword in anonymous function");

var obj = {
  name: "Awdiz",
  age: 10,
  location: "Vashi",
  greet: function () {
    console.log(
      `Hello! Welcome to ${this.name} institute located in ${this.location}`
    );
  },
};

obj.greet();

console.log("----------");

console.log("this keyword in arrow function");

var obj = {
  name: "Awdiz",
  age: 10,
  location: "Vashi",
  greet: () => {
    console.log(
      `Hello! Welcome to ${this.name} institute located in ${this.location}`
    );
  },
};

obj.greet();

console.log("----------");


console.log("Class Contructor")
// class in js
// class provides a cleaner method to construct object
// object constructor is used to create multiple objects having smae structure

// function Person(name, age) {
//   this.name = name;
//   this.age = age;

//   console.log(`Hello! ${this.name} you are ${age} years old!`);
// }

// const person1 = new Person("Alice", 19);

class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  greet() {
    console.log(`Hello! ${this.name} you are  ${this.age} years old !`);
  }
}

const person2 = new Person("Kirito",15);
console.log(person2.greet())

const person3 = new Person("Asuna",19);
console.log(person3.greet())