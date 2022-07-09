let major_courseObj = {};   // will contain the entire json file with each of its contents
let content_parsed = [];    // will contain an array of courses from the given list of the user

// main function
function CalculateButton() {
    clearContentArray();

    var content = document.getElementById("chosenList").textContent;

    if(content == "") console.log("N/A");   // if the list is empty, don't calculate anything
    else parseContent("Hello World");   // if there is at least 1 item in the list, we can calculate
    
    // ReceiveMajorJSON();

    console.log(content_parsed);
}

// Calculates 
let QualifyMajors = function() {
    for(let prop in major_courseObj) {
        // if(prop == "course") console.log("this counts as as tring");
        console.log(prop);
        console.log(major_courseObj[prop]);
    };
}

// takes in the given content list from the user and organizes it to access it easier
function parseContent(lines) {
    content_parsed.push(lines);
    console.log(lines);
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