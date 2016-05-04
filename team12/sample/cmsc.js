	select = document.getElementById('selectm');
  	for (var i = 0; i < CMSC.length; i++) { 
	var opt = document.createElement('option');
    opt.value = CMSC[i].type+CMSC[i].number;
    opt.innerHTML = CMSC[i].type +" "+ CMSC[i].number;
    select.appendChild(opt);
}

 