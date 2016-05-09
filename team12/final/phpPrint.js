	var classSections = [];
	for(e=0;e<classesChosen.length;e++){
		classSections.push((classesChosen[e].replace(/\s+/g, '')).split(','));
	}
	console.log("all classes chosen:");
	console.log(classSections);

	// fill cmsc electives
	cmscElectives();


	function cmscElectives(){
		var cmscElectives = classSections[3];
	// subtract classes chosen from list of possible electives
	var difference = $(classes_4xx).not(cmscElectives).get();

	// create the message to be inserted:
	var textToInsert = "Choose two from CMSC426, CMSC431, CMSC435, CMSC445,"+ 
	"CMSC451, CMSC455, CMSC456, CMSC461, CMSC471, CMSC481, and CMSC483 as general electives. Then, choose"+
	"any two additional 400-level Computer Science Courses as a technical electives. Note that CMSC404"+
	"and 495-499 do not qualify for this requirement. However, any from the previous list do qualify.<br><br>";

	for(var i=0;i<difference.length;i++){
		// check if pre-req met
		// check if it exists in input array

		// get id from classdata3.js
		var objIDPre = $.grep(Object.keys(CMSC), function (k) { 
			return CMSC[k].number == difference[i].substring(4); })
		if(typeof CMSC[objIDPre] !== "undefined"){
			var preReqArray = CMSC[objIDPre].prereq;}

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
			textToInsert += ("<b>"+difference[i]+"</b>");
		// print titles
		var objID = $.grep(Object.keys(CMSCtitle), function (k) { 
			return CMSCtitle[k].number == difference[i].substring(4); })
		if(typeof CMSCtitle[objID] !== "undefined"){
			var titleOfClass = CMSCtitle[objID].title;
			textToInsert += ": "+ titleOfClass +"<br>";
		} 
		else{
			textToInsert += ": "+ "DOES NOT EXIST" +"<br>";
		}
	}
}
var insertHtml = document.getElementById('fCsElec');
insertHtml.insertAdjacentHTML('afterBegin', textToInsert);

}

