//console.log("Inside callback.js")
//console.log('-----Call Back - - -');
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

//[1,2,3].forEach(function(a,b,c){console.log(a,b,c)})

const a = [1,2,3,4,5];

function myFunc(p1,p2,p3) {
    console.log(p1,p2,p3);
}

a.forEach(myFunc);

function myCallBackFunction(staffArray, func){
	console.log("inside myCallBackFunction");
	console.log("staffArray = ", staffArray);
	console.log("func = ", func);
	for (i=0; i < staffArray.length; i++) {
		//console.log("staffArray i = ", staffArray[i]);
		myWorkerFunction(staffArray[i]);
	}
}

function myWorkerFunction(parm1){
	console.log("inside myWorkerFunction");
	console.log("parm1 = ", parm1);
}

//myCallBackFunction(data.staff, myWorkerFunction);
myCallBackFunction(['abc','bcd','cde'], myWorkerFunction);
//myWorkerFunction("parameter1");