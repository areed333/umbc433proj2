	var classSections = [];
	for(e=0;e<classesChosen.length;e++){
		classSections.push((classesChosen[e].replace(/\s+/g, '')).split(','));
	}
	console.log("all classes chosen:");
	console.log(classSections);

	// fill cmsc electives
	// cmscElectives();
	// var obj = MATH;
	// var allClassesArray = classes_mathstat;
	// // message to print
	// var textToInsert = "";
	// var id = 'fMath';

	// math
	classesToTake(classSections[1], MATH, classes_mathstat, 'fMath', "");

	// science
	classesToTake(classSections[2], SCIENCE, classes_science, 'fSci', "");

	// core
	classesToTake(classSections[0], CMSC, classes_core, 'fCsCore', "");

	// electives
	var message = "Choose two from CMSC426, CMSC431, CMSC435, CMSC445,"+ 
	"CMSC451, CMSC455, CMSC456, CMSC461, CMSC471, CMSC481, and CMSC483 as general electives. Then, choose"+
	"any two additional 400-level Computer Science Courses as a technical electives. Note that CMSC404"+
	"and 495-499 do not qualify for this requirement. However, any from the previous list do qualify.<br><br>";
	//classesToTake(classSections[3], CMSCtitle, classes_4xx, 'fCsElec', message);
	cmscElectives();

	//stat course
	checkStat(classSections[1]);

	// writing intensive course
	checkWritingIntensive(classSections[0]);


function classesToTake(chosenClass, obj, allClassesArray, id, textToInsert){

	// get missing math classes (classes to take)
	var difference = $(allClassesArray).not(chosenClass).get();


	// if all classes taken
	if(difference.length == 0){
		textToInsert += "-You've finished your required Math courses.<br>";
		var insertHtml = document.getElementById(id);
		insertHtml.insertAdjacentHTML('afterBegin', textToInsert);
		return;
	}

	// if no classes taken
	if(chosenClass[0] == ""){
		console.log("SAME LENGHT: "+id);
		var firstClass = allClassesArray[0];
		textToInsert += "-Start path by taking <b>"+firstClass+"</b><br>";
		var insertHtml = document.getElementById(id);
		insertHtml.insertAdjacentHTML('afterBegin', textToInsert);
		return;
	}

	// loop through each class selected
	for(var i=0;i<difference.length;i++){
		
		// find id in Object
		var objIDPre = $.grep(Object.keys(obj), function (k) { 
			return obj[k].number == difference[i].substring(4); })

		// check if it exists
		if(typeof obj[objIDPre] !== "undefined")
		{
			var preReqArray = obj[objIDPre].prereq;

		}
			// loop through preReqArray check if its taken
			var checkPreReq = 0;
			for(var a=0;a<preReqArray.length;a++){
				var tempPreReq = preReqArray[a].replace(/\s+/g, '');

				// for loop b
				// checkPreReq = return

				// if taken, += 1
				if(jQuery.inArray(tempPreReq, chosenClass) !== -1){
					checkPreReq += 1;
				}

				// end diff
		}
		// if all prereq are taken, array lenght should match
		if(checkPreReq == preReqArray.length){
			textToInsert += "-You could take "
			textToInsert += ("<b>"+difference[i]);

		// diff object with CMSCtitle find
		// add if for undiefined 

		// get title of class + check for undefined
		if(typeof CMSCtitle[objIDPre] !== "undefined"){
			var titleOfClass = obj[objIDPre].title;
			textToInsert += ": "+ titleOfClass +"</b><br>";
		}
		else{
			textToInsert += ": "+ "DOES NOT EXIST" +"</b><br>";
		}

	}
}
	var insertHtml = document.getElementById(id);
	insertHtml.insertAdjacentHTML('afterBegin', textToInsert);
}


function cmscElectives(){
	var cmscElectives = classSections[3];
	// subtract classes chosen from list of possible electives
	var difference = $(classes_4xx).not(cmscElectives).get();


	// create the message to be inserted:
	var textToInsert = "Choose two from CMSC426, CMSC431, CMSC435, CMSC445,"+ 
	"CMSC451, CMSC455, CMSC456, CMSC461, CMSC471, CMSC481, and CMSC483 as general electives. Then, choose"+
	"any two additional 400-level Computer Science Courses as a technical electives. Note that CMSC404"+
	"and 495-499 do not qualify for this requirement. However, any from the previous list do qualify.<br><br>";

	// if all calsses taken
	if(difference.length == 0){
		textToInsert += "-You've finished your required Math courses.<br>";
		var insertHtml = document.getElementById('fCsElec');
		insertHtml.insertAdjacentHTML('afterBegin', textToInsert);
		return;
	}

	// if no classes taken
	if(cmscElectives[0] == ""){
		console.log("SAME LENGHT: elective");
		var firstClass = classes_4xx[0];
		textToInsert += "-Start path by taking <b>"+firstClass+"</b><br>";
		var insertHtml = document.getElementById('fCsElec');
		insertHtml.insertAdjacentHTML('afterBegin', textToInsert);
		return;
	}



	for(var i=0;i<difference.length;i++){
		// check if pre-req met
		// check if it exists in input array

		// get id from classdata3.js
		var objIDPre = $.grep(Object.keys(CMSCALL), function (k) { 
			return CMSCALL[k].number == difference[i].substring(4); })
		if(typeof CMSCALL[objIDPre] !== "undefined"){
			var preReqArray = CMSCALL[objIDPre].prereq;}

			var checkPreReq = 0;
			for(var a=0;a<preReqArray.length;a++){
				var tempPreReq = preReqArray[a].replace(/\s+/g, '');
				for(var b=0;b<classSections.length;b++){
				// check if pre-req exists in user input classes
				if(jQuery.inArray(tempPreReq, classSections[b]) !== -1){
					checkPreReq += 1;
				}
			}
		}

		if(checkPreReq == preReqArray.length){
			textToInsert += "-You could take "
			textToInsert += ("<b>"+difference[i]);
		// print titles
		var objID = $.grep(Object.keys(CMSCtitle), function (k) { 
			return CMSCtitle[k].number == difference[i].substring(4); })
		if(typeof CMSCtitle[objID] !== "undefined"){
			var titleOfClass = CMSCtitle[objID].title;
			textToInsert += ": "+ titleOfClass +"</b><br>";
		} 
		else{
			textToInsert += ": "+ "DOES NOT EXIST" +"</b><br>";
		}
	}
}
var insertHtml = document.getElementById('fCsElec');
insertHtml.insertAdjacentHTML('afterBegin', textToInsert);

}

function checkStat(chosenClass){

	var textToInsert = "";

	if(jQuery.inArray("STAT 355", chosenClass) !== -1){

		console.log("Yes, STAT 355 is in the array");
	
	}

	else {

		console.log("No, STAT355 is not in the array");

	}


	if(chosenClass == ""){

		textToInsert += "<b>-No classes selected</b><br>";

		var insertHtml = document.getElementById('fStat');

		insertHtml.insertAdjacentHTML('afterBegin', textToInsert);

		return;
	}

}
	

function checkWritingIntensive(chosenClass){

	var textToInsert = "";

	if(jQuery.inArray("CMSC 304", chosenClass) !== -1){

		console.log("Yes, CMSC 304 is in the array");
	
	}

	else {

		console.log("No, CMSC 304 is not in the array");

	}


	if(chosenClass == ""){

		textToInsert += "<b>-No classes selected</b><br>";

		var insertHtml = document.getElementById('fWrit');

		insertHtml.insertAdjacentHTML('afterBegin', textToInsert);
		
		return;
	}

}

