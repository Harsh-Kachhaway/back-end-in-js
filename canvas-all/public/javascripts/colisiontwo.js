const canvas = document.querySelector("canvas");
const c = canvas.getContext("2d");

canvas.width = innerWidth;
canvas.height = innerHeight;

let mouse = {
  x: 0,
  y: 0,
};

/**
 * Rotates coordinate system for velocities
 *
 * Takes velocities and alters them as if the coordinate system they're on was rotated
 *
 * @param  Object | velocity | The velocity of an individual particle
 * @param  Float  | angle    | The angle of collision between two objects in radians
 * @return Object | The altered x and y velocities after the coordinate system has been rotated
 */

function rotate(velocity, angle) {
    const rotatedVelocities = {
        x: velocity.x * Math.cos(angle) - velocity.y * Math.sin(angle),
        y: velocity.x * Math.sin(angle) + velocity.y * Math.cos(angle)
    };

    return rotatedVelocities;
}

/**
 * Swaps out two colliding particles' x and y velocities after running through
 * an elastic collision reaction equation
 *
 * @param  Object | particle      | A particle object with x and y coordinates, plus velocity
 * @param  Object | otherParticle | A particle object with x and y coordinates, plus velocity
 * @return Null | Does not return a value
 */

function resolveCollision(particle, otherParticle) {
    const xVelocityDiff = particle.velocity.x - otherParticle.velocity.x;
    const yVelocityDiff = particle.velocity.y - otherParticle.velocity.y;

    const xDist = otherParticle.x - particle.x;
    const yDist = otherParticle.y - particle.y;

    // Prevent accidental overlap of particles
    if (xVelocityDiff * xDist + yVelocityDiff * yDist >= 0) {

        // Grab angle between the two colliding particles
        const angle = -Math.atan2(otherParticle.y - particle.y, otherParticle.x - particle.x);

        // Store mass in var for better readability in collision equation
        const m1 = particle.mass;
        const m2 = otherParticle.mass;

        // Velocity before equation
        const u1 = rotate(particle.velocity, angle);
        const u2 = rotate(otherParticle.velocity, angle);

        // Velocity after 1d collision equation
        const v1 = { x: u1.x * (m1 - m2) / (m1 + m2) + u2.x * 2 * m2 / (m1 + m2), y: u1.y };
        const v2 = { x: u2.x * (m1 - m2) / (m1 + m2) + u1.x * 2 * m2 / (m1 + m2), y: u2.y };

        // Final velocity after rotating axis back to original location
        const vFinal1 = rotate(v1, -angle);
        const vFinal2 = rotate(v2, -angle);

        // Swap particle velocities for realistic bounce effect
        particle.velocity.x = vFinal1.x;
        particle.velocity.y = vFinal1.y;

        otherParticle.velocity.x = vFinal2.x;
        otherParticle.velocity.y = vFinal2.y;
    }
}


function randomIntFromRange(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

function randomColor(colors) {
  return colors[Math.floor(Math.random() * colors.length)];
}

function distance(x1, y1, x2, y2) {
  const xDist = x2 - x1;
  const yDist = y2 - y1;

  return Math.sqrt(Math.pow(xDist, 2) + Math.pow(yDist, 2));
}
const colors = ["#2185C5", "#7ECEFD", "#FFF6E5", "#FF7F66", "#c7ccd9", "#4a8c8c", "#a68f72", "#bf754b", "#732b1a"];

// Event Listeners
addEventListener("mousemove", (event) => {
  mouse.x = event.clientX;
  mouse.y = event.clientY;
});

addEventListener("resize", () => {
  canvas.width = innerWidth;
  canvas.height = innerHeight;

  init();
});

// function of creation will run on call
function Circle(x, y, radius, color) {
  this.x = x;
  this.y = y;
  this.radius = radius;
  this.color = color;

this.opacity = 0

  
  

  this.draw = function () {
    c.beginPath();
    c.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
    c.save()
    c.globalAlpha = this.opacity;
    c.fillStyle = this.color;
    c.strokeStyle = this.color;
    c.fill();
    c.restore()
    c.stroke();
    c.closePath();
  };

  this.update = function(circlearray) {
    this.draw();

    for (let i = 0; i < circlearray.length; i++) {
      if (this === circlearray[i]) continue;
      if (
       ( distance(this.x, this.y, circlearray[i].x, circlearray[i].y) -
          radius * 2) < 0)
       {
        console.log("col");
        resolveCollision(this, circlearray[i])
    }
    // console.log(i);
}
if (this.x > innerWidth - radius || this.x < 0 + this.radius) {
    this.velocity.x = -this.velocity.x;
  }
  if (this.y > innerHeight - radius || this.y < 0 + this.radius) {
    this.velocity.y = -this.velocity.y;
  }
  //mouse
  if (distance(mouse.x,mouse.y,this.x,this.y) < 100  && this.opacity < 0.5){
    this.opacity += 0.05
    
}
 else if(distance(mouse.x,mouse.y,this.x,this.y) > 100){
      this.opacity -= 0.05;
      this.opacity = Math.max(0,this.opacity);

  }
    this.y += this.velocity.y;
    this.x += this.velocity.x;
  };

}

// Implementation
let circlearray;
function init() {
  circlearray = [];
  for (let i = 0; i < 100; i++) {
    let radius = randomIntFromRange(10, 40);
    let x = randomIntFromRange(0 + radius, innerWidth - radius);
    let y = randomIntFromRange(0 + radius, innerHeight - radius);
    let color = randomColor(colors)
   
   

    if (i !== 0) {
      for (let j = 0; j < circlearray.length; j++) {
        if (
          distance(x, y, circlearray[j].x, circlearray[j].y) - radius * 2 <
          0
        ) {
          x = randomIntFromRange(0 + radius, innerWidth - radius);
          y = randomIntFromRange(0 + radius, innerHeight - radius);

          j = -1;
        }
      }
    }

    circlearray.push(new Circle(x, y, radius, color));
  }
//   console.log(circlearray);
}

// Animation Loop
function animate() {
  requestAnimationFrame(animate);
  c.clearRect(0, 0, canvas.width, canvas.height);
  //
  circlearray.forEach(Circle => {
    Circle.update(circlearray);
  });
}

init();
animate();
