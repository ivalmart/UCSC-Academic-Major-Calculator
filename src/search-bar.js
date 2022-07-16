function main() {
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
    }
  }
  req.send();
}    

// Creates an element in given list to format the style and add button functionality
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

// Searches the title of what the user has typed into the search bar and provides all closeby results
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
