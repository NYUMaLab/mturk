// Trial numbers
var currentTrial = 0; 	// trial count
var nTrials = 4;	// total trial numbers
var paper
// precomputed CIE color codes
var colMat_r = [253, 253, 253, 254, 254, 254, 254, 254, 254, 254, 254, 254, 254, 254, 254, 254, 254, 254, 254, 254, 254, 253, 253, 253, 253, 252, 252, 252, 251, 251, 251, 250, 250, 249, 249, 248, 248, 247, 247, 246, 246, 245, 244, 244, 243, 242, 242, 241, 240, 239, 239, 238, 237, 236, 235, 235, 234, 233, 232, 231, 230, 229, 228, 227, 226, 225, 224, 223, 222, 221, 220, 219, 218, 217, 216, 215, 214, 213, 212, 210, 209, 208, 207, 206, 205, 203, 202, 201, 200, 199, 197, 196, 195, 194, 193, 191, 190, 189, 187, 186, 185, 184, 182, 181, 180, 179, 177, 176, 175, 173, 172, 171, 169, 168, 167, 165, 164, 163, 161, 160, 159, 157, 156, 155, 153, 152, 151, 149, 148, 147, 145, 144, 143, 141, 140, 139, 137, 136, 135, 133, 132, 130, 129, 128, 126, 125, 124, 122, 121, 120, 118, 117, 115, 114, 113, 111, 110, 108, 107, 106, 104, 103, 101, 100, 98, 97, 95, 94, 92, 91, 90, 88, 87, 85, 83, 82, 80, 79, 77, 76, 74, 73, 71, 69, 68, 66, 64, 63, 61, 59, 58, 56, 54, 52, 51, 49, 47, 45, 44, 42, 40, 38, 36, 35, 33, 31, 29, 28, 26, 25, 10, 9, 8, 8, 8, 8, 9, 9, 25, 26, 28, 29, 31, 33, 35, 37, 39, 41, 44, 46, 48, 50, 52, 55, 57, 59, 61, 63, 66, 68, 70, 72, 75, 77, 79, 81, 83, 86, 88, 90, 92, 94, 97, 99, 101, 103, 105, 108, 110, 112, 114, 116, 118, 120, 123, 125, 127, 129, 131, 133, 135, 137, 139, 141, 143, 145, 147, 149, 151, 153, 155, 157, 159, 161, 163, 165, 167, 169, 171, 173, 174, 176, 178, 180, 182, 183, 185, 187, 189, 190, 192, 194, 195, 197, 199, 200, 202, 203, 205, 206, 208, 209, 211, 212, 214, 215, 216, 218, 219, 220, 222, 223, 224, 225, 226, 228, 229, 230, 231, 232, 233, 234, 235, 236, 237, 238, 239, 240, 240, 241, 242, 243, 244, 244, 245, 246, 246, 247, 248, 248, 249, 249, 250, 250, 251, 251, 251, 252, 252, 252];
var colMat_g = [98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 99, 99, 99, 99, 100, 100, 100, 101, 101, 101, 102, 102, 103, 103, 104, 104, 105, 105, 106, 106, 107, 107, 108, 108, 109, 110, 110, 111, 111, 112, 113, 113, 114, 115, 115, 116, 117, 117, 118, 119, 119, 120, 121, 122, 122, 123, 124, 124, 125, 126, 126, 127, 128, 128, 129, 130, 130, 131, 132, 132, 133, 134, 134, 135, 136, 136, 137, 138, 138, 139, 139, 140, 141, 141, 142, 142, 143, 144, 144, 145, 145, 146, 146, 147, 147, 148, 148, 149, 149, 150, 150, 151, 151, 152, 152, 153, 153, 154, 154, 155, 155, 155, 156, 156, 157, 157, 157, 158, 158, 159, 159, 159, 160, 160, 160, 161, 161, 161, 162, 162, 162, 162, 163, 163, 163, 164, 164, 164, 164, 165, 165, 165, 165, 166, 166, 166, 166, 166, 167, 167, 167, 167, 167, 167, 168, 168, 168, 168, 168, 168, 169, 169, 169, 169, 169, 169, 169, 169, 169, 169, 170, 170, 170, 170, 170, 170, 170, 170, 170, 170, 170, 170, 170, 170, 170, 170, 170, 170, 170, 170, 170, 170, 170, 170, 170, 170, 170, 170, 170, 170, 170, 169, 169, 169, 169, 169, 169, 169, 169, 169, 168, 168, 168, 168, 168, 168, 168, 167, 167, 167, 167, 167, 166, 166, 166, 166, 166, 165, 165, 165, 165, 164, 164, 164, 163, 163, 163, 162, 162, 162, 162, 161, 161, 160, 160, 160, 159, 159, 159, 158, 158, 157, 157, 157, 156, 156, 155, 155, 154, 154, 153, 153, 152, 152, 151, 151, 150, 150, 149, 149, 148, 148, 147, 146, 146, 145, 145, 144, 143, 143, 142, 142, 141, 140, 140, 139, 138, 138, 137, 136, 136, 135, 134, 134, 133, 132, 131, 131, 130, 129, 129, 128, 127, 126, 126, 125, 124, 124, 123, 122, 121, 121, 120, 119, 118, 118, 117, 116, 116, 115, 114, 114, 113, 112, 112, 111, 110, 110, 109, 108, 108, 107, 107, 106, 106, 105, 104, 104, 103, 103, 103, 102, 102, 101, 101, 100, 100, 100, 99, 99, 99, 99, 98, 98, 98, 98, 98];
var colMat_b = [134, 132, 131, 129, 128, 126, 125, 123, 122, 120, 119, 118, 116, 115, 113, 112, 110, 109, 107, 106, 104, 103, 102, 100, 99, 97, 96, 94, 93, 92, 90, 89, 87, 86, 85, 83, 82, 81, 79, 78, 77, 75, 74, 73, 71, 70, 69, 67, 66, 65, 63, 62, 61, 60, 58, 57, 56, 54, 53, 52, 51, 49, 48, 47, 46, 45, 43, 42, 41, 40, 38, 37, 36, 35, 33, 32, 31, 30, 29, 27, 26, 25, 10, 9, 8, 7, 6, 5, 5, 4, 4, 3, 3, 3, 3, 3, 3, 3, 4, 4, 4, 5, 6, 7, 7, 8, 10, 25, 26, 27, 28, 30, 31, 32, 34, 35, 36, 38, 39, 40, 42, 43, 44, 46, 47, 48, 50, 51, 52, 54, 55, 56, 58, 59, 61, 62, 63, 65, 66, 68, 69, 71, 72, 73, 75, 76, 78, 79, 81, 82, 84, 85, 87, 88, 90, 91, 93, 94, 96, 97, 99, 100, 102, 103, 105, 106, 108, 109, 111, 112, 114, 116, 117, 119, 120, 122, 123, 125, 126, 128, 129, 131, 133, 134, 136, 137, 139, 140, 142, 143, 145, 146, 148, 149, 151, 152, 154, 155, 157, 158, 160, 161, 162, 164, 165, 167, 168, 169, 171, 172, 173, 175, 176, 177, 179, 180, 181, 182, 184, 185, 186, 187, 188, 189, 191, 192, 193, 194, 195, 196, 197, 198, 199, 200, 201, 202, 202, 203, 204, 205, 206, 207, 207, 208, 209, 209, 210, 211, 211, 212, 212, 213, 213, 214, 214, 215, 215, 216, 216, 216, 217, 217, 217, 217, 217, 218, 218, 218, 218, 218, 218, 218, 218, 218, 218, 218, 218, 218, 217, 217, 217, 217, 216, 216, 216, 215, 215, 215, 214, 214, 213, 213, 212, 212, 211, 210, 210, 209, 208, 208, 207, 206, 205, 205, 204, 203, 202, 201, 200, 199, 198, 197, 196, 195, 194, 193, 192, 191, 190, 189, 188, 187, 186, 184, 183, 182, 181, 180, 178, 177, 176, 175, 173, 172, 171, 169, 168, 167, 165, 164, 163, 161, 160, 158, 157, 156, 154, 153, 151, 150, 148, 147, 145, 144, 143, 141, 140, 138, 137, 135];
var stim_bins = 360;
// location of the ellipse
var screen_size = 400;	// screen size
var location_x = 200;
var location_y = 200;
var center = screen_size/2;
var r_circle = 45//60;  // radius of the color wheel 
var rectSize_x = 15//30; // size of the tiny rectangles in the colro wheel
var rectSize_y = 1.5//2;

// size of the ellipse
var axis_long = 94 / 6;
var axis_short = 41 / 6;
// delays (ms)
var delay = 1000;
var stimtime = 150; // with 100 ms stimtime, some stim don't appear (maybe too fast to load the screen)
var delayBfResponse = 500;

var oris = new Array();
var cols = new Array();
var rgb_idx_vec = new Array();
var displayOriValue = new Array();
var displayColValue = new Array();

var rectangles = new Array();
var OriResponseValue = new Array();
var Ellipse = new Array();

var angle_estimateValue = new Array();
//function ShowScreenMsg() {
//	if (IsTurkPreview()) {
//		$("body").append("<div id='previewMode'><p>PREVIEWING THE HIT</p><p>PREVIEWING THE HIT</p><p>PREVIEWING THE HIT</p> </div>");		
//		alert('Please accept the HIT before starting');
//		return;
//	}
//	$('#summary').hide();
//	$('#screensize_msg').show();
	
//}
function ShowScreenMsg() {
	$('#summary').hide();
	$('#screensize_msg').show();	
}

// Start the very first trial
function FirstTrial() {
	demo_idx = 0;
	
	// hide demo
	$('#canvas_container_DEMO').hide();
	$('#demoPage7').hide();
	// Draw canvas at the beginning of the trial (no need to draw it on each trial)
	paper = new Raphael(document.getElementById('canvas_container'), screen_size, screen_size);
	$('#canvas_container').show();	

	$('body').css('cursor', 'none');

	NextTrial();	
}

// Single complete trial
function IrrelevantTrial() {

	// hide cursor
	$('body').css('cursor', 'none');	
	// 1st display
	setTimeout(function() {
		DrawEllipse_color();
	},delay*1);

	// delay		
	setTimeout(function() {
		ellipse_col.hide();
	},delay*1+stimtime);

	// response screen
	setTimeout(function() {
		ResponseScreen_color();
	},delay*1.6+stimtime);
}

function RelevantTrial() {
	
	// hide cursor
	$('body').css('cursor', 'none');	
	
	// 1st display
	setTimeout(function() {
		DrawEllipse();
	},delay*1);

	// delay		
	setTimeout(function() {
		ellipse.hide();
	},delay*1+stimtime);

	// response screen
	setTimeout(function() {
		ResponseScreen_ori();
	},delay*2+stimtime);
}

// Draw an ellipse
var ellipse_copy1
var ellipse_copy2
var ori_info
var col_info
var ellipse
function DrawEllipse() {
        var rgb_idx_raw = 0 + stim_bins * Math.random(); 		// raw color index (non int)
        var rgb_idx = Math.floor(rgb_idx_raw); 				// round color idex
        var ori_idx_raw = 0 + stim_bins * Math.random(); 		// raw orientation index (non int)
        var orientation = Math.floor(ori_idx_raw); 			// round orientation idx
        var hex_code = Raphael.rgb(colMat_r[rgb_idx], colMat_g[rgb_idx], colMat_b[rgb_idx]); 	// convert rgb to hex

        ellipse = paper.ellipse(location_x, location_y, axis_long, axis_short); 	// draw ellipse
        ellipse.rotate(orientation, location_x, location_y); 	// rotate the ellipse

	ellipse.attr({ fill: hex_code, 'stroke-width': 0 }); 		// fill with color and no border
	
	ori_info = orientation;
	col_info = hex_code;
        oris = orientation;
        cols = hex_code;
        rgb_idx_vec = rgb_idx;

        // save data: first stimuli
	displayOriValue = displayOriValue.concat(oris);
	displayColValue = displayColValue.concat(rgb_idx_vec);
	
	// draw copy 1 and 2 (for feedback)
	ellipse_copy1 = paper.ellipse(location_x, location_y, axis_long, axis_short); 	// draw ellipse
	ellipse_copy1.rotate(ori_info, location_x, location_y); 	// rotate the ellipse
	ellipse_copy1.attr({ fill: hex_code, 'stroke-width': 0 }); 		// fill with color and no border
	ellipse_copy1.hide();
	
	ellipse_copy2 = paper.ellipse(location_x, location_y, axis_long, axis_short); 	// draw ellipse
	ellipse_copy2.rotate(ori_info, location_x, location_y); 	// rotate the ellipse
	ellipse_copy2.attr({ fill: hex_code, 'stroke-width': 0 }); 		// fill with color and no border
	ellipse_copy2.hide();
	
	// correct: top
	t_correct = paper.text(200, 140, "Correct");
	t_correct.attr({fill: "white", 'font-family': "Arial", 'font-size': 14});
	
	// reported: bottom
	t_reported = paper.text(200, 240, "Reported");
	t_reported.attr({fill: "white", 'font-family': "Arial", 'font-size': 14});	
	
	t_correct.hide();
	t_reported.hide();
	
	// Message (question)
	t_response = paper.text(200, 100, "What was the orientation? \n (Press the spacebar when you decide.)");
	t_response.attr({fill: "white", 'font-family': "Arial", 'font-size': 14});

	t_response.hide();		
}

var ellipse_col
function DrawEllipse_color() {
        var rgb_idx_raw = 0 + stim_bins * Math.random(); 		// raw color index (non int)
        var rgb_idx = Math.floor(rgb_idx_raw); 				// round color idex
        var ori_idx_raw = 0 + stim_bins * Math.random(); 		// raw orientation index (non int)
        var orientation = Math.floor(ori_idx_raw); 			// round orientation idx
        var hex_code = Raphael.rgb(colMat_r[rgb_idx], colMat_g[rgb_idx], colMat_b[rgb_idx]); 	// convert rgb to hex

        ellipse_col = paper.ellipse(location_x, location_y, axis_long, axis_short); 	// draw ellipse
        ellipse_col.rotate(orientation, location_x, location_y); 	// rotate the ellipse

	ellipse_col.attr({ fill: hex_code, 'stroke-width': 0 }); 		// fill with color and no border
	
        oris = orientation;
        rgb_idx_vec = rgb_idx;

        // save data: first stimuli
	displayOriValue = displayOriValue.concat(oris);
	displayColValue = displayColValue.concat(rgb_idx_vec);
}

// Draw color wheel
function DrawColorWheel() {
	for (var i = 0; i < 360; i += 1) {
		var rgb_wheel = i; 				// round color idex
		var ori_wheel = i * Math.PI / 180;
		var location_x = center + r_circle * Math.cos(ori_wheel)-7; // I don't know why but I need to correct the x position by subtracting 7
		var location_y = center - r_circle * Math.sin(ori_wheel);
		var hex_code = Raphael.rgb(colMat_r[rgb_wheel], colMat_g[rgb_wheel], colMat_b[rgb_wheel]); 	// convert rgb to hex
	
		// Thin bars form the color wheel
		rectangles[i] = paper.rect(location_x, location_y, rectSize_x, rectSize_y); 
		rectangles[i].attr({fill: hex_code, 'stroke-width': 0 }); // fill with color and no border
		rectangles[i].rotate(-i, location_x + rectSize_x/2, location_y + rectSize_y/2);
	
		// Cursor shape changes when the cursor is in the bar
		rectangles[i].node.onmouseover = function() {  
			this.style.cursor = 'pointer';  
		}
	
		// Assign IDs for clicks
		rectangles[i].id=""+rgb_wheel;
		// Click then save the value
		rectangles[i].click(handleClick);
	};
}
var reported_color_id
// Click the circle and save the value
function handleClick() {
	// get your id
	var id = this.id; 
	document.getElementById("id");
	// save the value
	ColResponseValue = ColResponseValue.concat(id);

	// hide colorwheel
	for (var i = 0; i < 360; i += 1) {
		rectangles[i].hide();	
	}
	reported_color_id = id;
	
	t1.hide();
	TerminateExperiment();
}

// Response screen
function ResponseScreen_color() {
	
	// Show cursor: for the color wheel (not orientation)
	$('body').css('cursor', 'default');

	// Instruction for the last trial
	LastInstruction();
	
	// Draw color wheel
	DrawColorWheel();
}

var ellipse_response
function ResponseScreen_ori() {

	// draw ellipse for reporting
	var ori_response_idx_raw = 0 + stim_bins * Math.random(); 		// raw orientation index (non int)
	var ori_response_ellipse = Math.floor(ori_response_idx_raw); 			// round orientation idx

	ellipse_response = paper.ellipse(location_x, location_y, axis_long, axis_short); 	// draw ellipse
	ellipse_response.rotate(ori_response_ellipse, location_x, location_y); 	// rotate the ellipse

	ellipse_response.attr({ fill: col_info, 'stroke-width': 0 }); 		// fill with color and no border
	
	// Show question:
	t_response.show();

	// Show orientation response screen
	ShowOriResponseScreen();
	
}

// figure out mouse position
var angleValue
var xValue
var yValue
var angle_estimate

var down
function ShowOriResponseScreen(e) {
	document.onmousemove = readMouseMove;

	$('body').css('cursor', 'default');
	
	var keycount = 0; 
	// Disable repetitive keydown
	down = {};
	$(document).keydown(function(event){
		var keycode = (event.keyCode ? event.keyCode : event.which);
		if(keycode == '32'){
			keycount ++;
			if (down['32'] == null) { // first press
				if (keycount == 1) {
					keyPressed();
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

// When I tap the spacebar
// CompareOris -> NextTrial -> RelevantTrial

function keyPressed() {
	// convert string to number
	angleValue = Number(angleValue);
	// up to 2 decimal points
	angle_estimate = angleValue.toFixed(2);
	// save
	OriResponseValue = OriResponseValue.concat(angle_estimate);
	
	t_response.hide();
	
	CompareOris();
	currentTrial++;
}

var t_correct
var t_reported

function CompareOris() {

	// hide cursor
	$('body').css('cursor', 'none');	
	
	// hide message
	t_response.hide();
	ellipse_response.hide();

	ellipse_copy1.show();
	ellipse_copy2.show();
	t_reported.show();
	t_correct.show();
	
	ellipse_copy1.transform("t0,-30r" + ori_info);
	ellipse_copy2.transform("t0,70r" + angle_estimate);

	setTimeout(function() {
		ellipse_copy1.hide();
		ellipse_copy2.hide();
		t_response.hide();
		t_correct.hide();
		t_reported.hide();
		NextTrial();
	},delayBfResponse*2);
	
}

var X
var Y
// for orientation trial
function readMouseMove(e){

	var x = e.clientX - $('#canvas_container').offset().left
	var y = e.clientY - $('#canvas_container').offset().top	
	// compute the angle
	angleValue = 180-Math.atan((center-y)/(x-center)) * 180/Math.PI;
	ellipse_response.transform('r'+ angleValue);
}

var ColResponseValue = new Array(); 

// Loop over trial counts
function NextTrial() {
	if (currentTrial < nTrials) {
		// add trial count
		RelevantTrial();
	} else {
		IrrelevantTrial();
	}
}

function TerminateExperiment() {
	// Hide things
	setTimeout(function() {
		t1.hide();
		ellipse_copy1.hide();
		ellipse_copy2.hide();
		ellipse_response.hide();
		t_correct.hide();
		t_reported.hide();
			
		displayOriValue.join();		// array -> string
		displayColValue.join();
		OriResponseValue.join();
		ColResponseValue.join();
		// Assign values to html objects
		$('#displayOri').val(displayOriValue);
		$('#displayCol').val(displayColValue);
		$('#OriResponse').val(OriResponseValue);
		$('#ColResponse').val(ColResponseValue);

		alert('Thanks for your participation. Your result has been just submitted automatically.');
		document.forms[0].submit();
	},delayBfResponse);	// automatic submission: forms[0]: first form, turk automatically forms
}

// instruction page for the last trial
function LastInstruction() {
	t1 = paper.text(200, 100, "What was the COLOR? \n Click the color on the color wheel.");
	t1.attr({fill: "white", 'font-family': "Arial", 'font-size': 14});
}

// Show experiment screen
function ShowInstructions() {
	$('#instructions').show();
	$('#canvas_container').show();
	$('#screensize_msg').hide();
	$('#button_msg').hide();
}

// check browser size and mobile device
function CheckBrowserSize() {
	if(navigator.userAgent.match(/iPad/i) || navigator.userAgent.match(/iPhone/i) || navigator.userAgent.match(/Android/i) || navigator.userAgent.match(/BlackBerry/i)) {
		$('#button_check').hide();
		$('#screensize_msg').hide();
		alert('This task does not support mobile device. Please try with your computer.');
	}
	else {
	
		var screenHeight = $(document).height();	
		var screenWidth = $(document).width();
		if (screenHeight < 400 || screenWidth < 500) {
			alert('Please make your window bigger. And press the Check button again.');	
		}
		else {
			alert('You are good to go. Thanks. Press Continue.');
			$('#button_check').hide();
			$('#button_continue_to_CB').show();
		}
	}
}

// message for the response page
var t_response

