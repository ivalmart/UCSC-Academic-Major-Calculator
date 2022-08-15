# UCSC-Academic-Major-Calculator
A program for UCSC Advisors/Students to calculate what 2022-2023 majors students qualify for given the completed class history.

### Input: A list of courses that are assumed to be completed and passed with a good grade from the user in their transcript.

### Output: A list of all majors the user can consider to follow with a hoverable link that presents what courses they completed that was equivalent to the major with all the prerequisites shown. All majors that are considered "qualified" for the user are only considering prerequisite courses needed to declare the major. 

**Expected User:**
First-time Frost having an Undeclared major or wanting to switch out for a different major.

## Purpose of the Program:

This program is meant to be a tool to help present all possible majors the user can consider when they are not sure what major to 
go for or if they are undeclared or are unsure what they can pursue with the classes they took. Each result is a major the 
user can consider as they have some course history that align with the major's prerequisites to declare. The program is NOT meant to 
represent if the user is on track to complete the major. 

## What to Be Aware About with the Program:
- The data is only based off of **MAJORS**, not **MINORS**
- Only classes that are a part of any major declaration/prerequisites will be a part of the program
- All classes that the user chooses is **ASSUMED** to be completed and passed with a satisfactory grade _(double check with your department on what is considered a passing grade)_
- Lower Division is classified as any course below the <100 in any series
- To view more information about each major, hover the mouse cursor over each major title
- Data is all collected from the UCSC General Catalog and each individual Major Departments
- Program will be implemented into GitHub Pages using Javascript, link can be provided to students and advisors 
- Since the program only focuses on prerequisites to declare for a major, note that not EVERY lower-division course that is needed in 
the major but is not a part of the prerequisites to declare will NOT be included with the major.
> Example: Chemistry B.A requires PHYS 5A or PHYS 6A to be completed in the duration of the major. HOWEVER, the course(s) is NOT 
needed in the major declaration process.
- Any external scores or courses will **NOT** be included here, user must find what is equivalent
> Example: A 3/5 on the AP Calculus AB test is equivalent to Applied Mathematics 3 and Mathematics 3 (AM 3, MATH 3)

**Created By:** Ivan Martinez-Arias

## Format of the JSON File to Update:
{<br>
&emsp; "the title of the major": {<br>
&emsp;&emsp; "all the courses needed to declare the major": [<br>
&emsp;&emsp;&emsp; "course 1",<br>
&emsp;&emsp;&emsp; "course 2",<br>
&emsp;&emsp;&emsp; ""....<br>
&emsp;&emsp; ],<br>
&emsp;&emsp; "the stylized version of the courses depending on if there are any classes that mention they can take 1 of 3 or if they need to take all 3 (difference between X or Y or Z / X and Y and Z)": [<br>
&emsp;&emsp;&emsp; "course 1",<br>
&emsp;&emsp;&emsp; "course 2",<br>
&emsp;&emsp;&emsp; ""....<br>
&emsp;&emsp;&emsp; ],<br>
&emsp;&emsp; "the grading policy for the prerequisite courses": [<br>
&emsp;&emsp;&emsp; "grade or better"<br>
&emsp;&emsp; ]<br>
&emsp; }<br>
}<br>

### Note: Each course should be written down in the JSON as its abbreviation, Ex./ ANTH 2, MATH 11A, HIS 15, ...

# Possible Future Additions:
- Add more specific information about a major whether it requires classes or if it recommends classes (majors that say they can declare whenever but is recommended/ideal to take some class)
- Implement all UCSC courses in the course catalog
- Add more to the major information than prerequisites?
- Add specifica grading policies that mention classes need letter grades while others allow for different options
- Add when the major must be declared (either by 5th or 6th quarter, etc.)
- Add BSOE pre-major stuff, where you cannot pursue if you are not proposed
- Add links for all the shown majors to the general catalog
