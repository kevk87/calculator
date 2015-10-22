// input[type=button]
// Add number to the screen




	// var button = $(this).val();
	// var wholeNumber = $('#screen').val();
	// wholeNumber += button;
	// $("#screen").val(wholeNumber);


 
// var clear = function() {
// }


//problems 
//when pressing equals button it is adding the first variable (not second variable) so output + number1 not number2
//


// variables:
// 	clearScreen = false
// 	number1
// 	number2
// 	operatorClicked 
// 	output


// digits on click:
// 	if screen can be cleared (if clearScreen = true) // check if screen should be cleared
// 		clear screen
// 		set value of clearScreen to false // screen should not be cleared next time
// 	append value to screen

// addition on click:
// 	set value of number1 to current screen value
// 	set value of operatorClicked to "plus"
// 	set value of clearScreen to true // defer the clearing of the screen until later

// equals on click:
// 	set value of number2 to current screen value
// 	set value of output to (number1 operatorClicked number2)
// 	clear screen // clear the screen immediately
// 	append output to screen

// 	$("#screen").append($(this).val());
// 	number = $("#screen").html();


// after the equals button 
// 	if the digits are clicked again
// 		set the clearscreen = true
// 		append the new digits and store that as a variable
// 		number2 will remain as the factorial number which will add onto number1
// 		output will equal number1 += number2







var number1;
var number2;
var clearScreen = false;
var operatorClicked;
var output;
var multipleClicks = false;
var total = 0;
var negative = false;
var totalLengthScreen = false;


function reset(){

	console.log("reset called");

	$("#screen").html("");

	output = 0;
	number1 = 0;
	number2 = 0;
	lastOperand = 0;
	clearScreen = false;
	multipleClicks = 0;
}


$(".clear").on("click",function() {
	reset();
});



$(".negative").on("click",function() {
	if (negative == false) {
		$("#screen").prepend($(this).val());
		negative = true;
	}	else {
		($("#screen").slice(0));
		console.log($("#screen"));
		negative = false;
	}
})


$(".decimal").on("click",function() {
	if (multipleClicks == false) {
		$("#screen").append($(this).val());
		multipleClicks = true;
	} else {
		console.log("cannot add anymore decimal points");
	}
});


$(".digits").on("click",function() {

	if (clearScreen == true)  {
		$("#screen").html("");	
		$("#screen").append($(this).val());
		multipleClicks = false;
		clearScreen = false;
			
	} else {	
		$("#screen").append($(this).val());
	}
});


$(".operator").on("click",function() {
	number1 = $("#screen").html();
	operatorClicked = $(this).val();
	clearScreen = true;
});




$("#equals").on("click", function() {

	console.log(clearScreen);
	var constant;
	var output2; 
	var numberofNumbers = [];

	numberofNumbers.push(number1);
	numberofNumbers.push(number2);




	number2 = $("#screen").html();


	lastOperand = numberofNumbers.length;
	console.log(numberofNumbers);



	function compute() {
	switch(operatorClicked){
		case "+":
			output = addition(number1,number2);
			break;
		case "-": 
			output = subtraction(number1,number2);
			break;
		case "*":
			output = multiplication(number1,number2);
			break;
		case "/" :
			output = division(number1,number2);
			break;
		default:
			console.log("invalid operator: " + operatorClicked);
			break;			
	}

 }





	// function test2() {
	// 		constant = output - number1;
	// 		addition(constant, output);
	// }


	 // if (clearScreen == false) {
		compute();
		$("#screen").html("");
		$("#screen").html(output);
	
	// } else {
	// 	test2();
	// 	$("#screen").html("");
	// 	$("#screen").html(output2);
	//  }
 
 	
 	// $("#screen").html("");
 	// $("#screen").html(output);




});

// if (getLength(number1) >= 13) {
// 	console.log("throw error");
// } else if (getLength(number2) >=13) {
// 	console.log("throw 2nd error");
// } else if (getLength(output) >= 13) {
// 	console.log("throw 3rd error");
// } else {
// 	$("#screen").html();
// }

	function output2 (a,b,c,d) {
		for (i=0; i<d; i+=1) {
			c=a+b;
			a=b;
			b=c;

		} return c;
	}
	
	function addition (a,b) {
	 return (Number(a) + Number(b));		
	}
	function subtraction (a,b) {
	 return ((a - b));		
	}

	function multiplication (a,b) {
 	 return ((a * b));		
	}
	function division (a,b) {
	 return ((a/b));		
	}
	function getLength (numbers) {
	 return numbers.toString().length;
	}



// if (operatorClicked == "+") {
// 	output = addition(number1,number2);		
// } else if (operatorClicked == "-") {
// 	output = subtraction(number1,number2);
// } else if (operatorClicked =="*") {
// 	output = multiplication(number1,number2);
// } else if (operatorClicked =="/") {
// 	output = division(number1,number2);
// } else {
// 	console.log("test");
// 	}

//use two functions to get two values

// on operator button 
// 	if decimal button pressed twice 
//		throw an error preventing the button showing up twice 
//	else
//		display the decimal

//on clear button 
//	if C button is clicked 
//		clear the content on the display
//	update display

//on display 
//	if display is over 13 characters long 
//		capture value or change first replace first digit with the second value
//	update display

//on equals button {
//	if button is pressed 
//		show results of operation
//	else 
//		use other operators or new digits to continue the sequence
//}


//on digit button
//	if display can be cleared
//		display value = button value
//	else
//		display value += button value

//	update display


//on plus button
//	if operation in queue
//		execute operation

//	store current value in variable
//	add value and operation to queue
//	allow display to be cleared

//on minus button
//	if operation in queue
//		execute operation

//	store current value in variable
//	subtract value and operation to queue
//	allow display to be cleared

//on divide button
//	if operation in queue
//		execute operation

//	store current value in variable
//	divide value and operation to queue
//	allow display to be cleared

//on multiply button
//	if operation in queue
//		execute operation
	
// 	store current value in variable
// 	multiply value and operation to queue
// 	allow display to be cleared