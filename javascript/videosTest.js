//
//  writing functions without and with callback functions(ie. showing two different ways)
//
//
// this 1st way is building the function within program; may want to have a 
// library where this function exists outside this code
//
let calc = function(num1, num2, calcType) {
	if (calcType === "add") {
		return num1 + num2;
	} else if (calcType === "subtract") {
		return num1 - num2;
	} else if (calcType === "subtract") {
		return num1 * num2;
	}
};
console.log("without using callback", calc(2,3,"add"));

//
// now doing with a callback; let's assume the add and multiply functions
// are in a library somewhere
//
let add = function(a,b) {
	return a + b;
}
let multiply = function(a,b) {
	return a * b;
}
let doWhatever = function(a,b) {
	// 
	// to use the ${}, need to use the quote that is above the tab key
	// it looks like a back single quote
	//
	console.log(`here are your numbers you passed ${a}, ${b}`);
	console.log(`here are your numbers you passed with '$' ${a}, ${b}`);
	console.log("here are your numbers you passed without $", a, b);
}
let calc2 = function(num1, num2, callback) {
	if (typeof callback === "function") {
		return callback(num1, num2);
	}
	
};
console.log("using a callback", calc2(4,5,add));
console.log("using a callback", calc2(16,20,doWhatever));

//
// more reasons to use callback
//
let myArray = [
	{num: 5,str: "apples", origin:"BC"},
	{num: 7,str: "oranges", origin:"Florida"},
	{num: 2,str: "lemons", origin:"Mexico"},
	{num: 8,str: "bananas", origin:"Ecuador"},
	{num: 6,str: "avocados", origin:"Mexico"},
	{num: 4,str: "pineapple", origin:"Brazil"},
	{num: 3,str: "blueberries", origin:"Chile"},
	{num: 9,str: "pears", origin:"Oregon"},
	{num: 1,str: "cantaloupe", origin:"California"}
];
myArray.sort(function(value1, value2) {
	console.log("value1.num = ", value1.num);
	console.log("value2.num = ", value2.num);
	if (value1.num > value2.num) {
		return 1;
	} else {
		return -1;
	}
});
console.log("myArray = ", myArray);

//
// Callbacks using setTimeout; 3000 ms = 3 seconds
// This example uses a 'named' callback function.
//
let logCall = function() {
	console.log("logCall was called back");
};
setTimeout(logCall, 3000);
//
// Callbacks using setTimeout; 3000 ms = 3 seconds
// This example uses an anonymous function as the callback function
//
setTimeout(function() {
	console.log("The function was called back using an anonymous callback");
}, 3000);

//
// using addEventListener and querySelector(need to have # in front of id)
//
let btn = document.querySelector("#item1");

btn.addEventListener("click", function(e) {
	console.log("The button was clicked");
});

//
// creating our own callback;
// great youtube video explaining callbacks and examples of why you would use them
// https://www.youtube.com/watch?v=Nau-iEEgEoM 
//
let students = [
	{name:"Mary", score:90, school:"East"},
	{name:"James", score:100, school:"East"},
	{name:"Steve", score:40, school:"West"},
	{name:"Gabe", score:90, school:"West"},
	{name:"Rachel", score:85, school:"East"},
	{name:"Jessica", score:45, school:"East"},
	{name:"Erin", score:75, school:"West"},
	{name:"Adrienne", score:60, school:"East"},
	{name:"Brady", score:95, school:"West"},
	{name:"Bear", score:25, school:"East"}
];



let processStudents = function(data, callback) {
	for (let i = 0; i < data.length; i++) {
		if (data[i].school.toLowerCase() === "east") {
			if (typeof callback === "function") {
				callback(data[i]);
			}
		}
	}
}
//
// Example below is to process the array of students and just print to the console
//
processStudents(students, function(item) {
	if (item.score > 50) {
		console.log(item.name + " passed.");
	}
});
//
// total all the scores for students from the East school and count how many
// students there are; return the studentCount and then log again the total
//
let determineTotal = function() {
	let totalMarks = 0;
	let studentCount = 0;
	processStudents(students, function(obj) {
		totalMarks += obj.score;
		studentCount++;
	});
	console.log("Total score of all East students: " + totalMarks);
	console.log("Total students in East: " + studentCount);
	return studentCount;
};
//
// if you wanted to do the same but have no return in the function,
// you would not have a return statement and you would execute like this:
// determineTotal();
// just another way of doing it with no return if all you are doing is a console.log
//
let totalNumberOfStudents = determineTotal();
console.log("totalNumberOfStudents, as a return = " + totalNumberOfStudents);


//
// setup for assignment in $practise
//
let people = [
	{fname:"Alex", lname:"Smith", province:"BC", age:33},
	{fname:"Angela", lname:"Jones", province:"AB", age:61},
	{fname:"Anne", lname:"Bird", province:"SK", age:35},
	{fname:"Brent", lname:"Riddle", province:"MN", age:79},
	{fname:"Byron", lname:"Cardenas", province:"BC", age:38},
	{fname:"Carrie", lname:"Ramirez", province:"AB", age:89},
	{fname:"Cheryl", lname:"Glenn", province:"SK", age:70},
	{fname:"Dima", lname:"Curry", province:"MN", age:67},
	{fname:"Dustin", lname:"Bullock", province:"BC", age:59},
	{fname:"Eva", lname:"Keiths", province:"AB", age:24},
	{fname:"Faith", lname:"Liu", province:"SK", age:46},
	{fname:"Fawad", lname:"Bowman", province:"MN", age:69},
	{fname:"Forest", lname:"Vaughn", province:"BC", age:52},
	{fname:"Giovanni", lname:"Browning", province:"AB", age:32},
	{fname:"Greg", lname:"Hogan", province:"SK", age:55},
	{fname:"Harpreet", lname:"Ramsey", province:"MN", age:18},
	{fname:"Ian", lname:"Fitzgerald", province:"BC", age:16},
	{fname:"James", lname:"Kramer", province:"AB", age:57},
	{fname:"Jarvis", lname:"Ortega", province:"SK", age:69},
	{fname:"Jawad", lname:"Huerta", province:"MN", age:35},
	{fname:"Jinbong", lname:"Robinson", province:"BC", age:26},
	{fname:"Jingnan", lname:"Hatfield", province:"AB", age:71},
	{fname:"Joe", lname:"Banks", province:"SK", age:37},
	{fname:"Kristina", lname:"Dalton", province:"MN", age:73},
	{fname:"Latora", lname:"Matthews", province:"BC", age:25},
	{fname:"Lauren", lname:"McClure", province:"AB", age:42},
	{fname:"Licedt", lname:"Rasmussen", province:"SK", age:30},
	{fname:"Linden", lname:"Pierce", province:"MN", age:68},
	{fname:"Luis", lname:"Price", province:"BC", age:23},
	{fname:"Marcela", lname:"Perez", province:"AB", age:20},
	{fname:"Marilou", lname:"Graham", province:"SK", age:32},
	{fname:"Matt", lname:"Novak", province:"MN", age:29},
	{fname:"Monica", lname:"Giles", province:"BC", age:34},
	{fname:"Niloufar", lname:"Carson", province:"AB", age:29},
	{fname:"Omar", lname:"Olson", province:"SK", age:69},
	{fname:"Roger", lname:"Woodard", province:"MN", age:84},
	{fname:"Roman", lname:"Swanson", province:"BC", age:21},
	{fname:"Seun", lname:"Kelly", province:"AB", age:60},
	{fname:"Shane", lname:"Frost", province:"SK", age:87},
	{fname:"Steven", lname:"Haynes", province:"MN", age:47},
	{fname:"Thomas", lname:"Hart", province:"BC", age:14},
	{fname:"Trent", lname:"Kerr", province:"AB", age:12},
	{fname:"Darrell", lname:"Koch", province:"SK", age:10},
	{fname:"Tylor", lname:"Torres", province:"MN", age:98}
];

let processPeople = function(data, callback) {
	for (let i = 0; i < data.length; i++) {
		if ((data[i].province.toLowerCase() === "bc") || 
			(data[i].province.toLowerCase() === "ab")) {
			if (typeof callback === "function") {
				callback(data[i]);
			}
		}
	}
}
//
// Here is invoking the processStudents function.  Write the callback function
// as an anonymous function
//
processPeople(people, function(item) {
	if (item.age > 25) {
		console.log(item.fname + " " + item.lname + " is over 25 years old");
	}
});
//
// total all the ages for people from BC and AB and count how many
// people there are; log the average age; return the peopleCount 
// and then log again the peopleCount
//
let getTotalPeople = function() {
	let totalAge = 0;
	let peopleCount = 0;
	processPeople(people, function(obj) {
		totalAge += obj.age;
		peopleCount++;
	});
	console.log("Total age of all people in BC and AB: " + totalAge);
	console.log("Average age of all people in BC and AB " + totalAge/peopleCount);
	console.log("Total people in BC and AB: " + peopleCount);
	return peopleCount;
};
//
// if you wanted to do the same but have no return in the function,
// you would not have a return statement and you would execute like this:
// getTotalPeople();
// just another way of doing it with no return if all you are doing is a console.log
//
let totalNumberOfPeople = getTotalPeople();
console.log("totalNumberOfPeople, as a return = " + totalNumberOfPeople);
