/*
	WEB 303 Assignment 1 - jQuery
	{Name: Harsha Jagadeesh}
	{Stuent ID: 0810531}
*/


$(document).ready(function() {

    
    // Adding the event handler
    $('#yearly-salary, #percent').on('change', function() {

        // Getting the input values
        var Inputsalary = ($('#yearly-salary').val());
        var Inputpercent = ($('#percent').val());

        // Calculation
        var calculateAmount = Inputsalary * Inputpercent / 100;
        
        // Formatting and rounding the values
        var Amtformatted = '$' + calculateAmount.toFixed(2);

        // Updating and displaying the amount
        $('#amount').text(Amtformatted);


    });
});


