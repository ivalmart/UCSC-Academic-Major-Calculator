# UCSC-Academic-Major-Calculator
A program for UCSC Advisors/Students to calculate what 2022-2023 majors students qualify for given the completed class history.

Input: A list of courses that are assumed to be completed and passed with a good grade from the user in their transcript.

Output: A list of all majors the user can consider to follow. All majors that are considered "qualified" for the user 
are only considering prerequisite courses needed to declare the major. 

Possible Outputs?
- Each Major show with a count of classes they need to take (ex./ completed 9/18 courses in major)
- Each major show with all the classes that are used to qualify for it
- Example:/ Biology B.S.: CHEM 1A, PHYS 5A
- Advanced Results: Presenting what majors you qualify for, as well as how many classes you have left in the major
and how much time you have remaining to declare

Expected User:
First-time Frost having an Undeclared major or wanting to switch out for something else

Purpose of the Program:
This program is meant to be a tool to help present all possible majors the user can consider when they are not sure what major to 
go for or if they are undeclared and are unsure what they can follow with the classes they took. Each major result is a major the 
user can consider as they have some course history that align with the major's prerequisites to declare. The program is NOT meant to 
represent if the user is on track to complete the major. 

What to Be Aware About the Program:
- Only classes that are a part of any major declaration/prerequisites will be a part of the program
- Lower Division is classified as any course below the <100 in any series
- Data is all collected from the UCSC General Catalog and each individual Major Departments
- Program will be implemented into GitHub Pages using Javascript, Link can be provided to students and advisors 
- Since the program only focuses on prerequisites to declare for a major, note that not EVERY lower-division course that is needed in 
the major but is not a part of the prerequisites to declare will NOT be included with the major.
- - Example: Chemistry B.A requires PHYS 5A or PHYS 6A to be completed in the duration of the major. HOWEVER, the course(s) is NOT 
needed in the major declaration process.
