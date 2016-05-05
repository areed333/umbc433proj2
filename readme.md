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
