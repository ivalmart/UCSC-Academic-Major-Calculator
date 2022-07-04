
function main() {
  // A dictionary with each major as a key assigned a value of courses that are a part of the declaration process
  // [Key = Major, Value = All possible courses needed to declare]
  // https://pietschsoft.com/post/2015/09/05/javascript-basics-how-to-create-a-dictionary-with-keyvalue-pairs
  // https://stackoverflow.com/questions/7196212/how-to-create-dictionary-and-add-key-value-pairs-dynamically
  var course_Dict = [];
  

  // A list of all courses in UCSC that are a part of any major declaration process
  var possible_Courses = {};

  // Help from:
  // https://stackoverflow.com/questions/13574930/how-to-load-a-text-file-in-javascript
  var req = new XMLHttpRequest();
  req.open('GET', './data/courses.txt');
  req.onreadystatechange = function() {
    if (req.readyState == 4) {
      if (req.status == 200) {
        var lines = req.responseText.split(/\n/);
        // stores all the courses for the website search bar list
        lines.forEach(function(line, i, course_Dict) {
          // splices off some random \r that I have no way of doing but this way
          course_Dict.push({
            key: i,
            value: line.slice(0, -1)
          })
          // course_Dict[i] = line.slice(0, -1);
        });
      } else {
        // (something went wrong with the request)
      }
    }
  }

  req.send();

  // test_Dict = {"one", "Two", "ThRee", "4"};
  console.log(course_Dict);

  var searchList = document.getElementById('unorderedList');
  // https://stackoverflow.com/questions/45193524/how-to-add-a-tag-and-href-using-javascript
  for(i = 0; i < 3; i++) {
    var a = document.createElement("a");
    a.setAttribute('href', '#');
    a.textContent = i;

    var ul = document.getElementById("unorderedList");
    var li = document.createElement("li");
    li.appendChild(a);
    ul.appendChild(li);
  }
}    


// https://www.w3schools.com/howto/howto_js_filter_lists.asp
function SearchBar() {
  // Declare variables
  var input, filter, ul, li, a, i, txtValue;
  input = document.getElementById('searchIcon');
  filter = input.value.toUpperCase();
  ul = document.getElementById("unorderedList");
  li = ul.getElementsByTagName('li');

  // Loop through all list items, and hide those who don't match the search query
  for (i = 0; i < li.length; i++) {
    a = li[i].getElementsByTagName("a")[0];
    txtValue = a.textContent || a.innerText;
    if (txtValue.toUpperCase().indexOf(filter) > -1) {
      li[i].style.display = "";
    } else {
      li[i].style.display = "none";
    }
  }
}
