
function main() {
  // A dictionary with each major as a key assigned a value of courses that are a part of the declaration process
  // [Key = Major, Value = All possible courses needed to declare]
  // https://pietschsoft.com/post/2015/09/05/javascript-basics-how-to-create-a-dictionary-with-keyvalue-pairs
  // https://stackoverflow.com/questions/7196212/how-to-create-dictionary-and-add-key-value-pairs-dynamically
  // course_Dict = [];
  course_Dict = [];

  // A list of all courses in UCSC that are a part of any major declaration process
  var possible_Courses = {};

  // Help from:
  // https://stackoverflow.com/questions/13574930/how-to-load-a-text-file-in-javascript
  var req = new XMLHttpRequest();
  req.open('GET', './data/all-courses.txt');
  req.onreadystatechange = function() {
    if (req.readyState == 4) {
      if (req.status == 200) {
        // lines variable contains all the courses in an array with each index with their own course
        var lines = req.responseText.split(/\n/);
        // stores all the courses for the website search bar list
        lines.forEach(function(line, i, arr) {
          // splices off some random \r that I have no way of doing but this way
          arr[i] = line; // GitHub Pages server line
          // arr[i] = lines.slice(0, -1); // local server line
          AddListItem(arr[i], "filterList");
        });
      } else {
        // (something went wrong with the request)
      }
      course_Dict = Array.from(lines);
    }
  }
  req.send();
}    


function AddListItem(item, typeOfList) {
  var a = document.createElement("a");
  a.setAttribute('href', '#');
  a.textContent = item;

  var ul = document.getElementById(typeOfList);
  var li = document.createElement("li");
  li.appendChild(a);
  // https://stackoverflow.com/questions/53268641/how-to-delete-an-li-from-list-with-javascript
  li.addEventListener('click', function() {
    if(typeOfList == "filterList") AddListItem(this.textContent, "chosenList");
    else if(typeOfList == "chosenList") AddListItem(this.textContent, "filterList");

    this.parentNode.removeChild(this);
  })
  ul.appendChild(li);
}


// https://www.w3schools.com/howto/howto_js_filter_lists.asp
function SearchBar() {
  // Declare variables
  var input, filter, ul, li, a, i, txtValue;
  input = document.getElementById('searchIcon');
  filter = input.value.toUpperCase();
  ul = document.getElementById("filterList");
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
