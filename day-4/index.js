// Datatye in JavaSript string, number, boolean, null, undefined
// variable types var, let and const
// Operators    Arihhmetic, Comparison

// Arihtmetic Operators

// Conditional Statements if else, switch

// Loops - For Loop (Forward)

// Loops - For Loop (Reverse)

// In order to run for loops in reverse manner we will have to set the sequence such that it decreases the valye of i after each itteration

// Q.1 Print numbers from 10 to 1

console.log("Q.1 Print numbers from 10 to 1 ");

for (let i = 10; i > 0; i--) {
  console.log(i);
}

// same logic as used in for loop

// but at each itteration the value of i is decreasing by 1

// Q.2 Print even numbers from 10 to 1
console.log("Q.2 Print even numbers from 10 to 1");

for (let i = 10; i > 0; i--) {
  if (i % 2 != 1) {
    console.log(i);
  }
}

// Q.3 Print numbers from 30 to 1 by 3
console.log("Q.3 Print numbers from 30 to 1 by 3");

for (let i = 30; i > 0; i -= 3) {
  console.log(i);
}

// Q.4 Count the even numbers from 10 to 1
console.log("Q.4 Count the even numbers from 10 to 1");

var count = 0;
for (let i = 10; i > 0; i--) {
  if (i % 2 == 0) {
    count++;
  }
}
console.log(count, "numbers are even from 10 to 1");