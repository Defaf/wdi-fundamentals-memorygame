console.log("Up and running!");

var cards = ["queen", "queen", "king", "king"]
var cardsInPlay =[]

var flipCard = function(cardId){
	console.log("User flipped\t" + cards[cardId]);
	cardsInPlay.push( cards[cardId] )
}

var checkForMatch = function (){ 
	if (cardsInPlay[0] === cardsInPlay[1]) {
  		console.log("You found a match!");
	} else {
  		console.log("Sorry, try again.");
	}
}

flipCard(0)
flipCard(2)
checkForMatch();

