function addClasses(domID,classArray) {
	selectionDOM = document.getElementById(domID);

	for(var key in classArray){
		var klass = classArray[key];
		selectionDOM.add(klass.optionView);
	}
}

function generateOptions(){

	console.log("generate options");

	var domIDs = ["cmsc","math","science",
				"cmscReqElec","cmscElec"];
	var objs = [CMSC,MATH,SCIENCE,CMSC_REQ_ELEC,CMSC_ELEC];

	for (var i = 0; i < domIDs.length; i++) {
		addClasses(domIDs[i],objs[i]);
	}
}
