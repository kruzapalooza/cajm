<?php

$faq_yaml_file = "/assets/data/faqs.yaml";

	$myfile = fopen($cal_file, "r") or die(log.console("Unable to open file!"));
	echo fread($myfile,filesize($faq_yaml_file));
  log.console($myfile);
	fclose($myfile);
  debug_to_console("something");

  function debug_to_console( $data ) {

      if ( is_array( $data ) )
          $output = "<script>console.log( 'Debug Objects: " . implode( ',', $data) . "' );</script>";
      else
          $output = "<script>console.log( 'Debug Objects: " . $data . "' );</script>";

      echo $output;
  }

?>