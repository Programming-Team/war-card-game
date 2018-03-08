function initializeWar(){
    PLAYER = 0;
    CPU = 1;
    NONE = 2;

    playerCard = {};
    cpuCard = {};

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

}

function playWar() {
  dealCard(playerHand);
  dealCard(cpuHand);
  determineCards();
  display();
}

function determineCards() {
  if(playerCard.value > cpuCard.value){
    winStatus = PLAYER;
    warStatus = false;
  } else if(cpuCard.value > playerCard.value){
    winStatus = CPU;
    warStatus = false;
  } else{
    declareWar();
}


function declareWar() {
  warStatus = true;

  dealCard(playerHand);
  dealCard(playerHand);
  dealCard(playerHand);
  playerWarCard = dealCard(playerHand);

  dealCard(cpuHand);
  dealCard(cpuHand);
  dealCard(cpuHand);
  cpuWarCard = dealCard(cpuHand);
  declareWarWinner();
}

function declareWarWinner(){
  if(playerWarCard > cpuWarCard){
    winStatus = PLAYER;
    playerWins++;
  }else{
    winStatus = CPU;
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
