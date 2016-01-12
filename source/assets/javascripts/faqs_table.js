jQuery(document).ready( function($) {

	/* EDIT THESE TO ADD VALUES FOR ADDITIONAL YEARS. 
	FIRST COLUMN IS 2012. */
	var years 			 = [2012, 2013, 2014, 2015];
	var nehemiah_turnout = [0,  1500, 2250, 3000] ;
	var congregations    = [25, 33,   41,   50 ] ;
	var member_needed    = [0,  375,  563,  750] ;
	var staff            = [1,  1.5,  3,      4] ;
	var budget           = [66, 144,  213,  261] ;
	var dues   			 = [30, 50,   60,    65] ;
	var member_drive     = [5,  30,   50,    75] ;
	var corporate        = [0,  20,   30,    40] ;
	var grants 			 = [31, 44,   73,    81] ;

	/* getid id nehemiah_turnout and add divs with these values:) */

	$('#years').each( function (){
	  	var content = '<div class=\"row\">';
	  	years.forEach( function(i){
	  		content += '<div class=\"cell\">' + i +'</div>' ;
	  		console.log(i);	
		});
	  	content += "</div>"
		$(this).html( content ); 
	});

	$('#nehemiah-turnout').each( function (){
	  	var content = '<div class=\"row\">';
	  	nehemiah_turnout.forEach( function(i){
	  		content += '<div class=\"cell\">' + i +'</div>' ;
	  		console.log(i);	
		});
	  	content += "</div>"
		$(this).html( content ); 
	});

	$('#congregations').each( function (){
	  	var content = '<div class=\"row\">';
	  	congregations.forEach( function(i){
	  		content += '<div class=\"cell\">' + i +'</div>' ;
	  		console.log(i);	
		});
	  	content += "</div>"
		$(this).html( content ); 
	});

	$('#member_needed').each( function (){
	  	var content = '<div class=\"row\">';
	  	member_needed.forEach( function(i){
	  		content += '<div class=\"cell\">' + i +'</div>' ;
	  		console.log(i);	
		});
	  	content += "</div>"
		$(this).html( content ); 
	});	

	$('#staff').each( function (){
	  	var content = '<div class=\"row\">';
	  	staff.forEach( function(i){
	  		content += '<div class=\"cell\">' + i +'</div>' ;
	  		console.log(i);	
		});
	  	content += "</div>"
		$(this).html( content ); 
	});		

	$('#budget').each( function (){
	  	var content = '<div class=\"row\">';
	  	budget.forEach( function(i){
	  		content += '<div class=\"cell\">' + i +'</div>' ;
	  		console.log(i);	
		});
	  	content += "</div>"
		$(this).html( content ); 
	});	

	$('#dues').each( function (){
	  	var content = '<div class=\"row\">';
	  	dues.forEach( function(i){
	  		content += '<div class=\"cell\">' + i +'</div>' ;
	  		console.log(i);	
		});
	  	content += "</div>"
		$(this).html( content ); 
	});	

	$('#member_drive').each( function (){
	  	var content = '<div class=\"row\">';
	  	member_drive.forEach( function(i){
	  		content += '<div class=\"cell\">' + i +'</div>' ;
	  		console.log(i);	
		});
	  	content += "</div>"
		$(this).html( content ); 
	});	

	$('#corporate').each( function (){
	  	var content = '<div class=\"row\">';
	  	corporate.forEach( function(i){
	  		content += '<div class=\"cell\">' + i +'</div>' ;
	  		console.log(i);	
		});
	  	content += "</div>"
		$(this).html( content ); 
	});	

	$('#grants').each( function (){
	  	var content = '<div class=\"row\">';
	  	grants.forEach( function(i){
	  		content += '<div class=\"cell\">' + i +'</div>' ;
	  		console.log(i);	
		});
	  	content += "</div>"
		$(this).html( content ); 
	});	

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

