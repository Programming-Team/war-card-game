function initialize(){
    createDeck();
    splitDeck();
}

function dealHands(){
    
}
function splitDeck(){
    for(var i = 0;i < 26; i++){
        dealCard("player");
        dealCard("cpu");
    }
}