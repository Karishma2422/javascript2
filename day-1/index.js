// Datatye in JavaSript string, number, boolean, null, undefined
// variable types var, let and const

// String
// Number
// Boolean
// Null
// Undefined

// String

// everything thing written in '' "" `` is considered as string  -> 'karishma' "karishma" `karishma@123`

// number has no syntax it can be written as it is  -> 123 123.123 both are considered as number

// boolean has two value true and false it is written as it is -> true false

// we can print anything in terminal using console.log() function or method
// Note : It is only a developer tool and dosent prints anything on the page

console.log(typeof "karishma", "karishma");
console.log(typeof 123, 123);
console.log(typeof true, true);


// Variables

// Variables are storage for data

// it has 3 types var let const

var myName; // declaring a variable
myName = "karishma"; // assigning a vairable

var myName = "karishma"; // declaration + assigning
myName = "shinde karishma"; // re assigning

let myNewName = "ansh";
myNewName = "ansh shinde";

// let myNewName = "Kirto";  u cannot re declare let variable

const number = "1";
// number = "2"; // u cannot re assign value to const
// const number = "3"; // u cannot re declare const

// scope

{
  // this is a block scope
  // let and const declared within can only be accessed within this block scope
  // var is global scoped so it can be accessed anywhere
}

// Hoisting

// the concept of hoisting is that when we use a variable then later on declare it the JS takes to declaration to the top so it dosent shows the error as "variableName is not defined"

// Note : It only works with var
//   It dosent works with let and const

// difference between var let const

// Type         re-assign       re-declare             scope              hoisting
// var              true            true            global                  true
// let              true            false           block-scoped            false
// const            false           false           block-scoped            false

// Operators

// comparison operator

// = -> used for assigning and is not a comparison operator
// == -> compares only data
// === -> compares data with data type