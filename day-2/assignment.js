// If-Else Questions

// 1. Write a program to check if a given number is even or odd.

// logic => if number/2 gives remainder as 0 then number is even else odd

console.log("Q.1");
var number = 21;

if (number % 2 == 0) {
  console.log(number, "is even number.");
} else {
  console.log(number, "is an odd number.");
}

// 2. Write a program to check if a person is eligible to vote based on their age.

// logic => if 18 or 18+ eligible else not

console.log("Q.2");
var age = 18;

if (age >= 18) {
  console.log("You are", age, "years old and eligible for voting.");
} else {
  console.log("You are", age, "years old and not eligible for voting.");
}

// 3. Write a program to find the largest of three numbers.

// logic => if num1 > num2 && num1> num3 then it is largest same for num2> num 1 && num2> num3 then it is largest else num3 is largest

console.log("Q.3");

var num1 = 10;
var num2 = 40;
var num3 = 30;

if (num1 > num2 && num1 > num3) {
  console.log(num1, "is the largest of three numbers.");
} else if (num2 > num1 && num2 > num3) {
  console.log(num2, "is the largest of three numbers.");
} else {
  console.log(num3, "is the Largest of three numbers.");
}

// 4. Write a program to determine if a given year is a leap year or not.

// logic => leap year means once is four years , year / 4 will give remainder 0 then leap year

console.log("Q.4");

var year = 2024;

if (year % 4 == 0) {
  console.log(year, "is a leap year.");
} else {
  console.log(year, "is not a leap year.");
}

// 5. Write a program to check if a character is a vowel or consonant.

// logic => if character is anything from a, e , i , o , u then vowel else consonant.

console.log("Q.5");

var character = "u";
if (
  character == "a" ||
  character == "e" ||
  character == "i" ||
  character == "o" ||
  character == "u"
) {
  console.log(character, "is a vowel.");
} else {
  console.log(character, "is a consonant.");
}

// 6. Write a program to classify a number as positive, negative, or zero.
// logic => if number < 0 then negative , if number = zero then zero , if number> 0 then positive

console.log("Q.6");
var aura = -100000;
if (aura < 0) {
  console.log(aura, "is a negative number.");
} else if (aura == 0) {
  console.log(aura, "is zero");
} else {
  console.log(aura, "is a positive number.");
}

// 7. Write a program to determine whether a student passed or failed based on their score (pass mark: 40).

// logic => if marks >= 40 student passed else failed

console.log("Q.7");

var marks = 45;

if (marks >= 40) {
  console.log("student is passed.");
} else {
  console.log("Student is failed.");
}

// 8. Write a program to calculate the grade of a student based on the following conditions:

console.log("Q.8");

// Score >= 90: Grade A

// Score >= 80: Grade B

// Score >= 70: Grade C

// Score < 70: Grade F

var grade = 85;

if (grade >= 90) {
  console.log(grade, "Grade A");
} else if (grade >= 80) {
  console.log(grade, "Grade B");
} else if (grade >= 70) {
  console.log(grade, "Grade C");
} else {
  console.log(grade, "Grade F");
}

// 9. Write a program to check if a given string contains the word "JavaScript".
// logic => JavaScript exact word match

console.log("Q.9");
var word = "JavaScript";

if (word == "JavaScript") {
  console.log(word, "contains JavaScript.");
} else {
  console.log(word, "does not contain JavaScript.");
}

// 10. Write a program to validate if a number is within the range of 10 and 100 (inclusive).

// logic => if number >= 10 && number <= 100 valid

console.log("Q.10");
var number = 99;
if (number >= 10 && number <= 100) {
  console.log(number, "is within the given range.");
} else {
  console.log(number, "is not wihtin the range.");
}

// ---

// Switch Questions

console.log("- Switch Questions -");

// 1. Write a program to print the day of the week based on a number (1 = Monday, 2 = Tuesday, ... 7 = Sunday).

// logic => if day =1 => Monday , day = 2 => Tuesday ...

console.log("Q.1");

var day = 4;

switch (day) {
  case 1:
    console.log("Day", day, "is Monday");
    break;
  case 2:
    console.log("Day", day, "is Tuesday");
    break;
  case 3:
    console.log("Day", day, "is Wednesday");
    break;
  case 4:
    console.log("Day", day, "is Thursday");
    break;
  case 5:
    console.log("Day", day, "is Friday");
    break;
  case 6:
    console.log("Day", day, "is Saturday");
    break;
  case 7:
    console.log("Day", day, "is Sunday");
    break;
  default:
    console.log("Please enter correct day.");
}

// 2. Write a program to perform basic arithmetic operations (add, subtract, multiply, divide) based on a user's choice.

// logic => if key = add + ; substract - ; multiply * ; divide /
console.log("Q.2");

var operation = "multiply";
var num1 = 10;
var num2 = 20;

switch (operation) {
  case "add":
    console.log(operation, num1, "+", num2, "=", num1 + num2);
    break;
  case "substract":
    console.log(operation, num1, "-", num2, "=", num1 - num2);
    break;
  case "multiply":
    console.log(operation, num1, "*", num2, "=", num1 * num2);
    break;
  case "divide":
    console.log(operation, num1, "/", num2, "=", num1 / num2);
    break;
  default:
    console.log("Please enter correct operation.");
}

// 3. Write a program to display the season based on the month number (1-12).

// logic => 1 to 2 & 12 => Winter ; 3 to 5 => Summer ; 6 to 9 => Monsoon ; 10 to 11 => Autumn

console.log("Q.3");
var month = 1;

switch (month) {
  case 1 || 2 || 12:
    console.log(month, "month comes under Winter season.");
    break;
  case 3 || 4 || 5:
    console.log(month, "month comes under Summer season.");
    break;
  case 6 || 7 || 8 || 9:
    console.log(month, "month comes under Monsoon season.");
    break;
  case 10 || 11:
    console.log(month, "month comes under Autmun season.");
    break;
  default:
    console.log("Please enter correct month.");
}

// 4. Write a program to check the type of vehicle based on the user’s input (car, bike, bus, etc.).

// logic => bike 2 wheeler auto 3 wheeler car 4 wheeler bus public transport

console.log("Q.4");

var vehicle = "bus";

switch (vehicle) {
  case "bike":
    console.log(vehicle, "is two-wheeler.");
    break;
  case "auto":
    console.log(vehicle, "is three-wheeler.");
    break;
  case "car":
    console.log(vehicle, "is four-wheeler.");
    break;
  case "bus":
    console.log(vehicle, "is a public transport vehicle.");
    break;
  default:
    console.log("Please enter correct vehicle.");
}

// 5. Write a program to determine if a character is a vowel or consonant using switch statements.

// logic => if character is a, e, i , o,  u  then vowel else consonant

console.log("Q.5");

var character = "y";

switch (character) {
  case "a" || "e" || "i" || "o" || "u":
    console.log(character, "Character is a vowel.");
    break;
  default:
    console.log(character, "Character is a consonant.");
}