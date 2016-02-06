var $yaml_file = "/data/faqs.yml";

jQuery(document).ready( function($){

  $.ajax({ url: $yaml_file, success: function (file_content) {
    var level_zero = YAML.eval(file_content);
    console.log('\n');


    for (var level_one in level_zero.faqs) {

      $thumbnail_content = "";
      $top_wrap_content  = "";
      for (var level_two in level_zero.faqs[level_one]) {

        if (level_two === 'q_a') {

          $thumbnail_content += "<div class=\"thumbnail\">" ;
          $top_wrap_content  += "<div class=\"top-wrap\">";

          for (var level_three in level_zero.faqs[level_one][level_two]) {
            console.log('l3 key: ' + level_three);
            console.log(level_zero.faqs[level_one][level_two][level_three]);
            console.log('\n');

            if (level_three === 'question') { 

              $thumbnail_content += "<div class=\"thumbnail-title\">";
              $thumbnail_content +=   level_zero.faqs[level_one][level_two][level_three];
              $thumbnail_content += "</div>";

              // $top_wrap_content  += anchor 
              $top_wrap_content  += "<div class=\"dancing-cursive big-q\">";
              $top_wrap_content  +=   "Q";
              $top_wrap_content  += "</div>";
              $top_wrap_content  += "<div class=\"top-wrap description\">";
              $top_wrap_content  += level_zero.faqs[level_one][level_two][level_three];
              $top_wrap_content  += "</div>";
              
              /*
              <a class="anchor" id="cajm-goals-growth"></a>
              <h2>
                  Q: What are CAJM's goals for growth and expansion? 
              </h2> 
              <h2>
                  A: The general goals of CAJM include:
              </h2>  
              */
            }

            if (level_three === 'answer') {

              $thumbnail_content += "<div class=\"thumbnail-descr\">";
              $thumbnail_content += level_zero.faqs[level_one][level_two][level_three];
              $thumbnail_content += "</div>";

              // $top_wrap_content  += level_zero.faqs[level_one][level_two][level_three];            
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

          $thumbnail_content += "</div>" ; // end tag to <thumbnail>
          $top_wrap_content  += "</div>" ; // end tag to <top-wrap>

        }

        $('#thumbnail-wrap-faqs').each( function (){
          $("#thumbnail-wrap-faqs").append($thumbnail_content);
        }); 

        $('#banner-faqs').each( function (){
          $("#banner-faqs").append($top_wrap_content);
        });

      }



    }


    }

  });



});

