// Basic Level

// 1. Write a for loop to print numbers from 1 to 10.

console.log("1. Write a for loop to print numbers from 1 to 10.");
var start = 1;
var end = 10;
var sequence = 1;

for (let i = start; i <= end; i += sequence) {
  console.log(i);
}

// 2. Use a for loop to print all even numbers between 1 and 20.
console.log("2. Use a for loop to print all even numbers between 1 and 20.");

var start = 1;
var end = 20;
var sequence = 1;

for (let i = start; i <= end; i += sequence) {
  if (i % 2 == 0) {
    console.log(i);
  }
}

// 3. Write a loop to calculate the sum of the first 10 natural numbers.

console.log(
  "3. Write a loop to calculate the sum of the first 10 natural numbers."
);

// natural numbers start from 1

var start = 1;
var end = 10;
var sequence = 1;
var sum = 0;

for (let i = start; i <= end; i += sequence) {
  sum = sum + i;
}
console.log(sum);

// 4. Use a for loop to print all numbers divisible by 5 between 1 and 50.
console.log(
  "4. Use a for loop to print all numbers divisible by 5 between 1 and 50."
);

var start = 1;
var end = 50;
var sequence = 1;

for (let i = start; i <= end; i += sequence) {
  if (i % 5 == 0) {
    console.log(i);
  }
}

// 5. Write a loop to calculate the factorial of a given number.

console.log("5. Write a loop to calculate the factorial of a given number.");

var number = 5;
var product = 1;

for (let i = 1; i <= number; i++) {
  product = product * i;
}
console.log(number, "! =", product);

// 6. Use a for loop with a conditional to print all odd numbers between 1 and 20.

console.log(
  "6. Use a for loop with a conditional to print all odd numbers between 1 and 20."
);

var start = 1;
var end = 20;
var sequence = 1;

for (let i = start; i <= end; i++) {
  if (i % 2 != 0) {
    console.log(i);
  }
}

// 7. Write a loop to calculate the sum of all even numbers between 1 and 100.
console.log(
  "7. Write a loop to calculate the sum of all even numbers between 1 and 100."
);

var start = 1;
var end = 100;
var sequence = 1;
var sum = 0;

for (let i = start; i <= end; i += sequence) {
  if (i % 2 == 0) {
    sum += i; // sum = sum + i;
  }
}
console.log(sum);

// 8. Use a loop to check if a given number is prime
console.log("8. Use a loop to check if a given number is prime.");

var number = 17;

// logic => number which is divisible by 1 and the numebr itself
// go till square root as Math.sqrt() give square root of the number in floor value

function PrimeNumber() {
  if (number < 2) {
    return false;
  }

  for (let i = 2; i < Math.sqrt(number); i++) {
    if (number % i == 0) {
      return false;
    }
  }

  return `${number} is a prime number`;
}

console.log(PrimeNumber());

// 9. Write a for loop to reverse the digits of a number (e.g., input: 123, output: 321).

console.log(
  "9. Write a for loop to reverse the digits of a number (e.g., input: 123, output: 321)."
);

var number = 123;
console.log(number % 10);
number = 12;
console.log(number % 10);
number = 1;
console.log(number % 10);

// 10. Create a for loop to find the smallest number in an array.
console.log("10. Create a for loop to find the smallest number in an array.");

var array = [20, 30, 10, 50, 40];
var smallest = array[0]; // first value

for (let i = 0; i < array.length; i++) {
  // console.log(smallest, "smallest", array[i], "array[i]");
  if (array[i] < smallest) {
    smallest = array[i];
  }
}

console.log(smallest);

// Intermediate Level

// 11. Write a for loop to count the number of vowels in a string.
console.log("11. Write a for loop to count the number of vowels in a string.");

var string = "awdiz";
var count = 0;

for (let i = 0; i < string.length; i++) {
  if (
    string[i] == "a" ||
    string[i] == "e" ||
    string[i] == "i" ||
    string[i] == "o" ||
    string[i] == "u"
  ) {
    count++;
    // console.log(string[i], "is a vowel", count, "total number of vowels");
  }
}
console.log("Total number of vowel in string", string, "is", count);

// 12. Use a loop to find the largest number in an array.
console.log("12. Use a loop to find the largest number in an array.");

var array = [66, 22, 99, 44, 88, 11];
var largest = array[0]; // first value

for (let i = 0; i < array.length; i++) {
  // console.log(largest, "largest", array[i], "array[i]");
  if (array[i] > largest) {
    largest = array[i];
  }
}

console.log(largest);

// 13. Write a loop to calculate the sum of numbers in an array.
console.log("13. Write a loop to calculate the sum of numbers in an array.");

var array = [10, 20, 30, 40, 50];
var sum = 0;

for (let i = 0; i < array.length; i++) {
  sum += array[i];
  // console.log(sum);
}

console.log(sum);

// 14. Use a for loop to print all elements of an array in reverse order.
console.log(
  "14. Use a for loop to print all elements of an array in reverse order."
);

var array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

for (let i = 0; i < array.length; i++) {
  console.log(array[array.length - 1 - i]);
}

// 15. Write a loop to generate a multiplication table for a given number.
console.log(
  "15. Write a loop to generate a multiplication table for a given number."
);

var number = 7;

for (let i = 1; i <= 10; i++) {
  console.log(number, "x", i, "=", number * i);
}

// 16. Use a loop and conditionals to print the Fibonacci sequence up to n terms.

console.log(
  "16. Use a loop and conditionals to print the Fibonacci sequence up to n terms."
);

// logic => first number = 0 ; second number = 1; now next number will be the sum of last two numbers

function Fibonacci(n) {
  var a = 0; // first number
  var b = 1; // second number
  // var n = 7; // nth term

  console.log(a);

  if (n > 2) {
    console.log(b);

    for (let i = 2; i < 7; i++) {
      var nextNumber = a + b;
      console.log(nextNumber);

      a = b;
      b = nextNumber;
    }
  }
}

console.log(Fibonacci(7));

// 17. Write a program to check if a given string is a palindrome using loops.
console.log(
  "17. Write a program to check if a given string is a palindrome using loops."
);

var word = "abcdcba";

function Palindrome() {
  for (let i = 0; i < Math.floor(word.length / 2); i++) {
    console.log(word[i], word[word.length - 1 - i]);
    if (word[i] != word[word.length - 1 - i]) {
      return false;
    }
  }
  return true;
}

console.log(Palindrome());

// 18. Use a for loop to find all perfect squares between 1 and 100.
console.log(
  "18. Use a for loop to find all perfect squares between 1 and 100."
);

var start = 1;
var end = 100;
var sequence = 1;

for (let i = start; i < end; i += sequence) {
  if (i * i > end) {
    break;
  }

  console.log(i, "sqaure =", i * i);
}

// 19. Write a loop to find the second-largest number in an array.
console.log("19. Write a loop to find the second-largest number in an array.");

var array = [5, 2, 7, 4, 9, 6];
var newArray = [];
var largest = 0; // first value

for (let i = 0; i < array.length; i++) {
  // console.log(largest,"largest", array[i], "array[i]")
  if (array[i] > largest) {
    largest = array[i];
    newArray.push(largest);
    // console.log(newArray);
  }
}
console.log("second largest : ", newArray[newArray.length - 2]);

// 20. Use a for loop and conditionals to print all numbers divisible by both 3 and 5 between 1 and 100.
console.log(
  "20. Use a for loop and conditionals to print all numbers divisible by both 3 and 5 between 1 and 100."
);
var start = 1;
var end = 100;
var sequence = 1;

for (let i = start; i <= end; i++) {
  if (i % 3 == 0 && i % 5 == 0) {
    console.log(i);
  }
}