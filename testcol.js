// Trial numbers
var currentTrial = 0; 	// trial count
var nTrials = 5;	// total trial numbers
var paper
// precomputed CIE color codes
var colMat_r = [253, 253, 253, 254, 254, 254, 254, 254, 254, 254, 254, 254, 254, 254, 254, 254, 254, 254, 254, 254, 254, 253, 253, 253, 253, 252, 252, 252, 251, 251, 251, 250, 250, 249, 249, 248, 248, 247, 247, 246, 246, 245, 244, 244, 243, 242, 242, 241, 240, 239, 239, 238, 237, 236, 235, 235, 234, 233, 232, 231, 230, 229, 228, 227, 226, 225, 224, 223, 222, 221, 220, 219, 218, 217, 216, 215, 214, 213, 212, 210, 209, 208, 207, 206, 205, 203, 202, 201, 200, 199, 197, 196, 195, 194, 193, 191, 190, 189, 187, 186, 185, 184, 182, 181, 180, 179, 177, 176, 175, 173, 172, 171, 169, 168, 167, 165, 164, 163, 161, 160, 159, 157, 156, 155, 153, 152, 151, 149, 148, 147, 145, 144, 143, 141, 140, 139, 137, 136, 135, 133, 132, 130, 129, 128, 126, 125, 124, 122, 121, 120, 118, 117, 115, 114, 113, 111, 110, 108, 107, 106, 104, 103, 101, 100, 98, 97, 95, 94, 92, 91, 90, 88, 87, 85, 83, 82, 80, 79, 77, 76, 74, 73, 71, 69, 68, 66, 64, 63, 61, 59, 58, 56, 54, 52, 51, 49, 47, 45, 44, 42, 40, 38, 36, 35, 33, 31, 29, 28, 26, 25, 10, 9, 8, 8, 8, 8, 9, 9, 25, 26, 28, 29, 31, 33, 35, 37, 39, 41, 44, 46, 48, 50, 52, 55, 57, 59, 61, 63, 66, 68, 70, 72, 75, 77, 79, 81, 83, 86, 88, 90, 92, 94, 97, 99, 101, 103, 105, 108, 110, 112, 114, 116, 118, 120, 123, 125, 127, 129, 131, 133, 135, 137, 139, 141, 143, 145, 147, 149, 151, 153, 155, 157, 159, 161, 163, 165, 167, 169, 171, 173, 174, 176, 178, 180, 182, 183, 185, 187, 189, 190, 192, 194, 195, 197, 199, 200, 202, 203, 205, 206, 208, 209, 211, 212, 214, 215, 216, 218, 219, 220, 222, 223, 224, 225, 226, 228, 229, 230, 231, 232, 233, 234, 235, 236, 237, 238, 239, 240, 240, 241, 242, 243, 244, 244, 245, 246, 246, 247, 248, 248, 249, 249, 250, 250, 251, 251, 251, 252, 252, 252];
var colMat_g = [98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 99, 99, 99, 99, 100, 100, 100, 101, 101, 101, 102, 102, 103, 103, 104, 104, 105, 105, 106, 106, 107, 107, 108, 108, 109, 110, 110, 111, 111, 112, 113, 113, 114, 115, 115, 116, 117, 117, 118, 119, 119, 120, 121, 122, 122, 123, 124, 124, 125, 126, 126, 127, 128, 128, 129, 130, 130, 131, 132, 132, 133, 134, 134, 135, 136, 136, 137, 138, 138, 139, 139, 140, 141, 141, 142, 142, 143, 144, 144, 145, 145, 146, 146, 147, 147, 148, 148, 149, 149, 150, 150, 151, 151, 152, 152, 153, 153, 154, 154, 155, 155, 155, 156, 156, 157, 157, 157, 158, 158, 159, 159, 159, 160, 160, 160, 161, 161, 161, 162, 162, 162, 162, 163, 163, 163, 164, 164, 164, 164, 165, 165, 165, 165, 166, 166, 166, 166, 166, 167, 167, 167, 167, 167, 167, 168, 168, 168, 168, 168, 168, 169, 169, 169, 169, 169, 169, 169, 169, 169, 169, 170, 170, 170, 170, 170, 170, 170, 170, 170, 170, 170, 170, 170, 170, 170, 170, 170, 170, 170, 170, 170, 170, 170, 170, 170, 170, 170, 170, 170, 170, 170, 169, 169, 169, 169, 169, 169, 169, 169, 169, 168, 168, 168, 168, 168, 168, 168, 167, 167, 167, 167, 167, 166, 166, 166, 166, 166, 165, 165, 165, 165, 164, 164, 164, 163, 163, 163, 162, 162, 162, 162, 161, 161, 160, 160, 160, 159, 159, 159, 158, 158, 157, 157, 157, 156, 156, 155, 155, 154, 154, 153, 153, 152, 152, 151, 151, 150, 150, 149, 149, 148, 148, 147, 146, 146, 145, 145, 144, 143, 143, 142, 142, 141, 140, 140, 139, 138, 138, 137, 136, 136, 135, 134, 134, 133, 132, 131, 131, 130, 129, 129, 128, 127, 126, 126, 125, 124, 124, 123, 122, 121, 121, 120, 119, 118, 118, 117, 116, 116, 115, 114, 114, 113, 112, 112, 111, 110, 110, 109, 108, 108, 107, 107, 106, 106, 105, 104, 104, 103, 103, 103, 102, 102, 101, 101, 100, 100, 100, 99, 99, 99, 99, 98, 98, 98, 98, 98];
var colMat_b = [134, 132, 131, 129, 128, 126, 125, 123, 122, 120, 119, 118, 116, 115, 113, 112, 110, 109, 107, 106, 104, 103, 102, 100, 99, 97, 96, 94, 93, 92, 90, 89, 87, 86, 85, 83, 82, 81, 79, 78, 77, 75, 74, 73, 71, 70, 69, 67, 66, 65, 63, 62, 61, 60, 58, 57, 56, 54, 53, 52, 51, 49, 48, 47, 46, 45, 43, 42, 41, 40, 38, 37, 36, 35, 33, 32, 31, 30, 29, 27, 26, 25, 10, 9, 8, 7, 6, 5, 5, 4, 4, 3, 3, 3, 3, 3, 3, 3, 4, 4, 4, 5, 6, 7, 7, 8, 10, 25, 26, 27, 28, 30, 31, 32, 34, 35, 36, 38, 39, 40, 42, 43, 44, 46, 47, 48, 50, 51, 52, 54, 55, 56, 58, 59, 61, 62, 63, 65, 66, 68, 69, 71, 72, 73, 75, 76, 78, 79, 81, 82, 84, 85, 87, 88, 90, 91, 93, 94, 96, 97, 99, 100, 102, 103, 105, 106, 108, 109, 111, 112, 114, 116, 117, 119, 120, 122, 123, 125, 126, 128, 129, 131, 133, 134, 136, 137, 139, 140, 142, 143, 145, 146, 148, 149, 151, 152, 154, 155, 157, 158, 160, 161, 162, 164, 165, 167, 168, 169, 171, 172, 173, 175, 176, 177, 179, 180, 181, 182, 184, 185, 186, 187, 188, 189, 191, 192, 193, 194, 195, 196, 197, 198, 199, 200, 201, 202, 202, 203, 204, 205, 206, 207, 207, 208, 209, 209, 210, 211, 211, 212, 212, 213, 213, 214, 214, 215, 215, 216, 216, 216, 217, 217, 217, 217, 217, 218, 218, 218, 218, 218, 218, 218, 218, 218, 218, 218, 218, 218, 217, 217, 217, 217, 216, 216, 216, 215, 215, 215, 214, 214, 213, 213, 212, 212, 211, 210, 210, 209, 208, 208, 207, 206, 205, 205, 204, 203, 202, 201, 200, 199, 198, 197, 196, 195, 194, 193, 192, 191, 190, 189, 188, 187, 186, 184, 183, 182, 181, 180, 178, 177, 176, 175, 173, 172, 171, 169, 168, 167, 165, 164, 163, 161, 160, 158, 157, 156, 154, 153, 151, 150, 148, 147, 145, 144, 143, 141, 140, 138, 137, 135];
var stim_bins = 360;
// location of ellipses
var screen_size = 400;	// screen size
var locations_x = [100, 300, 300, 100];
var locations_y = [100, 100, 300, 300];
//var locations_x = [150, 450];
//var locations_y = [300, 300];
// size of the ellipses
var axis_long = 94 / 6;
var axis_short = 41 / 6;
// delays (ms)
var delay = 1000;
var stimtime = 150;
var delayBfResponse = 500;
var crossVertical
var crossHorizontal

var Ellipses = new Array();
var oris = new Array();
var cols = new Array();
var Ellipses2 = new Array();
var rgb_idx_vec = new Array();

var display1OriValue = new Array();
var display1ColValue = new Array();
var display2OriValue = new Array();
var display2ColValue = new Array();

// Draw first ellipses
function ShowScreenMsg() {
	$('#summary').hide();
	$('#screensize_msg').show();	
}

function DrawEllipses() {
    for (var i = 0; i < 4; i += 1) {
        var rgb_idx_raw = 0 + stim_bins * Math.random(); 		// raw color index (non int)
        var rgb_idx = Math.floor(rgb_idx_raw); 				// round color idex
        var ori_idx_raw = 0 + stim_bins * Math.random(); 		// raw orientation index (non int)
        var orientation = Math.floor(ori_idx_raw); 			// round orientation idx
        var hex_code = Raphael.rgb(colMat_r[rgb_idx], colMat_g[rgb_idx], colMat_b[rgb_idx]); 	// convert rgb to hex

        var ellipse = paper.ellipse(locations_x[i], locations_y[i], axis_long, axis_short); 	// draw ellipse
        ellipse.rotate(orientation, locations_x[i], locations_y[i]); 	// rotate the ellipse
        ellipse.attr({ fill: hex_code, 'stroke-width': 0 }); 		// fill with color and no border

        Ellipses[i] = ellipse;	// Save the ellipses for the second display
        oris[i] = orientation;
        cols[i] = hex_code;
        rgb_idx_vec[i] = rgb_idx;
    }
    // save data: first stimuli
    display1OriValue = display2OriValue.concat(oris);
    display1ColValue = display2ColValue.concat(rgb_idx_vec);
}
var Ellipses_DEMO = new Array();
var Ellipses2_DEMO = new Array();
var oris_DEMO = new Array();
var cols_DEMO = new Array();
var rgb_idx_vec_DEMO = new Array();
for (var i = 0; i < 4; i += 1) {
	var rgb_idx_raw_DEMO = 0 + stim_bins * Math.random(); 		// raw color index (non int)
	var rgb_idx_DEMO = Math.floor(rgb_idx_raw_DEMO); 				// round color idex
	var ori_idx_raw_DEMO = 0 + stim_bins * Math.random(); 		// raw orientation index (non int)
	var orientation_DEMO = Math.floor(ori_idx_raw_DEMO); 			// round orientation idx
	var hex_code_DEMO = Raphael.rgb(colMat_r[rgb_idx_DEMO], colMat_g[rgb_idx_DEMO], colMat_b[rgb_idx_DEMO]); 	// convert rgb to hex

        oris_DEMO[i] = orientation_DEMO;
        cols_DEMO[i] = hex_code_DEMO;
        rgb_idx_vec_DEMO[i] = rgb_idx_DEMO;
}

function DrawEllipses_DEMO() {
    for (var i = 0; i < 4; i += 1) {
    	var hex_code_DEMO = Raphael.rgb(colMat_r[rgb_idx_vec_DEMO[i]], colMat_g[rgb_idx_vec_DEMO[i]], colMat_b[rgb_idx_vec_DEMO[i]]); 	// convert rgb to hex
        var ellipse_DEMO = paper.ellipse(locations_x[i], locations_y[i], axis_long, axis_short); 	// draw ellipse
        ellipse_DEMO.rotate(oris_DEMO[i], locations_x[i], locations_y[i]); 	// rotate the ellipse
        ellipse_DEMO.attr({ fill: hex_code_DEMO, 'stroke-width': 0 }); 		// fill with color and no border

        Ellipses_DEMO[i] = ellipse_DEMO;	// Save the ellipses for the second display
    }
}

var deltaOri_DEMO = 90;
var deltaCol_DEMO = 180;
var rgb_idx_IR_vec_DEMO = rgb_idx_vec_DEMO;
var rgb_idx_IR_DEMO
// Pick random item (relevant)
var targetIdx_raw_DEMO = 0 + 4 * Math.random();
var targetIdx_DEMO = Math.floor(targetIdx_raw_DEMO);
// Pick random item (irrelevant)
var targetIdx_IR_raw_DEMO = 0 + 4 * Math.random();
var targetIdx_IR_DEMO = Math.floor(targetIdx_IR_raw_DEMO);
// compute delta color
var oris2_DEMO = oris_DEMO;
var cols2_DEMO = cols_DEMO;
function DrawEllipsesAgainLast_DEMO() {

	// Change orientation
	oris2_DEMO[targetIdx_DEMO] = oris_DEMO[targetIdx_DEMO] + deltaOri_DEMO;	
	// Change color
	rgb_idx_IR_vec_DEMO[targetIdx_IR_DEMO] = (rgb_idx_IR_vec_DEMO[targetIdx_IR_DEMO] + deltaCol_DEMO)%360;
	
	// Draw second ellipses
	for (var i = 0; i < 4; i += 1) {
		
		rgb_idx_IR_DEMO = rgb_idx_IR_vec_DEMO[i];
		var hex_code_IR_DEMO = Raphael.rgb(colMat_r[rgb_idx_IR_DEMO], colMat_g[rgb_idx_IR_DEMO], colMat_b[rgb_idx_IR_DEMO]); 	// convert rgb to hex
		
		var ellipse2_DEMO = paper.ellipse(locations_x[i], locations_y[i], axis_long, axis_short); // draw ellipse
		ellipse2_DEMO.rotate(oris2_DEMO[i], locations_x[i], locations_y[i]); // rotate the ellipse
		ellipse2_DEMO.attr({ fill: hex_code_IR_DEMO, 'stroke-width': 0 }); 	// fill with color and no border
		
		Ellipses2_DEMO[i] = ellipse2_DEMO; // Save the second ellipses
		cols2_DEMO[i] = hex_code_IR_DEMO; // Save the colors
	}
}

// 2nd display
var targetIdx_raw
var targetIdx
var deltaOri_raw
var deltaOri
var oris2 = new Array();
var cols2 = new Array();
oris2 = oris;
cols2 = cols;
var distractorIdx_raw
var distractorIdx
var deltaColDist_raw
var deltaColDist

var deltaOriValue = new Array;
var deltaColValue = new Array;
var targetOriValue = new Array; 
var targetColValue = new Array;

var circles = new Array();
var txtFeedback
var perfIdx
var respIdx
var perfValue = new Array;
var respValue = new Array;
// Response screen
var targetIndex	// default index (this can be relevant index or irrelevant index)
function DrawCircles() {

	// Show cursor
	$('body').css('cursor', 'default');
	
	// Draw circles
	for (var i = 0; i < 4; i += 1) {
		circles[i] = paper.circle(locations_x[i],locations_y[i],axis_long*2); 	
		circles[i].attr({ fill: "gray", stroke: "white", 'stroke-width': 1});
	}

	if (currentTrial < nTrials) {
		// Show question:
		ShowTrialMessage();
	}
	
	// cursor shape changes when the cursor is in the circle
	for (var i = 0; i < 4; i += 1) {
		circles[i].node.onmouseover = function() {  
			this.style.cursor = 'pointer';  
		}
	}

	// feedback
	if (currentTrial == nTrials) {
		targetIndex = targetIdx;
	}
	else {
		targetIndex = targetIdx_IR;
	}
	
	circles[0].node.onclick = function() {
		if (targetIndex == 0) {
			perfIdx = 1;	respIdx = 1;
			FeedbackCorrect();
		}
		else	{
			perfIdx = 0;	respIdx = 1;
			FeedbackIncorrect();
		}
		perfValue = perfValue.concat(perfIdx);
		respValue = respValue.concat(respIdx);
		NextTrial();
	}
	circles[1].node.onclick = function() {
		if (targetIndex == 1) {
			perfIdx = 1;	respIdx = 2;
			FeedbackCorrect();
		}
		else	{
			perfIdx = 0;	respIdx = 2;
			FeedbackIncorrect();
		}
		perfValue = perfValue.concat(perfIdx);
		respValue = respValue.concat(respIdx);
		NextTrial();
	}
	circles[2].node.onclick = function() {
		if (targetIndex == 2) {
			perfIdx = 1;	respIdx = 3;
			FeedbackCorrect();
		}
		else	{
			perfIdx = 0;	respIdx = 3;
			FeedbackIncorrect();
		}
		perfValue = perfValue.concat(perfIdx);
		respValue = respValue.concat(respIdx);
		NextTrial();
	}
	circles[3].node.onclick = function() {
		if (targetIndex == 3) {
			perfIdx = 1;	respIdx = 4;
			FeedbackCorrect();
		}
		else	{
			perfIdx = 0;	respIdx = 4;
			FeedbackIncorrect();
		}
		perfValue = perfValue.concat(perfIdx);
		respValue = respValue.concat(respIdx);
		NextTrial();
	}
}

// Feedback: correct
function FeedbackCorrect() {
	// hide cursor
	$('body').css('cursor', 'none');
	// hide circles
	for (var i = 0; i < 4; i +=1) {
		circles[i].hide();
	}
	// hide message
	t_response.hide();
	// draw feedback	
	crossVertical.attr({stroke: "#29d43e", 'stroke-width':2});
	crossHorizontal.attr({stroke: "#29d43e", 'stroke-width':2});
}

// Feedback: Incorrect
function FeedbackIncorrect() {
	// hide cursor
	$('body').css('cursor', 'none');
	// hide circles
	for (var i = 0; i < 4; i +=1) {
		circles[i].hide();
	}
	// hide message
	t_response.hide();
	// draw feedback	
	crossVertical.attr({stroke: "red", 'stroke-width':2});
	crossHorizontal.attr({stroke: "red", 'stroke-width':2});
}

// Start the very first trial
function FirstTrial() {
	// hide demo
	$('#demoPage8').hide();

	// Draw canvas at the beginning of the trial (no need to draw it on each trial)
	paper = new Raphael(document.getElementById('canvas_container'), screen_size, screen_size);
	$('body').css('cursor', 'none');
	Drawfixation();
	NextTrial();	
}

// Draw fixation cross (gray): can't use string variable, only numbers
function Drawfixation() {
	crossVertical = paper.path("M 200 195 l 0 10 z");
	crossVertical.attr({stroke: "white", 'stroke-width':2});
	crossHorizontal = paper.path("M 195 200 l 10 0 z");
	crossHorizontal.attr({stroke: "white", 'stroke-width':2});
}

// Single complete trial
var currentTrialStr
function StartTrial() {

	if (currentTrial < nTrials) {

		// 1st display
		Drawfixation();		
	
		setTimeout(function() {
			DrawEllipses();
		},delay*1);

		// delay		
		setTimeout(function() {
			for (var i = 0; i < 4; i += 1) {
				Ellipses[i].hide();
			}
		},delay*1+stimtime);
		
		// 2nd display
		setTimeout(function() {
			DrawEllipsesAgainLast();
		},delay*2+stimtime);
		
		// hide ellipses
		setTimeout(function() {
			for (var i = 0; i < 4; i += 1) {
				Ellipses2[i].hide();
			}
		},delay*2+stimtime*2);
	
		// response circles
		setTimeout(function() {
			DrawCircles();
		},delay*2+stimtime*2+delayBfResponse);
	}
	else {
		// Hide fixation
		crossVertical.attr({stroke: "gray", 'stroke-width':2});
		crossHorizontal.attr({stroke: "gray", 'stroke-width':2});
		
		// LAST TRIAL
		LastInstruction();

		setTimeout(function() {
			DrawCircles();
		},delay*0.5);
	}
}

// Loop over trial counts
function NextTrial() {
	if (currentTrial < nTrials) {
		setTimeout(function() {
			StartTrial();
		},delayBfResponse);
		currentTrial++;		// add trial count
	} else {
		// Hide things
		t1.hide();
		crossVertical.attr({stroke: "#29d43e", 'stroke-width':2});
		crossHorizontal.attr({stroke: "#29d43e", 'stroke-width':2});
		setTimeout(function() {
			display1OriValue.join();		// array -> string
			display1ColValue.join();
			display2OriValue.join();
			display2ColValue.join();
			// Assign values to html objects
			$('#performance').val(perfValue);
			$('#response').val(respValue);
			$('#display1Ori').val(display1OriValue);
			$('#display1Col').val(display1ColValue);
			$('#display2Ori').val(display2OriValue);
			$('#display2Col').val(display2ColValue);
			$('#deltaOri').val(deltaOriValue);
			$('#deltaCol').val(deltaColValue);
			$('#targetOri').val(targetOriValue);
			$('#targetCol').val(targetColValue);
			alert(perfValue);
//			alert(respValue);
//			alert(deltaOriValue);
//			alert(deltaColValue);
//			alert(targetOriValue);
//			alert(targetColValue);
			alert('Thanks for your participation. Your result has been submitted.');
			document.forms[0].submit();
		},delayBfResponse);	// automatic submission: forms[0]: first form, turk automatically forms
	}
}

// Last trial (both irrelevant and relevant change)
var rgb_idx_IR_vec = new Array();
rgb_idx_IR_vec = rgb_idx_vec;
var deltaCol_raw
var deltaCol
var rgb_idx_IR
var targetIdx_IR_raw
var targetIdx_IR
function DrawEllipsesAgainLast() {

	// Pick random item (relevant)
	targetIdx_raw = 0 + 4 * Math.random();
	targetIdx = Math.floor(targetIdx_raw);
	deltaOri_raw = 0 + 360*Math.random();
	deltaOri = Math.floor(deltaOri_raw);

	// Pick random item (irrelevant)
	targetIdx_IR_raw = 0 + 4 * Math.random();
	targetIdx_IR = Math.floor(targetIdx_IR_raw);
	// compute delta color
	deltaCol_raw = 0 + 360*Math.random();
	deltaCol = Math.floor(deltaCol_raw);	// index
	
	// Change orientation
	oris2[targetIdx] = oris[targetIdx] + deltaOri;
	// Change color
	rgb_idx_IR_vec[targetIdx_IR] = (rgb_idx_IR_vec[targetIdx_IR] + deltaCol)%360;

	// Draw second ellipses
	for (var i = 0; i < 4; i += 1) {
		
		rgb_idx_IR = rgb_idx_IR_vec[i];
		var hex_code_IR = Raphael.rgb(colMat_r[rgb_idx_IR], colMat_g[rgb_idx_IR], colMat_b[rgb_idx_IR]); 	// convert rgb to hex
		
		var ellipse = paper.ellipse(locations_x[i], locations_y[i], axis_long, axis_short); // draw ellipse
		ellipse.rotate(oris2[i], locations_x[i], locations_y[i]); // rotate the ellipse
		ellipse.attr({ fill: hex_code_IR, 'stroke-width': 0 }); 	// fill with color and no border
		
		Ellipses2[i] = ellipse; // Save the second ellipses
		cols2[i] = hex_code_IR; // Save the colors
	}

	// Save data: change magnitude, targe location (ori & col), second stimuli	
	deltaOriValue = deltaOriValue.concat(deltaOri);
	deltaColValue = deltaColValue.concat(deltaCol);
	targetOriValue = targetOriValue.concat(targetIdx);
	targetColValue = targetColValue.concat(targetIdx_IR);
	display2OriValue = display2OriValue.concat(oris2);
	display2ColValue = display2ColValue.concat(rgb_idx_IR_vec);
}

// instruction page for the last trial
var t1
//function LastInstruction() {
//	t1 = paper.text(screen_size/2, screen_size/2, "Now, where did you just see the ORIENTATION change?\n \n \n \n Click the location of the ORIENTATION change.");
//	t1.attr({fill: "white", 'font-family': "Arial", 'font-size': 14});
//}
function LastInstruction() {
	t1 = paper.text(screen_size/2, screen_size/2, "... and where was the ORIENTATION change?");
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

// Show trial count
var trialCnt
var nTrialsStr = nTrials+''; 
function ShowTrialCnt() {
	crossVertical.hide();
	crossHorizontal.hide();
	trialCnt = paper.text(screen_size/2, screen_size/2, '#'+currentTrialStr+' / '+nTrialsStr);
	trialCnt.attr({fill: "white", 'font-family': "Arial", 'font-size': 16});
}

// instruction page for the last trial
var t_response
function ShowTrialMessage() {
	// Make the cross invisible (same color as the background)
	crossVertical.attr({stroke: "gray", 'stroke-width':2});
	crossHorizontal.attr({stroke: "gray", 'stroke-width':2});
	// Message (question)
	t_response = paper.text(screen_size/2, screen_size/2, "Where was the COLOR change?");
	t_response.attr({fill: "white", 'font-family': "Arial", 'font-size': 14});
}
