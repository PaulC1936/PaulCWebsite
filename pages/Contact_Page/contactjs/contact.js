gsap.registerPlugin(ScrollTrigger);

window.onload = function(){
  document.getElementById("loader").style.display = "none";
  whiteOut.style.opacity='0';
}

//DISAPPEAR/REAPPEAR FUNCTIONS 
function goGiffy() {
  giffy.style.display = 'block';
  skullOne.style.display = 'none';
} 
function ungoGiffy() {
  giffy.style.display = 'none';
  skullOne.style.display = 'block';
}
/*function gosignup() {
  document.getElementById("signup").style.visibility = "visible";
} */
function ungosignup() {
  document.getElementById("signup").style.visibility = "hidden";
}

function onComplete(){
  giffy.style.display="none";
  document.body.style.backgroundImage = "none";
  document.getElementById("signup").style.visibility = "visible";
}

//THE TOP BANNER SLIDE 
gsap.to(".topbox" , {duration: 2.5, onComplete: onComplete,
  scrollTrigger: {
    trigger: ".topbox",
    start: "clamp(10% top)",
    end: "clamp(bottom 60%)",
    scrub: 0.3,
    ease: "power1.inOut(4)",
    markers: false,
    invalidateOnRefresh: true,         
    onEnter: () => goGiffy(),
    onLeaveBack: () => ungoGiffy() + backStop() + ungosignup()
  },
  xPercent: 0,
  yPercent: -100,
  
});

//DISAPPEARING BACKGROUND

function backGo () {
  document.body.style.backgroundImage = 'none'
}

function backStop () {
  if (window.matchMedia("(orientation: portrait)").matches){
  document.body.style.backgroundImage = "url(contactimg/crinkled.jpg)"
  } else {
  document.body.style.backgroundImage = "url(contactimg/crinkled2.jpg)"
  }
}

//FLY-INS-OUTS
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
  tl.to("#Mickcircle", {x:"-80vw", y: "180vh"}) 
  tl.to("#comments", {x: "-100vw", y: "200vh"}, "<")  
  tl.to("#negSpace", {x:"180vw", y: "110vh"}, "<")  




///////////////////////////////////////THE FORM SLIDE/HAND DISAPPEAR

    /*gsap.from(".signupForm",{
      x: '-100vw', ease: "power1.out", duration: 3, onComplete: onComplete,  
      scrollTrigger: {
        trigger: ".topbox",
        start: "clamp(bottom 70%)",
        end: "clamp(25% top)",
        markers: false,
      scrub: 0.3,
      smoothTouch: true,
      invalidateOnRefresh: true,
      }
      })
    
  let mm = gsap.matchMedia();
  mm.add("(width = 344px) and (height =882px)", () =>{
    gsap.from(".signupForm",{
      x: '-100vw', ease: "power1.out", duration: 3, onComplete: onComplete,  
      scrollTrigger: {
        trigger: ".topbox",
        start: "clamp(bottom 55%)",
        end: "clamp(center 25%)",
        markers: false,
      scrub: 0.3,
      smoothTouch: true,
      invalidateOnRefresh: true,
      }
      })
  })
  mm.add("(orientation: landscape)", () =>{
    gsap.from(".signupForm",{
      xPercent: -200, ease: "power1.out", duration: 3, onComplete: onComplete,  
      scrollTrigger: {
        trigger: ".topbox",
        start: "clamp(center 50%)",          
        end: "clamp(center 10%)",
        markers: false,
        pin: true,
        scrub: 0.3,
        smoothTouch: true,
        invalidateOnRefresh: true,
      }
      })
  })*/
  onresize = ScrollTrigger.refresh(true);



  
  




