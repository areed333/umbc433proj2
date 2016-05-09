function addClasses(domID,classArray) {
	selectionDOM = document.getElementById(domID);

	for(var key in classArray){
		var klass = classArray[key];

		var optionDOM = document.createElement('option');
		optionDOM.value = klass.indexStr;
		optionDOM.innerHTML = klass.type +" "+ klass.number;
		
		selectionDOM.appendChild(optionDOM);
	}
}

function generateOptions(){

	console.log("generate options");

	var domIDs = ["cmscOptions","mathOptions","scienceOptions",
				"cmscReqElecOptions","cmscElecOptions"];
	var objs = [CMSC,MATH,SCIENCE,CMSC_REQ_ELEC,CMSC_ELEC];

	for (var i = 0; i < domIDs.length; i++) {
		addClasses(domIDs[i],objs[i]);
	}
}
