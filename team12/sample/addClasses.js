function cmsc() {
	select = document.getElementById('selectm');
  	for (var i = 0; i < CMSC.length; i++) { 
	var opt = document.createElement('option');
    opt.value = CMSC[i].type+CMSC[i].number;
    opt.innerHTML = CMSC[i].type +" "+ CMSC[i].number;
    select.appendChild(opt);
}}

function science() {
	select = document.getElementById('selectmScience');
  	for (var i = 0; i < SCIENCE.length; i++) { 
	var opt = document.createElement('option');
    opt.value = SCIENCE[i].type+SCIENCE[i].number;
    opt.innerHTML = SCIENCE[i].type +" "+ SCIENCE[i].number;
    select.appendChild(opt);
}}
function math() {
 	select = document.getElementById('selectmMath');
  	for (var i = 0; i < MATH.length; i++) { 
	var opt = document.createElement('option');
    opt.value = MATH[i].type+MATH[i].number;
    opt.innerHTML = MATH[i].type +" "+ MATH[i].number;
    select.appendChild(opt);
}}

cmsc();
science();
math();

 