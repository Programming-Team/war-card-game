CLUBS = 0;
DIAMONDS = 1;
HEARTS = 2;
SPADES = 3;
cardsDealt = 0;

function initialize(){
    createDeck();
    initializeWar();
}

function createDeck(){
    cardDeck = [];

    for(var i = 0; i < 4; i++){
        for(var a = 1; a < 14; a++){
            var card = {};
            card.suit = i;
            card.value = a;
            card.src = "cardimages/" + a + "-" + card.suit + ".png";
            card.back = "back-blue-75-3.png";
            cardDeck.push(card);
        }
    }
    shuffle();
}

function dealCard(hand){
    newCard = hand.shift();
    myCard = document.createElement("img");
    myCard.src = newCard.src;
    myCard.value = newCard.value;
    if(hand == playerHand){
        document.getElementById("player_hand").appendChild(myCard);
        return newCard;
    }else if(hand == cpuHand){
        document.getElementById("cpu_hand").appendChild(myCard);
        return newCard;
    }
    cardsDealt++;
}

function shuffle(){
    shuffledList = [];
    tempList = cardDeck;
	for (var i = 0; i < 52; i++)
	{
		var randomCard = getRandomInteger(0, (51 - i));
		shuffledList.push(tempList[randomCard]);
		tempList.splice(randomCard, 1);
  }
    cardDeck = shuffledList;
}

function getRandomInteger(min, max) {
	return Math.floor(Math.random() * (max-min + 1)) + min;
}
