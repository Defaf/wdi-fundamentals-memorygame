console.log("Up and running!");

var cardsInPlay =[]
var cards = [{
	rank:"queen",
	suit:"hearts",
	cardImage: "images/queen-of-hearts.png"
	},
	{
	rank:"queen",
	suit:"diamonds",
	cardImage: "images/queen-of-diamonds.png"
	},
	{
	rank:"king",
	suit:"hearts",
	cardImage: "images/king-of-hearts.png"
	},
	{
	rank:"king",
	suit:"diamonds",
	cardImage: "images/king-of-diamonds.png"
	}
];
var flipCard = function(cardId){
	console.log("User flipped\t" + cards[cardId].rank);
	console.log("User flipped\t" + cards[cardId].cardImage);
	console.log("User flipped\t" + cards[cardId].suit);
	cardsInPlay.push( cards[cardId].rank )
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

