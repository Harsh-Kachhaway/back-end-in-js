let canvas = document.querySelector("canvas");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
let c = canvas.getContext("2d");    //contex to use eather 2d or 3d
var mouse = {                       //nouse object
  x: undefined,
  y: undefined
}
window.addEventListener("mousemove", function (e) {  //mouse movement 
  mouse.x = e.x
  mouse.y = e.y
})
window.addEventListener("resize", function () {   //windows resize
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  init()
})
var coloraray = [                                //color palate array 
  "#c7ccd9", "#4a8c8c", "#a68f72", "#bf754b", "#732b1a"  //can add more color
  // " #74CCF4"
]
var circlearray;                                // declararin of circlearray
function init() {                                 // init function work each time window resize
  circlearray = [];                             // set circlearray to empty array
  function Circle(x, y, radius, dy, dx) {
    this.x = x;
    this.y = y;
    this.radius = radius;
    this.dy = dy;
    this.dx = dx;
    var rancolor = Math.floor(Math.random() * coloraray.length)
    this.draw = function () {
      c.beginPath();
      c.arc(x, y, radius, 0, Math.PI * 2, false);
      color = coloraray[rancolor]
      strok = coloraray[rancolor]
      c.fillStyle = color
      c.strokeStyle = color
      c.stroke()
      c.fill();
    };
    this.update = function () {
      if (x > innerWidth - radius || x < 0 + radius) {
        dx = -dx;
      }
      if (y > innerHeight - radius || y < 0 + radius) {
        dy = -dy;
      }
      y += dy;
      x += dx;
      if (mouse.x - x < 50 && mouse.x - x > -50 && mouse.y - y < 50 && mouse.y - y > -50 && radius < 50) {
        radius += 1
      }
      else if (radius > 1) {
        radius -= 1
      }
      this.draw();
    };
  }
  for (let i = 0; i < 800; i++) {
    let radius = Math.random() * 2 + 2;
    let x = Math.random() * (window.innerWidth - radius * 2) + radius;
    let y = Math.random() * (window.innerHeight - radius * 2) + radius;
    let dx = (Math.random() - 0.5) * 3;
    let dy = (Math.random() - 0.5) * 3;
    circlearray.push(new Circle(x, y, radius, dy, dx));
  }
  function animate() {
    requestAnimationFrame(animate);
    c.clearRect(0, 0, innerWidth, innerHeight);
    for (let i = 0; i < circlearray.length; i++) {
      circlearray[i].update();
    }
  }
  animate();
  console.log("end");
}
init()
