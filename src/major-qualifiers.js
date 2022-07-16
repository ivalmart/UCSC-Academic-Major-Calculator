let major_courseObj = {};   // will contain the entire json file with each of its contents
let content_parsed = [];    // will contain an array of courses from the given list of the user

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
        // 2nd loop: goes through each course in the major

        let major_str = major;

        for(let i = 0; i < major_courseObj[major].length; i++) {
            // 3rd loop: goes through the list of courses from the user to compare
            let j = 0;
            while(j < content_parsed.length) {
                let course_Comp = major_courseObj[major][i];
                // let user_course = content_parsed[j]; // GitHub Pages server line
                let user_course = content_parsed[j].slice(0, -1); // local server line
                let result = user_course.localeCompare(course_Comp);

                if(result == 0) {
                    major_str += " / ";
                    major_str += course_Comp;
                }
                j++;
            }
        }

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
    fetch("./data/majors.json")
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
    var qualified = document.createElement("a");
    qualified.textContent = major;
  
    var ul = document.getElementById("majorList");
    var li = document.createElement("li");
    li.appendChild(qualified);
    ul.appendChild(li);
}

// Clears the list of majors that were previously calculated earlier as to not stack majors from before
function ClearMajorList() {
    document.getElementById("majorList").innerHTML = "";
}