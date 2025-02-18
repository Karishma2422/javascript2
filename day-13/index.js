window.onload = function Greet () {alert("Welcome! User get 1% better everyday ⚡")}

function login() {
  const names = document.getElementById("names").value;
  console.log("names :", names);
  // localStorage.setItem("names",names)

  const namesList = JSON.parse(localStorage.getItem("namesList")) || [];

  console.log("namesList", namesList);

  namesList.push(names);

  localStorage.setItem("namesList", JSON.stringify(namesList));

  // empty the value after user clicks on login
  document.getElementById("names").value = "";
  let structure = "";
  for (let i = 0; i < namesList.length; i++) {
    structure += `<span>${namesList[i]}</span> </br>`;
  }
  console.log("structure :", structure);

  //   accessing the parent div
  const Parent = document.getElementById("parent");

  //   appending a new listHeading element
//   const listHeading = document.createElement("p");
//   listHeading.innerHTML = "Above is the list of logged in users.";

//   Parent.appendChild(listHeading);
  
  document.getElementById("users-list").innerHTML = structure;
  
  document.getElementById("user").innerHTML = `Welcome! ${names}`;
  
  // const parent = document.querySelector(".parent");
  
  // parent.appendChild(h1);
}