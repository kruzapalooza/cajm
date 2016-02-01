var $yaml_file = "/data/faqs.yml";

jQuery(document).ready( function($){

  $.ajax({ url: $yaml_file, success: function (file_content) {

    var level_zero = YAML.eval(file_content);

    // console.log(level_zero.faqs[0].q_a.question);
    // console.log(level_zero.faqs[0].q_a.answer);
    // console.log(level_zero.faqs[0].q_a.answer_ol[0]);
    // console.log(level_zero.faqs[0].q_a.answer_ol[1]);
    // console.log(level_zero.faqs[1].q_a.question);
    // console.log(level_zero.faqs[1].q_a.answer);
    // console.log(level_zero.faqs[1].q_a.answer_p);

    console.log('\n');

    for (var level_one in level_zero.faqs) {


      $content = "";
      for (var level_two in level_zero.faqs[level_one]) {

        if (level_two === 'q_a') {

          // $('#nehemiah-turnout').each( function (){
          //     var content = '<div class=\"row\">';
          //     nehemiah_turnout.forEach( function(i){
          //       content += '<div class=\"cell\">' + i +'</div>' ;
          //       console.log(i); 
          //   });
          //     content += "</div>"
          //   $(this).html( content ); 
          // });

          $('#thumbnail-wrap-faqs').each( function (){
            $("thumbnail-wrap-faqs").append("<div class=\"thumbnail\"><div>")
          });

          // thumbnail-wrap-faqs

          //content += 



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
        }
      }



    }


    }

  });



});

