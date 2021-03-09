var temp = [];
var a = 0;
var b = 0;

$("#0").mouseup(function() {
  temp.push(0);
  $("#chain").html(temp.join(""));
});

$("#dot").mouseup(function() {
  temp.push(".");
  $("#chain").html(temp.join(""));
});

$("#1").mouseup(function() {
  temp.push(1);
  $("#chain").html(temp.join(""));
});

$("#2").mouseup(function() {
  temp.push(2);
  $("#chain").html(temp.join(""));
});

$("#3").mouseup(function() {
  temp.push(3);
  $("#chain").html(temp.join(""));
});

$("#4").mouseup(function() {
  temp.push(4);
  $("#chain").html(temp.join(""));
});

$("#5").mouseup(function() {
  temp.push(5);
  $("#chain").html(temp.join(""));
});

$("#6").mouseup(function() {
  temp.push(6);
  $("#chain").html(temp.join(""));
});

$("#7").mouseup(function() {
  temp.push(7);
  $("#chain").html(temp.join(""));
});

$("#8").mouseup(function() {
  temp.push(8);
  $("#chain").html(temp.join(""));
});

$("#9").mouseup(function() {
  temp.push(9);
  $("#chain").html(temp.join(""));
});

$("#plus").mouseup(function() {
  a = temp.join("");
  if (/[^0-9.][0-9]/g.test(a) === true) {
    $("#result").html(math.eval(a));
  }
  temp = [];
  temp.push(a);
  temp.push("+");
});

$("#minus").mouseup(function() {
  a = temp.join("");
  if (/[^0-9.][0-9]/g.test(a) === true) {
    $("#result").html(math.eval(a));
  }
  temp = [];
  temp.push(a);
  temp.push("-");
});

$("#X").mouseup(function() {
  a = temp.join("");
  if (/[^0-9.][0-9]/g.test(a) === true) {
    $("#result").html(math.eval(a));
  }
  temp = [];
  temp.push(a);
  temp.push("*");
});

$("#divide").mouseup(function() {
  a = temp.join("");
  if (/[^0-9.][0-9]/g.test(a) === true) {
    $("#result").html(math.eval(a));
  }
  temp = [];
  temp.push(a);
  temp.push("/");
});

$("#equals").mouseup(function() {
  a = temp.join("");
  if (/[^0-9.][0-9]/g.test(a) === true) {
    $("#result").html(math.eval(a));
  }
});

$("#C").mouseup(function() {
  temp = [];
  a = 0;
  b = 0;
  $("#result").html(0);
  $("#chain").html(0);
});

$("#CE").mouseup(function() {
  temp = [];
  $("#chain").html(0);
});

$(document).ready(function() {
  $("#about").tooltip();
});