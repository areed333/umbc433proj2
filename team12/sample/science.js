	select = document.getElementById('selectmScience');
  	for (var i = 0; i < SCIENCE.length; i++) { 
	var opt = document.createElement('option');
    opt.value = SCIENCE[i].type+SCIENCE[i].number;
    opt.innerHTML = SCIENCE[i].type +" "+ SCIENCE[i].number;
    select.appendChild(opt);
}

 