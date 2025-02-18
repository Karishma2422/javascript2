// Datatye in JavaSript string, number, boolean, null, undefined
// variable types var, let and const
// Operators    Arihhmetic, Comparison

// Arihtmetic Operators

// Conditional Statements if else, switch

// Loops - For Loop (Forward)

// Loops - For Loop (Reverse)

// Loops - while loop (Forward) (Reverse)

// Loops - break and continue

// Undefined datatype

// Functions - 1. Named Function (Traditional Function), 2. Anonymous Function (Arrow Function)

// Object -> used to store multiple

// Object -> accessing object using . and [] syntax

// Object -> defining a function within object and executing it using key name object.keyName();

// Object -> Destructuring Object

// Object -> spread operator (...)

// Object -> this keyword used to access data wihtin that object

// Template litterals to use javascript within string syntax ` HI! ${name},`

// Array methods - push() pop() unshift() shift()

var array = [1, 2, 3, 4, 5, 6, 7];
console.log(array, "array");

console.log("---push---");
array.push(8); // Adds element at the end you can also add multiple items seperated by comma array.push(8,9,10);
console.log(array, "array.push(8)");

console.log("---pop---");

array.pop(); // Deletes element at the last position one at a time
console.log(array, "array.pop()");

console.log("array", array);

array.unshift(0); // adds a element at the first position i.e. 0 index position

console.log("array :", array);

array.shift(); // removes an element from the 0 index position
console.log("array", array);

// slice method => syntax array.slice(start,end)
// creates a shallow copy of array without affecting the original array
var characters = ["a", "b", "c", "d", "e"];
console.log("characters : ", characters);
const sliced = characters.slice(0, 2);
console.log(characters, "characters");
console.log(sliced, "sliced");

// Note : the end value is exclusive means if 0,2 it will take index values as 0 , 1 and not 2

// splice method => syntax array.splice(start,count,"replace")
// it removes the elements from array or replaces them
var characters = ["a", "b", "c", "d", "e"];
const spliced = characters.splice(0, 2, "1", "2");
console.log("characters : ", characters);

console.log("spliced :", spliced);

// map => used to itterate every element within the array and perform task and retrun an updated array

var data = [1, 2, 3, 4, 5, 6, 7];

var newData = data.map((ele) => ele * 2);

console.log(newData);

// forEach => it performs action on every element in an array it does not updates or changes the array nor it returns an array

var array = [1, 2, 3, 4, 5, 6, 7];

array.forEach((ele) => {
  if (ele % 2 == 0) {
    console.log(`${ele} is an even number`);
  } else {
    console.log(`${ele} is an odd number`);
  }
});

// filter => it returns a filtered array means it checks all the array elements and return only those elements who pass the test in a new array

var array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const evenNum = array.filter((ele) => ele % 2 == 0);
const oddNum = array.filter((ele) => ele % 2 != 0);

console.log(array, "array");
console.log(evenNum, "evenNum");
console.log(oddNum, "oddNum");

// reduce => it itterates over every element in an array performing a given function on them and accumilating them into a single value

var array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let intialValue = 0;
const sum = array.reduce(
  (accumulator, currentValue) => accumulator + currentValue,
  intialValue
);

console.log(sum);

// max value using reduce
var array = [10, 25, 5, 40, 30];

const max = array.reduce((acc, cv) => (cv > acc ? cv : acc), array[0]);

console.log(max);

// find => used to find the value of the first element that passes the goven condition

var array = [1, 2, 3];

const greaterThan1 = array.find((ele) => ele > 1);

console.log(greaterThan1, "greaterThan1");

// findIndex => used to find the index of the first element that passes the given condition

var array = [1, 2, 3, 4, 5];

const greaterThan2Index = array.findIndex((ele) => ele > 2);

console.log(greaterThan2Index, "greaterThan2Index");
console.log(greaterThan2Index, array[greaterThan2Index]);

// reverse an array

var array = [1, 2, 3, 4, 5, 6, 7];

// const reversedArray = array.reverse();

// console.log(reversedArray);

const ReverseArray = (array) => {
  let newArray = [];

  for (let i = array.length - 1; i >= 0; i--) {
    console.log(i, ":", array[i]);
    newArray[array.length - 1 - i] = array[i];
  }

  return newArray;
};

console.log(ReverseArray(array));