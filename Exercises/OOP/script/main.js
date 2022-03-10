//#region Övning 1 - med både Class och Prototype
class Pets 
{
    constructor(petName, type, color)
    {
        this.petName = petName;
        this.type = type;
        this.color = color;
    }
    info()
    {
        console.log(`The name of the pet is ${this.petName} and its a ${this.type}, its' colored ${this.color}.`);
    }
}
function Päts(petName, type, color)
{
    this.petName = petName;
    this.type = type;
    this.color = color;
}
Päts.prototype.info = function()
{
    console.log(`The name of the pet is ${this.petName} and its a ${this.type}, its' colored ${this.color}.`);
}
const cat = new Pets("Lady Arbitrary", "cat", "black");
const catAgain = new Päts("Sir Breaksalot", "cat", "Ash-grey");
console.log(cat);
console.log(catAgain);
//#endregion Övning 1
//#region Övning 2 - Bankkonto
class BankAccount
{
    constructor(balance)
    {
        this.balance = balance;
    }
    deposit(amount)
    {
        this.balance += amount;
    }
    withdraw(amount)
    {
        this.balance -= amount;
    }
    showBalance()
    {
        console.log(this.balance);
    }
}
const account0 = new BankAccount(1000);
function BänkAccount(balance1)
{
    this.balance1 = balance1;
}
BänkAccount.prototype.deposit = function(amount1)
{
    this.balance1 += amount1;
}
BänkAccount.prototype.withdraw = function(amount1)
{
    this.balance1 -= amount1;
}
BänkAccount.prototype.showBalance = function()
{
    console.log(this.balance1);
}
const account1 = new BänkAccount(249);
//#endregion Övning 2
//#region Övning 3 - Spelkort
class Card
{
    constructor(suit, character, value)
    {
        this.suit = suit;
        this.character = character;
        this.value = value;
    }
}
//#endregion Övning 3 - Spelkort
//#region Övning 4 - Kortlek
class DeckOfCards
{
    constructor(deck)
    {
        deck = [];
        this.deck = deck;
        const suitArr = ['Hearts', 'Diamonds', 'Spades', 'Clubs'];
        const character = [2, 3, 4, 5, 6, 7, 8, 9, 10, 'kn', 'Q', 'K', 'A'];
        for (let j = 0; j < 4; j++) {
            for (let i = 0; i < 13; i++) {
              deck.push(new Card(suitArr[j], i + 1, character[i]));
            }
          }
          console.log(deck);
    };
    shuffle()
    {
        let currentIndex = this.deck.length, randomIndex;
        while (currentIndex != 0)
        {
            randomIndex = Math.floor(Math.random() * currentIndex);
            currentIndex--;
            [this.deck[currentIndex], this.deck[randomIndex]] =
            [this.deck[randomIndex], this.deck[currentIndex]];
        }
    }
    deal(handSize, numPlayers)
    {
        let allHands = [];
        for(let i = 0; i < numPlayers; i++)
        {
            let hand = [];
            // let totalCardsToDeal = numPlayers * handSize;
            for(let i = 0; i < handSize; i++)
            {
                hand.push( this.deck.pop() );
                // console.log(deck);
            }
            allHands.push(hand);
        }
        return allHands;
    }
}
const newDeck = new DeckOfCards();
newDeck.shuffle();
console.log(newDeck.deal(5, 3));
console.log(newDeck);
//#endregion Övning 4
//#region Övning 5 - Sten Sax Påse Hand
// class Hand 
// {
//     // constructor(rock, paper, scissors)
//     // {
//     //     this.rock = rock;
//     //     this.paper = paper;
//     //     this.scissors = scissors;
//     // }
//     chooseHand(string)
//     {
//         switch (string)
//         {
//             case "rock":
//                 result = "rock";
//                 // return result;
//                 break;
//             case "paper":
//                 result = "paper";
//                 // return result;
//                 break;
//             case "scissors":
//                 result = "scissors";
//                 // return result;
//                 break;
//             default:console.log("something went wrong");
//                 break;
//         }
//     }
//     seeResult()
//     {
//         console.log(this.chooseHand.result);
//     }
// }
// const handJävel = new Hand()
// handJävel.chooseHand("rock");
// handJävel.seeResult();
//#endregion Övning 5 - Sten Sax Påse Hand
//#region Övning 6 - Tärning
class Die
{
    constructor(sides)
    {
        this.sides = sides;
    }
    throw()
    {
        console.log(Math.ceil(Math.random() * this.sides));
    }
}
const sixDie = new Die(6);
sixDie.throw();
const fourDie = new Die(4);
fourDie.throw();
const twelveDie = new Die(12);
twelveDie.throw();
//#endregion Övning 6 - Tärning
//#region Övning 7 - Tärning 2
    // ---skipped---
//#endregion Övning 7 - Tärning 2