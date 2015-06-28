function DemoPage1() {
	$('#demoPage1').show();
	$('#screensize_msg').hide();
}
var paper = "";
function DemoPage2() {
	if (paper.length == 0) {
		paper = new Raphael(document.getElementById('canvas_container'), screen_size, screen_size);
	}	
	
	$('#canvas_container').show();	
	Drawfixation();
	if (Ellipses_DEMO.length > 0) {
		for (var i = 0; i < 4; i += 1) {
			Ellipses_DEMO[i].hide();
		}
	}
	$('#button_prev_demo3').hide();
	$('#button_next_demo3').hide();
	$('#button_next_demo2').show();
	
	$('#demoPage1').hide();
	$('#demoPage3').hide();
	$('#demoPage2').show();
}

function DemoPage3() {
	if (Ellipses_DEMO.length > 0) {
		for (var i = 0; i < 4; i += 1) {
			Ellipses_DEMO[i].show();
		}
	}
	else {
		DrawEllipses_DEMO();
	}
	
	$('#button_next_demo2').hide();
	$('#button_prev_demo4').hide();
	$('#button_next_demo4').hide();
	$('#button_prev_demo3').show();
	$('#button_next_demo3').show();

	$('#demoPage2').hide();
	$('#demoPage4').hide();
	$('#demoPage3').show();
}

function DemoPage4() {
	// hide ellipses	
	for (var i = 0; i < 4; i += 1) {
		Ellipses_DEMO[i].hide();
	}

	if (Ellipses2_DEMO.length > 0) {
		for (var i = 0; i < 4; i += 1) {
			Ellipses2_DEMO[i].hide();
		}
	}
	
	$('#button_prev_demo3').hide();
	$('#button_next_demo3').hide();
	$('#button_prev_demo5').hide();
	$('#button_next_demo5').hide();
	$('#button_prev_demo4').show();
	$('#button_next_demo4').show();

	$('#demoPage3').hide();
	$('#demoPage5').hide();
	$('#demoPage4').show();	
}

function DemoPage5() {
	if (Ellipses2_DEMO.length > 0) {
		for (var i = 0; i < 4; i += 1) {
			Ellipses2_DEMO[i].show();
		}
	}
	else {
		DrawEllipsesAgainLast_DEMO();
	}

	if (circles_DEMO.length > 0) {
		for (var i = 0; i < 4; i += 1) {
			circles_DEMO[i].hide();
		}
	}
	$('#button_prev_demo4').hide();
	$('#button_next_demo4').hide();
	$('#button_prev_demo6').hide();
	$('#button_next_demo6').hide();
	$('#button_prev_demo5').show();
	$('#button_next_demo5').show();

	$('#demoPage4').hide();
	$('#demoPage6').hide();
	$('#demoPage5').show();	
}

function DemoPage6() {
	// hide ellipses	
	for (var i = 0; i < 4; i += 1) {
		Ellipses2_DEMO[i].hide();
	}

	if (circles_DEMO.length > 0) {
		for (var i = 0; i < 4; i += 1) {
			circles_DEMO[i].show();
		}
		crossVertical.attr({stroke: "white", 'stroke-width':2});
		crossHorizontal.attr({stroke: "white", 'stroke-width':2});		
	}
	else {
		DrawCircles_DEMO();
	}
	
	$('#button_prev_demo5').hide();
	$('#button_next_demo5').hide();
	$('#button_prev_demo7').hide();
	$('#button_next_demo7').hide();
	$('#button_prev_demo6').show();
	$('#button_next_demo6').show();
	
	$('#demoPage5').hide();
	$('#demoPage7').hide();
	$('#demoPage6').show();
	perfIdx_DEMO = 2;
}

function DemoPage7() {
	if (perfIdx_DEMO < 2) {
		$('#button_prev_demo6').hide();
		$('#button_next_demo6').hide();
		$('#button_prev_demo7').show();
		$('#button_next_demo7').show();
		
		$('#demoPage5').hide();
		$('#demoPage6').hide();
		$('#demoPage7').show();
	}
	else {
		alert('Please click a circle.');		
	}
}

function DemoPage8() {
	for (var i = 0; i < 4; i += 1) {
		circles_DEMO[i].hide();
	}
	crossVertical.hide();
	crossHorizontal.hide();
	
	$('#demoPage7').hide();
	$('#button_prev_demo7').hide();
	$('#button_next_demo7').hide();

	$('#demoPage8').show();
	$('#startTrial').show();
}

function StartTask() {
	$('#button_continue_to_task').hide();
	$('#startTrial').show();
}

var circles_DEMO = new Array();
var perfIdx_DEMO
function DrawCircles_DEMO() {
	// Draw circles
	for (var i = 0; i < 4; i += 1) {
		circles_DEMO[i] = paper.circle(locations_x[i],locations_y[i],axis_long*2); 	
		circles_DEMO[i].attr({ fill: "gray", stroke: "white", 'stroke-width': 1});
	}
	
	// cursor shape changes when the cursor is in the circle
	for (var i = 0; i < 4; i += 1) {
		circles_DEMO[i].node.onmouseover = function() {  
			this.style.cursor = 'pointer';  
		}
	}

	targetIndex_DEMO = targetIdx_DEMO;	
	
	circles_DEMO[0].node.onclick = function() {
		if (targetIndex_DEMO == 0) {
			perfIdx_DEMO = 1;
			FeedbackCorrect_DEMO();
		}
		else	{
			perfIdx_DEMO = 0;
			FeedbackIncorrect_DEMO();
		}
	}
	circles_DEMO[1].node.onclick = function() {
		if (targetIndex_DEMO == 1) {
			perfIdx_DEMO = 1;
			FeedbackCorrect_DEMO();
		}
		else	{
			perfIdx_DEMO = 0;
			FeedbackIncorrect_DEMO();
		}
	}
	circles_DEMO[2].node.onclick = function() {
		if (targetIndex_DEMO == 2) {
			perfIdx_DEMO = 1;
			FeedbackCorrect_DEMO();
		}
		else	{
			perfIdx_DEMO = 0;
			FeedbackIncorrect_DEMO();
		}
	}
	circles_DEMO[3].node.onclick = function() {
		if (targetIndex_DEMO == 3) {
			perfIdx_DEMO = 1;
			FeedbackCorrect_DEMO();
		}
		else	{
			perfIdx_DEMO = 0;
			FeedbackIncorrect_DEMO();
		}
	}
}

// Feedback: correct
function FeedbackCorrect_DEMO() {
	crossVertical.attr({stroke: "#29d43e", 'stroke-width':2});
	crossHorizontal.attr({stroke: "#29d43e", 'stroke-width':2});
	// hide circles
	for (var i = 0; i < 4; i +=1) {
		circles_DEMO[i].hide();
	}
	DemoPage7();
}

// Feedback: Incorrect
function FeedbackIncorrect_DEMO() {
	crossVertical.attr({stroke: "red", 'stroke-width':2});
	crossHorizontal.attr({stroke: "red", 'stroke-width':2});
	// hide circles
	for (var i = 0; i < 4; i +=1) {
		circles_DEMO[i].hide();
	}
	DemoPage7();
}

