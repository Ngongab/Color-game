var numSquares = 6;
var colors =[];
var pickedColor; 
var squares = document.querySelectorAll(".square");
var colorDisplay = document.querySelector("#colorDisplay");
var messageDisplay = document.querySelector("#message");
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#reset");
var easyBtn = document.querySelector("#easyBtn");
var hardBtn = document.querySelector("#hardBtn");
var modeButtons = document.querySelectorAll(".mode");

init();

function init(){
	setUpModeButtons();
	setUpSquares();
	reset();
}

function setUpModeButtons(){
		//mode buttons event listeners
	for (var i = 0; i < modeButtons.length; i++) {
		modeButtons[i].addEventListener("click", function(){
		modeButtons[0].classList.remove("selected");
		modeButtons[1].classList.remove("selected");
		this.classList.add("selected");
		this.textContent === "Easy" ? numSquares = 3: numSquares = 6;		
		reset();
		//figure how many squares to show
		//pick new colors
		//pick a new pickedColor
		//update page to reflect new changes
		});
	}
}

function setUpSquares(){
	//add a color to each square
		for (var i = 0; i < squares.length; i++) {
			//add click listeners to each square
			squares[i].addEventListener("click", function(){
			// grab color of picked square
			var clickedColor = this.style.background;
			
			if (clickedColor === pickedColor) {
				message.textContent = "Correct";
				resetButton.textContent = "Play Again ?";
				changeColors(clickedColor);
				h1.style.background = clickedColor;
			} else {
				this.style.background = "#232323";
				message.textContent = "Wrong";
			}
 		});
	}
}

function reset(){
	//generate all new colors
	colors = generateRandomColors(numSquares);
	//pick random color from array
	pickedColor = pickColor();
	//change colorDisplay to match picked color
	colorDisplay.textContent = pickedColor;
	resetButton.textContent = "New Colors";

	message.textContent = "";
	//change the colors of the squares
	for (var i = 0; i < squares.length; i++){
		if (colors[i]) {
			squares[i].style.display = "block";
			squares[i].style.background = colors[i];
		} else {
			squares[i].style.display = "none";
		}		
	}
	h1.style.background = "steelblue";
}

resetButton.addEventListener("click", function(){
	reset();
});


function changeColors(color){
	for (var i = 0; i < squares.length; i++) {
		squares[i].style.background = color;
	}
}

function pickColor(){
	var random = Math.floor(Math.random() * colors.length);
	return colors[random];
}

function generateRandomColors(num){
	//make an array
	var arr = [];
	//add num random colors into array
	for (var i = 0; i < num; i++) {
		arr.push(randomColor());
	//get random color in push into array
		
	}
	//return that array
	return arr;
}

function randomColor(){
	//pick red from 0 - 255
	var r = Math.floor(Math.random() * 256);
	//pick green from 0 - 255
	var g = Math.floor(Math.random() * 256);
	//pick blue from 0 - 255
	var b = Math.floor(Math.random() * 256);

	return "rgb(" + r + ", " + g + ", " + b + ")";
}