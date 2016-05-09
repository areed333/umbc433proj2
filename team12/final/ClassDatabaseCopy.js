
const classDataFilePath = "data/classdata.json"; 

var classDataRaw = [];

var CMSC = [];
var CMSC_REQ_ELEC = [];
var CMSC_ELEC = [];
var MATH = [];
var SCIENCE = [];

class Class {
	constructor(type,number,description, prereq) {
		this.type = type;
		this.number = number;
		this.indexStr = type + number;
		this.description = description; //added description to the class constructor 
		this.prereq = prereq; // this var won't change  ==> Max Hp
	}
}

function loadAndParseFile() {

	console.log ("============start===============");
	console.log ("loading class data file");

	$.ajax({
		url: classDataFilePath,
		type: 'GET',
		dataType: 'json',
	})
	.done(function(json) {
		console.log("datafile loaded");
		console.log ("============end===============");
		
		console.log(json);
		
		classDataRaw = json;
		initDatabase();
	})
	.fail(function(result,responseText) {
		window.alert("error loading json datafile " + responseText);
	})	
}

function initDatabase(){

	console.log ("============start===============");
	console.log ("initializing class database");

	for (var i = 0; i < classDataRaw["CMSC"].length; i++) {
		var klass = createClassFromRawData(classDataRaw["CMSC"][i]);
		CMSC[klass.indexStr] = klass;
	}
	for (var i = 0; i < classDataRaw["CMSC_REQ_ELEC"].length; i++) {
		var klass = createClassFromRawData(classDataRaw["CMSC_REQ_ELEC"][i]);
		CMSC_REQ_ELEC[klass.indexStr] = klass;
	}
	for (var i = 0; i < classDataRaw["CMSC_ELEC"].length; i++) {
		var klass = createClassFromRawData(classDataRaw["CMSC_ELEC"][i]);
		CMSC_ELEC[klass.indexStr] = klass;
	}
	for (var i = 0; i < classDataRaw["MATH"].length; i++) {
		var klass = createClassFromRawData(classDataRaw["MATH"][i]);
		MATH[klass.indexStr] = klass;
	}
	for (var i = 0; i < classDataRaw["SCIENCE"].length; i++) {
		var klass = createClassFromRawData(classDataRaw["SCIENCE"][i]);
		SCIENCE[klass.indexStr] = klass;
	}

	console.log ("class database initialized");
	console.log ("=============end==============");


	onLoaded();
}

function uploadDataFile(element){

	element.innerHTML = "uploading...";

	  /* Create a FormData instance */
  	var formData = new FormData();
	  /* Add the file */ 
  	formData.append("data", JSON.stringify(classDataRaw));
 	formData.append("filename","newClassData.json");

 	console.log(formData);

	// async callback
	var xhttp = new XMLHttpRequest();
	xhttp.onreadystatechange = function() {
		if (xhttp.readyState == 4 && xhttp.status == 200) {		
			element.innerHTML = "uploaded!";
			console.log(xhttp.responseText);
		}
	};

	xhttp.open("GET", "handleFileUpload.php", true); 
	//xhttp.setRequestHeader("Content-Type", "multipart/form-data");
	xhttp.send(formData);
}


function addNewClassData(classIndexStr,key,value){
	console.log(key + " value: " + value );

	  /*For each class, there's the setup for making the description insertion into the desired
      place in the intended classdata.json file. Foundation is the addNewClassData function
      from Project 1. This particular function from Project 1 helped in the process of adding
      the coordinates into the Project 1 .json data file.*/

      /*The actual assignment of value to classDataRaw["theClassName"][i][key] for each class name 
      is commented out since it is believed this is where a change needs to be made to tailor this
      function to work within the process of adding the course description to each of the courses.*/

	// :( sadly we have to do this.
	//	since there is no index string in our json data file
	for (var i = 0; i < classDataRaw["CMSC"].length; i++) {
		var type = classDataRaw["CMSC"][i]["type"];
		var num = classDataRaw["CMSC"][i]["number"];

		//var description 
		var classStr = type+num.toString();

		// find the class 
		if(classStr == classIndexStr){

			//classDataRaw["CMSC"][i][key]= value;
			break;
		}
	}

	for (var i = 0; i < classDataRaw["CMSC_REQ_ELEC"].length; i++) {
		var type = classDataRaw["CMSC_REQ_ELEC"][i]["type"];
		var num = classDataRaw["CMSC_REQ_ELEC"][i]["number"];

		//var description 
		var classStr = type+num.toString();

		// find the class 
		if(classStr == classIndexStr){
			
			//classDataRaw["CMSC_REQ_ELEC"][i][key]= value;
			break;
		}
	}

	for (var i = 0; i < classDataRaw["CMSC_ELEC"].length; i++) {
		var type = classDataRaw["CMSC_ELEC"][i]["type"];
		var num = classDataRaw["CMSC_ELEC"][i]["number"];

		//var description 
		var classStr = type+num.toString();

		// find the class 
		if(classStr == classIndexStr){
			
			//classDataRaw["CMSC_REQ_ELEC"][i][key]= value;
			break;
		}
	}

	for (var i = 0; i < classDataRaw["MATH"].length; i++) {
		var type = classDataRaw["MATH"][i]["type"];
		var num = classDataRaw["MATH"][i]["number"];

		//var description 
		var classStr = type+num.toString();

		// find the class 
		if(classStr == classIndexStr){
			
			//classDataRaw["CMSC_REQ_ELEC"][i][key]= value;
			break;
		}
	}

	for (var i = 0; i < classDataRaw["SCIENCE"].length; i++) {
		var type = classDataRaw["SCIENCE"][i]["type"];
		var num = classDataRaw["SCIENCE"][i]["number"];

		//var description 
		var classStr = type+num.toString();

		// find the class 
		if(classStr == classIndexStr){
			
			//classDataRaw["CMSC_REQ_ELEC"][i][key]= value;
			break;
		}
	}

}


function createClassFromRawData(data){
	var type = data["type"];
	var num = data["number"];
	var des = data["description"]; //added new variable to account for desire to have description added to classdata.json file
	var prereq = data["prereq"];
	var klass = new Class(type,num,description,prereq);

	return klass;
}








