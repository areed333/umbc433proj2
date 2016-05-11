	
	// takes out spaces since it conflicts with object notation
	var classSections = [];
	for(e=0;e<classesChosen.length;e++){
		classSections.push((classesChosen[e].replace(/\s+/g, '')).split(','));
	}

	// debug of all classes chosen
	console.log ("============start===============");
	console.log("Classes chosen array:");
	console.log(classSections);
	console.log ("============end===============");

	// create math classes to take in future
	classesToTake(classSections[1], MATH, classes_mathstat, 'fMath', "");

	// create science classes to take in future
	classesToTake(classSections[2], SCIENCE, classes_science, 'fSci', "");

	// create cmsc core classes to take in future
	classesToTake(classSections[0], CMSC, classes_core, 'fCsCore', "");

	//stat course
	checkStat(classSections[1], 'fStat');
 
	//writing intensive course
	checkWritingIntensive(classSections[0], 'fWrit');

	// create cmsc electives classes to take in future
	var message = "Choose two from CMSC426, CMSC431, CMSC435, CMSC445, "+ 
	"CMSC451, CMSC455, CMSC456, CMSC461, CMSC471, CMSC481, and CMSC483 as general electives. Then, choose "+
	"any two additional 400-level Computer Science Courses as a technical electives. Note that CMSC404 "+
	"and 495-499 do not qualify for this requirement. However, any from the previous list do qualify.<br><br>";
	
	classesToTake(classSections[3], CMSC_ELEC, classes_4xx, 'fCsElec', message);

	function classesToTake(chosenClass, obj, allClassesArray, id, textToInsert){

	// get missing math classes (classes to take)
	var difference = $(allClassesArray).not(chosenClass).get();
	// if all calsses taken
	if(difference.length == 0){
		if(id == "fMath"){
			textToInsert += textToInsert += "<b>-4 credits completed!</b><br>";
		}
		else{
		textToInsert += "<b>-Credits completed!</b><br>";}
		var insertHtml = document.getElementById(id);
		insertHtml.insertAdjacentHTML('afterBegin', textToInsert);
		return;
	}
	// if class is science then check for science
	if((chosenClass[0] == "")&(id == 'fSci')){
		textToInsert += "-Start path by taking <b>"+allClassesArray[0]+"</b> OR<br>";
		textToInsert += "-Start path by taking <b>"+allClassesArray[4]+"</b> OR<br>";
		textToInsert += "-Start path by taking <b>"+allClassesArray[6]+"</b> OR<br>";
		var insertHtml = document.getElementById(id);
		insertHtml.insertAdjacentHTML('afterBegin', textToInsert);
		return;
	}
	// if no classes taken
	if(chosenClass[0] == ""){
		textToInsert += "<b>-No classes selected</b><br>";
		var insertHtml = document.getElementById(id);
		insertHtml.insertAdjacentHTML('afterBegin', textToInsert);
		return;
	}

	// check credits for science
	if(id == 'fSci'){
	var creditsTotal = creditsTaken(chosenClass,obj);
	if(creditsTotal >= 12){
		textToInsert += "<b>-12 credits completed!</b><br>";
		// insert code into html div
		var insertHtml = document.getElementById(id);
		insertHtml.insertAdjacentHTML('afterBegin', textToInsert);
		return;
		}
	}

	// loop through each class selected
	for(var i=0;i<difference.length;i++){
		var classNum = difference[i].replace(/\D+/g, '');
		var classType = difference[i].replace(/[0-9]+/g, '');
		// if 'fCsElec' or 'fsCsCore, then check all classes not just CMSC for requiremnts
		// loops through all objects instead of just one
		var objIDPre = "";
		var objs = [CMSC,CMSC_REQ_ELEC,CMSC_ELEC,MATH,SCIENCE];
		var start = 0;
		// if objIDPre is found will not be emtpy string 
		while(objIDPre == ""){
			var currentObj = objs[start];
			objIDPre = $.grep(Object.keys(currentObj), function (k) { 
				return ((currentObj[k].number == classNum)&(currentObj[k].type == classType)); })
			start += 1;

		}
		// subtract one since while loop adds extra 1 in end
		var currentObj = objs[start - 1];
		// check if it exists
		if(typeof currentObj[objIDPre] !== "undefined"){
			var preReqArray = currentObj[objIDPre].prereq;}


		// once preReqArray of particular class is found
		// search it to see if user fits those preReq's
			var checkPreReq = 0;
			for(var a=0;a<preReqArray.length;a++){
				// remove spaces from prereq since difference does not have space
				var tempPreReq = preReqArray[a].replace(/\s+/g, '');
				for(var b=0;b<classSections.length;b++){
				// check if pre-req exists in user input classes
				if(jQuery.inArray(tempPreReq, classSections[b]) !== -1){
					checkPreReq += 1;}}}
		// if all prereq are taken, array lenght should match
		if(checkPreReq == preReqArray.length){
			textToInsert += "-You could take "
			textToInsert += ("<b>"+difference[i]);

		// get title of class + check for undefined
		if(typeof obj[objIDPre] !== "undefined"){
			var titleOfClass = obj[objIDPre].title;
			textToInsert += ": "+ titleOfClass +"</b><br>";
		// }
		}
		else{
			textToInsert += ": "+ "DOES NOT EXIST" +"</b><br>";
		}
	}
}
	// insert code into html div
	var insertHtml = document.getElementById(id);
	insertHtml.insertAdjacentHTML('afterBegin', textToInsert);
}

function creditsTaken(chosenClass,obj){
	var creditsTotal = 0;
	// loop through each class and get creidts taken
	for(var i=0;i<chosenClass.length;i++){
		var classNum = chosenClass[i].replace(/\D+/g, '');
		var classType = chosenClass[i].replace(/[0-9]+/g, '');
		// serach object for credits value
		objID = $.grep(Object.keys(obj), function (k) { 
				return ((obj[k].number == classNum)&(obj[k].type == classType)); })
		creditsTotal += obj[objID].unlock;

	}

	return creditsTotal;
}

function checkStat(chosenClass, id){
	// if no classes taken
	if(chosenClass[0] == ""){
		var textToInsert = "<b>-No classes selected</b><br>";
		var insertHtml = document.getElementById(id);
		insertHtml.insertAdjacentHTML('afterBegin', textToInsert);
		return;
	}

	if(jQuery.inArray("STAT 355", chosenClass) !== -1){
        var textToInsert = ("<b>STAT requirement MET!</b><br>");

 	}
    else {
       	var textToInsert = ("<b>-You could take STAT355: Intro To Probability & Statistics for "+
       		"Scientists and Engineers</b><br>");
    }
    // insert code into html div
	var insertHtml = document.getElementById(id);
	insertHtml.insertAdjacentHTML('afterBegin', textToInsert);
}
 
function checkWritingIntensive(chosenClass, id){
	// if no classes taken
	if(chosenClass[0] == ""){
		var textToInsert = "<b>-No classes selected</b><br>";
		var insertHtml = document.getElementById(id);
		insertHtml.insertAdjacentHTML('afterBegin', textToInsert);
		return;
	}

    if(jQuery.inArray("CMSC 304", chosenClass) !== -1){
        var textToInsert = ("<b>Writing intensive requirement MET!</b><br>");
    }
    else {
       	var textToInsert = ("<b>-You could take CMSC304: Social and Ethical Issues in Information Technology</b><br>");
 
    }
    // insert code into html div
	var insertHtml = document.getElementById(id);
	insertHtml.insertAdjacentHTML('afterBegin', textToInsert);
}