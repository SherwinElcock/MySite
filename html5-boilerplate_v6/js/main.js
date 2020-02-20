gsap.registerPlugin();
// gsap.registerPlugin(TextPlugin, EasePack);
const dayNames = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
const saying = ['It\'s the day to relax, but you\'re here. Call me!', 'Monday it is...', 'Tuesday\'s are Tuesday\'s.', 'HUMP DAY!', 'It\'s almost Friday!', 'Last day, we made it!', 'You\'re here on Saturday, call me, RIGHT NOW!']
let today = new Date();
let theDay = today.getDay();
var todayName = dayNames[theDay];
let quote = saying[theDay];
// console.log(theDay)
// console.log(todayName);
// let date = today.getDate();
// document.getElementById("today-date").innerHTML = "It's " + todayName + " the " + date +"th";
// document.getElementById('saying').innerHTML = quote

// initialize ScrollMagic Controller
var controller = new ScrollMagic.Controller();

// Declare all split text variables
var hi = new SplitText('#hey', {type:"chars"});
var me = new SplitText('#my-name', {type:"chars"});
// var scrolldwn = new SplitText("#scroll-dwn", {type:"chars"});
// var thisWay = new SplitText("#this-way", {type:"chars"});
var jsdev = new SplitText('#js-developer',{type:"words"});
var toolLine = new SplitText(".tool-line", {type:"words"});
var curJob = new SplitText(".current-job", {type:"chars"});
// var freeze = new SplitText("#hold-guess", {type:"words"});
var diuHeading = new SplitText("#diu-heading", {type:"words"});
var devNote = new SplitText("#dev-note", {type:"chars"});
// var meProfR = new SplitText("#me-prof-r", {type:"words"});
var meProfL = new SplitText("#me-prof-l", {type: "words"});
var pitch = new SplitText(".pitch", {type: "words"});
var diuLink = new SplitText(".diu-link", {type: "chars"});

var loader = gsap.timeline();
loader.to(".coming-in", {duration:2, y:-100, autoAlpha:0})
.from('#my-pic', {duration: 1, y:-900, scale: 2, ease: 'bounce'}, 0.5)
.to('#my-pic', {duration: 1, rotation: 720, x: -1000, autoAlpha: 0, zIndex:0, scale:2})
.to('.loader-left', {duration:2, autoAlpha:0, x: -600})
.to('.loader-right', {duration:2, autoAlpha:0, delay: -2, x: 600})

// let myPic = document.getElementsByClassName("cartoon-me");
// myPic.remove();

// Opening timeline
var opentl = gsap.timeline();
opentl.from(hi.chars, {delay: 3, duration: 0.7, autoAlpha:0, scale:0, x:-700, rotationX:180,  ease:Back.easeOut, stagger:0.1} );
opentl.from(me.chars, {duration: 0.4, autoAlpha:0, rotationX:180,stagger:0.1, })
opentl.from(jsdev.words, {duration: 0.5, autoAlpha:0, stagger:0.3, y:100})
opentl.from(devNote.chars, {duration:0.5, stagger:0.1, autoAlpha:0})


let orgMe = "Well, that was me in that cartoon image when you got here. I have 2 years of industry experience developing websites. I specialize in developing responsive search engine friendly websites, using the latest development principles and techniques. To build, I write HTML5, CSS3/SASS and ES6 JavaScript."

let aboutMe = document.getElementById("me-prof-l");
aboutMe.innerHTML = orgMe;




var one = gsap.timeline();
one.from("#whos-this", {duration:1, autoAlpha:0, ease:"bounce"})
one.from("#open-left", {duration: 1, autoAlpha:0, x:-300, ease: "bounce"})
// one.from(meProfL.words,{duration: 1, stagger:0.3})
one.from("#open-right", {duration: 1, autoAlpha:0, x:300, ease:"bounce"})
one.from(toolLine.words, {duration:1, autoAlpha:0, scale:0, stagger:0.2})
one.from("#left-tools", {duration:1, autoAlpha:0, x:-200})
one.from("#mid-tools", {duration:1, autoAlpha:0, y:200})
one.from("#right-tools", {duration:1, autoAlpha:0, x:200})
one.from("#give-a-call", {duration:5, autoAlpha:0, stagger: 0.4})
// build scene
var scene = new ScrollMagic.Scene({
  triggerElement: ".trig-mynotes",
  duration: 500,
  triggerHook:.5
})
.setTween(one) // trigger a TweenMax.to tween
  // .gsap(opentl) // trigger a TweenMax.to tween
  // .addIndicators({name:"About Me Section (duration:300"})
  .addTo(controller);


  // Where I Work Animation
var myJob = gsap.timeline();
myJob.from(curJob.chars, {duration:1, autoAlpha:0, rotationX: 180});
myJob.from("#cur-employer", {duration:1, autoAlpha:0, x:200, ease: "power2.inOut"});
myJob.from("#secrets", {duration:1, autoAlpha:0, x:-100, color: "#FFA500"})
myJob.from(".content-repo", {duration:2, autoAlpha:0, scale: 0.01})
myJob.from(".work-site", {duration:1, autoAlpha:0, scale:3})
myJob.from(".repo-issues", {duration:1, autoAlpha:0, x:-200, stagger: .9})
myJob.from(".repo-res", {duration:3, autoAlpha:0, x:200, stagger: .9})
// build scene
var scene = new ScrollMagic.Scene({
  triggerElement: ".job-animation-trigger",
  duration: 300,
  triggerHook:.4
})
.setTween(myJob) // trigger a TweenMax.to tween
  // .gsap(opentl) // trigger a TweenMax.to tween
  // .addIndicators({name:"Vitalyst Section (duration:100"})
  .addTo(controller);



// LEARNING PORTAL SECTION
var clsSite = gsap.timeline();
clsSite.from(".learning-portal", {duration:1, autoAlpha:0});
clsSite.from(".learning-site", {duration:1, autoAlpha:0, scale:3})
clsSite.from(".cls-issues", {duration:1, autoAlpha:0, x:-300})
clsSite.from(".cls-res", {duration:1, autoAlpha: 0, stagger: 0.9})

var scene = new ScrollMagic.Scene({
  triggerElement: ".learning-portal",
  duration: 200,
  triggerHook:.4
})
.setTween(clsSite) // trigger a TweenMax.to tween
  // .gsap(opentl) // trigger a TweenMax.to tween
  // .addIndicators({name:"CLS Section (duration:100"})
  .addTo(controller);


// Where I worked section

var lastJob = gsap.timeline();
lastJob.from("#last-job", {duration:1, autoAlpha:0})
lastJob.from(".riddle-info", {duration: 1, autoAlpha:0})

var scene = new ScrollMagic.Scene({
  triggerElement: ".before-tech",
  duration: 200,
  triggerHook:.5
})
.setTween(lastJob) // trigger a TweenMax.to tween
  // .gsap(opentl) // trigger a TweenMax.to tween
  // .addIndicators({name:"CLS Section (duration:100"})
  .addTo(controller);


  // WEBSITE SECTION

var websites = gsap.timeline();
let flipPic = document.getElementById("flip-pic")
websites.from("#my-work", {duration:2, autoAlpha:0})
// websites.from("#website-note", {duration:1, opactiy:0, color: "#FFFFFF"})
websites.from(diuHeading.words, {duration:1, autoAlpha:0, stagger: 0.6})
websites.from("#diuMock", {duration: 1, autoAlpha:0, y:-300,  ease:Bounce.easeOut, delay:0.3})
websites.from("#diuc-note", {duration:1, autoAlpha:0, x:200})
websites.from(".diu-arrow", {duration:0, autoAlpha:0})
websites.from(diuLink.chars, {duration:1, stagger:0.3, autoAlpha:0})
// websites.from(".work-mock-up", {duration:1, autoAlpha:0, y:-300, stagger:0.4})
websites.from(flipPic, {duration:1, autoAlpha:0})
websites.from("#old-site", {duration:3, stagger: 0.9, autoAlpha:0, y:-400, ease:Bounce.easeOut, delay:0.3})
websites.from("#notes-mySite", {duration:1, autoAlpha:0})
var scene = new ScrollMagic.Scene({
  triggerElement: ".stuff-made",
  duration: 300,
  triggerHook:.5
})
.setTween(websites) // trigger a TweenMax.to tween
  .addTo(controller);





let closebar = document.getElementById("close-cb");
closebar.addEventListener('click', function(){
  // console.log("closing")
  gsap.to(".contact-bar", {rotationY: 360, autoAlpha: 0})
  // gsap.fromTo('.contact-btn', {duration:1, autoAlpha:0}, {x:0, autoAlpha:1})
})

let openContact = document.getElementById("show-contact");
openContact.addEventListener('click', function(){
  // console.log("footer contact")
  if(document.querySelector(".contact-bar").style == "hidden"){
  console.log("it's hidden")
  }
  else
  gsap.to('.contact-bar', {rotationX: 720, autoAlpha: 1, duration:2})
})


  Draggable.create("#slider",{
    // bounds: "#about-me",
    // type: "left"
  });
  
  // {type:"x,y", bounds:"#about-me"});

  let clseSlide = document.getElementById("close-slider");
  clseSlide.addEventListener('click', function () {
    // console.log("clicked closer");
      gsap.to("#slider", {duration:1, autoAlpha: 0, scale:0, rotationX: 360, rotationY: 360})
  })



let parallax1 = document.getElementById("opening")
document.addEventListener('scroll', function (e) {
  var offset = window.pageYOffset;
  parallax1.style.backgroundPositionY = offset * 0.7 + 'px';
});


    var leavingPitch = gsap.timeline();
    leavingPitch.from("#leave-heading", {scale: 0.5, autoAlpha:0, color: '#FF5733'})
    leavingPitch.from(".pitch", {duration:3, stagger: 1.9, autoAlpha:0, y:-400, ease:Bounce.easeOut, delay:1.3})
 
    var scene = new ScrollMagic.Scene({
      triggerElement: "#leaving-trig",
      duration: 100,
      triggerHook:.7
    })
    .setTween(leavingPitch) // trigger a TweenMax.to tween
      // .gsap(opentl) // trigger a TweenMax.to tween
      // .addIndicators({name:"Leaving Section (duration:100"})
      .addTo(controller);
