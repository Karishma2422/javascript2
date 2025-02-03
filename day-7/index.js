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

// syntax =>  var object = { key : "value" , key2 : "value2"}

var myObject = {
    name: "Awdiz",
    age: 10,
    location: "Vashi",
    "user name ": "dakhani usman",
  };
  
  // access
  
  // . method
  
  // console.log(myObject.name);
  // console.log(myObject.age);
  // console.log(myObject.location);
  
  // [] method
  
  console.log(myObject["name"], "myObject['name']");
  // console.log(myObject.user name)  // not applicable
  
  // so we use second method []
  
  console.log(myObject["user name "], "myObject['user name ']");
  
  var myObject = {
    name: "Awdiz",
    age: 10,
    welcome: function () {
      console.log("Welcome User !");
    },
  };
  
  // console.log(myObject.welcome);
  // myObject.welcome();
  
  // Object destructuring
  
  var myObject = { name: "Awdiz", age: 10, location: "Vashi" };
  
  const { name, age } = myObject;
  
  console.log(name, age, "destructured object");
  
  // Spread operator to combine two or more objects
  
  var object1 = { name: "Awdiz" };
  var object2 = { age: 10 };
  var object3 = { location: "Vashi" };
  var object4 = { courses: ["FSD", "Windows", "CCNA", "Hardware & Networking"] };
  
  // now we want all the data in a single object
  
  const institute = { ...object1, ...object2, ...object3, ...object4 };
  
  // console.log("institute :", institute);
  
  var object = {
    name: "Person 1",
    age: 21,
    location: "Andheri",
    "institue name": "Awdiz",
    course: "FSD",
    greet: function Greet() {
      console.log(
        "Welcome",
        this.name,
        "to the",
        this["institue name"],
        "institute for the",
        this.course,
        "course"
      );
    },
  };
  
  // object.greet();
  
  var newObject = {
    name: "AIKTC",
    students: 10000,
    courses: ["Engineering", "Pharmacy", "BSc IT", "Architecture"],
    time: { inTime: "9 am", outTime: "5 am" },
  };
  
  console.log("keys :", Object.keys(newObject));
  console.log("values :", Object.values(newObject));
  console.log("entries :", Object.entries(newObject));
  
  // check if particuar key exists in an object
  
  console.log("name" in newObject); // returns boolean value
  console.log("age" in newObject);
  
  // using spread operator to add new data in an array
  
  var array = [1, 2, 3, 4, 5, 6, 7];
  console.log(array);
  
  var updatedArray = [...array, 8, 9, 10];
  console.log(updatedArray);
  
  // Concept of template litterals
  
  // while using template literals we can use dynamic data side by side to a string
  
  // syntax => `` (back ticks)
  
  var name1 = "Usman";
  var age1 = "22";
  
  console.log(`Welcome ${name1}! you are ${age1} years old.`);