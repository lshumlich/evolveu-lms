
// 	--- functions and braces nightmare 

//
console.log("Hello from exercises");

const array1 = [3,1];

// write the function that will make this work

function orderArray(passedArray) {
	if (passedArray[0] < passedArray[1]) {
		return passedArray;
	}
	return [passedArray[1], passedArray[0]];
}




console.log("Should Be: 1, 3:", 
	orderArray(array1));

console.log("Should Be: 1, 5:", 
	orderArray([1, 5]));


console.log("Should Be: 10, 20:", 
	orderArray([20, 10]));

/* * * * * * * * * * * * assertEquals
/*	
	Write the function that will create this output:

*** the two values are not the same:
	--> a
    --> b
*** the two values are not the same:
    --> 1
    --> 2
 *** the two values are not the same:
    --> 2
    --> 2
*/
function assertEquals(p1, p2) {
	if (p1 === p2) {
		console.log('ok ->', p1);
		return true;
	}
	console.log("*** the two values are not the same:");
	console.log("   p1-->", p1);
	console.log("   p2-->", p2);
	return false;
}

assertEquals("a","b");
assertEquals("a","a");
assertEquals(1,2);
assertEquals(2,2);
assertEquals("2",2);
assertEquals("This value","This value");


/* * * * * * * * * * * * makeEmailArr
/*	
	Write the function to format an email based on an array
*/

// function makeEmailArr() {

// 	// Write the function after this comment ---
// 	function makeEmailArr(arg) {
// 		return `${arg[0]}.${arg[1]}@evolveu.ca`;
// 	}
// 	// and before this comment ---

// 	const arrayLarry = ['larry', 'shumlich'];
// 	assertEquals('larry.shumlich@evolveu.ca', makeEmailArr(arrayLarry));
// 	assertEquals('bill.smith@evolveu.com', makeEmailArr(['bill','smith']));
// 	assertEquals('amy.jones@evolveu.ca', makeEmailArr(['amy','jones']));

// }

/*	
	Write the function to format an email based on an object / map
*/

// Write the function after this comment ---

function makeEmailObj(obj) {
	// return obj.fname + "." + obj.lname + "@evolveu.ca";
	return `${obj.fname}.${obj.lname}@evolveu.ca`;
}

// and before this comment ---

const objLarry = {fname:'larry', lname:'shumlich'};
assertEquals('larry.shumlich@evolveu.ca', makeEmailObj(objLarry));
assertEquals('bill.smith@evolveu.ca', makeEmailObj({fname:'bill',lname:'smith'}));
//
// This one below should not be equal because one email is a .com and function makes .ca
//
assertEquals('jane.doe@evolveu.com', makeEmailObj({fname:'jane',lname:'doe'}));
assertEquals('amy.jones@evolveu.ca', makeEmailObj({fname:'amy',lname:'jones'}));

const data = {
	staff: [
		{fname:"Jane", lname:"Smith", balance:10},
		{fname:"Liam", lname:"Henry", balance:1000},
		{fname:"Emma", lname:"Jones", balance:1330},
		{fname:"Olivia", lname:"Notly", balance:310},
		{fname:"Noah", lname:"Ho", balance:503},
		{fname:"William", lname:"Lee", balance:520},
		{fname:"Benjamin", lname:"Amis", balance:150},
	],
	company: "EvolveU",
	city: "Calgary",
	prov: "Alberta"
};

//
// Write the function after this comment ---
// here are two ways of doing this function; the map function will automatically
// pass the currentValue, index, and array to the function you are passing it (makeEmailObj)
// and it calls the function for every item in the array
//
function loopStaff(staffArray) {
	let emailArray = [];
	for (let i=0; i < staffArray.length; i++) {
		emailArray.push(makeEmailObj(staffArray[i]));
	}
	return emailArray
}
function loopStaffxxx(staffArray) {
	return staffArray.map(makeEmailObj);
}

// and before this comment ---

console.log('-----loopStaff')
const staffEmail = loopStaff(data.staff);
console.log("After loopStaff function, staffEmail = ", staffEmail);
// console.log(staffEmail);
assertEquals('Jane.Smith@evolveu.ca', staffEmail[0]);
assertEquals('Olivia.Notly@evolveu.com', staffEmail[3]);
assertEquals('Benjamin.Amis@evolveu.ca', staffEmail[6]);



console.log('-----Function Options - - - - - - - -');

function simpleFunction(p1) {
    return `   simpleFunction: ${p1}   `;
}

const simpleArrow = (p1) => `   simpleArrow: ${p1}   `;

const anotherArrow = (p1) => {
    const a = 'do what ever is needed';
    const b = 'in this error function';
    return `   anotherArrow: ${p1}   `;
}

console.log(simpleFunction('what.'));

console.log(simpleArrow('what!'));

console.log(anotherArrow('what?'));

console.log(function a () {
	return 'what ever is new!';
	}());

// function a () {
// 	return 'what ever is new!';

// }
// console.log(a());

// console.log(a
// 	());

console.log('-----Call Back - - -');

let count = 0;
function myCounter() {
    console.log(` we are at count: ${count++}`);
}

console.log(`myCounter Stage1: ${myCounter}`);
console.log(`myCounter Stage2: ${myCounter()}`);

//setInterval(myCounter, 1000);

console.log('-----emailForOf')

//
// the for of goes through each 'value' of array, not the index
//

function loopWithForOf(arrayForOf1) {
	let newArrayForOf = [];
	console.log("arrayForOf1 inside loop ForOf", arrayForOf1);
	for (let i of arrayForOf1) {
		console.log("i = ", i);
		newArrayForOf.push(makeEmailObj(i));
	}
	return newArrayForOf
}
const emailForOf = loopWithForOf(data.staff);
console.log("emailForOf = ", emailForOf);
assertEquals('Jane.Smith@evolveu.ca', emailForOf[0]);
assertEquals('Olivia.Notly@evolveu.com', emailForOf[3]);
assertEquals('Benjamin.Amis@evolveu.ca', emailForOf[6]);

//
// the for in goes through each 'index' of array, 
// unlike the 'value' with for of
//

console.log('-----emailForIn')

function loopWithForIn(arrayForIn2) {
	let newArrayForIn = [];
	console.log("arrayForIn2 inside loop ForIn", arrayForIn2);
	for (let i in arrayForIn2) {
		console.log("i = ", i);
		console.log("arrayForIn2[]", arrayForIn2[i]);
		newArrayForIn.push(makeEmailObj(arrayForIn2[i]));
	}
	return newArrayForIn
}
const emailForIn = loopWithForIn(data.staff);
console.log("emailForIn = ", emailForIn);
assertEquals('Jane.Smith@evolveu.ca', emailForIn[0]);
assertEquals('Olivia.Notly@evolveu.com', emailForIn[3]);
assertEquals('Benjamin.Amis@evolveu.ca', emailForIn[6]);


//
// now doing forEach and Map
//


//
// simple example of forEach
//
const items = ['item1', 'item2', 'item3'];
const copy = [];
items.forEach(function(item){
copy.push(item);
console.log("inside simple example of forEach, copy = ", copy);
});

const object1 = {
  a: 1,
  b: 2,
  c: 3
};

console.log("just trying to print object properties", 
	Object.getOwnPropertyNames(object1));
// expected output: Array ["a", "b", "c"]

console.log('-----emailWithEach')

function loopWithEach(arrayForEach3) {
	let newArrayForEach = [];
	console.log("arrayForEach3 inside loop ForEach", arrayForEach3);
	//
	// this callback function "forEach" is calling an anonymous function
	//
	// arrayForEach3.forEach(function(item) {
	// 	newArrayForEach.push(makeEmailObj(item));
	// });
	// 
	// anonymous function and using an arrow function
	// arrayForEach3.forEach((item) => {
	// // 	newArrayForEach.push(makeEmailObj(item));
	// // });


	// return newArrayForEach

	//
	// Trying to get working the forEach using a "not" anonymous function
	// (ie. a named function). "newArrayForEach" becomes a variable from the outer
	// block of the callback that the function has access to.  This is why it 
	// does not need to be defined here. Don't need a 'return' because its work
	// is to update the array.  No return from the called function "ForEach".  Some
	// Callback functions may need the return statement.
	// Note that only the item needs to be received by myCalledFunc
	//
	
	arrayForEach3.forEach(myCalledFunc);

	function myCalledFunc(item, index, arr) {
		newArrayForEach.push(makeEmailObj(item));
	};
	return newArrayForEach

	
	//
	// this one uses an arrow function
	//
	// let newArrayForEach = [];
	// console.log("arrayForEach3 inside loop ForEach", arrayForEach3);
	// arrayForEach3.forEach((item) => {
	// 	newArrayForEach.push(makeEmailObj(item));
	// });
	// return newArrayForEach

	//
	// this one below uses an arrow function
	//
	// function loopWithEach(d) {
	// 	const res = [];
	// 	d.forEach((v) => {
	// 		res.push(makeEmailObj(v));
	// 	});
	// 	return res;
	// }

	// 	console.log("item = ", item);
	// 	//newArrayForEach.push(makeEmailObj(item));
	// }


};

const emailWithEach = loopWithEach(data.staff);
console.log("emailWithEach", emailWithEach);
assertEquals('Jane.Smith@evolveu.ca', emailWithEach[0]);
assertEquals('Olivia.Notly@evolveu.com', emailWithEach[3]);
assertEquals('Benjamin.Amis@evolveu.ca', emailWithEach[6]);

//
// console.log('-----emailWithMap')
// .map automatically appends to an array (**not sure if this comment is correct)
//

function loopWithMap(arrayMap4) {
	let newArrayMap = [];
	console.log("arrayMap4 inside loop Map", arrayMap4);
	newArrayMap = arrayMap4.map(makeEmailObj);
	return newArrayMap
}
const emailWithMap = loopWithMap(data.staff);
console.log("emailWithMap = ", emailWithMap);
assertEquals('Jane.Smith@evolveu.ca', emailWithMap[0]);
assertEquals('Olivia.Notly@evolveu.com', emailWithMap[3]);
assertEquals('Benjamin.Amis@evolveu.ca', emailWithMap[6]);

