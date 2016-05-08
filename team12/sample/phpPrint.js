
	console.log("all classes chosen:");
	console.log(classesChosen);

<<<<<<< Updated upstream
	// // add text to each var...
	// var test = document.getElementById('fMath');
	// test.insertAdjacentHTML('afterBegin', "thisis a test<br>testh2");
	// cmscElectives();

function cmscElectives(){
	// array of elective classes without space, comma delimated
	var cmscElectives = (classesChosen[3].replace(/\s+/g, '')).split(',');

	// subtract classes chosen from list of possible electives
	var difference = $(classes_elec).not(cmscElectives).get();


	// create the message to be inserted:
	var textToInsert = "Choose two from CMSC426, CMSC431, CMSC435, CMSC445,"+ 
"CMSC451, CMSC455, CMSC456, CMSC461, CMSC471, CMSC481, and CMSC483 as general electives. Then, choose"+
"any two additional 400-level Computer Science Courses as a technical electives. Note that CMSC404"+
"and 495-499 do not qualify for this requirement. However, any from the previous list do qualify.<br><br>";




	for(var i=0;i<difference.length;i++){
		textToInsert += "-You could take "
		textToInsert += ("<b>"+difference[i]+"</b>");

		// get desc from obj using id
		var objID = $.grep(Object.keys(CMSC), function (k) { 
			return CMSC[k].number == difference[i].substring(4); })
		if(typeof CMSC[objID] !== "undefined"){
  			var titleOfClass = CMSC[objID].title;
  			textToInsert += ": "+ titleOfClass +"<br>";
				} 
		else{
			textToInsert += ": "+ "DOES NOT EXIST" +"<br>";
			}
		}

	var insertHtml = document.getElementById('fCsElec');
	insertHtml.insertAdjacentHTML('afterBegin', textToInsert);

}

=======
	// add text to each var...
	var test = document.getElementById('fMath');
	test.insertAdjacentHTML('afterBegin', "this is a test<br>testh2");

	cmscElectives();


	function cmscElectives(){

		var cmscElectives = (classesChosen[3].replace(/\s+/g, '').split(',');
		
		var difference = $(classes_elec).not(cmscElectives).get();
		
		
		
		//console.log(difference);

		var textToInsert = ".You could take ";

		for (var i=0; i < difference; i++){

			textToInsert += ".You could take "
			
			textToInsert += ("<b>" + difference[i] + "</b>" + ": Desc<br>");

			var objID = $.grep(Object.keys(CMSC), function(#){

				return CMSC[k].number == getClassNumber[i]; })

			if (typeof objID !== "undefined") {

				var titleOfClass = CMSC[objID].title;

				textToInsert += ": " + titleOfClass + "<br>"

			}

			else{

				textToInsert += ": " + "DOES NOT EXIST" + "<br>";

			}

			//console.log(titleOfClass);

		}

		var insertHtml = document.getElementById("fCsElec");

		insertHtml = insertAdjacentHTML("afterBegin", textToInsert);

	}
>>>>>>> Stashed changes











	// var test = document.createElement('div');
	// test.innerHTML = "test htis<br>tet2";
	// document.getElementById('fMath').appendChild(test);
	// document.getElementById('fMath').appendChild(test);



// for each [i] in array ,delimeter it by commas. 
// for each [i], for each class, print:
	//  if lowest level in each obj, print "started"
	//  else if highest level in category, print done
	// else for each class ADD TO AN ARRAY what to unlock
// remove duplicates in ARRAY
// remove classs from slected in ARRAY




// categories:
// From required Math Courses (MATH151, MATH152, MATH221)
// Required Statistics Course (STAT355):
// Required Science Track (Either BIOL100 + BIOL300, or BIOL141 + BIOL142, or 
// CHEM101 + CHEM102, or PHYS121 + PHYS122):
// Required Core Computer Science Courses (CMSC201, CMSC202, CMSC203, CMSC313,
// CMSC331, CMSC341, CMSC411, CMSC421, CMSC441, and CMSC447):
// Required Writing Intensive Computer Science Course (CMSC304):
// Computer Science Electives - Four Total:

/******************************* if anything do this first ****************************************/
// Choose two from CMSC426, CMSC431, CMSC435, CMSC445, CMSC451, CMSC455, 
// CMSC456, CMSC461, CMSC471, CMSC481, and CMSC483 as general electives. 
// Then, choose any two additional 400-level Computer Science Courses as a 
// technical electives. Note that CMSC404 and 495-499 do not qualify for this 
// requirement. However, any from the previous list do qualify.








