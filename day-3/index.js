// Datatye in JavaSript string, number, boolean, null, undefined
// variable types var, let and const
// Operators    Arihhmetic, Comparison

// Arihtmetic Operators

// Conditional Statements if else, switch

// Loops - For Loop (Forward)

// Loop are used to repeat a block of code multiple times
// mainly used are two types of loops for loop and while loop

// syntax of for loop

// for(start, end, sequence){
// multiple lines of code
// }

// Q.1 Print numbers from 1 to 5

// var start = 1;
// var end = 5;
// var sequence = 1;
console.log("Q.1 Print numbers from 1 to 5");
for (let i = 1; i <= 5; i++) {
  console.log(i);
}

// Note : start and end is used to determine the number of itrations

// itteration is number of times the loop is executed

// As for above case

// start = 1 ; end = 5 ; sequence = 1;

// loop will start from 1 as first itteration

// 1 itteration
// i = 1
// i <= 5 => true hence loop executed
// now as per sequence the value of i is now i++ => 1 + 1 = 2
// Now i = 2 at the end of 1st itteration

// 2 itteration
// i = 2
// i <= 5 => true hence loop executed
// i++ => 2 + 1 = 3
// Now i = 3 at the end of 2nd itteration

// 3 itteration
// i = 3
// i <= 5 => true hence loop executed
// i++ => 3 + 1 = 4
// Now i = 4 at the end of 3rd itteration

// 4 itteration
// i = 3
// i <= 5 => true hence loop executed
// i++ => 4 + 1 = 5
// Now i = 5 at the end of 4th itteration

// 5 itteration
// i = 5
// i <= 5 => true hence loop executed
// i++ => 5 + 1 = 6
// Now i = 6 at the end of 5th itteration

//  6th itteration
// i = 6
// i <= 5 => false hence loop stops executed and the runtime goes at the end of for loop on the next line

// As a result the loop is executed 5 time and on 6th itteration the condition becomes false

// Q.2 print numbers from 1 to 10  who are even
console.log("Q.2 print numbers from 1 to 10  who are even");
for (let i = 1; i <= 10; i++) {
  if (i % 2 == 0) {
    console.log(i);
  }
}

// Q.3 print numbers from 1 to 20 by 2

console.log("Q.3 print numbers from 1 to 20 by 2");
for (let i = 1; i <= 20; i += 2) {
  console.log(i);
}