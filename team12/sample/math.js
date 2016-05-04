	select = document.getElementById('selectmMath');
  	for (var i = 0; i < MATH.length; i++) { 
	var opt = document.createElement('option');
    opt.value = MATH[i].type+MATH[i].number;
    opt.innerHTML = MATH[i].type +" "+ MATH[i].number;
    select.appendChild(opt);
}

 