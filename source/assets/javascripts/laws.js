var $yaml_file = "/data/laws.yml";

jQuery(document).ready( function($){

  $.ajax({ url: $yaml_file, success: function (file_content) {
    var l0 = YAML.eval(file_content);
    console.log('\n');

    $law_number = 0;
    $top_wrap_content  = "";

    for (var l1 in l0.laws) {

      $top_wrap_content  += "<div class=\"top-wrap\">" ;

      if (l0.laws[l1].article.preamble) {

        $top_wrap_content  += "<div class=\"dancing-cursive\">"
        $top_wrap_content  +=     "<h2>" 
        $top_wrap_content  +=        "Preamble"  
        $top_wrap_content  +=    "</h2>"             
        $top_wrap_content  += "</div>"
        $top_wrap_content  += "<p>" ;
        $top_wrap_content  +=   l0.laws[l1].article.preamble ;
        $top_wrap_content  += "</p>" ;
      }

      if (l0.laws[l1].article.titl) {
        $top_wrap_content  += "<p>" ;
        $top_wrap_content  +=   l0.laws[l1].article.titl ;
        $top_wrap_content  += "</p>" ;

        $top_wrap_content  += "<div class=\"dancing-cursive\">"
        $top_wrap_content  +=     "<h2> "
        $top_wrap_content  +=         "Article I"  
        $top_wrap_content  +=     "</h2>"   
        $top_wrap_content  +=     "<h3>" 
        $top_wrap_content  +=         "Incorporation"  
        $top_wrap_content  +=     "</h3>"            
        $top_wrap_content  += "</div>"
      }

      if (l0.laws[l1].article.section_ol) {
        $top_wrap_content  +=  l0.laws[l1].article.section_ol ;
      }

      $top_wrap_content  += "</div>" ;

      // write content stored to the html file that called this JQuery function.
      $("#banner-laws").each( function (){
        $("#banner-laws").append($top_wrap_content);
      });

    }



  }
  });

});

