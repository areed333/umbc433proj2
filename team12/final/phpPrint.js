	
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

	// create cmsc electives classes to take in future
	var message = "Choose two from CMSC426, CMSC431, CMSC435, CMSC445,"+ 
	"CMSC451, CMSC455, CMSC456, CMSC461, CMSC471, CMSC481, and CMSC483 as general electives. Then, choose"+
	"any two additional 400-level Computer Science Courses as a technical electives. Note that CMSC404"+
	"and 495-499 do not qualify for this requirement. However, any from the previous list do qualify.<br><br>";
	
	//classesToTake(classSections[3], CMSCtitle, classes_4xx, 'fCsElec', message);
	cmscElectives();

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
	// if no classes taken
	if(chosenClass[0] == ""){
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
		if(typeof obj[objIDPre] !== "undefined"){
			var preReqArray = obj[objIDPre].prereq;}
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

		// get title of class + check for undefined
		if(typeof obj[objIDPre] !== "undefined"){
			var titleOfClass = obj[objIDPre].title;
			textToInsert += ": "+ titleOfClass +"</b><br>";
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

// special function for cmscElectives since it checks others as well...
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
		var firstClass = classes_4xx[0];
		textToInsert += "-Start path by taking <b>"+firstClass+"</b><br>";
		var insertHtml = document.getElementById('fCsElec');
		insertHtml.insertAdjacentHTML('afterBegin', textToInsert);
		return;
	}


	// loop through each class not yet taken
	for(var i=0;i<difference.length;i++){
		
		// check if pre-req met
		// check if it exists in input array
		// get id from classdata4.js
		// CMSCALL is only the CMSC classes
		var objIDPre = "";
		var objs = [CMSC,CMSC_REQ_ELEC,CMSC_ELEC,MATH,SCIENCE];
		var start = 0;
		while(objIDPre == ""){
			console.log("Ojbs value: "+start);
			var currentObj = objs[start];
			objIDPre = $.grep(Object.keys(currentObj), function (k) { 
			return currentObj[k].number == difference[i].substring(4); })
			start += 1;
			console.log("currentObj: "+difference[i]);
			console.log("Ojbs value 2: "+start);
			console.log("objIDPre: "+objIDPre);

		}
		var currentObj = objs[start - 1];
		console.log("first object in currentObj:"+ currentObj[0].type + currentObj[0].number);
		

		// if(objIDPre == ""){
		// 	objIDPre = $.grep(Object.keys(CMSC), function (k) { 
		// 	return CMSC[k].number == difference[i].substring(4); })
		// 	CMSC_REQ_ELEC = CMSC;
		// 	console.log('ID2: '+objIDPre);
		// }
		// if(objIDPre == ""){
		// 	objIDPre = $.grep(Object.keys(CMSC_ELEC), function (k) { 
		// 	return CMSC_ELEC[k].number == difference[i].substring(4); })
		// 	CMSC_REQ_ELEC = CMSC_ELEC;
		// 	console.log('ID3: '+objIDPre);
		// }

		if(typeof currentObj[objIDPre] !== "undefined"){
			var preReqArray = currentObj[objIDPre].prereq;}

			console.log("preReqArray: ");
			console.log(preReqArray);
			console.log("_____________________________");
			console.log("currentObj2: "+difference[i]);
			console.log("Ojbs value2: "+start);
			console.log("objIDPre2: "+objIDPre);

			var checkPreReq = 0;
			for(var a=0;a<preReqArray.length;a++){
				// remove spaces from prereq since difference does not have space
				var tempPreReq = preReqArray[a].replace(/\s+/g, '');

				for(var b=0;b<classSections.length;b++){
				console.log("class selections length: "+classSections.length);
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
		// var objID = $.grep(Object.keys(CMSCtitle), function (k) { 
		// 	return CMSCtitle[k].number == difference[i].substring(4); })

		if(typeof CMSC_ELEC[objIDPre] !== "undefined"){
			var titleOfClass = CMSC_ELEC[objIDPre].title;
			textToInsert += ": "+ titleOfClass +"</b><br>";
		} 
		else{
			textToInsert += ": "+ "DOES NOT EXIST" +"</b><br>";
		}
	}
	objIDPre = "";
}
var insertHtml = document.getElementById('fCsElec');
insertHtml.insertAdjacentHTML('afterBegin', textToInsert);
}

