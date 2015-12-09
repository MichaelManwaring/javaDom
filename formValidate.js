$(document).ready(function(){

// testing the date for validity.
// $("form").submit(function(){
// 	var month = $("#month").val() ;
// 	var day = $("#day").val();
// 	var year = $("#year").val();
// 	if (month.length == 2 || month.length == 1) {

// 			if( month > 0 && month < 13){
// 				console.log("Month Valid");

// 				if(day > 0 && day < 32){
// 					console.log("day valid")

// 					if( year > 1900 && year < 2015){
// 						console.log('Valid Year');
// 						console.log('This Date is fully valid');
// 					}else {
// 						console.log("year not valid");
// 					};
// 				} else {
// 					console.log("day not valid")
// 				};
// 			} else {
// 				console.log("Month not valid");
// 			};
// 	};

// 00/00/0000

// using numbers
// 10 characters, 8 digits
// slash at 2 and 5
$("form").submit(function(){

	// Establish date variable. Will take submitted.
	var date = $("#date").val();
	// test for 10 characters
	// if date length is 10 characters proceed to further test
	// else Alert date not valid

	if (date.length === 10){
		// further testing
		// Check for / at [2] and [5]
		// if date[2] == '/' && date[5] == '/' continue test
		// else alert format not valid
		if (date[2] == '/' && date[5] == '/') {
		 	//	further testing
		 	// Checking to make sure month is correct
		 	// create var for substring of month format
		 	var month = parseInt(date.substring(0, 2));
		 	// This is going to take the string that is delivered in substring and 
		 	// ensure its an integer
		 	// take month and check with if statement that it is between 0-13
		 	if (month > 0 && month < 13) {
		 		// further testing
		 		// repeat process for day variable and then for year variable.
		 		// create day variable and then parseint substring it.
		 		var day = parseInt(date.substring(3,5));
		 		// Testing that this is between 0-32
		 		if (day > 0 && day < 32) {
		 			// continue testing
		 			// repeat process for year
		 			var year = parseInt(date.substring(6,10));
		 			// testing if it is between 1900 - 2016
		 			if (year > 1900 && year < 2016) {
		 				alert("Date Valid");
		 			} else{
		 				alert("year not valid");
		 				console.log(year);
		 			}
		 		}else {
		 			alert("day not valid"); 
		 		}		
		 	}else {
		 		alert("month not valid");
		 	}
		}else {
			alert("format not valid");
		}	
	} else {
		alert("Date not valid.");
	}
	console.log(month);
	console.log(day);
	console.log(year);
	console.log(date);

	var correctPass = "12345";
	var guessPass = $("#password").val();


	// Testing if username is blank

	var name = $("#username").val();

	if (name != "") {
		console.log("username valid");

		// will nest password checking if statement inside name if statement.
		if (guessPass === correctPass) {
			console.log("correct password");

		}else {
			alert("Incorrect Password");
		}


	} else {
		alert("username cannot be blank!");
	}
	
	// Password checker works. Will nest this inside username blank if statement.
	// if (guessPass === correctPass) {
	// 	console.log("correct password");
	// }else {
	// 	alert("Incorrect Password");
	// }



 });

});


// var date = "00/00/0000"
// date[2] == '/' && date[5] == '/'
// substring












// var x = $("#month").val();

// function month(x){
// 	if (x > 0) {
// 		console.log("above 0");
	// } else if (x < 13) {
// 	// 	console.log("less than 12");
// 	} else {
// 	alert("Month is not valid");
// }











