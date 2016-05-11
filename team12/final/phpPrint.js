	
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
	sciClassesToTake(classSections[2], SCIENCE, classes_science, 'fSci', "");

	// create cmsc core classes to take in future
	classesToTake(classSections[0], CMSC, classes_core, 'fCsCore', "");

	// create cmsc electives classes to take in future
	var message = "Choose two from CMSC426, CMSC431, CMSC435, CMSC445,"+ 
	"CMSC451, CMSC455, CMSC456, CMSC461, CMSC471, CMSC481, and CMSC483 as general electives. Then, choose"+
	"any two additional 400-level Computer Science Courses as a technical electives. Note that CMSC404"+
	"and 495-499 do not qualify for this requirement. However, any from the previous list do qualify.<br><br>";
	
	classesToTake(classSections[3], CMSC_ELEC, classes_4xx, 'fCsElec', message);

	function classesToTake(chosenClass, obj, allClassesArray, id, textToInsert){

	// get missing math classes (classes to take)
	var difference = $(allClassesArray).not(chosenClass).get();
	// if all calsses taken
	if(difference.length == 0){
		textToInsert += "-You've finished your required Math courses.<br>";
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


	// loop through each class selected
	for(var i=0;i<difference.length;i++){
		// if 'fCsElec' or 'fsCsCore, then check all classes not just CMSC for requiremnts
		// if((id == 'fCsElec')|(id == 'fCsCore')){
		if(id != 'fMath'){
		// loops through all objects instead of just one
		var objIDPre = "";
		var objs = [CMSC,CMSC_REQ_ELEC,CMSC_ELEC,MATH,SCIENCE];
		var start = 0;
		// if objIDPre is found will not be emtpy string 
		while(objIDPre == ""){
			var currentObj = objs[start];
			objIDPre = $.grep(Object.keys(currentObj), function (k) { 
				return currentObj[k].number == difference[i].substring(4); })
			start += 1;

		}
		// subtract one since while loop adds extra 1 in end
		var currentObj = objs[start - 1];
		// check if it exists
		if(typeof currentObj[objIDPre] !== "undefined"){
			var preReqArray = currentObj[objIDPre].prereq;}

		}
		else{
		// find id in Object
		var objIDPre = $.grep(Object.keys(obj), function (k) { 
			return obj[k].number == difference[i].substring(4); })

		// check if it exists
		if(typeof obj[objIDPre] !== "undefined"){
			var preReqArray = obj[objIDPre].prereq;}
		}

		// once preReqArray of particular class is found
		// search it to see if user fits those preReq's
		// if((id == 'fCsElec')|(id == 'fCsCore')){
		if(id != 'fMath'){
			var checkPreReq = 0;
			for(var a=0;a<preReqArray.length;a++){
				// remove spaces from prereq since difference does not have space
				var tempPreReq = preReqArray[a].replace(/\s+/g, '');
				for(var b=0;b<classSections.length;b++){
				// check if pre-req exists in user input classes
				if(jQuery.inArray(tempPreReq, classSections[b]) !== -1){
					checkPreReq += 1;}}}}
					else{
			// loop through preReqArray check if its taken
			var checkPreReq = 0;
			for(var a=0;a<preReqArray.length;a++){
				var tempPreReq = preReqArray[a].replace(/\s+/g, '');
				if(jQuery.inArray(tempPreReq, chosenClass) !== -1){
					checkPreReq += 1;}}}
		// if all prereq are taken, array lenght should match
		if(checkPreReq == preReqArray.length){
			textToInsert += "-You could take "
			textToInsert += ("<b>"+difference[i]);

		// get title of class + check for undefined
		if(typeof obj[objIDPre] !== "undefined"){
			// check sciences
			// if((id == 'fSci')){
			// 	checkSci();
			// }
			// else{
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

function sciClassesToTake(chosenClass, obj, allClassesArray, id, textToInsert){
	// for allClassesArray[:23] 4 letter classes
	// ges is from [23:] 

	var creditCount = 0;
	// for chosenClass[i], get number + string, for e where numebr + string match
	// in loop if theres a lab == true, then you completed lab ... yay
	// note need to change that lab == ture part logic... 

	// add to credit...

	// if creditCount == 12 you completed


	// if lesser.. then next in highest id.. 
	// unless last id, in which case, pick somehting not in chosenClass


	// just print next class in list...
	// i.e if 

	// check difference
	// check if pre-req met


	}


