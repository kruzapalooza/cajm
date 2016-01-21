$cal_file = "cajm.ical";

<?php
	$myfile = fopen($cal_file, "r") or die("Unable to open file!");
	echo fread($myfile,filesize($cal_file));
	fclose($myfile);
?>