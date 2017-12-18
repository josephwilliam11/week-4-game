//create the random number between 9 and 120

	var randomNumber = Math.floor((Math.random() * 101) +19) ;
	console.log(randomNumber);
	$("#randomNumber").append(randomNumber);

	var userScore = 0;

	var crystal1 = Math.floor((Math.random() * 12) +1);
	var crystal2 = Math.floor((Math.random() * 12) +1);
	var crystal3 = Math.floor((Math.random() * 12) +1);
	var crystal4 = Math.floor((Math.random() * 12) +1);
	var losses = 0;
	var wins = 0;

	console.log(crystal1);
	console.log(crystal2);
	console.log(crystal3);
	console.log(crystal4);


	//give on click event and values to the 4 crystals
	$(document).ready(function() {
		$("#image1").click(function() {
		userScore = userScore + crystal1;
		$("#userScore").html("Your Total Score is: " + userScore);
		
});

});

	$(document).ready(function() {
		$("#image2").click(function() {
		userScore = userScore + crystal2;
		$("#userScore").html("Your Total Score is: " + userScore);

});

});

	$(document).ready(function() {
		$("#image3").click(function() {
		userScore = userScore + crystal3;
		$("#userScore").html("Your Total Score is: " + userScore);
		

});

});

	$(document).ready(function() {
		$("#image4").click(function() {
		userScore = userScore + crystal4;
		$("#userScore").html("Your Total Score is: " + userScore);
		console.log(userScore);

});

		// if (userScore === randomNumber) {
		// 	alert("you win!");
		// }

		// if (userScore > randomNumber) {
		// 	alert("you lose!");
		// 	losses++
		// 	console.log(losses);
		// }

});

	if (userScore = randomNumber) {
		console.log("joe")
		wins++;
		//$("#wins").html("Wins: " + wins);
	} else if (userScore > randomNumber) {
		losses++;
		$("#wins").html("Wins: " + losses);

	}
	