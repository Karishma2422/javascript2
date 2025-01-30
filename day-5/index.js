// Datatye in JavaSript string, number, boolean, null, undefined
// variable types var, let and const
// Operators    Arihhmetic, Comparison

// Arihtmetic Operators

// Conditional Statements if else, switch

// Loops - For Loop (Forward)

// Loops - For Loop (Reverse)

// Loops - while loop (Forward) (Reverse)

// Loops - break and continue

// while loop is similar to for loop but it gives you freedom to control the sequence anywhere during the itteration

// syntax is

var start = 1; // initialization
var end = 10;

while (start <= end) {
  // condition
  console.log(start);

  start++; // sequence
}

// Q. print number from 1 to 10 with the gap of 2
console.log("Q. print number from 1 to 10 with the gap of 2");

var i = 1;
var end = 10;

while (i <= end) {
  console.log(i);

  i += 2;
}

// Q. print all even numbers between 1 and 20
console.log("Q. print all even numbers between 1 and 20");

var i = 1;
var end = 20;

while (i <= end) {
  if (i % 2 == 0) {
    // even condition
    console.log(i);
  }

  i++; // sequence
}

// Q. print numbers from 1 to 30 if it is odd increment by 2 if it is even increment by 1

console.log(
  "Q. print numbers from 1 to 30 if it is odd increment by 2 if it is even increment by 1"
);

var i = 1;
var end = 30;

while (i <= end) {
  if (i % 2 == 0) {
    console.log("before : ", i);
    i++;
    console.log("after : ", i);
  } else {
    console.log("before : ", i);
    i += 2;
    console.log("after : ", i);
  }
  console.log("----");
}

// Q. write a while loop to print numbers from 20 to 1
console.log("Q. write a while loop to print numbers from 20 to 1");

var i = 20;
var end = 0;

while (i > end) {
  console.log(i);

  i--;
}

// Break
console.log("concept of break");

var i = 1;
var end = 10;

while (i <= end) {
  console.log(i);

  if (i == 7) {
    console.log(i, "siuuuuuuuuu BREAK");
    break;
  }

  i++;
}

// continue
console.log("concept of continue");

var i = 1;
var end = 10;

while (i <= end) {
  if (i == 5) {
    i++;
    continue;
  }

  console.log(i);

  i++;
}
// noticed how the everything from 1 to 10 is printed except 5