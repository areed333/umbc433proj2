
const classDataFilePath = "data/classdata.json"; 

var classDataRaw = [];

var CMSC = [];
var CMSC_REQ_ELEC = [];
var CMSC_ELEC = [];
var MATH = [];
var SCIENCE = [];

class Class {
	constructor(type,number,prereq,unlock,title) {
		this.type = type;
		this.number = number;
		this.indexStr = type + number;
		this.spacedIndexStr = type + " " + number;
		this.prereq = prereq; // this var won't change  ==> Max Hp
		this.optionView = this.initView();
		this.parentDOM = null;
		this.unlock = unlock;
		this.title = title;
	}

	initView(){
		var option = document.createElement("option");
		option.text = this.spacedIndexStr;
		option.value = this.spacedIndexStr;
		return option;
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
		CMSC[klass.type + " " + klass.number] = klass;
	}
	for (var i = 0; i < classDataRaw["CMSC_REQ_ELEC"].length; i++) {
		var klass = createClassFromRawData(classDataRaw["CMSC_REQ_ELEC"][i]);
		CMSC_REQ_ELEC[klass.type + " " + klass.number] = klass;
	}
	for (var i = 0; i < classDataRaw["CMSC_ELEC"].length; i++) {
		var klass = createClassFromRawData(classDataRaw["CMSC_ELEC"][i]);
		CMSC_ELEC[klass.type + " " + klass.number] = klass;
	}
	for (var i = 0; i < classDataRaw["MATH"].length; i++) {
		var klass = createClassFromRawData(classDataRaw["MATH"][i]);
		MATH[klass.type + " " + klass.number] = klass;
	}
	for (var i = 0; i < classDataRaw["SCIENCE"].length; i++) {
		var klass = createClassFromRawData(classDataRaw["SCIENCE"][i]);
		SCIENCE[klass.type + " " + klass.number] = klass;
	}

	console.log ("class database initialized");
	console.log ("=============end==============");

	onLoaded();
}

function createClassFromRawData(data){
	var type = data["type"];
	var num = data["number"];
	var prereq = data["prereq"];
	var unlock = data["unlock"];
	var title = data["title"];
	var klass = new Class(type,num,prereq,unlock,title);

	return klass;
}

function lookUpClass(key){

	if (key in CMSC)
		return CMSC[key];
	else if (key in CMSC_REQ_ELEC)
		return CMSC_REQ_ELEC[key];
	else if (key in CMSC_ELEC)
		return CMSC_ELEC[key];
	else if (key in MATH)
		return MATH[key];
	else if (key in SCIENCE)
		return SCIENCE[key];
}

function checkCategory(key){
	
}
