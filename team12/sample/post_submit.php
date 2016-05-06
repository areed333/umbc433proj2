<!--
Name: Submission PHP File
-->
<!DOCTYPE html>
<html>
<head> 
	<title>Advising</title>
	<link rel="stylesheet" type="text/css" href="Project1.css">
	<link rel="icon" href="favicon.ico" type="image/gif" sizes="16x16">
</head>

<body>
<!-- PSEUDO CODE EXTRAVAGANZA!!!!!
	(0) Open DB connection, loop through data, push to a record (open working, need to push still)
	
	(1) Verify Math, Statistics, and Science (No CMSC Prereqs here)
		-MATH151, MATH152, and MATH221 (done)
		-STAT355(done)
		-Science Track: (BIOL100 and BIOL301) or (BIOL141 and BIOL142) or (CHEM101 and CHEM102) 
			or (PHYS121 and PHYS122) (done)
		-Science: Add'tl credits(including a lab) from:
			-BIOL 251, 251L, 252, 252L, 302, 302L, 303, 303L, 304, 304L, 305, 305L; 
			-CHEM 102L; 
			-GES 110, 111, 120, 286; 
			-PHYS 122L, 224, 304; SCI 101L
	
	(2) Verify Core Courses: 201, 202, 203, 313, 331, 341, 411, 421, 441, 447
	
	(3) Verify Writing Intensive Requirement: CMSC304
	
	(4) Verify "Computer Science Electives"
		2x from CMSC426, CMSC431, CMSC435, CMSC451, CMSC455, CMSC456, CMSC461, CMSC471, 
			CMSC481, CMSC483
			
	(5) Verify "Technical Comp Sci Electives"
		To complete the three technical requirements, choose from those listed in (E) above or any 
		other three-credit CMSC 400-level course, except CMSC404 or CMSC495-499. 
		"any other" could be CMSC427, CMSC432, CMSC 433, CMSC436, CMSC 437, CMSC442,
		CMSC 443, CMSC 444, CMSC 446, CMSC 448, CMSC 452, CMSC453, CMSC457, CMSC465,
		CMSC466, CMSC473, CMSC475, CMSC476, CMSC477, CMSC478, CMSC478, CMSC484,
		CMSC486, CMSC487, CMSC 491, or CMSC493.
		
	END PSEUDOCODE -->
	
<div class="wrap">
<div class="center">

            	<img src="umbc50.jpg">
			<h1>
                Computer Science Advising Form
			</h1>
			<h2>Please fill out the form below before coming to your advising appointment.</h2>
	<?php
	
//echo("Current PHP Version: " . phpversion() . "<br>"); spoiler: it's ancient

//Initialize all needed query vars
$classes_core = array("CMSC201","CMSC202","CMSC203","CMSC313","CMSC331","CMSC341","CMSC411",
"CMSC421","CMSC441","CMSC447");
$classes_mathstat = array("MATH151","MATH152","MATH221","STAT355");
$classes_science = array("BIOL100","BIOL301","BIOL141","BIOL142","CHEM101","CHEM102","PHYS121",
	"PHYS122");
	
$classes_elec = array("CMSC427", "CMSC432", "CMSC 433", "CMSC435", "CMSC436", "CMSC437", "CMSC442",
		"CMSC443", "CMSC444", "CMSC446", "CMSC448", "CMSC452", "CMSC453", "CMSC455", "CMSC457", 
		"CMSC461", "CMSC465", "CMSC471", "CMSC481", "CMSC483", 
		"CMSC466", "CMSC473", "CMSC475", "CMSC476", "CMSC477", "CMSC478", "CMSC479", "CMSC484",
		"CMSC486", "CMSC487", "CMSC491", "CMSC493");
$classes_other_cmsc = array("CMSC232", "CMSC291", "CMSC299", "CMSC352", "CMSC391", "CMSC456",
	"CMSC495", "CMSC498", "CMSC499");
		
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

/*
//TESTING
echo("TEST: $classes_core[0] is: " . $classes_core[0] . "<br><br>");
//$class_string = $classes_core[0];
echo("TEST: $_GET(classes_core[0]) is: " . $_GET[$classes_core[0]] . " (hoping: false).<br>");
*/
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


// Since mysql_query() didn't work by it's lonesome, we have a sweet insert function here.
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

//-------------------------------------------
//Loop to construct CMSC Core Classes String
//--------------------------------------------
for($class_loop_ctr=0; $class_loop_ctr < count($classes_core); $class_loop_ctr++) {
	if ($_GET[$classes_core[$class_loop_ctr]]==TRUE) {
		$classes_core_string .= $classes_core[$class_loop_ctr];
		$classes_core_string .= ", ";
	}	
	else{
		//do nothing, skip it
	}
}
//remove last ", "
$classes_core_string = substr($classes_core_string, 0, -2);

//-------------------------------------------
//Loop to construct Math / Statistics String
//-------------------------------------------
for($class_loop_ctr=0; $class_loop_ctr < count($classes_mathstat); $class_loop_ctr++) {
	if ($_GET[$classes_mathstat[$class_loop_ctr]]==TRUE) {
		$classes_mathstat_string .= $classes_mathstat[$class_loop_ctr];
		$classes_mathstat_string .= ", ";
	}	
	else{
		//do nothing, skip it
	}
}
//remove last ", "
$classes_mathstat_string = substr($classes_mathstat_string, 0, -2);

//------------------------------------------
//   Loop to construct Sciences String
//------------------------------------------
for($class_loop_ctr=0; $class_loop_ctr < count($classes_science); $class_loop_ctr++) {
	if ($_GET[$classes_science[$class_loop_ctr]]==TRUE) {
		$classes_sci_string .= $classes_science[$class_loop_ctr];
		$classes_sci_string .= ", ";
	}	
	else{
		//do nothing, skip it
	}
}
//remove last ", "
$classes_sci_string = substr($classes_sci_string, 0, -2);

//------------------------------------------
// Loop to construct CompSci Electives String
//------------------------------------------
for($class_loop_ctr=0; $class_loop_ctr < count($classes_elec); $class_loop_ctr++) {
	if ($_GET[$classes_elec[$class_loop_ctr]]==TRUE) {
		$classes_elec_string .= $classes_elec[$class_loop_ctr];
		$classes_elec_string .= ", ";
	}	
	else{
		//do nothing, skip it
	}
}
//remove last ", "
$classes_elec_string = substr($classes_elec_string, 0, -2);

//------------------------------------------
// Loop to construct "OTHER" CompSci String
//------------------------------------------
for($class_loop_ctr=0; $class_loop_ctr < count($classes_other_cmsc); $class_loop_ctr++) {
	if ($_GET[$classes_other_cmsc[$class_loop_ctr]]==TRUE) {
		$classes_other_string .= $classes_other_cmsc[$class_loop_ctr];
		$classes_other_string .= ", ";
	}	
	else{
		//do nothing, skip it
	}
}
//remove last ", "
$classes_other_string = substr($classes_other_string, 0, -2);


/*If sudentID is in use in the database, the old record is deleted so that the new one can take it's place
DONT MESS WITH THIS OMG IT WILL BREAK SO HARD
echo("DELETE FROM  StudentInformation WHERE  StudentID = '" . $student_id . "'<br>");*/
$oldRecord = mysql_query("DELETE FROM  StudentInformation WHERE  StudentID = '" . $student_id . "'");


//------------------------------------
//  Actually push to the DB now!!
//-----------------------------------
mysql_insert('proj2', array(
    'StudentID' => $student_id,
    'FirstName' => $first_name,
    'LastName' => $last_name,
	'Email' => $user_email,
	'ClassStanding' => $student_year,
	'QuestionsComments' => $student_comments,
	'ReqCMSC' => $classes_core_string,
	'ReqMATH' => $classes_mathstat_string,
	'ReqSCIE' => $classes_sci_string,
	'ElecCMSC' => $classes_elec_string,
	'OtherCMSC' => $classes_other_string
	
));

// <!-- END PART 0 -->

echo("<fieldset>");
echo ("<legend> Let's take a look at what your options are for next semester!! </legend>");
echo($classes_core_string);
echo("test");
/*---------------------------------
/       MATH COURSES CHECK!       /
--------------------------------*/
echo("<br><fieldset>");
echo('<legend>From required Math Courses (MATH151, MATH152, MATH221):</legend>');

if($_GET["MATH151"]==TRUE) {
	if($_GET["MATH152"]==TRUE && $_GET["MATH221"]==TRUE) {
		//all three have been taken.
		echo("-You've finished your required Math courses.<br>");
		}
	else if($_GET["MATH152"]==TRUE) {
		//151 and 152 have been taken.
		echo("-You could take <b>MATH221: Linear Algebra</b><br>");
		}
	else{
		//only Math151 has been taken.
		echo("-You could take <b>MATH152: Calculus 2</b><br>");
		}	
}
else {
	//No required Math has been taken.
	echo("-You could take <b>MATH151: Calculus 1</b><br>");
	echo("-You could take <b>".$classes_core_string.": Linear Algebra</b><br>");
	}
echo("</fieldset><br>");
/*------------------------------------
/       END Math Classes check.      /
-----------------------------------*/

/*---------------------------------
/         STAT 355 CHECK!         /
--------------------------------*/
echo("<fieldset>");
echo("<legend>Required Statistics Course (STAT355):</legend>");
//option 1: already took stat.
if($_GET["STAT355"]==TRUE) {
	echo("-You've fulfilled this requirement!<br>");
}
//option 2: has taken prereq 152 but not stat.
else if($_GET["MATH152"]==TRUE && $_GET["STAT355"]!=TRUE) {
	echo("-You could take <b>STAT355: Statistics for Computer Science/Engineering Majors</b><br>");
}
//option 3: has not completed prereq.
else{
	echo("-You have not met the MATH152 prerequisite. See above 'Math' course suggestions.<br>");
} 
echo("</fieldset><br>");
/*------------------------------------
/         END STAT355 check.         /
-----------------------------------*/

/*---------------------------------
/      SCIENCE TRACK CHECK!       /
--------------------------------*/
echo("<fieldset>");
echo("<legend>Required Science Track (Either BIOL100 + BIOL300, or BIOL141 + BIOL142, or CHEM101 + CHEM102, 
or PHYS121 + PHYS122):</legend>");

//Option 0: No science track has been started.
	if($_GET["BIOL100"]!=TRUE && $_GET["BIOL141"]!=TRUE && $_GET["CHEM101"]!=TRUE && $_GET["PHYS121"]!=TRUE) 
{
	echo("-You haven't started a science track yet! You could begin any of the above tracks.<br>");
}

//Option 1: Physics Track
else if($_GET["PHYS121"]==TRUE) {
	// Has taken first but not second course.
	if($_GET["PHYS122"]!=TRUE) {
		echo("-You've started the Physics track with PHYS121.<br>
		 -You could take <b>PHYS122: Elementary Physics II</b>.<br>");
	}
	//Has completed Physics track.
	else{
		echo("-You've completed the Physics science track!<br>");
	}
}

// Option 2: Chemistry Track
else if($_GET["CHEM101"]==TRUE) {
	// Has taken first but not second course.
	if($_GET["CHEM102"]!=TRUE) {
		echo("-You've started the Chemisry track with CHEM101.<br>
		 You could take <b>CHEM102: Principles of Chemistry II</b>.<br>");
	}
	//Has completed Chemistry track.
	else{
		echo("-You've completed the Chemistry science track!<br>");
	}
}

// Option 3: Bio Track 100 + 301
else if($_GET["BIOL100"]==TRUE) {
	// Has taken first but not second course.
	if($_GET["BIOL301"]!=TRUE) {
		echo("-You've started one of the Biology Tracks with BIOL100.<br>
		 You could take <b>BIOL301: Ecology and Evolution</b>.<br>");
	}
	//Has completed Biology track.
	else{
		echo("You've completed the Biology(100 & 301) science track!<br>");
	}
}

// Option 4: Bio Track 141 + 142
else if($_GET["BIOL141"]==TRUE) {
	// Has taken first but not second course.
	if($_GET["BIOL142"]!=TRUE) {
		echo("-You've started one of the Biology Tracks with BIOL141.<br>
		 You could take <b>BIOL142: Foundations of Biology II</b>.<br>");
	}
	//Has completed Chemistry track.
	else{
		echo("-You've completed the Biology(141 and 142) science track!<br>");
	}
} 
echo("</fieldset><br>");
/*------------------------------------
/       END Science track check.     /
-----------------------------------*/


/*---------------------------------
/     COMP SCI CORE CHECK!        /
--------------------------------*/
echo("<fieldset>");
echo("<legend>Required Core Computer Science Courses (CMSC201, CMSC202, CMSC203, CMSC313, 
CMSC331, CMSC341, CMSC411, CMSC421, CMSC441, and  CMSC447):</legend>");
//CMSC201
if($_GET["CMSC201"]!=TRUE) {
	echo("-You've only just begun your journey! Better get started with <b>CMSC201: Computer Science 
	for Majors I</b><br>");
}
//CMSC202
if($_GET["CMSC201"]==TRUE && $_GET["CMSC202"]!=TRUE) {
	echo("-You could(and should!) take <b> CMSC202: Computer Science for Majors II</b><br>");
}
//CMSC203
if($_GET["MATH151"]==TRUE && $_GET["CMSC203"]!=TRUE) {
	echo("-You could(and should!) take <b> CMSC203: Discrete Structures</b><br>");
}
//CMSC313
if($_GET["CMSC202"]==TRUE && $_GET["CMSC203"]==TRUE && $_GET["CMSC313"]!=TRUE) {
	echo("-You could take <b> CMSC313: Computer Organization and Assembly Language Programming</b><br>");
}
//CMSC331
if(($_GET["CMSC202"]==TRUE && $_GET["CMSC203"]==TRUE) && $_GET["CMSC331"]!=TRUE) {
	echo("-You could take <b> CMSC331: Principles of Programming Languages</b><br>");
}
//CMSC341
if($_GET["CMSC202"]==TRUE && $_GET["CMSC203"]==TRUE && $_GET["CMSC341"]!=TRUE) {
	echo("-You could take <b> CMSC341: Data Structures</b><br>");
}
//CMSC411
if($_GET["CMSC313"]==TRUE && $_GET["CMSC411"]!=TRUE) {
	echo("-You could take <b> CMSC411: Computer Architecture</b><br>");
}
//CMSC421
if($_GET["CMSC313"]==TRUE && $_GET["CMSC341"]==TRUE && $_GET["CMSC421"]!=TRUE) {
	echo("-You could take <b> CMSC421: Principles of Operating Systems</b><br>");
}
//CMSC441
if($_GET["CMSC341"]==TRUE && $_GET["STAT355"]==TRUE && $_GET["MATH152"]==TRUE && $_GET["CMSC441"]!=TRUE) {
	echo("-You could take <b> CMSC441: Design and Analysis of Algorithms</b><br>");
}
//CMSC447
if($_GET["341"]==TRUE && ($_GET["411"]==TRUE or $_GET["421"]==TRUE or $_GET["441"]==TRUE) && $_GET["CMSC447"]!=TRUE) {
	echo("-You could take <b> CMSC447: Software Design and Development</b><br>");
}
echo("</fieldset><br>");
/*---------------------------------
/   END COMP SCI CORE CHECK!      /
--------------------------------*/

/*---------------------------------
/  COMP SCI WRITING INTENSIVE     /
--------------------------------*/
echo("<fieldset>");
echo("<legend>Required Writing Intensive Computer Science Course (CMSC304):</legend>");
//CMSC304
//case 1: already completed
if($_GET["CMSC202"]==TRUE && $_GET["CMSC304"]==TRUE) {
	echo("-You've completed this requirement!<br>");
}
//case 2: can take
else if($_GET["CMSC202"]==TRUE && $_GET["CMSC304"]!=TRUE) {
	echo("-You could take <b>CMSC304: Social and Ethical Issues in Information Technology</b><br>");
}
//case 3: prereq not met
else{
	echo("-You're missing the prerequirement for this course. Check out your Core course options.<br>");
}
echo("</fieldset><br>");
/*---------------------------------
/  END COMP SCI WRITING INTENSIVE /
--------------------------------*/

/*---------------------------------
/  START COMP SCI ELECTIVES       /
--------------------------------*/
echo("<fieldset>");
$generalCount = 0;
$technicalCount = 0;
echo("<legend>Computer Science Electives - Four Total:</legend>");
echo("Choose two from CMSC426, CMSC431, CMSC435, CMSC445, 
CMSC451, CMSC455, CMSC456, CMSC461, CMSC471, CMSC481, and CMSC483 as general electives. Then, choose 
any two additional 400-level Computer Science Courses as a technical electives. Note that CMSC404 
and 495-499 do not qualify for this requirement. However, any from the previous list do qualify.<br><br>");
//CMSC426
if($_GET["CMSC426"]!=TRUE && $_GET["CMSC421"]==TRUE) {
	//they haven't taken it but have the prereqs
	echo("-You could take <b>CMSC426: Principles of Computer Security</b><br>");
}
else if($_GET["CMSC426"]!=TRUE && $_GET["CMSC421"]!=TRUE) {
	//they are not eligible to take it yet
}
else {
	$generalCount++; //they took it already.
}

//CMSC431
if($_GET["CMSC431"]!=TRUE && $_GET["CMSC313"]==TRUE && $_GET["CMSC331"]==TRUE 
&& $_GET["CMSC341"]==TRUE) {
	//they haven't taken it but have the prereqs
	echo("-You could take <b>CMSC431: Compiler Design Principles</b><br>");
}
else if($_GET["CMSC426"]!=TRUE && ($_GET["CMSC313"]!=TRUE or $_GET["CMSC331"]!=TRUE
or $_GET["CMSC341"]!=TRUE)) {
	//they are not eligible to take it yet
}
else {
	$generalCount++; //they took it already.
}

//CMSC435
if($_GET["CMSC435"]!=TRUE && $_GET["CMSC313"]==TRUE && $_GET["CMSC341"]==TRUE 
&& $_GET["MATH221"]==TRUE) {
	//they haven't taken it but have the prereqs
	echo("-You could take <b>CMSC435: Computer Graphics</b><br>");
}
else if($_GET["CMSC435"]!=TRUE && ($_GET["CMSC313"]!=TRUE or $_GET["CMSC341"]!=TRUE
or $_GET["MATH221"]!=TRUE)) {
	//they are not eligible to take it yet
}
else {
	$generalCount++; //they took it already.
}
//CMSC451
if($_GET["CMSC451"]!=TRUE && $_GET["CMSC202"]==TRUE && $_GET["CMSC203"]==TRUE ) {
	//they haven't taken it but have the prereqs
	echo("-You could take <b>CMSC451: Automata Theory and Formal Languages</b><br>");
}
else if($_GET["CMSC451"]!=TRUE && ($_GET["CMSC202"]!=TRUE or $_GET["CMSC203"]!=TRUE)) {
	//they are not eligible to take it yet
}
else {
	$generalCount++; //they took it already.
}

//CMSC455
if($_GET["CMSC455"]!=TRUE && $_GET["CMSC341"]==TRUE && $_GET["MATH221"]==TRUE 
&& $_GET["MATH152"]==TRUE) {
	//they haven't taken it but have the prereqs
	echo("-You could take <b>CMSC455: Numerical Computations</b><br>");
}
else if($_GET["CMSC455"]!=TRUE && ($_GET["CMSC341"]!=TRUE or $_GET["MATH221"]!=TRUE
or $_GET["MATH152"]!=TRUE)) {
	//they are not eligible to take it yet
}
else {
	$generalCount++; //they took it already.
}

//CMSC456
if($_GET["CMSC456"]!=TRUE && $_GET["CMSC341"]==TRUE && $_GET["MATH221"]==TRUE 
&& $_GET["MATH152"]==TRUE) {
	//they haven't taken it but have the prereqs
	echo("-You could take <b>CMSC456: Symbolic Computation</b><br>");
}
else if($_GET["CMSC456"]!=TRUE && ($_GET["CMSC341"]!=TRUE or $_GET["MATH221"]!=TRUE
or $_GET["MATH152"]!=TRUE)) {
	//they are not eligible to take it yet
}
else {
	$generalCount++; //they took it already.
}

//CMSC461
if($_GET["CMSC461"]!=TRUE && $_GET["CMSC341"]==TRUE) {
	//they haven't taken it but have the prereqs
	echo("-You could take <b>CMSC461: Database Management Systems</b><br>");
}
else if($_GET["CMSC461"]!=TRUE && $_GET["CMSC341"]!=TRUE) {
	//they are not eligible to take it yet
}
else {
	$generalCount++; //they took it already.
}

//CMSC471
if($_GET["CMSC471"]!=TRUE && $_GET["CMSC341"]==TRUE) {
	//they haven't taken it but have the prereqs
	echo("-You could take <b>CMSC471:Introduction to Artificial Intelligence</b><br>");
}
else if($_GET["CMSC471"]!=TRUE && $_GET["CMSC341"]!=TRUE) {
	//they are not eligible to take it yet
}
else {
	$generalCount++; //they took it already.
}

//CMSC481
if($_GET["CMSC481"]!=TRUE && $_GET["CMSC341"]==TRUE) {
	//they haven't taken it but have the prereqs
	echo("-You could take <b>CMSC481: Computer Networks</b><br>");
}
else if($_GET["CMSC481"]!=TRUE && $_GET["CMSC341"]!=TRUE) {
	//they are not eligible to take it yet
}
else {
	$generalCount++; //they took it already.
}

//CMSC483
if($_GET["CMSC483"]!=TRUE && $_GET["CMSC421"]==TRUE) {
	//they haven't taken it but have the prereqs
	echo("-You could take <b>CMSC483: Parallel and Distributed Processing</b><br>");
}
else if($_GET["CMSC483"]!=TRUE && $_GET["CMSC421"]!=TRUE) {
	//they are not eligible to take it yet
}
else {
	$generalCount++; //they took it already.
}
//NOTE: THIS ENDS THE GENERAL ELECTIVES. EVERYTHING ELSE IS FOR TECHNICAL ONLY

//CMSC427
if($_GET["year"]>=4 && $_GET["CMSC427"]!=TRUE) {
	//they can take it
	echo("-Because you are a senior(or beyond), you could take 
	<b>CMSC427: Wearable Computing</b><br>");
}
else if($_GET["CMSC427"]==TRUE) {
	//they already took it
	$technicalCount++;
}

//CMSC432
if($_GET["CMSC432"]!=TRUE && $_GET["CMSC331"]==TRUE && $_GET["CMSC341"]==TRUE ) {
	//they haven't taken it but have the prereqs
	echo("-You could take <b>CMSC432: Object-Oriented Programming Languages and
	Systems</b><br>");
}
else if($_GET["CMSC432"]!=TRUE && ($_GET["CMSC341"]!=TRUE or $_GET["CMSC331"]!=TRUE)) {
	//they are not eligible to take it yet
}
else {
	$technicalCount++; //they took it already.
}

//CMSC433
if($_GET["CMSC433"]!=TRUE && $_GET["CMSC331"]==TRUE ) {
	//they haven't taken it but have the prereqs
	echo("-You could take <b>CMSC433: Scripting Languages</b><br>");
}
else if($_GET["CMSC433"]!=TRUE && $_GET["CMSC331"]!=TRUE) {
	//they are not eligible to take it yet
}
else {
	$technicalCount++; //they took it already.
}

//CMSC436
if($_GET["CMSC436"]!=TRUE && $_GET["CMSC341"]==TRUE ) {
	//they haven't taken it but have the prereqs
	echo("-You could take <b>CMSC436: Data Visualization</b><br>");
}
else if($_GET["CMSC436"]!=TRUE && $_GET["CMSC341"]!=TRUE) {
	//they are not eligible to take it yet
}
else {
	$technicalCount++; //they took it already.
}

//CMSC437
if($_GET["CMSC437"]!=TRUE && $_GET["CMSC341"]==TRUE && $_GET["MATH221"]==TRUE) {
	//they haven't taken it but have the prereqs
	echo("-You could take <b>CMSC437: Graphical User Interface Programming</b><br>");
}
else if($_GET["CMSC437"]!=TRUE && ($_GET["CMSC341"]!=TRUE or $_GET["MATH221"]!=TRUE)) {
	//they are not eligible to take it yet
}
else {
	$technicalCount++; //they took it already.
}

//CMSC442
if($_GET["CMSC442"]!=TRUE && $_GET["CMSC203"]==TRUE && $_GET["MATH221"]==TRUE) {
	//they haven't taken it but have the prereqs
	echo("-You could take <b>CMSC442: Information and Coding Theory</b><br>");
}
else if($_GET["CMSC442"]!=TRUE && ($_GET["CMSC203"]!=TRUE or $_GET["MATH221"]!=TRUE)) {
	//they are not eligible to take it yet
}
else {
	$technicalCount++; //they took it already.
}

//CMSC443
if($_GET["CMSC443"]!=TRUE && $_GET["CMSC341"]==TRUE && $_GET["MATH221"]==TRUE 
&& $_GET["STAT355"]==TRUE) {
	//they haven't taken it but have the prereqs
	echo("-You could take <b>CMSC443: Cryptology</b><br>");
}
else if($_GET["CMSC443"]!=TRUE && ($_GET["CMSC341"]!=TRUE or $_GET["MATH221"]!=TRUE
or $_GET["STAT355"]!=TRUE)) {
	//they are not eligible to take it yet
}
else {
	$technicalCount++; //they took it already.
}

//CMSC444
if($_GET["CMSC444"]!=TRUE && $_GET["CMSC421"]==TRUE && $_GET["CMSC481"]==TRUE) {
	//they haven't taken it but have the prereqs
	echo("-You could take <b>CMSC444: Information Assurance</b><br>");
}
else if($_GET["CMSC444"]!=TRUE && ($_GET["CMSC421"]!=TRUE or $_GET["CMSC481"]!=TRUE)) {
	//they are not eligible to take it yet
}
else {
	$technicalCount++; //they took it already.
}

//CMSC446
if($_GET["CMSC446"]!=TRUE && $_GET["CMSC331"]==TRUE && $_GET["CMSC341"]==TRUE) {
	//they haven't taken it but have the prereqs
	echo("-You could take <b>CMSC446: Introduction to Design Patterns</b><br>");
}
else if($_GET["CMSC446"]!=TRUE && ($_GET["CMSC331"]!=TRUE or $_GET["CMSC341"]!=TRUE)) {
	//they are not eligible to take it yet
}
else {
	$technicalCount++; //they took it already.
}

//CMSC448
if($_GET["CMSC448"]!=TRUE && $_GET["CMSC447"]==TRUE) {
	//they haven't taken it but have the prereqs
	echo("-You could take <b>CMSC448: Software Engineering II</b><br>");
}
else if($_GET["CMSC448"]!=TRUE && $_GET["CMSC447"]!=TRUE ) {
	//they are not eligible to take it yet
}
else {
	$technicalCount++; //they took it already.
}

//CMSC452
if($_GET["CMSC452"]!=TRUE && $_GET["CMSC203"]==TRUE) {
	//they haven't taken it but have the prereqs
	echo("-You could take <b>CMSC452: Logic for Computer Science</b><br>");
}
else if($_GET["CMSC452"]!=TRUE && $_GET["CMSC203"]!=TRUE ) {
	//they are not eligible to take it yet
}
else {
	$technicalCount++; //they took it already.
}

//CMSC453
if($_GET["CMSC453"]!=TRUE && $_GET["CMSC341"]==TRUE && $_GET["MATH221"]==TRUE 
&& $_GET["MATH152"]==TRUE) {
	//they haven't taken it but have the prereqs
	echo("-You could take <b>CMSC453: Applied Combinatorics and Graph Theory</b><br>");
}
else if($_GET["CMSC453"]!=TRUE && ($_GET["CMSC341"]!=TRUE or $_GET["MATH221"]!=TRUE
or $_GET["MATH152"]!=TRUE)) {
	//they are not eligible to take it yet
}
else {
	$technicalCount++; //they took it already.
}

//CMSC457
if($_GET["CMSC457"]!=TRUE && $_GET["CMSC203"]==TRUE && $_GET["MATH221"]==TRUE) {
	//they haven't taken it but have the prereqs
	echo("-You could take <b>CMSC457: Quantum Computation</b><br>");
}
else if($_GET["CMSC457"]!=TRUE && ($_GET["CMSC203"]!=TRUE or $_GET["MATH221"]!=TRUE)) {
	//they are not eligible to take it yet
}
else {
	$technicalCount++; //they took it already.
}

//CMSC465
if($_GET["CMSC465"]!=TRUE && $_GET["CMSC461"]==TRUE && $_GET["CMSC481"]==TRUE) {
	//they haven't taken it but have the prereqs
	echo("-You could take <b>CMSC465: Introduction to Electric Commerce</b><br>");
}
else if($_GET["CMSC465"]!=TRUE && ($_GET["CMSC461"]!=TRUE or $_GET["CMSC481"]!=TRUE)) {
	//they are not eligible to take it yet
}
else {
	$technicalCount++; //they took it already.
}

//CMSC466
if($_GET["CMSC466"]!=TRUE && $_GET["CMSC461"]==TRUE && $_GET["CMSC481"]==TRUE) {
	//they haven't taken it but have the prereqs
	echo("-You could take <b>CMSC466: Electric Commerce Technology</b><br>");
}
else if($_GET["CMSC466"]!=TRUE && ($_GET["CMSC461"]!=TRUE or $_GET["CMSC481"]!=TRUE)) {
	//they are not eligible to take it yet
}
else {
	$technicalCount++; //they took it already.
}

//CMSC473
if($_GET["CMSC473"]!=TRUE && $_GET["CMSC331"]==TRUE) {
	//they haven't taken it but have the prereqs
	echo("-You could take <b>CMSC473: Introduction to Natural Language Processing</b><br>");
}
else if($_GET["CMSC473"]!=TRUE && $_GET["CMSC331"]!=TRUE ) {
	//they are not eligible to take it yet
}
else {
	$technicalCount++; //they took it already.
}

//CMSC475
if($_GET["CMSC475"]!=TRUE && $_GET["CMSC341"]==TRUE) {
	//they haven't taken it but have the prereqs
	echo("-You could take <b>CMSC475: Introduction to Neural Networks</b><br>");
}
else if($_GET["CMSC475"]!=TRUE && $_GET["CMSC341"]!=TRUE ) {
	//they are not eligible to take it yet
}
else {
	$technicalCount++; //they took it already.
}

//CMSC476
if($_GET["CMSC476"]!=TRUE && $_GET["CMSC341"]==TRUE) {
	//they haven't taken it but have the prereqs
	echo("-You could take <b>CMSC476: Information Retrieval</b><br>");
}
else if($_GET["CMSC476"]!=TRUE && $_GET["CMSC341"]!=TRUE ) {
	//they are not eligible to take it yet
}
else {
	$technicalCount++; //they took it already.
}

//CMSC477
if($_GET["CMSC477"]!=TRUE && $_GET["CMSC471"]==TRUE) {
	//they haven't taken it but have the prereqs
	echo("-You could take <b>CMSC477: Agent Architectures and Multi-Agent Systems</b><br>");
}
else if($_GET["CMSC477"]!=TRUE && $_GET["CMSC71"]!=TRUE ) {
	//they are not eligible to take it yet
}
else {
	$technicalCount++; //they took it already.
}

//CMSC478
if($_GET["CMSC478"]!=TRUE && $_GET["CMSC471"]==TRUE) {
	//they haven't taken it but have the prereqs
	echo("-You could take <b>CMSC478: Introduction to Machine Learning</b><br>");
}
else if($_GET["CMSC478"]!=TRUE && $_GET["CMSC71"]!=TRUE ) {
	//they are not eligible to take it yet
}
else {
	$technicalCount++; //they took it already.
}

//CMSC484
if($_GET["CMSC484"]!=TRUE && $_GET["CMSC202"]==TRUE) {
	//they haven't taken it but have the prereqs
	echo("-You could take <b>CMSC484: Java Server Techniques</b><br>");
}
else if($_GET["CMSC484"]!=TRUE && $_GET["CMSC202"]!=TRUE ) {
	//they are not eligible to take it yet
}
else {
	$technicalCount++; //they took it already.
}

//CMSC486
if($_GET["CMSC486"]!=TRUE && $_GET["MATH152"]==TRUE) {
	//they haven't taken it but have the prereqs
	echo("-You could take <b>CMSC486: Mobile Telephony Communications</b>. NOTE: This course
	also requires CMPE 313 or CMPE212.<br>");
}
else if($_GET["CMSC486"]!=TRUE && $_GET["MATH152"]!=TRUE ) {
	//they are not eligible to take it yet
}
else {
	$technicalCount++; //they took it already.
}

//CMSC487
if($_GET["CMSC487"]!=TRUE && $_GET["CMSC421"]==TRUE && $_GET["CMSC481"]==TRUE) {
	//they haven't taken it but have the prereqs
	echo("-You could take <b>CMSC487: Introduction to Network Security</b><br>");
}
else if($_GET["CMSC487"]!=TRUE && ($_GET["CMSC421"]!=TRUE or $_GET["CMSC481"]!=TRUE)) {
	//they are not eligible to take it yet
}
else {
	$technicalCount++; //they took it already.
}

//CMSC 491
if($_GET["CMSC491"]!=TRUE) {
	//they haven't taken it but have the prereqs
	echo("-You could take <b>CMSC491: Special Topics in Computer Science</b>. NOTE: This course
	requires Departmental Consent.<br>");
}
else {
	$technicalCount++; //they took it already.
}

//CMSC493
if($_GET["CMSC493"]!=TRUE && $_GET["CMSC435"]==TRUE && $_GET["CMSC471"]==TRUE) {
	//they haven't taken it but have the prereqs
	echo("-You could take <b>CMSC493: Capstone Games Group Project</b><br>");
}
else if($_GET["CMSC493"]!=TRUE && ($_GET["CMSC435"]!=TRUE or $_GET["CMSC471"]!=TRUE)) {
	//they are not eligible to take it yet
}
else {
	$technicalCount++; //they took it already.
}

//Output a statement about the number of electives taken
if($generalCount + $technicalCount >= 4) {
	echo("NOTE: You appear to have already fulfilled your electives obligations. However,
	you may still take the classes listed if you are looking for an extra challenge!<br>");
}
else{
	echo("NOTE: You do not appear to have completed this requirement. Refer to the suggested courses.
	If nothing is listed above, you need to complete some more core courses.");
}
echo("</fieldset><br>");
echo("</fieldset>");

/*---------------------------------
/    END COMP SCI ELECTIVES       /
--------------------------------*/

?>
<div id="footer">
            	&#169; UMBC College of Computer Science and Electrical Engineering, 2016 <br>
                Contact Doug Bennett, Tim Maher, or Naomi Schumacher with problems
		    </div>
	</div>
    
    
			
    </div>
</body>
</html>
	