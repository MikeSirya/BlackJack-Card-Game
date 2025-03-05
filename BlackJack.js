console.log("script.js loaded")
let blackJack = {
  suits: ['hearts', 'clubs', 'diamonds', 'spades'],
  cards: ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'jack', 'king', 'queen', 'ace'],

  deck: [],
  formDeck: function() {
    for (i = 0; i < this.suits.length; i++) {
      for (j = 0; j < this.cards.length; j++) {
        this.deck.push(this.cards[j] + '_of_' + this.suits[i]);
      }
    }
    return this.deck;
  }
  //creates deck
}


function shuffleCards(deck) {
  for (i = 0; i < deck.length; i++) {
    let tempCard = deck[i];
    let randomIndex = Math.floor(Math.random() * 52);
    deck[i] = deck[randomIndex];
    deck[randomIndex] = tempCard;
  }
  return deck;
  //shuffles the cards
}

let newDeck = shuffleCards(blackJack.formDeck());
//stores the deck

let playerHand = [];

document.getElementById("ContinueGame").disabled = true;
document.getElementById("stopGame").disabled = true;
let playerCards = document.getElementById('PlayerCards');

function dealCard() {
  const randomIndex = Math.floor(Math.random() * newDeck.length);
  const randomIndex2 = Math.floor(Math.random() * newDeck.length);
  const dealtCard1 = newDeck[randomIndex];
  const dealtCard2 = newDeck[randomIndex2];
  newDeck.splice(dealtCard1, 1);
  newDeck.splice(dealtCard2, 1);
  playerHand.push(dealtCard1);
  playerHand.push(dealtCard2);
  let cardImg = document.createElement("img");
  let cardImg2 = document.createElement("img");
  cardImg.src = "img/" + dealtCard1 + ".png";
  cardImg2.src = "img/" + dealtCard2 + ".png";
  document.getElementById("PlayerCards").append(cardImg);
  document.getElementById("PlayerCards").append(cardImg2);
  if (playerHand) {
    document.getElementById("StartGame").disabled = true;
    document.getElementById("ContinueGame").disabled = false;
    document.getElementById("stopGame").disabled = false;
}
sumOfscore()
//deals cards to the player
  }


let score = 0;
let scoreList = [];

function scores(play) {

  if (play.includes('jack') || play.includes('king') || play.includes('queen')){
    score = 10;
  } else if (play.includes('ace')) {
    score = 1;
  } else if (play.includes('2')) {
    score = 2;
  } else if (play.includes('3')) {
    score = 3;
  } else if (play.includes('4')) {
    score = 4;
  } else if (play.includes('5')) {
    score = 5;
  } else if (play.includes('6')) {
    score = 6;
  } else if (play.includes('7')) {
    score = 7;
  } else if (play.includes('8')) {
    score = 8;
  } else if (play.includes('9')) {
    score = 9;
  } else if (play.includes('10')) {
    score = 10;
  }
  scoreList.push(score);
  return scoreList;
  //creates a scorelist
}

function storeScores() {
  for (i = 0; i < playerHand.length; i++) {
    scores(playerHand[i]);
  }
  //calls the scores function that stores the scorelist
}

let scoreSum = 0 ;

let PlayerResult = document.getElementById("Scores");
function sumOfscore() {
  scoreList = [];
  storeScores()
  scoreSum = 0;
  for (i = 0; i < scoreList.length; i++) {
    scoreSum = scoreSum + scoreList[i];
  }
PlayerResult.innerText = `${scoreSum}`;
if (scoreSum>21){
  GameLost();
}
//calculates the scores stored in the scorelist and calls other functions if certain conditions are fulfilled
}



function continueGame() {
  collector = [];
  const randomIndex3 = Math.floor(Math.random() * newDeck.length);
  const dealtCard3 = newDeck[randomIndex3];
  newDeck.splice(dealtCard3, 1);
  playerHand.push(dealtCard3);
  let cardImg3 = document.createElement("img");
  cardImg3.src = "img/" + dealtCard3 + ".png";
  document.getElementById("PlayerCards").append(cardImg3);
  return playerHand
  //deals another card to the player
}
  

let collectorPc = [];
let computerHand = [];

let pcCards = document.getElementById("ComputerCards")
function pcCard() {
  const randomIndex4 = Math.floor(Math.random() * newDeck.length);
  const randomIndex5 = Math.floor(Math.random() * newDeck.length);
  const computerCard1 = newDeck[randomIndex4];
  const computerCard2 = newDeck[randomIndex5];
  newDeck.splice(computerCard1, 1);
  newDeck.splice(computerCard2, 1);
  computerHand.push(computerCard1);
  computerHand.push(computerCard2);
  let pcCardImg = document.createElement("img");
  let pcCardImg2 = document.createElement("img");
  pcCardImg.src = "img/" + computerCard1 + ".png";
  pcCardImg2.src = "img/" + computerCard2 + ".png";
  pcCards.append(pcCardImg);
  pcCards.append(pcCardImg2);
  sumOfscorePc();
  //deals cards to the computer.
}


function continueGamePc() {
  collectorPc = [];
  const randomIndex6 = Math.floor(Math.random() * newDeck.length);
  const computerCard3 = newDeck[randomIndex6];
  newDeck.splice(computerCard3, 1);
  computerHand.push(computerCard3);
  let pcCardImg3 = document.createElement("img");
  pcCardImg3.src = "img/" + computerCard3 + ".png";
  pcCards.append(pcCardImg3);
  sumOfscorePc();
  //deals additional cards to the pc
}



let scoreListPc = [];

function scoresPc(play) {

  if (play.includes('jack') || play.includes('king') || play.includes('queen')) {
    score = 10;
  } else if (play.includes('ace')) {
    score = 1;
  } else if (play.includes('2')) {
    score = 2;
  } else if (play.includes('3')) {
    score = 3;
  } else if (play.includes('4')) {
    score = 4;
  } else if (play.includes('5')) {
    score = 5;
  } else if (play.includes('6')) {
    score = 6;
  } else if (play.includes('7')) {
    score = 7;
  } else if (play.includes('8')) {
    score = 8;
  } else if (play.includes('9')) {
    score = 9;
  } else if (play.includes('10')) {
    score = 10;
  }
  scoreListPc.push(score);
  return scoreListPc;
  //creates a scorelist for the computer
}




function storeScoresPc() {
  for (i = 0; i < computerHand.length; i++) {
    scoresPc(computerHand[i]);
    //calls the function that creates the scorelist for the computer
  }
}


let scoreSumPc = 0;
let computerResult = document.getElementById("pcScores");

function sumOfscorePc() {
  scoreListPc = [];
  storeScoresPc()
  scoreSumPc = 0;
  for (i = 0; i < scoreListPc.length; i++) {
    scoreSumPc = scoreSumPc + scoreListPc[i];
  }
  computerResult.innerText = `${scoreSumPc}`;
if (scoreSumPc>21){
    GameLostPc();
  }
  else if(scoreSumPc>scoreSum || scoreSumPc == scoreSum){
    PcWon();
    //calculates the scorelist for the computer and calls other functions if other condtions are fullfilled
}
}
let Result = document.getElementById("Announcements");
function GameLost(){
Result.innerText = `Bust!! Sorry :( !! You have lost, Your score ${scoreSum} is above 21`;
document.getElementById("ContinueGame").disabled = true;
document.getElementById("stopGame").disabled = true;
document.getElementById("StartGame").disabled = true;
//Announces the loss of the player if he busts.
}
function GameLostPc(){
  Result.innerText = `CONGRATULATIONS PLAYER!! YOU WIN!!\n THE COMPUTER HAS BUST/LOST!!!\n COMPUTER SCORE ${scoreSumPc}`
  document.getElementById("stopGame").disabled = true;
  document.getElementById("StartGame").disabled = true;
  document.getElementById("ContinueGame").disabled = true;
  //Announces the loss of the pc if it busts
}

function PcWon(){
  Result.innerText = `SORRY PLAYER !! THE COMPUTER HAS WON.\n COMPUTER SCORE  ${scoreSumPc}. YOUR SCORE ${scoreSum}. BETTER LUCK NEXT TIME.`
  document.getElementById("stopGame").disabled = true;
  document.getElementById("StartGame").disabled = true;
  document.getElementById("ContinueGame").disabled = true;
  //Announces pc win
}
  


function mouseContinue(){
if(scoreSum <= 21) {
continueGame();
sumOfscore();
}
//deals more cards to the player if he choses to continue
}

function mouseStop(){
Result.innerText = `Your final score is ${scoreSum}.\ COMPUTER'S TURN BEGINS!!`;
pcCard()
while(scoreSumPc < 21 && scoreSumPc < scoreSum){
continueGamePc();
//stops the players turn if he decides to stop and begins the dealing cards to the computer
}
}
function restartGame(){
  playerCards.innerHTML = '';
  pcCards.innerHTML = '';
  computerResult.innerHTML = '0';
  PlayerResult.innerHTML = '0';
  Result.innerHTML = '';
  playerHand = [];
  computerHand = [];
  newDeck = shuffleCards(blackJack.formDeck());
  document.getElementById("StartGame").disabled = false;
  //restarts the game if the player wishes to start playing again!!
}

