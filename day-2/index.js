// Datatye in JavaSript string, number, boolean, null, undefined
// variable types var, let and const
// Operators    Arihhmetic, Comparison

// Arihtmetic Operators

// Conditional Statements if else, switch

// Increment ++

// used to increase the number by some value

console.log("Increment ++");
var number = 10;

number = 10 + 1;
console.log(number); // 11

number = number + 1;
console.log(number); // 12

number++; // increases the value by 1
console.log(number); // 13

number += 1; // increases the value by users choice
console.log(number); // 14

// Decrement --

// used to reduce the number by some value

console.log("Decrement --");

var numberTwo = 20;

numberTwo = 20 - 1;
console.log(numberTwo); // 19

numberTwo = numberTwo - 1;
console.log(numberTwo); // 18

numberTwo--; // reduces the value by one
console.log(numberTwo); // 17

numberTwo -= 1; // reduces the value by user selected number
console.log(numberTwo); // 16

// Comparison Operator

console.log("*****Comparison Operator*****");
var num1 = 99;
var num2 = 199;
console.log(num1 < num2);

var num1 = 10;
var num2 = 10;

console.log(num1 <= num2);

// Logical Operators

// AND logical Operator

// &&
// It is true only when all conditions are true
// It is false if any one condition becomes false
console.log("*****Logical Operators*****");
var num1 = 10;
var num2 = 15;

var target = 20;
console.log("1. AND Logical Operator && ");
console.log(num1 < target && num2 < target); // both true then true

console.log(num1 < target && num2 > target); // second condition is false so false

// OR Logical Operator

// ||
// It is true is any one condition is ture
// It is false if all conditions are false

console.log("2. OR Logical Operator || ");
var num1 = 10;
var num2 = 40;
var target = 30;

console.log(num1 > target || num2 > target); // false || true => true
console.log(num1 > target || num2 < target); // false || false => false

// Conditional Statements

// if else
// switch

// if else

// if (conditions) {
//      execute if condtion is true
// }
// else if{
// } else {
//      execute if no condition is true
// }

// driving licence example

// conditions :
// 1. user age > 18 eligible for driving licecne
// 2. user age + 18 eligible for learning licecne
// 3. user gae < 18 not eligible for licecnce

console.log("*** Driving Licence Example ***");
var userAge = 22;

if (userAge > 18) {
  console.log("You are eligible for driving licence.");
} else if (userAge == 18) {
  console.log("You are eligible for learning licence.");
} else {
  console.log("You are not eligible for licence.");
}

// Advanced Driving Licence example

console.log("*** Advanced Driving Licence example ***");

// conditions :
// userAge should be in the range of 18 to 80 including 80 then eligible for driving licence
// userAge = 18 eligible for learning licence
// userAge < 18 not eligible for licence

var userAge = 81;

if (userAge > 18 && userAge <= 80) {
  console.log("You are eligible for Driving Licecne.");
} else if (userAge == 18) {
  console.log("You are eligible for Learning Licence.");
} else {
  console.log("You are not eligible for Licence.");
}

// Even or Odd Number
console.log("Even Odd Number");

var number = 18;

if (number % 2 == 0) {
  console.log(`${number} is even`);
} else {
  console.log(`${number} is odd`);
}

// Switch Conditional Statement
console.log("*** Switch Conditional Statements ***");

// switch (key) {
//   case value:
//     console.log("based on condition");
//     break;
//   default:
//     console.log("default console log");
// }

var fruit = "Apple";
switch (fruit) {
  case "Apple":
    console.log(`You have seleceted ${fruit}.`);
    break;
  case "Mango":
    console.log(`You have seleceted ${fruit}.`);
    break;
  case "Strawberry":
    console.log(`You have seleceted ${fruit}.`);
    break;
  default:
    console.log(`kindly select from given fruits`);
    break;
}