

console.log("Hello World from basic.js");

//console.log("Displaying myButton", myButton);

//let e = document.getElementById("myButton");
//let a = document.getElementById("myAdd");
//let s = document.getElementById("mySubtract");
//let m = document.getElementById("myMultiply");
//let d = document.getElementById("myDivide");
let r = document.getElementById("myResult");
const i1 = document.getElementById("myInput1");
const i2 = document.getElementById("myInput2");

// console.log("Displaying e", e);
document.getElementById("myButton").addEventListener("click", myButtonClicked);
document.getElementById("myAdd").addEventListener("click", myAddClicked);
document.getElementById("mySubtract").addEventListener("click", mySubtractClicked);
document.getElementById("myMultiply").addEventListener("click", myMultiplyClicked);
document.getElementById("myDivide").addEventListener("click", myDivideClicked);

// if you want to see the event info, you have to receive a parameter in the
// function (for eg. function myButtonClicked(e)); then you can display e to 
// console or whatever you want to do with it. it shows lots of stuff, like
// target

function myButtonClicked() {
	console.log("Inside myButtonClicked event");
	let z = Number(document.getElementById("myInputField").value) + 1;
	console.log("Input data in myInputField", z);
}

function myAddClicked() {
	console.log("Inside myAddClicked event");
	let a1 = Number(i1.value);
	let a2 = Number(i2.value);
	let result = a1 + a2;
	r.textContent = "Result is: " + result;

	console.log("myInput1 ", a1, " myInput2 ", a2, " result ", result);
}

function mySubtractClicked() {
	console.log("Inside mySubtractClicked event");
	let a1 = Number(document.getElementById("myInput1").value);
	let a2 = Number(document.getElementById("myInput2").value);
	let result = a1 - a2;
	r.textContent = "Result is: " + result;

	console.log("myInput1 ", a1, " myInput2 ", a2, " result ", result);
}

function myMultiplyClicked() {
	console.log("Inside myMultiplyClicked event");
	let a1 = Number(document.getElementById("myInput1").value);
	let a2 = Number(document.getElementById("myInput2").value);
	let result = a1 * a2;
	r.textContent = "Result is: " + result;

	console.log("myInput1 ", a1, " myInput2 ", a2, " result ", result);
}

function myDivideClicked() {
	console.log("Inside myDivideClicked event");
	let a1 = Number(document.getElementById("myInput1").value);
	let a2 = Number(document.getElementById("myInput2").value);
	let result = a1 / a2;
	r.textContent = "Result is: " + result;

	console.log("myInput1 ", a1, " myInput2 ", a2, " result ", result);
}

let cars = ["Volvo", "BMW", "Cadillac"];

//
// Don't use innerHTML; it causes security issues.  Adding a "<br>" inside
// of an input field can destroy software if a user has an input field that he 
// is adding to; use .textContent
//
for (i = 0; i < cars.length; i++) {
  cars += cars[i] + "<br>"; 
}
document.getElementById("demo").innerHTML = cars;
//
// Do this instead
//
document.getElementById("demo").textContent = cars;