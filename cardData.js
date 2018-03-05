CLUBS = 0;
DIAMONDS = 1;
HEARTS = 2;
SPADES = 3;
cardsDealt = 0;


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
/*function display(){
    for(var i = 0; i < deck.length; i++){

        var myCard = document.createElement("img");
        myCard.src = "cardimages/" + deck[i].cardImage;
        myDiv.appendChild(myCard);
    }
}*/
function dealCard(deck){
    newCard = cardDeck.shift();
    myCard = document.createElement("img");
    myCard.src = newCard.src;
    
    document.getElementById("table").appendChild(myCard);
    myCard.addEventListener("click", function(){returnCard(this);});
    cardsDealt++;
}   
function shuffle(){
    shuffledList = [];
	for (var i = 0; i < 52; i++)
	{
		randomCard = getRandomInteger(0, 51 - i);
		shuffledList.push(tempList[randomCard]);
		tempList.slice(randomCard, 1);
	}
	tempList = cardList;
}

function returnCard(placedCard){
    document.getElementById("table").removeChild(placedCard);
    cardDeck.push(placedCard);
    cardsDealt--;
}

function getRandomInteger(min, max) {
	return Math.floor(Math.random() * (max-min + 1)) + min;
} 
