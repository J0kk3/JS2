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
class Cards
{
    constructor(suit, character, value)
    {
        this.suit = suit;
        this.character = character;
        this.value = value;
    }
}
//endregion Övning 3 - Spelkort
//region Övning 4 - Kortlek
class DeckOfCards
{
    constructor(suit, character, value)
    {
        this.suit = suit,
        this.character = character,
        this.value = value
    }
}
//endregion Övning 4
//region Övning 5 - Sten Sax Påse Hand

//endregion Övning 5 - Sten Sax Påse Hand
//region Övning 6 - Tärning

//endregion Övning 6 - Tärning
//region Övning 7 - Tärning 2

//endregion Övning 7 - Tärning 2