function addClasses(item,obj) {
	select = document.getElementById(item);
	for (var i = 0; i < obj.length; i++) { 
		var opt = document.createElement('option');
		opt.value = obj[i].type+obj[i].number;
		opt.innerHTML = obj[i].type +" "+ obj[i].number;
		select.appendChild(opt);
	}
}
var items = ["cmscOptions","mathOptions","scienceOptions",
			"cmscReqElecOptions","cmscElecOptions"];
var objs = [CMSC,MATH,SCIENCE,cmscElective,cmscElectiveOther];
for (var i = 0; i < items.length; i++) {
		addClasses(items[i],objs[i]);
}