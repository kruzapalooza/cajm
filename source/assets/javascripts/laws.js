var $yaml_file = "/data/laws.yml";

jQuery(document).ready( function($){

  $.ajax({ url: $yaml_file, success: function (file_content) {
    var l0 = YAML.eval(file_content);
    console.log('\n');

    $law_number = 0;
    $top_wrap_content  = "";

    for (var l1 in l0.laws) {

      console.log(l1);
      console.log(l0.laws[l1].article);

    }

  }
  });

});

