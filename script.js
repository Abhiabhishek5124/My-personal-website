
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





var btn = document.getElementById("btn");
var text = document.getElementById("text");

btn.addEventListener("click", function() {
  if (text.style.display === "none") {
    text.style.display = "block";
  } else {
    text.style.display = "none";
  }
});