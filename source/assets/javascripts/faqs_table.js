jQuery(document).ready( function($) {

	/* EDIT THESE TO ADD VALUES FOR ADDITIONAL YEARS. 
	FIRST COLUMN IS 2012. */
	var nehemiah_turnout = [0,  1500, 2250, 3000] ;
	var congregations    = [25, 33,   41,   50 ] ;
	var member_needed    = [0,  375,  563,  750] ;
	var staff            = [1,  1.5,  3,      4] ;
	var budget           = [66, 144,  213,  261] ;
	var dues   					 = [30, 50,   60,    65] ;
	var member_drive     = [5,  30,   50,    75] ;
	var corporate        = [0,  20,   30,    40] ;
	var grants 					 = [31, 44,   73,    81] ;
	

	/* getid id nehemiah_turnout and add divs with these values:) */

	$('#nehemiah-turnout').each( function (){
	  	var content = '';
	  	nehemiah_turnout.forEach( function(i){
	  		/* $(self).html('<div>' + i + '</div>'); 	*/
	  		content += '<div>' + i +'</div>' ;
	  		console.log(i);	
			});

			$(this).html( content ); 
	});

	/*
	$("#nehemiah-turnout").html('<div>')
	alert(nehemiah_turnout);
		nehemiah_turnout.forEach (function(entry) {
			$('#nehemiah-turnout').html('<div>' + entry + '</div>')
		});
	$("#nehemiah-turnout").html('</div>')	
	*/

/*

congregations.forEach {}

member_needed.forEach {}

staff.forEach {}

budget.forEach {}

dues.forEach {}

member_drive.forEach {}

corporate.forEach {}

grants.forEach {}

*/

});


