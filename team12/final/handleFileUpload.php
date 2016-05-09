<?php
var_dump($_POST);

echo "post to php\n";

$fName = $_POST["filename"];
$data = $_POST["data"];
//$data = json_encode($data);
//$jsonData = json_encode($dataRaw); 

$myfile = fopen("../data/$fName", "w") or die("Unable to open file!");
	
fwrite($myfile, $data);

fclose($myfile);

echo "wrote new data to ".$fName;

?>