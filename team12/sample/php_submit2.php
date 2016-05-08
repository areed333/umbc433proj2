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


$classArray = explode(',', $classes_mathstat_string);
// $str = $classes_mathstat_string;
$str = array($classes_core_string, $classes_mathstat_string, $classes_sci_string, $classes_elec_string,
		$classes_other_string);
//echo("test");


?> 
<fieldset>
<legend> Let's take a look at what your options are for next semester!! </legend>
<br>

<fieldset>
<legend>From required Math Courses (MATH151, MATH152, MATH221):</legend>
</fieldset><br>

<fieldset>
<legend>Required Statistics Course (STAT355):</legend>
</fieldset><br>

<fieldset>
<legend>Required Science Track (Either BIOL100 + BIOL300, or BIOL141 + BIOL142, or CHEM101 + CHEM102, 
or PHYS121 + PHYS122):</legend>
</fieldset><br>

<fieldset>
<legend>Required Core Computer Science Courses (CMSC201, CMSC202, CMSC203, CMSC313, 
CMSC331, CMSC341, CMSC411, CMSC421, CMSC441, and  CMSC447):</legend>
</fieldset><br>

<fieldset>
<legend>Required Writing Intensive Computer Science Course (CMSC304):</legend>
</fieldset><br>

<fieldset>
<legend>Computer Science Electives - Four Total:</legend>
Choose two from CMSC426, CMSC431, CMSC435, CMSC445, 
CMSC451, CMSC455, CMSC456, CMSC461, CMSC471, CMSC481, and CMSC483 as general electives. Then, choose 
any two additional 400-level Computer Science Courses as a technical electives. Note that CMSC404 
and 495-499 do not qualify for this requirement. However, any from the previous list do qualify.<br><br>
</fieldset><br>

</fieldset>


<script type="text/javascript" src="phpPrint.js"></script>
<script type="text/javascript">
	// var str = "<?php echo $str ?>";
	var str = <?php echo '["' . implode('", "', $str) . '"]' ?>;
	sciClass(str); 
</script>

<div id="footer">
            	&#169; UMBC College of Computer Science and Electrical Engineering, 2016 <br>
                Contact Doug Bennett, Tim Maher, or Naomi Schumacher with problems
		    </div>
	</div>
    
    
			
    </div>
</body>
</html>
	