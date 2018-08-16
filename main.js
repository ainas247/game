window.addEventListener('load', init);

const levels = {

	welcome: 0,
	easy: 8,
	medium: 5,
	semihard: 3,
	hard: 2
};

let currentLevel = levels.welcome;
let time = currentLevel;
let score = 0;
let nowPlaying;


let easy = document.getElementById('easy');
let medium = document.getElementById('medium');
let hard = document.getElementById('hard');
let semihard = document.getElementById('mini-hard');
let img1 = document.getElementById('img1');
let img2 = document.getElementById('img2');
let seconds = document.getElementById('seconds');
let demsg = document.querySelector('#demsg');
let typing = document.getElementById('typing');
let message = document.getElementById('message');
let timeleft = document.getElementById('timeleft');
let scores = document.getElementById('score');

let words =  ['concert',
'conclude',
'conclusion',
'concrete',
'peace',
'peak',
'peer',
'penalty',
'people',
'pepper',
'per',
'perceive',
'percentage',
'perception',
'perfect',
'perfectly',
'perform',
'performance',
'perhaps',
'period',
'permanent',
'permissio',
'permit',
'person',
'personal',
'personality',
'personally',
'personnel',
'perspective',
'persuade',
'condition',
'conduct',
'conference',
'confidence',
'confident',
'confirm',
'conflict',
'confront',
'differ',
'difference',
'different',
'differently',
'difficult',
'difficulty',
'dig',
'emerge',
'emergency',
'emission',
'emotion',
'emotional',
'emphasis',
'emphasize',
'employ',
'employee',
'employer',
'employment',
'empty',
'enable',
'encounter',
'digital',
'dimension',
'dining',
'dinner',
'direct',
'direction',
'directly',
'director',
'confusion',
'Congress',
'congressional',
'connect',
'connection',
'consciousness',
'consensus',
'consequence',
'conservative',
'consider',
'considerable',
'consideration',
'consist',
'consistent',
'constant',
'constantly'];


easy.addEventListener('click', easygame);

function easygame() {
	currentLevel = levels.easy;
	time = currentLevel;
	seconds.innerHTML = "<span style ='color: black;'> "+ currentLevel +" seconds, This is EASY LEVEL</span><span style ='color:white'>HOW FAR CAN YOU GO?</span>";
	timeleft.innerHTML = "<span style = 'color: black'> " + time + " </span>";

}


medium.addEventListener('click', mediumgame);

function mediumgame() {
	currentLevel = levels.medium;
	time = currentLevel;
	seconds.innerHTML = "<span style ='color: black;'> "+ currentLevel +" seconds, This is MEDIUM LEVEL </span></span><span style ='color:white'>HOW FAR CAN YOU GO?</span>";
	timeleft.innerHTML = "<span style = 'color: black'> " + time + " </span>";

}

semihard.addEventListener('click', semihardgame);

	function semihardgame(){
	
	currentLevel = levels.semihard;
	time = currentLevel;
	seconds.innerHTML = "<span style ='color: black;'> "+ currentLevel +" seconds, This is HARD LEVEL </span><span style ='color:white'>HOW FAR CAN YOU GO?</span>";
	timeleft.innerHTML = "<span style = 'color: black'> " + time + " </span>";
} 



hard.addEventListener('click', hardgame);

function hardgame() {
	currentLevel = levels.hard;
	time = currentLevel;
	seconds.innerHTML = "<span style ='color: black;'> "+ currentLevel +" seconds, This is HARD LEVEL </span><span style ='color:white'>HOW FAR CAN YOU GO?</span>";
	timeleft.innerHTML = "<span style = 'color: black'> " + time + " </span>";

}






//Load words from array
function init() {
	seconds.innerHTML = currentLevel;
	img1.style.display = "none";
	img2.style.display = "none";
	showWords(words);
	typing.addEventListener('input', match);
	setInterval(counter, 1000);
	setInterval(gameStatus, 50);

}

//start match

function match() {
	if (matchwords()) {
		time = currentLevel + 1;
		showWords(words);
		typing.value="";
		score++;

	}

	if (score === -1) {
		scores.innerHTML = 0;
	}else{

	scores.innerHTML = score;

  }
}

//match the current word
function matchwords() {

	if (typing.value === demsg.innerHTML) {

		message.innerHTML = "Correct";
		img1.style.display = "block";
		img2.style.display = "none";
		return true;
	}
		else{
			message.innerHTML = "";
			return false;
		}
	}


function showWords(words) {
	const rands = Math.floor(Math.random() * words.length);

	demsg.innerHTML = words[rands];
	
}


function counter() {
	if (time > 0) {
		time--;
	}


timeleft.innerHTML = "<span style = 'color: black'> " + time + " </span>";
}

function gameStatus() {
	if (time === 0) {

		message.innerHTML = "<span style = 'color: black'>Game Over!!! Try Again </span>";
		img2.style.display = "block";
		img1.style.display = "none";

		score = -1;
	}
} 