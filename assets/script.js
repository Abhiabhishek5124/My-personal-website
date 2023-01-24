

// For typewriter animation
function typeOut(element, message, index, interval) {
    if (index < message.length) {
        element.innerHTML += message.charAt(index);
        setTimeout(function() {
            typeOut(element, message, index + 1, interval);
        }, interval);
    }
}


var element = document.getElementById("typing1");
var message = "Hey! I am Abhishek Shrestha.";
var index = 0;
var interval = 50; // milliseconds for typing
typeOut(element, message, index, interval);
setInterval(function(){
  element.innerHTML = "";
  typeOut(element, message, index, interval);
}, 2000); // repeat every 2000 milliseconds (2 seconds)


// for mobile navigator
function myFunction() {
  var x = document.getElementById("myLinks");
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }
}












