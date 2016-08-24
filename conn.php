<?php
$dbhost='localhost';
$dbuser='phaneendra';
$dbpass='soumya';
$db='yep';
$conn=mysql_connect($dbhost,$dbuser,$dbpass) or die('get lost!');
mysql_select_db($db);
?>