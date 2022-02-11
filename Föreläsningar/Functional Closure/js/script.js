function sayHello(name){
    const greeting = `Hello, ${name}`;
 
    function say(){
        console.log(greeting);
    };
    return say;
}

const sayHelloToEveryone = sayHello('Everyone');
const sayHelloToTheMoon = sayHello('the Moon');
 
sayHelloToEveryone(); //’Hello, Everyone’
sayHelloToTheMoon(); //'Hello, the moon'

console.log(sayHelloToEveryone);
console.log(sayHelloToTheMoon);

console.log("___________Counter med closure____________");

function count()
{
    let counter = 0; //Är en del av "Closure"

    function countUp()
    {
        return ++counter;
    }
    return countUp;
}
const myCounter = count();

console.log(myCounter); //Returnerar: function countUp();

console.log(myCounter()); //Returnerar: 1
console.log(myCounter()); //Returnerar: 2 (för att counter ökar på)

const mySecondCounter = count();
console.log(mySecondCounter()); //Returnerar: 1

console.log(myCounter()); //Returnerar: 6

const counter0 = count();
const counter1 = count();

document.querySelector("#b1").addEventListener("click", (e)=>
{
    e.target.innerText = counter0();
});
document.querySelector("#b2").addEventListener("click", (e)=>
{
    e.target.innerText = counter1();
});
console.log("___________Reset Counter____________");

function count()
{
    let counter = 0;

    function countUp()
    {
        return ++counter;
    }

    function reset()
    {
        counter = 0;
    }
    return{
        countUp: countUp,
        reset: reset
    };
}
const myCounter = count();
const mySecondCounter = count();
console.log(mySecondCounter);
console.log(myCounter);
console.log(mySecondCounter.countUp());
console.log(myCounter.countUp());
console.log(myCounter.countUp());
console.log(myCounter.countUp());
console.log(myCounter.countUp());
myCounter.reset();
console.log(myCounter.countUp());

console.log("_____________Timer______________");

// setTimeout(()=>{
//     alert("Tiden är ute!");
// }, 2000);

// let counter2 = 0;

// setInterval(() => {
//     console.log(++counter2);
// }, 1000);

function timer()
{
    let timePassed = 0;

    function timeIsPassing()
    {
        timePassed++;
    }
    function getTimePassed()
    {
        return timePassed;
    }
    setInterval(timeIsPassing, 1000);
    return getTimePassed
};

const myTimer = timer();