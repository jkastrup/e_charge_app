// JavaScript Sign In and Register Buttons
//
// Loaded separate from main.js due to 
//	conflicts with the Google Maps API 
//	requiring certain id values in the HTML.

// Sign In button
$("#signInBtn").click(function(){
	console.log('Click Successful');
	$(location).attr('href', 'sign_in.html');
});

// Register button
$("#registerBtn").click(function(){
	console.log('Click Successful');
	$(location).attr('href', 'register.html');
});