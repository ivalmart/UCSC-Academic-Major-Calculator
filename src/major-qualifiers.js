let major_courseObj = {};   // will contain the entire json file with each of its contents
let content_parsed = [];    // will contain an array of courses from the given list of the user

// main function
function CalculateButton() {
    clearContentArray();
    ClearMajorList();

    var content = document.getElementById("chosenList").children;

    if(content.length <= 0) {
        console.log("N/A");   // if the list is empty, don't calculate anything
    } else {
        parseContent(content);   // if there is at least 1 item in the list, we can calculate
        ReceiveMajorJSON();
    }
}

// Calculates 
// prop - major title
// arr[prop] - all courses inside the major title
let QualifyMajors = function() {
    // 1st loop: goes through each major
    for(let prop in major_courseObj) {
        console.log(prop);
        // 2nd loop: goes through each course in the major
        for(let i = 0; i < major_courseObj[prop].length; i++) {
            // 3rd loop: goes through the list of courses from the user to compare
            let j = 0;
            while(j < content_parsed.length) {
                let course_Comp = major_courseObj[prop][i];
                let user_course = content_parsed[j].slice(0, -1);
                let result = user_course.localeCompare(course_Comp);

                if(result == 0) {
                    AddMajorToList(prop);
                    break;
                }
                j++;
            }
        }
    }
}

// takes in the given content list from the user and organizes it to access it easier
// function takes in the children of the content
function parseContent(children) {
    console.log("Content Parsed Through");
    // loads up the content parsed in and saves it
    var pars = [];
    for(var i = 0; i < children.length; i++) {
        pars.push(children[i].textContent);
        content_parsed.push(children[i].textContent);
    }

    // content_parsed.push(children);
}

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

function clearContentArray() {
    while(content_parsed.length > 0) content_parsed.pop();
}

function AddMajorToList(major) {
    console.log("ADDING MAJOR" + major);
    var qualified = document.createElement("a");
    qualified.textContent = major;
  
    var ul = document.getElementById("majorList");
    var li = document.createElement("li");
    li.appendChild(qualified);
    ul.appendChild(li);
}

function ClearMajorList() {
    document.getElementById("majorList").innerHTML = "";
}