//alert("The neighbours!");
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
//var game = document.querySelector("#game");
//var theme = document.querySelector("h1");
function randomize()
{
	document.querySelector("#theme").innerHTML = themes[getRandomInt(0,themes.length-1)];
	document.querySelector("#game").innerHTML = games[getRandomInt(0,games.length-1)];
}

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}