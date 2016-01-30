var $yaml_file = "/data/faqs.yml";

jQuery(document).ready( function($){

  $.ajax({ url: $yaml_file, success: function(file_content) {

    test_string = YAML.eval(file_content);

    test_string.faqs.forEach(function(elem) {
        console.log(elem);

        for (var prop in elem) {
          console.log("elem." + prop + " = " + elem[prop]);
        }

    });

    }

  });



});

