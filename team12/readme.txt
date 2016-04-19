-----------------------------------
|        Project 1 READ ME        |
-----------------------------------

Class: CMSC433 SPR16 


Table name:    Student Information

How to use and navigate our website: 
-----------------------

||HTML/Javascript Portion||
The top section is pretty straight forward-- the user simply enters their personal information and whatever comments that they want to send to their advisor. 

The bottom section is a bit more complicated. Each class that is able to be taken is in its own section, split up in the following sections:
  - All required CMSC classes
  - All required MATH & STAT classes
  - All required SCI classes
  - Group 1 of CMSC electives
  - Every other CMSC class offered (may or may not apply for 2nd group for requirements)

The left side signifies all CMSC-related courses available and the right side is for the user to move over classes that they have taken so that they can submit those specific classes to the database. To move any class over, highlight the desired class and click the button below the box to move it to the other box. This works both ways, so if the user makes a mistake, they can move the said class back over.

The error-checking is built into the process of moving classes over. If the user tries to move a class over that doesn't have the needed prerequisites already transferred over to the right side, it will throw an error and will not be moved. While this is a little inconvenient as the user has to put their classes in from the beginning, this prevents the user from making a mistake.

We also made the decision not to check whether the user can take off a prerequisite class from their list if it is needed for another class they have already added to the right side. For example, if the user decides to add MATH 151 and MATH 152 to the list of their courses, then takes off 151 without taking off 152 first, the page will let them with no issues. This decision was made mainly to cut down on code length as well as being under the assumption that if the user were to deliberately go through the motions to remove that class from their list, that they have some idea of what they are doing. This will prove a problem in the PHP section.

The script for this is simple, if long. All classes are assumed to not have their prerequisites met in the beginning, then a large switch statement checks the prerequistes for each course individually. If the prerequisites are met, then the user will be able to add the class to their list. Courses are only searched for in the select multiple fields that they belong in, so modifying this to move courses between different catagories will break the prerequisite check.

Additionally, the visual "boxes" where the courses are listed are not actually directly tied to the submission of the classes to the database. When the user adds the desired class to the box to the left side, it checks a "hidden" check box for the corresponding class with JavaScript. This check box will get unchecked if the user decides to move the class back. These check boxes are used instead for the submission of the classes. Because they are hidden and cannot be clicked on with normal means, it is very difficult for an unknowing user to circumvent the system, but it is a vulnerability to take note of. 

||PHP||
The PHP page will display all classes that the user will be able to take next semester, according to what they have already taken. These recommendations will also be set up in a similar way as the HTML page, with each group of classes being in their respective categories. It will also keep track of whether you need more courses in that section to graduate.

One thing to note is that our script has a specific approach to determine what classes will be displayed to the user. The php script checks the classes in ascending order of what the user has put into the HTML page previously; for example, when checking for math requirements, it will begin by checking 201, then 202, and so on. As noted above in the HTML section previously, this is only a problem when the user takes off a prerequisite class from their list if it is needed for another class they have already added to the right side. Because it checks for the prerequisite first, as soon as the script finds that the user doesn't have a prerequisite, it will stop looking for additional classes that need that prerequisite and spit out the corresponding class. Using the same example above, if the user were to send MATH 152 and not MATH 151, instead of recommending MATH 221, it will instead recommend MATH 151. 

The PHP page also sends all of the information to our database. The raw data from StudentID to Questions/Comments will be sent to the database unchanged. All of the classes, however, will be concatenated according to specified requirements of the database. For example, all of the classes under the MATH section that have been taken will be concatenated into one string like "MATH 151, MATH 152, MATH 221" before being sent off to the database. 

Because our primary key is the StudentID and there cannot be more than one of the same primary key in one table, the PHP script will first check if there is already the same key in the database. If there is, the script will delete the previous entry and reupload the new one being sent. 

||DATABASE||
The name of the table is at the top of this document. 

There are 11 attributes and are as follows:

   StudentID               (varchar(7))
   FirstName               (varchar(30))
   LastName                (varchar(50))
   Email                   (varchar(30))
   ClassStanding           (varchar(10))
   QuestionsComments       (text)
   ReqCMSC                 (text)
   ReqMATH                 (tinytext)
   ReqSCIE                 (text)
   ElecCMSC                (text)
   OtherCMSC               (text)

Our primary index is the StudentID as it is an easy way to make a distinction between students. 

As something to keep note, though long texts can show as ending with a ... in some database entries, if you double click the section in phpMyAdmin you can see that all of the information was passed with no issues and is just hidden initially.