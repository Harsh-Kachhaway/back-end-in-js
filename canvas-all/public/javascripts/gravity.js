const canvas = document.querySelector('canvas')
const c = canvas.getContext('2d')
    
canvas.width = innerWidth
canvas.height = innerHeight
    
const mouse = {
  x: innerWidth / 2,
  y: innerHeight / 2
}
 
function randomIntFromRange(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min)
  }
  
  function randomColor(colors) {
    return colors[Math.floor(Math.random() * colors.length)]
  }
  
  function distance(x1, y1, x2, y2) {
    const xDist = x2 - x1
    const yDist = y2 - y1
  
    return Math.sqrt(Math.pow(xDist, 2) + Math.pow(yDist, 2))
  }
const colors = ['#2185C5', '#7ECEFD', '#FFF6E5', '#FF7F66']
    
// Event Listeners
addEventListener('mousemove', (event) => {
  mouse.x = event.clientX
  mouse.y = event.clientY
})
    
addEventListener('resize', () => {
  canvas.width = innerWidth
  canvas.height = innerHeight
    
  init()
})
addEventListener("click", () => {
  init()

})
    
// Objects
function Ball (x, y, radius, color,dy ,dx) {
  
    this.x = x
    this.y = y
    this.radius = radius
    this.color = color
    this.dy = dy
    this.dx = dx
  
    
  this.draw = function(){
    c.beginPath()
    c.arc(x, y, radius, 0, Math.PI * 2, false)
    c.fillStyle = this.color
    c.strokeStyle = "blue"
    c.fill()
    c.stroke()
    c.closePath()
  }
    
  this.update = function() {
    if (y > innerHeight-radius) {
      dy = -dy * 0.99
    }
    else{
      dy += .2
    }
    if (x > innerWidth-radius || x < 0 + radius) {
      dx = -dx
    }

    console.log(dy);
    y += dy
    x += dx
    c.globalCompositeOperation = "lighter";

    this.draw()
  }
}
var ballarary;
var ball;
function init() {
  ballarary = []
  for (let i = 0; i < 200; i++) {
    ballarary.push(new Ball(randomIntFromRange(0 + 50, innerWidth- 50) ,randomIntFromRange(0, innerHeight - 100)  ,randomIntFromRange(10, 30),randomColor(colors),1 , randomIntFromRange(-1, 1)))
  }
console.log(ballarary);
}

// Animation Loop
function animate() {
    requestAnimationFrame(animate)
    
    c.clearRect(0, 0, canvas.width, canvas.height)
    
    
    
 for (let i = 0; i < ballarary.length; i++) {
  const element = ballarary[i].update();
  
 } 
}
    
init()
animate()