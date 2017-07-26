//var canvas = document.getElementById("canvas");
//var ctx = canvas.getContext("2d");

var themes = ["In Space", "B-ball", "Bootleg",
	"Under the sea", "Cyberspace", "Fantasy",
	"Cyberpunk", "Post-app", "Mat",
	"Steampunk", "Edgy", "Tåg",	
	"Göteborg", "Kid squids", "Under jorden",
	"Rainbow", "Pirates", "Clouds",
	"Danmark", "Detective mystery", "War",
	"Lego", "Heist", "ANIMEH!"];

var games = ["Donkey Kong", "Brick break", "Minecart sequence/Endless runner",
	"Platformer", "Pong ", "Frogger ",
	"Moonlander", "Pinball", "Bubble Bobble",
	"Duck hunt", "Mario Bros (Arcade)", "Ice climbers",
	"Battlezone", "Super sprint", "Snakes N Ladders",
	"Missile command", "Moon Patrol"];

var intervalID;
var intervalActive = false;
var button,themeText,gameText;

function setup()
{
	button = document.querySelector("button");
	themeText =document.querySelector("#theme");
	gameText = document.querySelector("#game")
	stopRandom()
//	startInterval();
}

function startInterval()
{
	intervalActive = true;
	intervalID = setInterval(randomize,25);
	button.className = "btn-danger";
	button.innerHTML = "Stop";
	themeText.classList.remove('result');
    gameText.classList.remove('result');
}

function stopRandom() {
    clearInterval(intervalID);
    button.innerHTML = "Start";
    button.className = "btn-success";
    themeText.classList.add('result');
    gameText.classList.add('result');
}

function activateButton()
{
	if(intervalActive)
	{
		stopRandom();
		intervalActive= false;
	}
	else
	{
		startInterval();
		intervalActive = true;
	}
}

function randomize()
{
	themeText.innerHTML = themes[getRandomInt(0,themes.length-1)];
	gameText.innerHTML = games[getRandomInt(0,games.length-1)]; 
}


function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}