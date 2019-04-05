console.log("Hello from moreArrayPractise.js");

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
// return the total of the balances from the array; the callback function
// is the function that is executed on each element in the array, taking 3 arguments
// because it is a forEach, the callback is done on an array in this case, and the 
// forEach sends 3 paramenters to the callback function
//
function loopStaff(staffArray) {
	let totalBal = 0;
	//
	// this is using forEach and anonymous function
	//
	// staffArray.forEach(function(item) {
	// 	totalBal += item.balance;
	// });
	//
	// here is a way to do it without an anonymous function
	//
	staffArray.forEach(myBalFunc);
	function myBalFunc(item) {
		totalBal += item.balance;
	}
	//
	// this is using an arrow function
	//
	// staffArray.forEach(item => totalBal += item.balance);
	//
	//
	// for (let i=0; i < staffArray.length; i++) {
	// 	emailArray.push(makeEmailObj(staffArray[i]));
	// }
	return totalBal
}
const staffBal = loopStaff(data.staff);
console.log("Total of all the balances = ", staffBal);

const people = [
		{fname:"Jane", age:10},
		{fname:"Liam", age:15},
		{fname:"Emma", age:2},
		{fname:"Olivia", age:12},
		{fname:"Noah", age:15},
		{fname:"William", age:18},
		{fname:"Benjamin", age:22}
];
function totalPeopleAge(peopleArray) {
	let totalAge = 0;
	peopleArray.forEach(function(item) {
		totalAge += item.age;
	});
	return totalAge
};
const peopleAge = totalPeopleAge(people);
console.log("Total of all the Ages = ", peopleAge);

function averagePeopleAge(peopleArray) {
	let totalAge = totalPeopleAge(peopleArray);
	return totalAge / peopleArray.length;
}
const avgAge = averagePeopleAge(people);
console.log("Average age of people is ", avgAge);

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

//
// Use the 'filter' method. this particular one is using an arrow function
// The filter() method creates a new array with all elements that 
// pass the test implemented by the provided function.
//

var words = ['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present'];

//const result = words.filter(word => word.length > 6);

const result = words.filter(filterArray);

function filterArray(word) {
	if (word.length > 6) {
		return word
	}
}
console.log(result);
// expected output: Array ["exuberant", "destruction", "present"]


//
// The map() method creates a new array with the results of calling
// a provided function on every element in the calling array.
//
var array1 = [1, 4, 9, 16];

// pass a function to map
const map1 = array1.map(x => x * 2);

console.log(map1);
// expected output: Array [2, 8, 18, 32]


// The sort() method sorts (alphabetically) the elements of an 
// array in place and returns the array. The 
// default sort order is built upon converting 
// the elements into strings, then comparing 
// their sequences of UTF-16 code units values.
//
var months = ['March', 'Jan', 'Feb', 'Dec'];
months.sort();
console.log(months);
// expected output: Array ["Dec", "Feb", "Jan", "March"]Using one of the callback functions we researched in the last exercise (but may have not used previously) create a new array for balances >= 1000. 

//
// Using one of the callback functions we researched in the last exercise
// (but may have not used previously) create a new array for balances >= 1000. 
//

let largeBalances = data.staff.filter(function(item) {
	if (item.balance >= 1000) {
		console.log("item.balance = ", item.balance);
		return item.balance
	}
	});

console.log("new array for balances over >= 1000 = ", largeBalances);
assertEquals(largeBalances[0].fname, "Liam");
assertEquals(largeBalances[1].fname, "Emma");

//
//Write a reduce function to total the balances. 
//
//array.reduce(function(total, currentValue, currentIndex, arr), initialValue)
//
// why does the next statement not work, initializing accumVal to zero
//
//let tot = data.staff.reduce(function(accumVal, currValue), 0) {

// let tot = data.staff.reduce(function(accumVal, currValue) {
// 	console.log("accumVal = ", accumVal);
// 	console.log("currValue = ", currValue);
// 	return accumVal + currValue.balance;
// 	});
//
// syntax to do for reduce'
//
//array.reduce(function(total, currentValue, currentIndex, arr), initialValue)
// let tot = data.staff.reduce(function(accumVal, currValue) {
// 	console.log("accumVal = ", accumVal);
// 	console.log("currValue = ", currValue);
// 	return accumVal + currValue.balance;
// 	}, 0);

// console.log("total balance = ", tot);
// assertEquals(tot, 3823);
 
//
// an example of arrow function
//
// const array1 = [1, 2, 3, 4];
// const reducer = (accumulator, currentValue) => accumulator + currentValue;

// // 1 + 2 + 3 + 4
// console.log(array1.reduce(reducer));
// // expected output: 10

// // 5 + 1 + 2 + 3 + 4
// console.log(array1.reduce(reducer, 5));
// // expected output: 15


//array.reduce(function(total, currentValue, currentIndex, arr), initialValue)
// haven't gotten this working
let tot = data.staff.reduce((accumVal, currValue) => {
	console.log("accumVal = ", accumVal);
	console.log("currValue = ", currValue);
	return accumVal + currValue.balance;
	}, 0);

	
console.log("total balance = ", tot);
assertEquals(tot, 3823);

