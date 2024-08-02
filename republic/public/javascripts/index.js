// Create a GSAP timeline
const tl = gsap.timeline();

// Add animations to the timeline
tl.from("#stager", {
  stagger: 0.1,
  duration: 0.5,
  y: -100,
  ease: "power2.out",
}).from(
  ".image",
  {
    duration: 1,
    y: "100%",
  },
  "-=0.5"
);

// Animate the box using GSAP
gsap.from(".one", {
    zIndex: 2,
    duration:2,
  scrollTrigger: {
    trigger: ".sectiontwo",
    pin: true, // pin the trigger element while active
    start: "top top", // when the top of the trigger hits the top of the viewport
    end: "+=500", // end after scrolling 500px beyond the start
    scrub: 1, // smooth scrubbing, takes 1 second to "catch up" to the scrollbar
    markers: true,
  },
});
Shery.textAnimate(".sectiontwo h1" /* Element to target.*/, {
    //Parameters are optional.
    style: 1,
    y: 10,
    delay: 0.1,
    duration: .1,
    ease: "cubic-bezier(0.23, 1, 0.320, 1)",
    multiplier: 0.1,
    scrollTrigger: {
        trigger: ".sectiontwo",
        pin: true, // pin the trigger element while active
        start: "top top", // when the top of the trigger hits the top of the viewport
        end: "+=500", // end after scrolling 500px beyond the start
        scrub: 1, // smooth scrubbing, takes 1 second to "catch up" to the scrollbar
        markers: true,
      },
  });

  // Wrap every letter in a span
var textWrapper = document.querySelector(' p');
textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");

anime.timeline({loop: false})
  .add({
    targets: '.left p',
    scale: [4,1],
    opacity: [0,1],
    translateZ: 0,
    easing: "easeOutExpo",
    duration: 950,
    delay:5000
  })
// You can add more animations as needed

// Play the timeline
tl.play();
console.log("hellof");
