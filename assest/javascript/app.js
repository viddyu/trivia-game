window.onload = function () {
	$("#button1").click();
	$("#button2").click();
	$("#button3").click();
	$("#button4").click();
};

var time = 45;

var intervalId;

var quiz = [{
    questionA: "Who has hit the most home runs?",
		choicesA:["Babe Ruth", "Jime Thome" ,"Alex Rodriguez", "Bary Bonds"],
		AnswerA: "Bary Bonds"
	},{

		question2: "Which team has won the most world series?",
		choices2:["New York Yankees", "Cleveland Indians" ,"San Fransico Giants", "New York Mets"],
		Answer2: "New York Yankees"
	},{

		question3: "Which player has won the most gold gloves?",
		choices3:["Omar Vizquel", "Greg Maddux" ,"Ken Griffey Jr", "Derek Jeeter"],
		Answer3: "Greg Maddux"
	},{

		question4: "What year did baseball first professional baseball team start?",
		choices4:["1954", "1869" ,"1890", "1901"],
		Answer4: "1869"
	},{

		question5: "When was the last time the Cleveland Indians won the world series?",
		choices5:["NEVER", "1997" ,"1948", "1955"],
		Answer5: "1948"
	},{



	}];


	$("#qBox1").html("<h2>" +  + "</h2>");



	function run () {
		intervalId = setInterval(decrement, 1000);
	}
	function decrement() {
		time--;
		$("#numQuestion").html("<h2>" + time + "</h2>");
		if (time === 0) {
			alert("Time Up! Next Question");
			return;
		}
	}
	run();
	

