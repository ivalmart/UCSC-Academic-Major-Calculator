let major_courseObj = {};   // will contain the entire json file with each of its contents, UNTOUCHED
let content_parsed = [];    // will contain an array of courses from the given list of the user
let calculated_majorObj = [];   // will contain the results to print out cleanly on the page

// Main Function
function CalculateButton() {
    clearContentArray();    // resets the content that was parsed from the user input
    ClearMajorList();   // resets the list that was calculated previously

    var content = document.getElementById("chosenList").children;

    if(content.length <= 0) {
        console.log("N/A");   // if the list is empty, don't calculate anything
        AddMajorToList("N/A");
    } else {
        parseContent(content);   // if there is at least 1 item in the list, we can calculate
        ReceiveMajorJSON();
    }
}

// Compares each user inputted class with each course inside each major to discover what
// majors the student can qualify for that can help them out with the declaration process
// or to help provide guidance on what they can pursue with the courses they've taken
// major - major title
// arr[major] - all courses inside the major title
let QualifyMajors = function() {
    // 1st loop: goes through each major
    for(let major in major_courseObj) {
        // console.log(major);
        // console.log(major_courseObj[major]);
        // console.log(major_courseObj[major]["all-courses"]);
        // console.log(major_courseObj[major]["print"]);

        // break;


        // OLD CODE
        // 2nd loop: goes through each course in the major

        let major_str = major;

        // let list_of_courses = [];

        for(let i = 0; i < major_courseObj[major]["all-courses"].length; i++) {
            // 3rd loop: goes through the list of courses from the user to compare
            let j = 0;
            while(j < content_parsed.length) {
                let course_Comp = major_courseObj[major]["all-courses"][i];
                let user_course = content_parsed[j]; // GitHub Pages server line
                // let user_course = content_parsed[j].slice(0, -1); // local server line
                let result = user_course.localeCompare(course_Comp);

                if(result == 0) {
                    major_str += " / ";
                    major_str += course_Comp;
                    // list_of_courses.push(course_Comp);
                }
                j++;
            }
        }

        // calculated_majorObj[major] = list_of_courses;
        // console.log(calculated_majorObj[major]);

        if(major_str.localeCompare(major) != 0) AddMajorToList(major_str);

    }
}

// takes in the given content list from the user and organizes it to access it easier
// function takes in the children of the content
function parseContent(children) {
    // loads up the content parsed in and saves it
    var pars = [];
    for(var i = 0; i < children.length; i++) {
        pars.push(children[i].textContent);
        content_parsed.push(children[i].textContent);
    }

}

// Loads the JSON file that contains all majors with a list of courses attached to them
// The content of the JSON is async
function ReceiveMajorJSON() {
// Helpful: https://www.youtube.com/watch?v=Pb-8DzAObmg for JSON Files
// Takes in a big string of what the content inside 
// function is async, final promise of the last function is not returned, there is nothing in the variables saved
    fetch("./data/2022-2023-majors.json")
    .then(function(resp) {
        return resp.json();
    })
    .then(function(data) {
        major_courseObj = data;
        QualifyMajors();
    });
}

// Clears the content array received and parsed previously with the user input
function clearContentArray() {
    while(content_parsed.length > 0) content_parsed.pop();
}

// Adds the major title + it's contents to the Qualified Majors list
function AddMajorToList(major) {
    // UPDATE: Add a sub-list of items to print out for each major
    // https://www.freecodecamp.org/news/html-bullet-points-how-to-create-an-unordered-list-with-the-ul-tag-example/    
    // Creates the text element to show the user what major they qualify for
    var qualified = document.createElement("a");
    qualified.textContent = major;
    qualified.className = "tooltip";
    // Creates the text when hovering the major on what other material they needs for prerequisites
    var span = document.createElement("span");
    span.setAttribute('class', 'tooltiptext');
    // Adds the text inside the hoverable text to show the user the extra content
    span.innerHTML = "Hello World!\nThis indeed works";
    qualified.appendChild(span);
  
    var ul = document.getElementById("majorList");
    var li = document.createElement("li");
    li.appendChild(qualified);
    ul.appendChild(li);
}

// Clears the list of majors that were previously calculated earlier as to not stack majors from before
function ClearMajorList() {
    document.getElementById("majorList").innerHTML = "";
}