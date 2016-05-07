#update 5/7 4:23pm
- check out printPhp.js
- this file will print all the items in .php
- no need for php to print, printPhp.js is easier
- printPhp.js takes all classes selected as an array of strings

#update 5/6 7:43pm
- first page done
- second page, **easy to reduce**
1. Classes chosen is a string (lines 251-261)
2. Make string an array (note there are 5 groups of classes)
```php
$classArray = explode(',', $classes_core_string);
echo($classArray[0]);
```
3. we now have 3 cases:
	- All classes in group has been taken
	- one is taken
- do an easy for loop to check what class it unlocks
- for each unlock class print message suggesting to take that
- should be same for most of the sections... now for gateway see 4
4. **note there are sections for each type of class i.e
```php
/*---------------------------------
/     COMP SCI CORE CHECK!        /
--------------------------------*/
```
- Maybe create a gateway object, each time check if gateway complete, if not print missing classes etc
- make it an array or something, and **for** each class in **unlockStr**
- some complex code from their program
```php
//CMSC203
if($_GET["MATH151"]==TRUE && $_GET["CMSC203"]!=TRUE) {
	echo("-You could(and should!) take <b> CMSC203: Discrete Structures</b><br>");
}
//CMSC313
if($_GET["CMSC202"]==TRUE && $_GET["CMSC203"]==TRUE && $_GET["CMSC313"]!=TRUE) {
	echo("-You could take <b> CMSC313: Computer Organization and Assembly Language Programming</b><br>");
}
```


#update 5/5 - 5:37pm
- adds classes to **Coursework**
- ClassData.js includes MATH + SCI courses
- Working on unlocking class with js
```javascript
var idMAP = $.grep(Object.keys(CMSC), function (k) { 
	return CMSC[k].number == courseNumber; })
```
- idMAP is CMSC[idMAP] of the course selected
- use this to get **unlock** string
```javascript
var unlockStr = CMSC[idMAP].unlock;
```
- make it an array or something, and **for** each class in **unlockStr**
```javascript
if (selection2.options[j].text in unlockStr[i]) {
	allowed = true;	// FOR EACH OF THOSE Classes
	}
```


#Proj2
- Team 12
- Due May 10 by 11:59 PM
-Criteria
 * get the project running (~15%)
 * peer evaluation
 * MATH + SCI + JavaScript Additions 
 * MATH has specific courses that can be taken
 * SCI courses offer more flexibility with less rigidity in the courses that can be taken
 * Clean up other groups' project (e.g. messy code, hard to understand)
 * Create "new" documentation -> use Template we'll be provided
 * Presentation will be on the Reading Day (i.e. Wednesday, May 11th)
 - Reduce redunant checking
 - Create json object, and check it
 - add couple more missing classes
