
jQuery(document).ready( function($) {

	//yaml = require("/assets/javascripts/js-yaml.js");
	//fs   = require("/fs");

define (["/assets/javascripts/js-yaml.js"], function(){

	var yamlpath = "/data/faqs.yaml";

	// Get document, or throw exception on error
	try {
	  var doc = yaml.safeLoad(fs.readFileSync(yamlpath, 'utf8'));
	  console.log(doc);
	} catch (e) {
	  console.log(e);
	}
} );

   /*
	
   */

	/* 
	None of the below require statements work. Keep getting this error:

	Uncaught Error: Module name "../../../node_modules/js-yaml/lib/js-yaml" 
	has not been loaded yet for context: _. Use require([])

	Goal is simply to open yaml file (*readonly server side*) in javascript.
	Have tried these:

	https://github.com/tj/js-yaml/blob/master/Readme.md
	https://github.com/nodeca/js-yaml
	https://github.com/nodeca/js-yaml/blob/master/examples/sample_document.js
	https://github.com/nodeca/js-yaml/blob/master/examples/dumper.js
	http://stackoverflow.com/questions/23603514/javascript-require-function-giving-referenceerror-require-is-not-defined
	https://github.com/nodeca/js-yaml/issues/38
	*/

	/*
	yaml = require("../../../node_modules/js-yaml/lib/js-yaml");
	fs   = require("fs");
	yaml = require("../../../node_modules/js-yaml/bin/js-yaml.js");
	fs   = require("js-yaml");
	*/

	var yamlpath = "/data/faqs.yaml";

	// Get document, or throw exception on error
	try {
	  var doc = yaml.safeLoad(fs.readFileSync(yamlpath, 'utf8'));
	  console.log(doc);
	} catch (e) {
	  console.log(e);
	}

	/*
	var yamlpath = "/data/faqs.yaml";
	var yamldata = [];

	// OPEN YAML FILE 
	
	var file = new File(yamldata, yamlpath, {type:"text/yaml"});
	console.log(yamldata);
	

	var fs = require('fs');
	var array = fs.readFileSync(yamlpath).toString().split("\n");
	for(i in array) {
	    console.log(array[i]);
	}

	// PARSE YAML FILE
	*/

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

	$('#nehemiah-turnout').each( function (){
	  	var content = '<div class=\"row\">';
	  	nehemiah_turnout.forEach( function(i){
	  		content += '<div class=\"cell\">' + i +'</div>' ;
	  		console.log(i);	
		});
	  	content += "</div>"
		$(this).html( content ); 
	});

});