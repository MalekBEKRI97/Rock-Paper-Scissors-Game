var playerScoreJS=0;
var computerScoreJS=0;
const playerScore=document.getElementById('playerScore');
const computerScore=document.getElementById('computerScore');
const board=document.querySelector('.board');
const result=document.querySelector('.result > p');
const rock=document.getElementById('r');
const paper=document.getElementById('p');
const scissors=document.getElementById('s');
function compChoice(){
	const choices=['r','p','s'];
	return choices[Math.floor(Math.random()*3)];
}
function convert(l){
	if(l === 'r') return "ROCK";
	else if(l === 'p') return "PAPER";
	return "SCISSORS";
}
function playerWin(playerChoice,computerChoice){
	playerScore.innerHTML=++playerScoreJS;
	result.innerHTML=convert(playerChoice)+" for you, "+convert(computerChoice)+" for computer, you WIN &#x1F525";
	document.getElementById(playerChoice).classList.add('green');
	setTimeout(function(){document.getElementById(playerChoice).classList.remove('green')},250);
}
function userLose(playerChoice,computerChoice){
	computerScore.innerHTML=++computerScoreJS;
	result.innerHTML=convert(playerChoice)+" for you, "+convert(computerChoice)+" for computer, you LOSE 😥";
	document.getElementById(playerChoice).classList.add('red');
	setTimeout(function(){document.getElementById(playerChoice).classList.remove('red')},250);
}
function draw(playerChoice,computerChoice){
	result.innerHTML="OOPS a draw 🙈";
	document.getElementById(playerChoice).classList.add('yellow');
	setTimeout(function(){document.getElementById(playerChoice).classList.remove('yellow')},250);
}
function game(playerChoice){
	const computerChoice=compChoice();
	switch (playerChoice+computerChoice){
		case "rs":
		case "pr":
		case "sp":
			playerWin(playerChoice,computerChoice);
			break;
		case "sr":
		case "rp":
		case "ps":
			userLose(playerChoice,computerChoice);
			break;
		case "rr":
		case "pp":
		case "ss":
			draw(playerChoice,computerChoice);
			break;

	}
}
(function() {
    rock.onclick = function(){
		game('r');
	}
	paper.onclick = function(){
		game('p');
	}
	scissors.onclick = function(){
		game('s');
	}    
})();