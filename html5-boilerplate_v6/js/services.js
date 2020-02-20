let navBarToggle = document.getElementById('navTog');
let navbar = document.getElementById("main-navbar");
navBarToggle.addEventListener('click', function () {
// console.log("got the button");
  navbar.classList.toggle('active');
});

let navClose = document.getElementById('navClose');
navClose.addEventListener('click', function (){
// console.log("close button");
navbar.classList.remove('active');
});