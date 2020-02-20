// CHANGE THE BACKGROUND COLOR OF THE PAGE
document.body.style.background = "blue";
setTimeout(() => document.body.style.background = "", 1000);
// First Button Toggling Div Example
let firstButton = document.getElementById('firstButton');
firstButton.addEventListener('click', function(){
   firstExplanation.classList.toggle('hide');
})
// Prints out all children of document.body
for (let i = 0; i < document.body.childNodes.length; i++) {
  console.log( document.body.childNodes[i] );
}
// Getting the first child of the domNotes element
let openNotes = document.getElementById('domNotes');
console.log("Start of domNotes firstChild" + openNotes.firstChild);
// Highlght the table
let tableHighlight = document.getElementById('element');
tableHighlight.classList.add('highlightTable');

console.log(element.children);
element.children[0].classList.add('goGreen');

// Get the main div and apply background to the first child - the table
console.log("Child nodes of childNodesExample" + childNodesExample.children[0]);
var mainDiv = document.getElementById('childNodesExample');
mainDiv.classList.add('yellowish');

// nextSibling
let siblingTest = document.getElementById('element2');
console.log(siblingTest);
console.log(siblingTest.nextElementSibling);
console.log(siblingTest.previousElementSibling);
siblingTest.nextElementSibling.classList.add("goGreen");
siblingTest.previousElementSibling.classList.add("blueish");
siblingTest.parentNode.classList.add("redBorder");
siblingTest.parentNode.nextElementSibling.classList.add("purpleBorder");
// console.log("nextSibling test on Element2" + siblingTest.nextSibling);
// siblingTest.nextSibling.classList.add('goGreen');
// console.log("nextElementSibling test" + siblingTest.nextSibling);

function checkYear(){
    let question = prompt("What year is it?");
if (question < 2019){
  alert("Stuck  in time are we?");
} else if (question  == 2019) {
	alert("Yes!");
} else {
	alert("Time traveler!");
}
}

// Ternary Operator
function whatYear(){
	let guess = prompt("What year is it?")
	// console.log(guess);
	let tellYear = guess == 2019 ? alert("Nice") : alert("Come on!");
}

function rewhatYear(){
	let reguess = prompt("What year is it?")
	console.log(reguess);
	if (reguess == 2019){
		alert("Nice");
	} else{
		alert("Come On!");
	}
}

function secondTest(){
	let young = prompt("Not to be rude, but enter your 'age':");

	let greeting = (young < 25) ? alert("Hey youngster."):
		(young < 31 ) ? alert("Hey"):
		(young < 65 ) ? alert("Almost time to retire"):
		(young  == 65 ) ? alert("Retire"):
		(young > 65 && young < 95) ? alert("Enjoying retirement?"):
		(young > 95 && young < 100 ) ? alert("Whoa!"):
		alert("Please tell me your secrets");		
}











