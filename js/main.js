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
var firstEquation = true;
var memoryButton;
var outputDisplayed = false;
var switchEqualsFunction = false;



function reset(){

	console.log("reset called");

	$("#screen").html("");

	output = null;
	number1 = null;
	number2 = null;
	lastOperand = 0;
	clearScreen = false;
	multipleClicks = 0;
	firstEquation = true;
}



function compute() {
	switch(operatorClicked){
		case "+":
			output = addition(Number(number1),Number(number2));
			break;
		case "-": 
			output = Number(subtraction(number1,number2));
			break;
		case "*":
			output = Number(multiplication(number1,number2));
			break;
		case "/" :
			output = Number(division(number1,number2));
			break;
		default:
			console.log("invalid operator: " + operatorClicked);
			break;			
	}
}


$(".clear").on("click",function() {
	reset();
	});



// Memory memoryButton
// when memory plus button is clicked
// if  memoryButton is not stored 
// 		store the variable
// 		else
// 		add the value on the screen to the stored variable



$(".memory").on("click",function() {
	switch ($(this).val()) {
	case "MR":
		($("#screen").html(memoryButton));
		clearScreen = true;
		break;
	case "MC":
		memoryButton = null;
		break;
	case "M+":
		if (memoryButton == null) {
			memoryButton = Number($("#screen").html());
			clearScreen = true;
		} else {	
		memoryButton +=(Number($("#screen").html())); 	
		}
		break;
	case "M-":
		if (memoryButton == null) {
			memoryButton = Number($("#screen").html());
			clearScreen = true;
		} else {	
		memoryButton -=(Number($("#screen").html())); 	
		}
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
	

	if (clearScreen == true)  {
		$("#screen").html("");	
		$("#screen").append($(this).val());
		clearScreen = false;
		outputDisplayed = false;
		switchEqualsFunction = true;
	} else {
		if ($("#screen").html().length <= 12) {		
			$("#screen").append($(this).val());
		} else {
		multipleClicks = false;
		console.log("cannot add more");
		}
	}
});

$("body").keydown(function(e) {
	if (e.keyCode >= 48 && e.keyCode <=57 || e.keyCode == 110 && clearScreen == true) {
		if ($("#screen").html().length <= 12) {
		// $("#screen").html("")
		$("#screen").append(Number(String.fromCharCode(e.keyCode)));
		clearScreen = false;
	} else {
		console.log("too long");
	}
		console.log(e.keyCode);
	} else if (e.keyCode == 13) {
		compute();
		$("#screen").html(output);
	} else if (e.keyCode >= 106 && e.keyCode <= 111) {
		operatorClicked = $(this).String.fromCharCode(e.keyCode);
	} else {
		console.log("invalid");
	}
});


// if number1 is not null and number2 is null {
// 	store the operatorClicked value 
// 	// store number2
// 	// compute 
// 	// display output
// 	number2 = $("#screen").html();
// 	compute();
// 	$("#screen").html("");
// 	$("#screen").html(output);
// 	clearScreen = true;
// // }	else if number1 and number2 are not null stored {
// // 	store the operatorClicked value
// // 	clearScreen = true
// // 	number2 will equal the new user inputted value
// // 	number1 will equal output
// // }	
// }
// else if number1 is null {
// 	store number1 as variable
// 	number2 = null;
// 	store the operatorClicked value
// 	clearScreen = true
// }
// have to disable the operator button
//current errors
// other operators are not getting correctly stored



$(".operator").on("click",function() {
	multipleClicks = false;

	if (number1 == null && number2 == null) {
		number1 = $("#screen").html();
		number2 = null;
		operatorClicked = $(this).val();
		clearScreen = true;
		console.log("1: " + number1 + " " + operatorClicked + " " + number2 + " = " + output + " " + outputDisplayed);
	
	} 	else if (number1 != null && number2 == null){	
		number2 = $("#screen").html();
		operatorClicked = $(this).val();
		compute();
		$("#screen").html("");
		$("#screen").html(output);
		clearScreen = true;
		outputDisplayed = true;

		console.log("2: " + number1 + " " + operatorClicked + " " + number2 + " = " + output + " " + outputDisplayed);
		
	}	else if (number1 != null && number2 != null) {
				if (outputDisplayed == true) {
					operatorClicked = $(this).val();
					console.log("SWITCH");
					console.log("5: " + number1 + " " + operatorClicked + " " + number2 + " = " + output + " " + outputDisplayed);
					clearScreen = true;
				} else {
					operatorClicked = $(this).val();
					number1 = output;
					number2 = $("#screen").html();
					compute();
					console.log("3: " + number1 + " " + operatorClicked + " " + number2 + " = " + output + " " + outputDisplayed);
					$("#screen").html("");
					$("#screen").html(output);
					clearScreen = true;	
					outputDisplayed = true;	
				}
	} 	else {
		console.log("4: " + number1 + " " + operatorClicked + " " + number2 + " = " + output + " " + outputDisplayed);
	}


	// number1 = $("#screen").html();
	// number2 = null;
	// operatorClicked = $(this).val();
	// clearScreen = true;
	
	// totalLengthScreen = false;
	
});



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


	


$("#equals").on("click", function() {

		multipleClicks = false;
	
	
		// if the user types in new number or press equals again
		// clearScreen = true;
	if (number2 != null) {
		if (switchEqualsFunction == false) { 
			number1 = output;
			compute();
			$("#screen").html("");
			$("#screen").html(output);
			outputDisplayed = true;
			clearScreen = true;
			console.log("This is the first " + number1,number2,output,switchEqualsFunction);
		} else {
			number1 = output;
			number2 = $("#screen").html();
			compute();
			$("#screen").html("");
			$("#screen").html(output);
			outputDisplayed = true;
			clearScreen = true;
			switchEqualsFunction = false;
			console.log("This is the second " + number1,number2,output,switchEqualsFunction);
		}
	} else {
		number2 = $("#screen").html();
		compute();
		$("#screen").html("");
		$("#screen").html(output);
		outputDisplayed = true;
		clearScreen = true;
		switchEqualsFunction = false;
		console.log("This is the third " + number1,number2,output);
	
	}

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


	// 	if (number2 != null) {
	// 	number1 = output;
	// 	compute();
	// 	$("#screen").html("");
	// 	$("#screen").html(output);
	// 	clearScreen = true;
	// 	console.log("This is the first " + number1,number2,output);
	// } else {
	// 	number2 = $("#screen").html();
	// 	compute();
	// 	$("#screen").html("");
	// 	$("#screen").html(output);
	// 	clearScreen = true;
	// 	console.log("This is the second " + number1,number2,output);
	// }



	
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