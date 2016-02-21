var $yaml_file = "/data/faqs.yml";

jQuery(document).ready( function($){

  $.ajax({ url: $yaml_file, success: function (file_content) {
    var l0 = YAML.eval(file_content);
    console.log('\n');

    $faq_number         = 0;
    for (var l1 in l0.faqs) {

      $thumbnail_content = "";
      $top_wrap_content  = "";
      for (var l2 in l0.faqs[l1]) {

        // Each q_a is a Question and Answer; loop through and print each one
        // and it's text, tables and lists.
        if (l2 === 'q_a') {

          $faq_number        += 1;
          $thumbnail_content += "<div class=\"thumbnail\">" ;
          $top_wrap_content  += "<div class=\"top-wrap\">";

          // Make sure item starts with "q_a" (otherwise, do nothing)
          for (var l3 in l0.faqs[l1][l2]) {
            console.log('l3 key: ' + l3);
            console.log(l0.faqs[l1][l2][l3]);
            console.log('\n');

            // Q: Question (the section header)
            if (l3 === 'question') { 

              $thumbnail_content += "<div class=\"thumbnail-title\">";
              $thumbnail_content +=   l0.faqs[l1][l2][l3];
              $thumbnail_content += "</div>";
 
              $top_wrap_content  += "<a class=\"anchor\" id=\"faq_number_" + $faq_number + "\"></a>";
              $top_wrap_content  += "<div class=\"top-wrap description\">";
              $top_wrap_content  +=   "<span class=\"dancing-cursive big-q\">";
              $top_wrap_content  +=     "Q:";
              $top_wrap_content  +=   "</span>";
              $top_wrap_content  += l0.faqs[l1][l2][l3];
              $top_wrap_content  += "</div>";
            }

            // A: The first phrase / headline of an answer, 
            // this also links / jumps to the full faq article below.
            if (l3 === 'answer') {

              $thumbnail_content += "<div class=\"button-link\"> <ul> <li>" ;       
              $thumbnail_content +=   "<a href=\"#faq_number_" + $faq_number + "\"> <span>";
              $thumbnail_content +=      l0.faqs[l1][l2][l3]; 
              $thumbnail_content +=   "</a> </span>" ;                                     
              $thumbnail_content += "</li> </ul> </div>";

              $top_wrap_content  +=   "<span class=\"dancing-cursive big-a\">";
              $top_wrap_content  +=     "A: ";
              $top_wrap_content  +=   "</span>";
              $top_wrap_content  += l0.faqs[l1][l2][l3];  

            }

            // A: The rest of the answer text.
            if (l3 === 'answer_p') {
              $top_wrap_content  += "<p>";
              $top_wrap_content  +=   l0.faqs[l1][l2][l3];
              $top_wrap_content  += "</p>";
            }        

            // An ordered list in an answer.
            if (l3 === 'answer_ol') {
              $top_wrap_content  += "<ol>";

              for (var level_four in l0.faqs[l1]
              [l2][l3]) {

                var list_item = l0.faqs[l1]
                [l2][l3][level_four].li;            
               
                $top_wrap_content  += "<li>";
                $top_wrap_content  +=   list_item;
                $top_wrap_content  += "</li>";
              }
                
              $top_wrap_content  += "</ol>";
            } 

            // A table in an answer.
            if (l3 === 'answer_table') {

              // table start
              var row_type = "header";
              $top_wrap_content  += "<table style=\"width:50%\">"

              // iterate through each table row (key, value) and print it
              for (var level_four in l0.faqs[l1]
              [l2][l3]) {

                // use simple var names instead of long array indices
                var this_key = level_four; 
                var this_value = l0.faqs[l1]
                [l2][l3][level_four];                

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

                row_type = "data";           
              }

              // end table
              $top_wrap_content  += "</table>"
            } 

            // print list (formatted as two columns) to html.
            if (l3 === 'two_column_list') {
              
              // table start on the top left row... 
              var which_side = "left";
              $top_wrap_content  += "<table style=\"width:50%\">"

              // print in this order: row1-columnleft, row1-columnright,
              // row2-columnleft, etc.
              for (var level_four in l0.faqs[l1]
              [l2][l3]) {

                var this_cell = l0.faqs[l1]
                [l2][l3][level_four].li;
                
                if (which_side === "left")  { 
                  $top_wrap_content  += "<tr>";
                  $top_wrap_content  +=   "<td>";
                  $top_wrap_content  +=     this_cell;
                  $top_wrap_content  +=   "</td>";
                }
                else if (which_side === "right") { 
                  $top_wrap_content  +=   "<td>";                 
                  $top_wrap_content  +=     this_cell;
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

        // write content stored to the html file that called this JQuery function.
        // This will be written to the thumbnails.
        $("#thumbnail-wrap-faqs").each( function (){
          $("#thumbnail-wrap-faqs").append($thumbnail_content);
        }); 

        // write content stored to the html file that called this JQuery function.
        // This will be written to the large wrap with the detailed answers, tables, lists.
        $("#banner-faqs").each( function (){
          $("#banner-faqs").append($top_wrap_content);
        });

      }

    }

    }

  });



});

