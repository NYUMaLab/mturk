var Ellipse_DEMO = new Array();
var oris_DEMO = new Array();
var cols_DEMO = new Array();
var rgb_idx_vec_DEMO = new Array();
var rgb_idx_raw_DEMO = 0 + stim_bins * Math.random(); 		// raw color index (non int)
var rgb_idx_DEMO = Math.floor(rgb_idx_raw_DEMO); 				// round color idex
var ori_idx_raw_DEMO = 0 + stim_bins * Math.random(); 		// raw orientation index (non int)
var orientation_DEMO = Math.floor(ori_idx_raw_DEMO); 			// round orientation idx
var hex_code_DEMO = Raphael.rgb(colMat_r[rgb_idx_DEMO], colMat_g[rgb_idx_DEMO], colMat_b[rgb_idx_DEMO]); 	// convert rgb to hex

oris_DEMO = orientation_DEMO;
cols_DEMO = hex_code_DEMO;
rgb_idx_vec_DEMO = rgb_idx_DEMO;

var ellipse_DEMO
var ellipse_DEMO_copy1
var ellipse_DEMO_copy2
var test = 'A';
var ori_info_DEMO
Ellipse_DEMO = Ellipse_DEMO.concat(test);
var hex_code_DEMO
var demo_idx = 1;
function DrawEllipse_DEMO() {
	
	hex_code_DEMO = Raphael.rgb(colMat_r[rgb_idx_vec_DEMO], colMat_g[rgb_idx_vec_DEMO], colMat_b[rgb_idx_vec_DEMO]); 	// convert rgb to hex
	ellipse_DEMO = paper.ellipse(location_x, location_y, axis_long, axis_short); 	// draw ellipse
	ellipse_DEMO.rotate(oris_DEMO, location_x, location_y); 	// rotate the ellipse
	ellipse_DEMO.attr({ fill: hex_code_DEMO, 'stroke-width': 0 }); 		// fill with color and no border

	ori_info_DEMO = oris_DEMO;	
	Ellipse_DEMO = Ellipse_DEMO.concat(ellipse_DEMO);	// Save the ellipses for the second display
	
	// draw copy1 and hide;
	ellipse_DEMO_copy1 = paper.ellipse(location_x, location_y, axis_long, axis_short); 	// draw ellipse
	ellipse_DEMO_copy1.rotate(oris_DEMO, location_x, location_y); 	// rotate the ellipse
	ellipse_DEMO_copy1.attr({ fill: hex_code_DEMO, 'stroke-width': 0 }); 		// fill with color and no border
	ellipse_DEMO_copy1.hide();

	// draw copy2 and hide;
	ellipse_DEMO_copy2 = paper.ellipse(location_x, location_y, axis_long, axis_short); 	// draw ellipse
	ellipse_DEMO_copy2.rotate(oris_DEMO, location_x, location_y); 	// rotate the ellipse
	ellipse_DEMO_copy2.attr({ fill: hex_code_DEMO, 'stroke-width': 0 }); 		// fill with color and no border
	ellipse_DEMO_copy2.hide();

}

// "Your vision is fine, let's start the demo!"
function DemoPage1() {
	$('#demoPage1').show();
	$('#screensize_msg').hide();
}
var paper = "";

// "Fixate!" + compute the coordinates
var offset
var width
var height
var centerX
var centerY
var rectangles_DEMO = new Array();
var hex_code_DEMO

// Click the circle and save the value
var reported_ori_id_DEMO

// blank page
function DemoPage2() {
	
	if (paper.length == 0) {
		paper = new Raphael(document.getElementById('canvas_container_DEMO'), screen_size, screen_size);
	}	
	
	$('#canvas_container_DEMO').show();	
	
	if (Ellipse_DEMO.length > 1) {
		ellipse_DEMO.hide();
	}

	$('#button_prev_demo3').hide();
	$('#button_next_demo3').hide();
	$('#button_next_demo2').show();
	
	$('#demoPage1').hide();
	$('#demoPage3').hide();
	$('#demoPage2').show();

}

// "Ellipse appear"
function DemoPage3() {

	if (Ellipse_DEMO.length > 1) {
		ellipse_DEMO.show();
	}
	else {
		DrawEllipse_DEMO();
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

// "Delay"
function DemoPage4() {

	// hide ellipses	
	ellipse_DEMO.hide();

	$('#button_prev_demo3').hide();
	$('#button_next_demo3').hide();
	$('#button_prev_demo5').hide();
	$('#button_next_demo5').hide();
	$('#button_prev_demo4').show();
	$('#button_next_demo4').show();

	$('#demoPage3').hide();
	$('#demoPage5').hide();
	$('#demoPage4').show();
	
	// hide response ellipse
	if (Ellipse_response_DEMO.length > 1) {
		ellipse_response_DEMO.hide();
		t_correct_DEMO.hide();
		t_reported_DEMO.hide();
	}
	
}

// "Estimate the orientation"
var t_correct_DEMO
var t_reported_DEMO
function DemoPage5() {

	subject_responded = 0;
	
	$('#demoPage4').hide();
	$('#demoPage6').hide();
	$('#demoPage5').show();
	
	$('#button_prev_demo4').hide();
	$('#button_next_demo4').hide();
	$('#button_prev_demo6').hide();
	$('#button_next_demo6').hide();
	$('#button_prev_demo5').show();
	$('#button_next_demo5').show();
	
	if (screen_idx == 1) { 
		t_correct_DEMO.hide();
		t_reported_DEMO.hide();
		ellipse_DEMO_copy1.hide();
		ellipse_DEMO_copy2.hide();
	}

	ResponseScreen_ori_DEMO();
	
//	if (subject_responded == 1) {
//		DemoPage6();
//	}
	
}

// compare the ori
var screen_idx
function DemoPage6() {

	screen_idx = 1;
	if (subject_responded == 1) {
	
		// hide the response ellipse
		ellipse_response_DEMO.hide();
		
		$('#button_prev_demo5').hide();
		$('#button_next_demo5').hide();
		$('#button_prev_demo7').hide();
		$('#button_next_demo7').hide();
		$('#button_prev_demo6').show();
		$('#button_next_demo6').show();
	
		$('#demoPage5').hide();
		$('#demoPage7').hide();
		$('#demoPage6').show();
		
		CompareOris_DEMO();
	}
	else {
		alert('Please estimate the orientation and click.');
	}
}

var t_correct_DEMO
var t_reported_DEMO
var Ellipse_response_DEMO = new Array();
Ellipse_response_DEMO = Ellipse_response_DEMO.concat(test);
var ellipse_response_DEMO
function ResponseScreen_ori_DEMO() {

	// draw ellipse for reporting
	var ori_response_idx_raw_DEMO = 0 + stim_bins * Math.random(); 		// raw orientation index (non int)
	var ori_response_ellipse_DEMO = Math.floor(ori_response_idx_raw_DEMO); 			// round orientation idx

	ellipse_response_DEMO = paper.ellipse(location_x, location_y, axis_long, axis_short); 	// draw ellipse
	ellipse_response_DEMO.rotate(ori_response_ellipse_DEMO, location_x, location_y); 	// rotate the ellipse
	ellipse_response_DEMO.attr({fill: hex_code_DEMO,'stroke-width': 0 }); 		// fill with color and no border
	
	Ellipse_response_DEMO = Ellipse_response_DEMO.concat(ellipse_response_DEMO);
	
	// Show orientation response screen
	ShowOriResponseScreen_DEMO();
}

//function ShowOriResponseScreen_DEMO() {
//	document.onmousemove = readMouseMove_DEMO;
//	document.addEventListener('keydown', function(event) {
//	    if(event.keyCode == 32 && demo_idx == 1) {
//		keyPressed_DEMO();
//	    }
//	});
//}

function ShowOriResponseScreen_DEMO(e) {
	document.onmousemove = readMouseMove_DEMO;

	var keycount = 0; 
	// Disable repetitive keydown
	down = {};
	$(document).keydown(function(event){
		var keycode = (event.keyCode ? event.keyCode : event.which);
		if(keycode == '32'){
			keycount ++;
			if (down['32'] == null) { // first press
				if (keycount == 1) {
					keyPressed_DEMO();
				}
				else {
					return;
				}
				down['32'] = true; // record that the key's down
			}
		}
	});
	
	$(document).keyup(function(event){
		var keycode = (event.keyCode ? event.keyCode : event.which);
		down[keycode] = null;
	});

}

var angleValue_DEMO
function readMouseMove_DEMO(e){

	var x_DEMO = e.clientX - $('#canvas_container_DEMO').offset().left
	var y_DEMO = e.clientY - $('#canvas_container_DEMO').offset().top	
	// compute the angle
	angleValue_DEMO = 180-Math.atan((center-y_DEMO)/(x_DEMO-center)) * 180/Math.PI;
	ellipse_response_DEMO.transform('r'+ angleValue_DEMO);
}

var angle_estimate_DEMO
var subject_responded

function keyPressed_DEMO() {

	// convert string to number
	angleValue_DEMO = Number(angleValue_DEMO);
	// up to 2 decimal points
	angle_estimate_DEMO = angleValue_DEMO.toFixed(2);
	
	subject_responded = 1;
	
	DemoPage6();
}

function CompareOris_DEMO() {
	ellipse_DEMO_copy1.show();
	ellipse_DEMO_copy2.show();
	
	// correct: top
	t_correct_DEMO = paper.text(200, 140, "Correct");
	t_correct_DEMO.attr({fill: "white", 'font-family': "Arial", 'font-size': 14});
	
	ellipse_DEMO_copy1.transform("t0,-30r" + ori_info_DEMO);
	
	// reported: bottom
	t_reported_DEMO = paper.text(200, 240, "Reported");
	t_reported_DEMO.attr({fill: "white", 'font-family': "Arial", 'font-size': 14});
	
	ellipse_DEMO_copy2.transform("t0,70r" + angle_estimate_DEMO);
	
}

function DemoPage7() {

	t_correct_DEMO.hide();
	t_reported_DEMO.hide();
	ellipse_DEMO_copy1.hide();
	ellipse_DEMO_copy2.hide();
	
	$('#button_prev_demo6').hide();
	$('#button_next_demo6').hide();
	$('#button_prev_demo7').show();
	$('#button_next_demo7').show();

	$('#demoPage6').hide();
	$('#demoPage7').show();
	
	$('#startTrial').show()
}


