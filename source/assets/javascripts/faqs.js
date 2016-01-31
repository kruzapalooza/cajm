var $yaml_file = "/data/faqs.yml";

jQuery(document).ready( function($){

  $.ajax({ url: $yaml_file, success: function (file_content) {

    var level_zero = YAML.eval(file_content);

      console.log(level_zero);
      console.log(typeof(level_zero));
      console.log(level_zero.length);
      console.log('\n');
      console.log(level_zero.faqs);

      for (i=0 ; i < level_zero.faqs.length ; i++) {
        console.log(i);
        console.log(level_zero.faqs[i]);
        console.log('\n');

        for (var level_two in level_one) {
          console.log(level_two);
          console.log(typeof(level_two));
          console.log(level_one[level_two]);
          console.log('\n');
        }

      }

      for (var level_one in level_zero.faqs[i]) {
        console.log(level_one);
        console.log(typeof(level_one));
        console.log(level_one);
        console.log('\n');

        for (j=0 ; j < level_one.length ; j++) {
          console.log(j);
          console.log(level_one[j]);
          console.log('\n');
        }

        for (var level_two in level_one) {
          console.log(level_two);
          console.log(typeof(level_two));
          console.log(level_one[level_two]);
          console.log('\n');
        }

      }


    }

  });



});

