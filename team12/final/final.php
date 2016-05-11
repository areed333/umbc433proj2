<!DOCTYPE html>
<html>
<head> 
	<title>Advising</title>
	<link rel="stylesheet" type="text/css" href="Project1.css">
	<link rel="icon" href="favicon.ico" type="image/gif" sizes="16x16">
</head>
<body>
<div class="wrap">
<div class="center">

            	<img src="umbc50.jpg">
			<h1>
                Computer Science Advising Form
			</h1>
			<h2>Please fill out the form below before coming to your advising appointment.</h2>

<?php

// all the values, at top for easy reference
//Initialize all needed query vars
$classes_core = array("CMSC201","CMSC202","CMSC203","CMSC313","CMSC331","CMSC341","CMSC411",
"CMSC421","CMSC441","CMSC447");
$classes_mathstat = array("MATH151","MATH152","MATH221");
$classes_science = array("BIOL141","BIOL142","CHEM101","CHEM102","PHYS121",
	"PHYS122","BIOL251","bLab251","BIOL252","bLab252","BIOL275","bLab275","BIOL302","bLab302","BIOL303","bLab303","BIOL304","bLab304","BIOL305","bLab305","cLab102","pLab122","PHYS224","PHYS304","GES110","GES111","GES120");
	
$classes_elec = array("CMSC426","CMSC427", "CMSC432", "CMSC433", "CMSC435", "CMSC436", "CMSC437", "CMSC442",
		"CMSC443", "CMSC444", "CMSC446", "CMSC448", "CMSC452", "CMSC453", "CMSC455", "CMSC457", 
		"CMSC461", "CMSC465", "CMSC471", "CMSC481", "CMSC483", 
		"CMSC466", "CMSC473", "CMSC475", "CMSC476", "CMSC477", "CMSC478", "CMSC479", "CMSC484",
		"CMSC486", "CMSC487", "CMSC491", "CMSC493");

$classes_other_cmsc = array("CMSC232", "CMSC291", "CMSC299", "CMSC352", "CMSC391", "CMSC456",
	"CMSC495", "CMSC498", "CMSC499");
		
$classes_4xx = array("CMSC441","CMSC447","CMSC426","CMSC431","CMSC435","CMSC448","CMSC451","CMSC455","CMSC456","CMSC461","CMSC471","CMSC481","CMSC483","CMSC427","CMSC432","CMSC433","CMSC436","CMSC437","CMSC442","CMSC443","CMSC444","CMSC446","CMSC452","CMSC453","CMSC457","CMSC465","CMSC466","CMSC473","CMSC475","CMSC476","CMSC477","CMSC478","CMSC479","CMSC484","CMSC486","CMSC487","CMSC493");
		

$student_id = "n/a";
$first_name = "n/a";
$last_name = "n/a";
$user_email = "n/a";
$student_year = "n/a";
$student_comments ="n/a";
$classes_core_string = "";
$classes_mathstat_string ="";
$classes_sci_string="";
$classes_elec_string="";
$classes_other_string="";

class Common
{	
	var $conn;
	var $debug;
			
	function Common($debug)
	{
		$this->debug = $debug; 
		$rs = $this->connect("ejohn3"); // db name really here
		return $rs;
	}
	// %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
	
	function connect($db)// connect to MySQL
	{
		$conn = @mysql_connect("studentdb-maria.gl.umbc.edu", "ejohn3", "ejohn3") 
		or die("Could not connect to MySQL");
		$rs = @mysql_select_db($db, $conn) or die("Could not connect select $db database");
		$this->conn = $conn; 
	}
	// %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
	/* This function didn't work, so we nixing it.
	function executeQuery($sql, $filename) // execute query
	{
		if($this->debug == true) { 
			echo("$sql <br>\n"); 
			}
		$rs = mysql_query($sql, $this->conn) or die("Could not execute query '$sql' 
		in $filename"); 
		return $rs;
	}			*/

} // ends class, NEEDED!!

//OPEN CONNECTION TO DB
$instance = new Common(TRUE);
$instance->connect("ejohn3");


// Since mysql_query() didn't work by it's glonesome, we have a sweet insert function here.
function mysql_insert($table, $inserts) {
    $values = array_map('mysql_real_escape_string', array_values($inserts));
    $keys = array_keys($inserts);
		/* test prints
		echo("Testing: <br>");
		echo('INSERT INTO `'.$table.'` (`'.implode('`,`', $keys).'`) VALUES (\''.implode('\',\'', $values).'\')');
		echo("<br><br>"); */
	return mysql_query('INSERT INTO `'.$table.'` (`'.implode('`,`', $keys).'`) VALUES (\''.implode('\',\'', $values).'\')');

}

//Assign actual values to vars then add to DB
$first_name = $_GET["firstname"];
$last_name = $_GET["lastname"];
$student_id = $_GET["ID"];
$user_email = $_GET["email"];
$temp_year = $_GET["year"];
//determine year string
if ($temp_year==1) {
	$student_year = "Freshman";
}
else if ($temp_year==2) {
	$student_year = "Sophomore";
}
else if ($temp_year==3) {
	$student_year = "Junior";
}
else if ($temp_year==4) {
	$student_year = "Senior";
}
else if ($temp_year==5) {
	$student_year = "S.Senior";
}
$student_comments = $_GET["comments"];

// remove last "," as well = rtrim
$classes_core_string = rtrim(($_GET["cmsc"]), ",");
$classes_mathstat_string = rtrim(($_GET["math"]), ",");
$classes_sci_string= rtrim(($_GET["science"]), ",");
$classes_elec_string= rtrim(($_GET["cmscReqElec"]), ",");
$classes_other_string= rtrim(($_GET["cmscElec"]), ",");

// take all chosen strings and put it into one array
$classesChosen = array($classes_core_string, $classes_mathstat_string, $classes_sci_string, $classes_elec_string,
		$classes_other_string);

// //------------------------------------
// //  Actually push to the DB now!!
// //-----------------------------------
// mysql_insert('proj2', array(
//     'StudentID' => $student_id,
//     'FirstName' => $first_name,
//     'LastName' => $last_name,
// 	'Email' => $user_email,
// 	'ClassStanding' => $student_year,
// 	'QuestionsComments' => $student_comments,
// 	'ReqCMSC' => $classes_core_string,
// 	'ReqMATH' => $classes_mathstat_string,
// 	'ReqSCIE' => $classes_sci_string,
// 	'ElecCMSC' => $classes_elec_string,
// 	'OtherCMSC' => $classes_other_string
	
// ));


?>




<fieldset>
<legend> Let's take a look at what your options are for next semester!! </legend>
<br>

<fieldset id="fMath">
<legend>From required Math Courses (MATH151, MATH152, MATH221):</legend>
</fieldset><br>

<fieldset id="fSci">
<legend>Required Science Track (Either BIOL100 + BIOL300, or BIOL141 + BIOL142, or CHEM101 + CHEM102, 
or PHYS121 + PHYS122):</legend>
</fieldset><br>

<fieldset id="fStat">
<legend>Required Statistics Course (STAT355):</legend>
</fieldset><br>

<fieldset id="fCsCore">
<legend>Required Core Computer Science Courses (CMSC201, CMSC202, CMSC203, CMSC313, 
CMSC331, CMSC341, CMSC411, CMSC421, CMSC441, and  CMSC447):</legend>
</fieldset><br>

<fieldset id="fWrit">
<legend>Required Writing Intensive Computer Science Course (CMSC304):</legend>
</fieldset><br>

<fieldset id="fCsElec">
<legend>Computer Science Electives - Four Total:</legend>
</fieldset><br>

</fieldset>
<script src="https://cdnjs.cloudflare.com/ajax/libs/lodash.js/2.4.1/lodash.min.js"></script>
<script src="//ajax.googleapis.com/ajax/libs/jquery/1.6.4/jquery.min.js"></script>
	<!-- <script type="text/javascript" src="data/ClassData_phpPrint.js"></script> -->
	<script type="text/javascript" src="data/ClassData.js"></script>
	<!-- <script type="text/javascript" src="ClassData4.js"></script> -->
<script type="text/javascript">
	var classesChosen = <?php echo '["' . implode('", "', $classesChosen) . '"]' ?>;
	var classes_core = <?php echo '["' . implode('", "', $classes_core) . '"]' ?>;
	var classes_mathstat = <?php echo '["' . implode('", "', $classes_mathstat) . '"]' ?>;
	var classes_science = <?php echo '["' . implode('", "', $classes_science) . '"]' ?>;
	var classes_elec = <?php echo '["' . implode('", "', $classes_elec) . '"]' ?>;
	var classes_other_cmsc = <?php echo '["' . implode('", "', $classesChosen) . '"]' ?>;
	var classes_4xx = <?php echo '["' . implode('", "', $classes_4xx) . '"]' ?>;


</script>
<!--script type="text/javascript" src="phpPrint.js"></script-->
<script type="text/javascript" src="phpPrint2.js"></script>
<div id="footer">
            	&#169; UMBC College of Computer Science and Electrical Engineering, 2016 <br>
                Contact Doug Bennett, Tim Maher, or Naomi Schumacher with problems
		    </div>
	</div>
    
    
			
    </div>
</body>
</html>
