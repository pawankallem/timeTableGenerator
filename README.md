
# Time Table Generator

<p>This Timetable Generator is used to generate the Timetable for a week without overlapping of Class rooms, 
Instructors and Class students. </p>

# Tech Stack used : 
* NodeJs
* ExpressJs
* Mongoose Database

# How to use : 
* Main Api : https://time-table-generator-test.herokuapp.com/  
( <p>This is used to get the Meeting Id's and to create Meeting</p> )
* The Path to Create Class Room : " /createClassroom " 
( <p> For Class room we take input's room and capacity </p> )
* The Path to Create Instructor : " /createInstructor " 
( <p> To add Instructor in the database take input's name and department </p> )
* The Path to Create Class : " /createClass "
 ( <p> To add Class, department and Batch of the Students with maximum number of students in the database take input's class, department, number(Batch) and maximum_number_of_students  </p> )
            


# Instructions to Run the Code
* Note:
<p>We created cloud database using MongoDb Atlas and deployed on Heroku. So, if you want to run our code then please read the instructions below : </p>

<h3>Clone our repository https://github.com/pawankallem/timeTableGenerator.git for the code.</h3>
<p>Open that code in your VS code src/index.js.</p>
<p>Open terminal in your VS Code and run the command npm install which will install all packages.</p>
<p>Open terminal in your VS Code and run the command npm run start.</p>
