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
//for decimals
var multipleClicks = false;
//check for negative/positive toggle
var negative = false;
//check if number is too long
var totalLengthScreen = false;
//check if the zero is pressed on the first value
// var zeroPressed = false;
//counter variable to check if input is longer than 12 numbers/characters
var numberOfClicks = 0;
var firstEquation = true;
var memoryButton;




function reset(){

	console.log("reset called");

	$("#screen").html("");

	output = null;
	number1 = null;
	number2 = null;
	lastOperand = 0;
	clearScreen = false;
	multipleClicks = 0;
	numberOfClicks = 0;
	firstEquation = true;
}

function numberClicks() {
	numberOfClicks +=1;	
}

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

function numbersStored() {
	if (number1 !== null && number2 == null) {
		number2 = $("#screen").html();
		numberStored = true;
	} else if (number1 !== null && number2 !== null) {
		numberStored = true;
	} else	{
		numberStored = false;
	}
	return numberStored;
}





$(".clear").on("click",function() {
	reset();
	});


$(".memory").on("click",function() {
	switch ($(this).val()) {
	case "MR":
		($("#screen").html(memoryButton));
		break;
	case "MC":
		memoryButton = null;
		break;
	case "M+":
		memoryButton = $("#screen").html(); 
		output = addition(output,memoryButton);
		$("#screen").html(output);
		break;
	case "M-":
		memoryButton = $("#screen").html(); 
		output = subtraction(output,memoryButton);
			$("#screen").html(output);
		break;
		default: 
			console.log("invalid");
			break;
	}
	console.log(memoryButton);
});


$(".negative").on("click",function() {
	var screenValue = Number($("#screen").html());
	if (negative == false) {	
		$("#screen").html((-Math.abs(screenValue)));
		negative = true;
	} else {
		$("#screen").html((Math.abs(screenValue)));
		negative = false;
		}
	});


$(".decimal").on("click",function() {
		if (multipleClicks == false) {
			$("#screen").append($(this).val());
			multipleClicks = true;
		} else {
			// clearScreen = true;
			console.log("cannot add anymore decimal points");
		}
	});

$("#zero").on("click",function() {
		if ($("#screen").html().length > 0) {
			if( clearScreen == false) {
			$("#screen").append($(this).val());
			}	else {
				console.log("do nothing");
			}	
		}
	});
	

$(".digits").on("click",function(e) {
	
	numberClicks();

	if (clearScreen == true)  {
		$("#screen").html("");	
		$("#screen").append($(this).val());
		multipleClicks = false;
		clearScreen = false;

	} else {

		if (numberOfClicks <= 12)  {
			$("#screen").append($(this).val());
			totalLengthScreen = false;
		} 
		else {
		totalLengthScreen = true;
		console.log("cannot add more");
		}
	}
});


$(".operator").on("click",function() {

	numberOfClicks = 0;
	multipleClicks = true;
	number1 = $("#screen").html();
	
	// var test = true;
	// numberOfClicks = 0;
	// // number1 = $("#screen").html();

	// 	if (number1 == null && firstEquation == true && test == true) {
	// 	number1 = $("#screen").html();
	// 	clearScreen = true;
	// 	test = false;
	// 		if (number2 == null && firstEquation == true && test == false) {
	// 			number2 = Number($("#screen").html());
	// 			console.log(number1);
	// 			clearScreen = true;
	// 			firstEquation = false;
	// 		} else {
	// 			console.log("need second value");
	// 		}
	// }	else {
	// 	// number2 = $("#screen").html();
	// 	Number(number2) = Number(number1);
	// 	Number(number1) = Number(output);
	// }

	// operatorClicked = $(this).val();
	// compute(number1, number2);
	// $("#screen").html(output);	





	// if (number1 == null && firstEquation == true) {
	// 	number1 = $("#screen").html();
	// 	firstEquation = false;
	// 	clearScreen = true;

	// }	else {
	// 	// number2 = $("#screen").html();
	// 	number2 = number1;
	// 	number1 = output;	
	// }







	// number1 = $("#screen").html();


	// if (number1 == null && clearScreen == false) {
	//	number1 = $("#screen").html();
	//	console.log("added first variable"); 
	//	clearScreen = true;
	//		if (number2 == null) {	
	//			clearScreen = false;		
	//			number2 = Number($("#screen").html());
	//			console.log("added second variable"); 
	//			compute();
	//			console.log(number2);
	//			$("#screen").html(output);
			
	//	} else {
	//		console.log("wait until equal button is pressed");
	//	}
	//} else {
	//	number2 = $("#screen").html();
	//	number1 = output;
	//	compute();
	//	$("#screen").html(output);
	// }


	number2 = null;
	operatorClicked = $(this).val();
	clearScreen = true;
	totalLengthScreen = false;
});

	


$("#equals").on("click", function() {
	// console.log($("#screen").html().length);
	// if ($("#screen").html().length >= 12) {
	// 	console.log("answer too long");
	// 	$("#screen").html("error");
	// } else {
	// 	$("#screen").html();
	// }

	// number2 = $("#screen").html();

//test
	// if (firstEquation == true) {
	// 	number2 = $("#screen").html();
	// 	compute();
	// 	$("#screen").html("");
	// 	$("#screen").html(output);
	// 	clearScreen = true;
	// 	firstEquation = false;
	// } else { 
	// 	number1 = output;
	// 	compute();
	// 	$("#screen").html("");
	// 	$("#screen").html(output);
	// }

	multipleClicks = false;
	
	
		// if the user types in new number or press equals again
		// clearScreen = true;
	if (number2 != null) {
		number1 = output;
		compute();
		$("#screen").html("");
		$("#screen").html(output);
		clearScreen = true;
		console.log("This is the first " + number1,number2,output);
	} else {
		number2 = $("#screen").html();
		compute();
		$("#screen").html("");
		$("#screen").html(output);
		clearScreen = true;
		console.log("This is the second " + number1,number2,output);
	}


	
 //	if (number2 == null) {
	//	number2 = $("#screen").html();
	//	compute();
	//	$("#screen").html("");
	//	$("#screen").html(output); 
	//} else {
	//	number1 = output;
	//	compute()
	//	$("#screen").html("");
	//	$("#screen").html(output);

		
	// }



		// compute();
		// $("#screen").html("");
		// $("#screen").html(output);
		// clearScreen = true;
	
});


	console.log(number2);

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