

function main() {
    // Help from:
    // https://stackoverflow.com/questions/13574930/how-to-load-a-text-file-in-javascript
    var req = new XMLHttpRequest();
    req.open('GET', './data/courses.txt');
    req.onreadystatechange = function() {
      if (req.readyState == 4) {
        if (req.status == 200) {
          var lines = req.responseText.split('\n');
          lines.forEach(function(line, i) {
            console.log("#", i, ": ", line);
          });
        } else {
          // (something went wrong with the request)
        }
      }
    }
    
    req.send();

    // https://stackoverflow.com/questions/14446447/how-to-read-a-local-text-file
    // https://fetch.spec.whatwg.org/
    // Fetch API Javascript

    // var courseList = fetch('./data/courses.txt')
    // .then(response => response.text())
    // .then(text => {return text;});

    // courseList.then(function(parse) {
    //     console.log(parse.replaceAll('\r', '\n').split('\n'))
    // })
    // // console.log(courseList);

}    
