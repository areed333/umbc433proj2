	select = document.getElementById('selectm');
  	for (var i = 0; i < classes.length; i++) { 
	var opt = document.createElement('option');
    opt.value = classes[i].type+classes[i].number;
    opt.innerHTML = classes[i].type +" "+ classes[i].number;
    select.appendChild(opt);
}

 