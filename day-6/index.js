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

var name = "Kirito";

// Named Function (Traditional Function)
function myFunction(name) {
  console.log("Function is executed");
  console.log("Hello 😁", name);
}
myFunction(name);

// Arrow Function (anonymous Function)

const newFunction = (name) => {
  console.log("Arrow Function is executed");
  console.log("Hello 😁", name);
};

newFunction(name);

// for single prop

const newMyFunction = (prop) => {
  console.log(prop);
};
newMyFunction("Hello!! Kirito");

// Hoisting is not applicable in arrow function

// Q. arrow function to count even and odd nubmber between range 10 to 30

const countFunction = (start, end) => {
  var evenCount = 0;
  var oddCount = 0;
  while (start <= end) {
    if (start % 2 == 0) {
      evenCount++;
    } else {
      oddCount++;
    }

    start++;
  }

  console.log(evenCount, "even count", oddCount, "odd count");
};

countFunction(10, 30);

// Array -> stores multiple data

var location = "Awdiz";

var myArray = [
  "name",
  "age",
  1,
  2,
  3,
  4,
  ["a", "b", "c"],
  { name: "usman", age: 21 },
];

const printDataOfMyArray = (array) => {
  console.log("array :", array);

  for (let i = 0; i < array.length; i++) {
    console.log("array[i]", array[i]);
  }
};

printDataOfMyArray(myArray);

// Q.  Given an array find out total count of eligible users age, not eligible users age, and learning license

// noteligible
// learning licence
// driving licence

var userAge = [23, 12, 23, 44, 5, 76, 12, 33, 22, 18, 17, 23, 34, 89];

const licenceEligibility = (array) => {
  let notEligibleCount = 0;
  let learningCount = 0;
  let drivingCount = 0;

  for (let i = 0; i < array.length; i++) {
    if (array[i] < 18) {
      notEligibleCount++;
    } else if (array[i] == 18) {
      learningCount++;
    } else {
      drivingCount++;
    }
  }

  console.log("notEligibleCount :", notEligibleCount);
  console.log("learningCount :", learningCount);
  console.log("drivingCount :", drivingCount);
};

licenceEligibility(userAge);