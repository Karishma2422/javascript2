// DOM => Document Object Model
// A tree of whole document where every element is considered to be a node
// Every node can be accessed modified and removed from the DOM using JS this is known as DOM Manipuliation

// Accessing element thorugh JS

console.log(document.getElementById("headingTwo"));
console.log(document.getElementsByClassName("myPara")); // return a node list
console.log(document.querySelector(".myPara")); // return a node list

console.log(document.getElementsByTagName("span"));

// modifying element through JS

document.getElementById("heading-two").innerHTML =
  "Hello! (Everyone)=> this text is updated through JS  ";

// styling element through JS

document.getElementById("styles-js").style.color = "#00eeff";

document.getElementById("styles-js").style.fontSize = "44px";

// const parentContainer = document.getElementById("parentDiv");

// creating an element through JaavScript
const h1 = document.createElement("h1");
h1.innerHTML = "This element is created through JavaScript";

console.log(h1);

// appending

const parentContainer = document.getElementById("parentDiv");
// console.log(parentContainer)

const childPara = document.createElement("p");
childPara.innerHTML =
  "This child element is created through JS and is appended to the parent container";
parentContainer.appendChild(childPara);

// parentContainer.removeChild(childPara)

// childPara.remove()

document.querySelector(".event-handling").style.border = "2px solid black";
document.querySelector(".event-handling").style.width = "100%";
document.querySelector(".event-handling").style.height = "auto";
// document.querySelector(".event-handling").style.padding = "30px";

const eventPara = document.getElementById("my-para-event");
eventPara.style.border = "1px solid red";
console.log(eventPara);

// element.addEventListener("event", function(){})


eventPara.addEventListener("click", function () {
  console.log("Event para is clicked!");
});

eventPara.addEventListener("copy", function () {
  alert("Don't copy me!");
});



const parentEventHandling = document.querySelector(".event-handling");
console.log(parentEventHandling)

// Event Bubbling : In this concept when a user clicks on a child element where event listener is added the event which is applied on parent element also gets triggered

parentEventHandling.addEventListener("click", function () {
  console.log("parentelement clicked");
});
// eventPara.removeEventListener("copy",function(){
//     alert("Don't copy me!")
// })



// event deligation : in this method we add event only to the parent element that will handle events for the child element also


const eventDelegationParent = document.getElementById("eventDelegationParent");
eventDelegationParent.style.border = "2px solid black";
eventDelegationParent.style.marginTop = "20px";
console.log(eventDelegationParent);

const eventDelegationChild = document.createElement("h3");
eventDelegationChild.innerHTML = "This is event delegation";
eventDelegationChild.style.border = "2px solid red";
eventDelegationChild.id = "bubbledChild";

console.log(eventDelegationChild);

eventDelegationParent.appendChild(eventDelegationChild);

eventDelegationParent.addEventListener("click",()=>{
  if(event.target.id !== "child"){
    console.log("eventDelegationParent is clicked");
  }

  if(event.target.id == "bubbledChild"){
    console.log("I m event bubbled child >_< ")
  }
})

// LocalStorage

// syntax => localstorage.setItem()
//        => localstorage.getItem()
//        => localstorage.clear()

localStorage.setItem("username","unknown");

function saveName(){


  const name = document.getElementById("name").value;

  console.log(name);

  localStorage.setItem("name",name);
}

const username = localStorage.getItem("username");
console.log("username : ",username)


// localStorage.clear()

document.getElementById("username").addEventListener("change", function (){
  console.log(event.target.value)
})