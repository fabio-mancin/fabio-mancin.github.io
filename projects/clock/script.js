var now = new Date();
var seconds = now.getSeconds();
var minutes = now.getMinutes();
var hours = now.getHours();
hours = hours % 12;
hours = hours ? hours : 12;

const degToRotate = 6;
const setTime = () => {
  document.getElementById("seconds").style.transform =
    "rotate(" + seconds * degToRotate + "deg)";
  document.getElementById("hours").style.transform =
    "rotate(" + ((30 * hours) + (parseInt(minutes / 12) * degToRotate)) + "deg)";
  document.getElementById("minutes").style.transform =
    "rotate(" + minutes * degToRotate + "deg)";
};

const moveHands = hand => {
  var e = document.getElementById(hand);
  var currDeg = window.getComputedStyle(e, null).getPropertyValue("transform");
  var values = currDeg
    .split("(")[1]
    .split(")")[0]
    .split(",");
  var a = values[0];
  var b = values[1];
  var c = values[2];
  var d = values[3];
  var angle = Math.round(Math.atan2(b, a) * (180 / Math.PI));
  e.style.transform = "rotate(" + (angle + 6) + "deg)";
};

setTime();

setInterval(function() {
  moveHands("seconds");
}, 1000);
setInterval(function() {
  moveHands("minutes");
}, 60000);
setInterval(function() {
  moveHands("hours");
}, 720000);