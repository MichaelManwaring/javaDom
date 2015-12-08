$(document).ready(function(){

// testing the date for validity.
$("form").submit(function(){
	if($("#month").val() > 0 && $("#month").val() < 13){
		console.log("Month Valid");

		if($("#day").val() > 0 && $("#day").val() < 32){
			console.log("day valid")

			if($("#year").val() > 1900 && $("#year").val() < 2015){
				console.log('Valid Year');
				console.log('This Date is fully valid');
			}else {
				console.log("year not valid");
			};
		} else {
			console.log("day not valid")
		};
	} else {
		console.log("Month not valid");
	};
	
	
	// if($("#day").val() > 0 && $("#day").val() < 32){
	// 	console.log("day valid")
	// } else {
	// 	console.log("day not valid")
	// };
	

	// if($("#year").val() > 1900 && $("#year").val() < 2015){
	// 	alert('Valid Year');
	// }else {
	// 	alert("year not valid");
	// };
});









// var x = $("#month").val();

// function month(x){
// 	if (x > 0) {
// 		console.log("above 0");
	// } else if (x < 13) {
// 	// 	console.log("less than 12");
// 	} else {
// 	alert("Month is not valid");
// }










});

