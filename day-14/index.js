// Try Catch Finally

// try catch is used for error handling 
// here we have also used custom error handling by throwing our own error which is then catched t=by the catch block as error.message


console.log("try catch finally -------");

async function GetProductsApi (){

    try{
        console.log("Fetching Data ...")
        const response = await fetch("https://fakestoreapi.com/products/1")

        if(!response.ok){
            throw new Error(`Error Status : ${response.status}`)
        }

        const data = await response.json();
        console.log(data)
        
    } catch(error){
        console.log(error.message);
    } finally {
        console.log("Data fetching is complete!")
    }

}   

GetProductsApi();

console.log("Closure -------");


// Closure

// Closure is concept in JavaScript where the function remembers the scope where it is defined even after the execution


function Counter (){

        let count = 0 ;

       return function() {
            count++;
            console.log("count :",count);
        }

}

const increment = Counter();
// here it remebers the count variable which was declared in the parent scope 
increment(); // count : 1
increment(); // count : 2
increment(); // count : 3


// Currying



// call(), apply() and bind() methods

// these methods are used to handle the value of this keyword in a function 

// call()
// it binds a new object to a function so that this accesses the new object instead of old obj 

// syntax const obj = {name : "usman"}
// person.greet.call(obj,"Awdiz");


console.log("call() apply() bind() -------");

const object = {
    name : "Person1",
    greet : function (institute) {
        console.log(`Hello ${this.name}! Welcome to ${institute}`);
    }
}


const obj = {name : "Usman"}
const newObj = {name : "Kirito"}

const bindObj = {name : "Clark"}
object.greet("SAO => no method");
// call method binds the new object obj to this function so that this is now refering to obj
object.greet.call(obj,"SAO => call() method");

// apply is same as call method but the parameter is passes in []
object.greet.apply(newObj,["SAO => apply() method"]);

// bind method provides more functionality as it dosent executes immediately but returns a function which can be called later 
const greetNewUser = object.greet.bind(bindObj,"SAO => bind() method") ;
greetNewUser();