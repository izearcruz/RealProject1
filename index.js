console.log("got up to here")

var box = document.getElementById("box");
var boxHeight = box.offsetHeight;
var boxWidth = box.offsetWidth;
//choosing random cords
var targetX = Math.random() * boxWidth;
var targetY = Math.random() * boxHeight;

console.log( `targetX: ${targetX}`);
console.log( `targetY: ${targetY}`);

function distance(x0, y0, x1, y1) {
  var dx = x1 - x0;
  var dx = y1 - y0;
  return
  Math.floor(Math.sqrt(Math.pow(dx, 2) + Math.pow(dy, 2)));
};

var win = true;
function loc(event){
  if (win == true){
    console.log(`mouseX: ${event.clientX}`);
    console.log(`mouseY: ${event.clientY}`);
    var mouseX = event.clientX
    var mouseY = event.clientY
    var dist = distance(targetX, targetY, mouseX, mouseY);
    box.stylebackgroundColor = `rgb(${255- dist}, 0, 0)`
    if (dist <= 40){
      box.style.backgroundColor = "green"
      win = false
    }
  }
}

box.addEventListener("mousemove", loc);
