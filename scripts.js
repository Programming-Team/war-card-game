function initializeWar(){
    PLAYER = 0;
    CPU = 1;
    NONE = 2;

    playerCard = {};
    cpuCard = {};

    playerWarCards = [];
    cpuWarCards =[];

    playerHand = [];
    cpuHand = [];

    playerCount = playerHand.length;
    cpuCount = cpuHand.length;

    warStatus = false;

    winStatus = NONE;
    theWinner = document.getElementById("the_winner");

    playerWins = 0;
    cpuWins = 0;
    playerPoints = document.getElementById("player_points");
    cpuPoints = document.getElementById("cpu_points");

    splitDeck();
    turn = 0;
}

function playWar() {
  dealRound(); 
  determineWinner();
  display();
}
/*function setUpRound(){
    if(turn == 0){
        return;
    }else{
        document.getElementById("player_hand").removeChild(myCard);
        document.getElementById("cpu_hand").removeChild(myCard);
    }
    
    turn++;
}*/

function dealRound() {	

	
}

function determineWinner() {
  if(playerCard.value > cpuCard.value){
    winStatus = PLAYER;
    playerHand.push(cpuCard);
    playerWins++;
    warStatus = false;
  } else if(cpuCard.value > playerCard.value){
    winStatus = CPU;
    cpuHand.push(playerCard);
    cpuWins++;
    warStatus = false;
  } else if(cpuCard.value == playerCard.value) {
    declareWar();
    }
}

function declareWar() {
  warStatus = true;

  playerWarCards.push(dealCard(playerHand));
  playerWarCards.push(dealCard(playerHand));
  playerWarCards.push(dealCard(playerHand));
  playerWarCard = dealCard(playerHand);

  cpuWarCards.push(dealCard(cpuHand));
  cpuWarCards.push(dealCard(cpuHand));
  cpuWarCards.push(dealCard(cpuHand));
  cpuWarCard = dealCard(cpuHand);
  declareWarWinner();
}

function declareWarWinner(){
  if(playerWarCard > cpuWarCard){
    winStatus = PLAYER;
    playerHand = playerHand.concat(playerWarCards);
    playerHand.push(playerWarCard);
    playerHand = playerHand.concat(cpuWarCards);
    playerHand.push(cpuWarCard);
    playerWins++;
  }else{
    winStatus = CPU;
    cpuHand = cpuHand.concat(cpuWarCards);
    cpuHand.push(cpuWarCard);
    cpuHand = cpuHand.concat(playerWarCards);
    cpuHand.push(playerWarCard);
    cpuWins++;
  }
  warStatus = false;
}

function splitDeck(){
  playerHand = shuffledList.splice(0, 26);
  cpuHand = shuffledList;
}

function display() {
  playerCount = playerhand.length;
  cpuCount = playerHand.length;

  if(winStatus == PLAYER) {
    theWinner.innerHTML = "Player";
  } else if(winStatus == CPU) {
    theWinner.innerHTML = "Computer";
  }

  playerPoints.innerHTML = playerWins;
  cpuPoints.innerHTML = cpuWins;
}
