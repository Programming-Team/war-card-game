CLUBS = 0;
DIAMONDS = 1;
HEARTS = 2;
SPADES = 3;


function createDeck(){
    cardDeck = [];
    
    for(var i = 0; i < 4; i++){
        for(var a = 1; a < 14; a++){
            card = {};
            card.suit = i;
            card.value = a;
            card.img = "cardimages/" + a + "-" + card.suit + ".png";
            card.back = "back-blue-75-3.png";
            card.addEventListener(“click”, function(){returnCard(this);});
            cardDeck.push(card);
        }
    }
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
    myCard.src = newCard.img;
    document.getElementById("table").appendChild(myCard);
    
    return deck.splice(0,1)[0];
    
}   
function shuffle(){

}

function returnCard(placedCard){
    

}