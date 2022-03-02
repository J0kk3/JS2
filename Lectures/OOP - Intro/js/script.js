//#region  cars0
const string = "Det här är lite text";

console.log(Object.getPrototypeOf(string));

const array = [4, 3, 32, 57, 3];
console.log(array);
console.log(Object.getPrototypeOf(array));

function Car(model, color, engine, hp)
{
    this.model = model;
    this.color = color;
    this.engine = engine;
    this.hp = hp;
}
Car.prototype.drive = function()
{
    console.log(`${this.model} is driving with ${this.hp}hp.`);
}
Car.prototype.honk = function()
{
    console.log("Honk Honk!");
}
Car.prototype.getColor = function()
{
    return this.color;
}

const bmw = new Car("bmw", "red", "v8", 480);
bmw.drive();
bmw.honk();
console.log(bmw.getColor());

const volvo = new Car("volvo", "hotpink", "v5", 270);
volvo.drive();
volvo.honk();
console.log(volvo.getColor());
//#endregion cars0

console.log("_______________________________");
//#region cars1
console.log(bmw);
console.log(volvo);
console.log(Car);

bmw.year = 1987;
console.log(bmw);

Car.seats = 5; //Följer inte med
Car.prototype.windows = "electric"; //Följer med
console.log(volvo);
bmw.windows = "manual";
console.log (bmw.windows);
console.log(volvo.windows);
console.log(bmw);
//#endregion cars1

//#region person

function Person(characterTrait, hairColor, name)
{
    this.characterTrait = characterTrait;
    this.hairColor = hairColor;
    this.name = name;
}
Person.prototype.intro = function()
{
    console.log(`Hello, my name is ${this.name}.`);
}
Person.prototype.datingIntro = function()
{
    console.log(`I'm ${this.name}, my hair is ${this.hairColor} and my character trait is ${this.characterTrait}!`);
}
const jocke = new Person("kind", "brown", "Jocke");
jocke.intro();
jocke.datingIntro();

const link = new Person("adventorous", "brown", "Link");
link.intro();
link.datingIntro();
//#endregion person

console.log("____________________________________");

//#region classIntro
class Animal
{
    constructor(type, sound)
    {
        this.type = type;
        this.sound = sound;
    }
    //Lägger till en metod till prototypen
    makeSound()
    {
        const str = `The ${this.type} says ${this.sound}, ${this.sound}!`
    }
}

const gorilla = new Animal("gorilla", "AAH");
const dog = new Animal ("dog", "Woof");

class Horse
{
    constructor(model, color, hairColor, hp)
    {
        this.model = model;
        this.color = color;
        this.hairColor = hairColor;
        this.hp = hp;
    }
    gallop()
    {
        console.log(`I'm galloping with ${this.hp} hp!`)
    }
    neigh()
    {
        console.log("Neeeeeigh!");
    }
    getColor()
    {
        return this.color;
    }
}
const arab = new Horse("Arab", "white", "black", 2);
console.log(arab);
console.log(Horse);
//#endregion classIntro
console.log("____________________________________");
//#region moreClasses
class Plant
{
    constructor(type, color, blooming)
    {
        this.type = type;
        this.color = color;
        this.blooming = blooming;
    }
    presentation()
    {
        console.log(`Hi! I'm ${this.type}`);
        if(this.blooming)
        {
            console.log("I need water!");
        }
        else
        {
            console.log("I need sun!");
        }
    }
}
const venusFlytrap = new Plant("Venus Flytrap", "green", false);
console.log(venusFlytrap);
venusFlytrap.presentation();

const rose = new Plant("Rose", "black", true);
console.log(rose);
rose.presentation();
//#endregion moreClasses