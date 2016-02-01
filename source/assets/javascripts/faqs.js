var $yaml_file = "/data/faqs.yml";

jQuery(document).ready( function($){

  $.ajax({ url: $yaml_file, success: function (file_content) {
    var level_zero = YAML.eval(file_content);
    console.log('\n');
    for (var level_one in level_zero.faqs) {

      $content = "";
      for (var level_two in level_zero.faqs[level_one]) {

        if (level_two === 'q_a') {

          $content += "<div class=\"thumbnail\"> TEST" ;

          for (var level_three in level_zero.faqs[level_one][level_two]) {
            console.log('l3 key: ' + level_three);
            console.log(level_zero.faqs[level_one][level_two][level_three]);
            console.log('\n');

            if (level_three === 'question') {
              console.log('Q');
            }

            if (level_three === 'answer') {
              console.log('A');
            }

            if (level_three === 'answer_p') {
              console.log('P');
            }        

            if (level_three === 'answer_ol') {
              console.log('OL');
            } 

            if (level_three === 'answer_table') {
              console.log('T');
            } 

            if (level_three === 'two_column_list') {
              console.log('2CL');
            } 
          } 

          $content += "<div>" ;

        }

        $('#thumbnail-wrap-faqs').each( function (){
          $("#thumbnail-wrap-faqs").append($content);
        }); 
      }



    }


    }

  });



});

