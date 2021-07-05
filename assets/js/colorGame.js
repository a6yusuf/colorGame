var numSquares = 6;
var colors = [];
var pickedColor;
var squares = document.querySelectorAll(".square");
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.querySelector("#message");
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#reset");
var modeButtons = document.querySelectorAll(".mode");

init();

function init(){
	setUpModeButton();
	setUpSquares();
	reset();
}

function setUpModeButton(){
	for (var i=0; i< modeButtons.length; i++){
	modeButtons[i].addEventListener("click", function(){
		modeButtons[0].classList.remove("selected");
		modeButtons[1].classList.remove("selected");
		this.classList.add("selected");
		this.textContent === "Easy" ? numSquares = 3 : numSquares = 6; 
		reset()
	});
	}
}

function setUpSquares(){
	for ( var i=0; i< squares.length; i++){
	//Add click listeners to squares
	squares[i].addEventListener("click", function(){
		//Grab color of clicked square
		var clickedColor = this.style.background.slice(0, pickedColor.length);
		// compare color to pickedColor
		if (clickedColor == pickedColor){
			messageDisplay.textContent = "Correct!";
			resetButton.textContent = "Play Again?";
			changeColors(clickedColor);
			h1.style.background = clickedColor;
		}else {
			this.style.background = "#232323";
			messageDisplay.textContent = "Try Again!"
		}
	});
}
}
function reset(){
	colors = generateRandomColors(numSquares);
	//Pick a new random color from array
	pickedColor = pickColor();
	//Change colorDisplay to match picked color
	colorDisplay.textContent = pickedColor;
	resetButton.textContent = "New Colors";
	messageDisplay.textContent = "";
	//change colors of squares
	for (var i=0; i< squares.length; i++){
		if(colors[i]){
			squares[i].style.display = "block";
			squares[i].style.background = colors[i];
		}else{
			squares[i].style.display = "none";
		}
	}
	h1.style.background = "steelblue";
}

resetButton.addEventListener("click", function(){
	reset();
});

function changeColors(color){
	//Loop through all squares
	for (var i=0; i<squares.length; i++){
		//change each color to match given color
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
	//add num random colors to array
	for (var i=0; i<num; i++){
		//get random color and push into arr
		arr.push(randomColor());
	}
	//return arr
	return arr;
}

function randomColor(){
	//pick a red
	var r = Math.floor(Math.random() * 256)
	//pick a green
	var g = Math.floor(Math.random() * 256)
	//pick a blue
	var b = Math.floor(Math.random() * 256)
	//"rgb(r, g, b)"
	return "rgb(" + r + ", " + g + ", " + b + ")";
}