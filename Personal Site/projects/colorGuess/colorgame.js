// To give each tile a random color
var colors = makeRandomColors(numOfSquares);
var numOfSquares = 6;
var squares = document.querySelectorAll(".square");
var pickedColor = pickColor();
var colorDisplay = document.querySelector("#colorDisplay");
var messageDisplay = document.querySelector("#message");
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#reset");
var easyBtn = document.querySelector("#easyBtn");
var hardBtn = document.querySelector("#hardBtn");

easyBtn.addEventListener("click", function(){
	hardBtn.classList.remove("selected");
	easyBtn.classList.add("selected");
	numOfSquares = 3;
	colors = makeRandomColors(numOfSquares);
	pickedColor = pickColor();
	colorDisplay.textContent = pickedColor;
	for (var  i =0; i <squares.length; i++){
		if(colors[i]){
			squares[i].style.backgroundColor = colors[i];
		} else{
			squares[i].style.display = "none";
		}
	}
});

hardBtn.addEventListener("click", function(){
	hardBtn.classList.add("selected");
	easyBtn.classList.remove("selected");
	numOfSquares = 6;
	colors = makeRandomColors(numOfSquares);
	pickedColor = pickColor();
	colorDisplay.textContent = pickedColor;
	for (var  i =0; i <squares.length; i++){
			squares[i].style.backgroundColor = colors[i];
			squares[i].style.display = "block";
		}
});
	
resetButton.addEventListener("click", function(){
	// Generate all new colors
	colors = makeRandomColors(numOfSquares);
	// Pick new random color for array
	pickedColor=pickColor();
	// change color display to match picked colors
	colorDisplay.textContent = pickedColor;
	this.textContent = "New Colors";
	messageDisplay.textContent = "";
	// Change colors of squares
	for(var i = 0; i < squares.length; i++){
		squares[i].style.backgroundColor = colors[i];
	}
	h1.style.backgroundColor="#a9a9a9";
})

colorDisplay.textContent = pickedColor;

for(var i=0; i < squares.length; i++){
	// Add initial colors to squares
	squares[i].style.backgroundColor = colors[i];

	// Add click listeners to squares
	squares[i].addEventListener("click", function(){
		// Get color of clicked square
		var clickedColor = (this.style.backgroundColor);
		// Compare color to pickedColor
		if(clickedColor === pickedColor){
			messageDisplay.textContent="Good Job!";
			resetButton.textContent = "Play Again?"
// Calling the changeColors function
			changeColors(clickedColor);
			h1.style.backgroundColor = clickedColor;
		}
		else{
			this.style.backgroundColor="#a9a9a9";
			messageDisplay.textContent="Try Again";
		}
	});
}

function changeColors(color){
	// Loop through all square - match them to right one
	for (var i = 0; i < squares.length; i++){
		// change each color to match right one
		squares[i].style.backgroundColor = color;
	}
}


function pickColor(){
	// Pick a random number 
	var random = Math.floor(Math.random() *  colors.length);
	return colors[random];
}


function makeRandomColors(num){
	// Make an array add num random colors to array and return
	// Make array
	var arr = [];
	// add num random colors
	for (var i = 0; i < num; i ++){
// get the random color and put into array
		arr.push(randomColor());
		

	}

	return arr;
}


function randomColor(){
	// Pick a red from 0 - 255
	var r = Math.floor(Math.random() * 256);
	// Pick a green from 0 - 255
	var g = Math.floor(Math.random() * 256);
	// Pick a blue from 0 - 255
	var b = Math.floor(Math.random() * 256);
	return	"rgb(" + r + ", " + g + ", " + b + ")";
}