gsap.registerPlugin(ScrollTrigger);

window.onload = function(){
  document.getElementById("loader").style.display = "none";
};

//DISAPPEAR/REAPPEAR FUNCTIONS 
function goGiffy() {
  giffy.style.display = 'block';
  skullOne.style.display = 'none';
} 
function ungoGiffy() {
  giffy.style.display = 'none';
  skullOne.style.display = 'block';
}

function goCont() {
  container.style.visibility = 'visible';
}

function goArrow () {
  arrows.style.visibility = 'visible';
}

function ungoCont() {
  container.style.visibility = 'hidden';
}

function ungoArrow () {
  arrows.style.visibility = 'hidden';
}

//THE TOP BANNER SLIDE 
gsap.to(".topbox" , {
  scrollTrigger: {
    trigger: ".topbox",
    start: "top top",
    end: "50% top",
    duration: "1s", 
    scrub: 1,
    ease: "power4.in",
    invalidateOnRefresh: true,
    markers: false,
    onEnter: () => goGiffy() + goCont() + goArrow(),
    onLeaveBack: () => ungoGiffy() + ungoCont() + ungoArrow (),
  

  },
  xPercent: 0,
  yPercent: -100,
  
});

var tl = gsap.timeline({scrollTrigger:{
  trigger: ".topbox",
  markers: false,
  start: "clamp(5% top)",
  end: "clamp(bottom 40%)",
  ease: "power1.inOut(4)",
  scrub: 0.3,
  smoothTouch: true,
  invalidateOnRefresh: true,
  
  
}})
  tl.to("#Mickcircle", {x:"-80vw", y: "180vh"}) // start 0.2 seconds after previous tween begins
  tl.to("#comments", {x: "-100vw", y: "200vh"}, "<")  // start 1 second after previous tween ends
  tl.to("#negSpace", {x:"180vw", y: "110vh"}, "<")  // start 0.2 seconds before previous tween ends
  tl.to("#tooMuch", {x:"180vw", y: "10vh"}, "<")

//HORIZONTAL SCROLL

function backGo () {
  document.body.style.backgroundImage = 'none'
}

function backStop () {
  if (window.matchMedia("(orientation: portrait)").matches){
  document.body.style.backgroundImage = "url(galleryimg/crinkled.jpg)"
  } else {
  document.body.style.backgroundImage = "url(galleryimg/crinkled2.jpg)"
  }
}

let horizontalSections = gsap.utils.toArray(".container");

horizontalSections.forEach((container) => {
 let sections = container.querySelectorAll(".gallImg");

gsap.to(sections, {
 xPercent: -160 * (sections.length -1),
  ease: "none",
  scrollTrigger: {
    trigger: ".container",
    pin: true,
    scrub: true,
    end: `+=${container.offsetWidth}`,
    onEnter: () => backGo(),
    onLeaveBack: () => backStop (),
  //  onComplete: () => backStop(),
  }
});
})


  



