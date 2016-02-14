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
 
              $top_wrap_content  += "<div class=\"top-wrap description\">";
              $top_wrap_content  +=   "<span class=\"dancing-cursive big-q\">";
              $top_wrap_content  +=     "Q:";
              $top_wrap_content  +=   "</span>";
              $top_wrap_content  += level_zero.faqs[level_one][level_two][level_three];
              $top_wrap_content  += "</div>";
            }

            if (level_three === 'answer') {

              $thumbnail_content += "<div class=\"thumbnail-descr\">";
              $thumbnail_content += level_zero.faqs[level_one][level_two][level_three];
              $thumbnail_content += "</div>";

              $top_wrap_content  += "A: "; 
              $top_wrap_content  += level_zero.faqs[level_one][level_two][level_three];
           
            }

            if (level_three === 'answer_p') {

            }        

            if (level_three === 'answer_ol') {
            } 

            // print table 
            if (level_three === 'answer_table') {

              // table start
              var row_type = "header";
              $top_wrap_content  += "<table style=\"width:50%\">"

              // iterate through each table row (key, value) and print it
              for (var level_four in level_zero.faqs[level_one]
              [level_two][level_three]) {

                // use simple var names instead of long array indices
                var this_key = level_four; 
                var this_value = level_zero.faqs[level_one]
                [level_two][level_three][level_four];                

                // print header row...
                if (row_type === "header") {
                  $top_wrap_content  += "<tr>";
                  $top_wrap_content  +=   "<th>";
                  $top_wrap_content  +=     this_key;
                  $top_wrap_content  +=   "</th>";
                  $top_wrap_content  +=   "<th>";
                  $top_wrap_content  +=     this_value;
                  $top_wrap_content  +=   "</th>";
                  $top_wrap_content  += "</tr>";
                }
                
                // print each row, then print the data rows
                else {
                  $top_wrap_content  += "<tr>";
                  $top_wrap_content  +=   "<td>";
                  $top_wrap_content  +=     this_key;
                  $top_wrap_content  +=   "</td>";
                  $top_wrap_content  +=   "<td>";
                  $top_wrap_content  +=     this_value;
                  $top_wrap_content  +=   "</td>";
                  $top_wrap_content  += "</tr>";
                }

                console.log(this_key);
                console.log(this_value);     

                row_type = "data";           
              }

              // end table
              $top_wrap_content  += "</table>"
            } 

            // print list (formatted as two columns) to html.
            if (level_three === 'two_column_list') {
              
              // table start on the top left row... 
              var which_side = "left";
              $top_wrap_content  += "<table style=\"width:50%\">"

              // print in this order: row1-columnleft, row1-columnright,
              // row2-columnleft, etc.
              for (var level_four in level_zero.faqs[level_one]
              [level_two][level_three]) {

                var this_cell = level_zero.faqs[level_one]
                [level_two][level_three][level_four].li;
                
                if (which_side === "left")  { 
                  $top_wrap_content  += "<tr>";
                  $top_wrap_content  +=   "<td>";
                  $top_wrap_content  +=  this_cell;
                  $top_wrap_content  +=   "</td>";
                }
                else if (which_side === "right") { 
                  $top_wrap_content  +=   "<td>";                 
                  $top_wrap_content  +=  this_cell;
                  $top_wrap_content  +=   "</td>";
                  $top_wrap_content  += "</tr>";
                }

                // switch what side of column we're printing on
                if (which_side === "left")  { which_side = "right"; }
                else if (which_side === "right") { which_side = "left"; }
              }

              // end table
              $top_wrap_content  += "</table>"
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

