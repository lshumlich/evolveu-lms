/* var ageNum = 4 + 3;
if (ageNum === 7) {
	alert("You're smart");
	console.log("You're also smart on the console");
}*/
/*function sayHello() {
	console.log("Hello");
}
sayHello();

function sing(notes) {
	console.log(notes);
}
sing("Hello");
sing("Lateeda");*/
/*function multiply(a,b) {
	console.log(a,b);
	return a*b;
}
function multiply2(a,b) {
	if (a > 11 || b > 11) {
		return "that's too hard";
	} else {
		return a*b;
	}
}*/
/*alert(multiply(3,4));*/
/*var total = multiply(4,5);
alert(total);*/
/*multiply2(5,10);*/

/*function checkDriverAge() {
var age = prompt("What is your age?");

if (Number(age) < 18) {
	alert("Sorry, you are too young to drive this car. Powering off");
} else if (Number(age) > 18) {
	alert("Powering On. Enjoy the ride!");
} else if (Number(age) === 18) {
	alert("Congratulations on your first year of driving. Enjoy the ride!");
}
}
var checkDriverAge2 = function() {
var age = prompt("What is your age?");

if (Number(age) < 18) {
	alert("Sorry, you are too young to drive this car. Powering off");
} else if (Number(age) > 18) {
	alert("Powering On. Enjoy the ride!");
} else if (Number(age) === 18) {
	alert("Congratulations on your first year of driving. Enjoy the ride!");
}
}
function checkDriverAge3(age) {

if (Number(age) < 18) {
	alert("Sorry, you are too young to drive this car. Powering off");
} else if (Number(age) > 18) {
	alert("Powering On. Enjoy the ride!");
} else if (Number(age) === 18) {
	alert("Congratulations on your first year of driving. Enjoy the ride!");
}
}*/
/*var list = ["tiger", "cat", "jaguar", "cougar"];
/*console.log(list[1]);*/
/*var numbersList = [1,2,3,4];
var booleansList = [true, false, true, false];
var functionList = [function apple() {
	console.log("apple");
}, function orange() {
	console.log("orange");
}]*/

/*var list = [
	["tiger", "cat", "jaguar", "cougar"],
	["apples", "oranges", "bananas", "grapefruit"],
	["bikes", "cars", "trains", "airplanes"]
	];*/
/*console.log(list[1]);*/

/*var user = {
	name: "Lorraine",
	age: 25,
	hobby: "Soccer",
	isMarried: true,
	courses: ["Mathematics", "English", "History", "Physics"],
	shout: function() {
		console.log("AHHHHH!");
	}
};*/
/*var database = [
	{
		username: "Lorraine",
		password: "simplepassword"
	}
];*/
/*var newsfeed = [
	{
		username: "Lorraine",
		timeline: "simplepassword"
	},
	{
		username: "Sharon",
		timeline: "hardpsw"
	},
	{
		username: "Gloria",
		timeline: "mediumsimplepie"
	}
]; 
newsfeed[0].password;*/
/*var database = [
	{
		username: "Lorraine",
		password: "complexpsw"
	},
	{
		username: "Larry",
		password: "mediumpsw"
	},
	{
		username: "Erin",
		password: "simplepsw"
	},
	{
		username: "Brady",
		password: "nopsw"
	}
];
var newsfeed = [
	{
		username: "Bobby",
		timeline: "So tired from all that learning!"
	},
	{
		username: "Sally",
		timeline: "Javascript is sooooo cool!"
	},
	{
		username: "Mitch",
		timeline: "Javascript is preeetyy cool!"
	}
];
var userNamePrompt = prompt("Enter username:");
var passwordPrompt = prompt("Enter password:");
function isUserValid(user,psw) {
	for (var i = 0; i < database.length; i++) {
	if (user === database[i].username && psw === database[i].password) {
		return true;
	} 
	}
	return false;
}
function signin(user,psw) {
		if (isUserValid(user,psw)) {
		console.log(newsfeed);
	} else {
		alert("Incorrect username and password");
	}
}
signin(userNamePrompt,passwordPrompt);*/

var todos = [
	"clean room",
	"brush teeth",
	"exercise",
	"study javascript",
	"eat healthy"
]
for (var i=0; i < todos.length; i++) {
	console.log(todos[i] + "!");
}