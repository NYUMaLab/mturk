function StartCBTest() {
	$('#screensize_msg').hide();
	$('#colorblind_test').show();	
}


function CheckColorBlind() {
	
	var answer1 = document.getElementById('colorBlindAns1').value;
	var answer2 = document.getElementById('colorBlindAns2').value;
	var answer3 = document.getElementById('colorBlindAns3').value;
	var answer4 = document.getElementById('colorBlindAns4').value;
	var answer5 = document.getElementById('colorBlindAns5').value;
	var answer6 = document.getElementById('colorBlindAns6').value;
	var perf_CB = 0;

	if (answer1) {
		if (answer1 == 6) {
			perf_CB = 1;
		}
	}
	else {
		answer1 = 0;
	}
	
	if (answer2) {
		if (answer2 == 5) {
			perf_CB = perf_CB+1;
		}
	}
	else {
		answer2 = 0;
	}

	if (answer3) {
		if (answer3 == 42) {
			perf_CB = perf_CB+1;
		}
	}
	else {
		answer3 = 0;
	}

	if (answer4) {
		if (answer4 == 7) {
			perf_CB = perf_CB+1;
		}
	}
	else {
		answer4 = 0;
	}

	if (answer5) {
		if (answer5 == 29) {
			perf_CB = perf_CB+1;
		}
	}
	else {
		answer5 = 0;
	}
	
	if (answer6) {
		if (answer6 == 10) {
			perf_CB = perf_CB+1;
		}
	}
	else {
		answer6 = 0;
	}
	
	if (answer1*answer2*answer3*answer4*answer5*answer6 == 0) {
		alert('Please fill in all the blanks.');
	}
	else {
		if (perf_CB > 4) {
			$('#colorblind_test').hide();
			$('#demoPage1').show();
		}
		else {
			alert('I am sorry, you are not qualified to do this task. We appreciate your participation.');
			$('#colorblind_test').hide();		
		}
	}
	
}
