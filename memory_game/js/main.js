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
var flipCard = function(){
	var cardId = this.getAttribute('data-id');
	var mCard = cards[cardId];
	this.setAttribute('src', mCard.cardImage);
	cardsInPlay.push( mCard.rank )
}

var checkForMatch = function(){ 
	//this .setAttribute('src', cards[cardId].cardImage);
	if (cardsInPlay[0] === cardsInPlay[1]) {
  		console.log("You found a match!");
	} else {
  		console.log("Sorry, try again.");
	}
}

function createBoard(){
	for (var i = 0; i < cards.length; i++) {
		var cardElement = document.createElement('img');
		//cardElement.setAttribute('attributeName', 'attributeValue');
		cardElement.setAttribute('src', 'images/back.png');
		cardElement.setAttribute('data-id', i);
		cardElement.addEventListener('click' ,flipCard);
		document.getElementById("game-board").appendChild(cardElement);   

	}
}
createBoard()
checkForMatch();

