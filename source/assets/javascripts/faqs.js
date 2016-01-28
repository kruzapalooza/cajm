var requirejs = require('requirejs');

var requirejs = require('../node_modules/requirejs/bin/r.js');

//YAML = require('../node_modules/yamljs'); 

requirejs.config({

  //Pass the top-level main.js/index.js require
  //function to requirejs so that node modules
  //are loaded relative to the top-level JS file.
  nodeRequire: require,

  baseUrl: "../node_modules/",
  paths: {
      "some": "some/v1.0"
  },
  waitSeconds: 15
});

/*
define require(["../node_modules/yamljs/lib/Yaml.js", 
	"../node_modules/js-yaml/bin/js-yaml.js"], function(foo) {
    //This function is called when scripts/helper/util.js is loaded.
    //If util.js calls define(), then this function is not fired until
    //util's dependencies have loaded, and the util argument will hold
    //the module value for "helper/util".
});
*/

var YAMLJS = require('yamljs');
var YAML   = require('yaml');

requirejs(['require', 'name'], function (require, name) {
    var namedModule = require('name');
});

requirejs(["../node_modules/yamljs"], function(foo) {

  var nativeObject = YAML.load('/data/faqs.yaml');
  
  var yamlpath = "/data/faqs.yaml";
  // Get document, or throw exception on error
  try {
    var doc = yaml.safeLoad(fs.readFileSync(yamlpath, 'utf8'));
    console.log(doc);
  } catch (e) {
    console.log("There's an error");
  }
 
});


/* 
define require(["require", "../node_modules/yamljs", "yamljs"], function(bar) {
    var namedModule = require('yaml');
      //This function will be called when all the dependencies
      //listed above are loaded. Note that this function could
      //be called before the page is loaded.
      //This callback is optional.

      var nativeObject = YAML.load('/data/faqs.yaml');
});

 */



/*
// parse YAML string 
nativeObject = YAML.parse(yamlString);
 
// Generate YAML 
yamlString = YAML.stringify(nativeObject, 4);
 
// Load yaml file using YAML.load 
nativeObject = YAML.load('/data/faqs.yml');

requirejs.config({
    //Pass the top-level main.js/index.js require
    //function to requirejs so that node modules
    //are loaded relative to the top-level JS file.
    nodeRequire: require
});


	// getid id nehemiah_turnout and add divs with these values:) 

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
*/