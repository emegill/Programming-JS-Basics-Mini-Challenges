// 1.Create a script with two variables, each assigned to a number. Add them together and output the result to the console. Now do the same with two strings.

var x = 1;
var y = 2;
var z = x + y;

console.log(z);

var a ="1";
var b ="2";
var c = +a + +b;

console.log(c);


// 2.Create a multidimensional array related to a subject that interests you. Output two of the items in sub-arrays to the console.

var toyota = ["tacoma", "camry", "corolla"];

var mazda = ["rx-7", "mx-3", "mx-6"];

var cars = [toyota, mazda];

function printCars() {

	for (var i = 0; i < 2; i++) {
		var model = cars[i];
		carsNames(model);
	}

}

function carsNames(model) {
	for (var i = 0; i < 2; i++) {
		console.log(model[i]);
	}
}

printCars();

// 3.Write a script that checks if a variable captured from a prompt is less than 100. If it is, alert the user that their variable is less than 100. If it is not alert the user of what the value was and that it was greater than 100.

// var status = "88";

// if (status < "100") {
// 	alert("variable is less than 100");
// } else if (status > "100")
// 	alert(status + " " + "variable is greater than 100.");


// 4.Try running the script and then changing the variable's value to see how this affects the program's output.

// var status = "240";

// if (status < "100") {
// 	alert("variable is less than 100");
// } else if (status > "100")
// 	alert(status + " " + "variable is greater than 100.");


// 5.Write a similar script to check if a string stored in a variable is the same as another string.

// var status = "100";

// if (status === "100") {
// 	alert("Its the same string");
// } else if (status != "100")
// 	alert("Its not the same string");


// 6.Declare a function that takes a name as an argument and tells the user what name they've entered. Try running it after it has been declared.

// function shouldRun(name) {
// 	alert(name);
// }
// shouldRun("Ethan");


// 7.Declare a function that takes no arguments but prints something to the console. Try running it after it has been declared.

function myCoolThing() {
	console.log('Hello World')
}

myCoolThing();


// 8.Declare a function that depending upon which virtual 'door' was entered tells the user they've received a different 'prize' in an alert. After declaring the function, try running it with different options. There must be at least 3 doors.



