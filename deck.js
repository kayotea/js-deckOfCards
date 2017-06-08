function DeckConstructor(){
    var suits = ['Hearts', 'Diamonds', 'Spades', 'Clubs'];
    var nums = [1,2,3,4,5,6,7,8,9,10,11,12,13];
    this.cards = [];
    this.createDeck = function(){
        if (this.cards.length == 0){
            for (suit in suits){
                for (i in nums){
                    this.cards.push([nums[i], suits[suit]]);
                }
            }
            return this.cards;
        }
    };
}
DeckConstructor.prototype.printDeck = function(){
    for (card in this.cards){
        console.log(this.cards[card]);
    }
    return this;
}
DeckConstructor.prototype.shuffleDeck = function(){
    var m = this.cards.length;
    var temp;
    var i;
    while (m){
        i = Math.floor(Math.random()*m--);
        temp = this.cards[m];
        this.cards[i] = temp;
    }
    return this;
}
DeckConstructor.prototype.resetDeck = function(){
    var suits = ['Hearts', 'Diamonds', 'Spades', 'Clubs'];
    var nums = [1,2,3,4,5,6,7,8,9,10,11,12,13];
    var temp;
    var i = 0;
    for (suit in suits){
        for (num in nums){
            this.cards[i] = [nums[num], suits[suit]];
            i++;
        }
    }
    return this;
}
DeckConstructor.prototype.dealRandomCard = function(){
    var index = Math.floor(Math.random()*(52-1+1))+1;
    this.cards.splice(index, 1);
    return this.cards[index];
}

var deck = new DeckConstructor();
deck.createDeck();
deck.shuffleDeck();
// deck.resetDeck().printDeck();
// console.log(deck.dealRandomCard());
// deck.printDeck();

function PlayerConstructor(name){
    this.name = name;
    this.hand = [];
}
PlayerConstructor.prototype.takeCard = function(deck_object){
    this.hand.push(deck_object.dealRandomCard());
    return this;
}
PlayerConstructor.prototype.disCard = function(){
    this.hand.pop();
    return this;
}

var player1 = new PlayerConstructor('player1');
console.log(player1.hand);
player1.takeCard(deck.shuffleDeck()).takeCard(deck.shuffleDeck());
console.log(player1.hand);