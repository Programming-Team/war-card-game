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
  alert(playerWins);
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

  playerCard = dealCard(playerHand);
  cpuCard = dealCard(cpuHand);
}

function determineWinner() {
    if(playerCard.value > cpuCard.value){
      winStatus = PLAYER;
      playerHand.push(cpuCard);
      playerHand.push(playerCard);
      playerWins++;
    } else if(cpuCard.value > playerCard.value){
      winStatus = CPU;
      cpuHand.push(playerCard);
      cpuHand.push(cpuCard);
      cpuWins++;
    } else if(cpuCard.value == playerCard.value) {
      declareWar();
      }
}

function declareWar() {
  warStatus = true;
  for(var i = 0; i < 4; i++) {
    tempPlayer = dealCard(playerHand);
    tempPlayerWar = document.createElement("img");
    tempPlayerWar.src = tempPlayer.back;

    tempCpu = dealCard(cpuHand);
    tempCpuWar = document.createElement("img");
    tempCpuWar.src = tempCpu.back;
  }

  playerWarCard = dealCard(playerHand);
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
  playerCount = playerHand.length;
  cpuCount = cpuHand.length;

  if(winStatus == PLAYER) {
    theWinner.innerHTML = "Player";
  } else if(winStatus == CPU) {
    theWinner.innerHTML = "Computer";
  }

  playerPoints.innerHTML = playerWins;
  cpuPoints.innerHTML = cpuWins;
}
