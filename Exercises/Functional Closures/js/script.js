//Övning 1 - Counter
function count(counter = 0)
{
    function countUp()
    {
        return ++counter;
    }
    return countUp;
}

const counter0 = count(30);
const counter1 = count(100);
const counter2 = count();
//Övning 2 - Bankkonto

/*Använd konsolen:
account1.deposit(1000);
undefined - men värdet ökar ändå.
account1.checkAmount();
2000 - värdet ökade med 1000.
account1.withdraw(2000);
undefined
account1.checkAmount();
0
*/
function newAccount(money = 0)
{
    function deposit(moneyIn)
    {
        money += moneyIn;
    }
    function withdraw(moneyOut)
    {
        money -= moneyOut;
    }
    function checkAmount()
    {
        return money;
    }
    return{
        deposit: deposit,
        withdraw: withdraw,
        checkAmount: checkAmount
    }
}
const account0 = newAccount(1000);
const account1 = newAccount(12432);
//annat sätt att skriva samma sak:
//const deposit = moneyIn => {money+=moneyIn};

//Övning 3 - Timer
function newTimer()
{
    let secondsPassed = 0;
    
    const addTime = () => {secondsPassed++};
    setInterval(addTime, 1000);
    const getTime = () => secondsPassed;
    const reset = () => {secondsPassed = 0;};
    
    return{
        getTime: getTime,
        reset: reset,
        addTime: addTime
    }
}
const timer0 = newTimer();
//Timer1.getTime() -> visa hur många sekunder som har passerat
//Timer1.reset() -> nollställer timer

//Övning 4 - Timer 2

function newTimer()
{
    let secondsPassed = 0;
    let laps = [];
    
    const addTime = () => {secondsPassed++};
    setInterval(addTime, 1000);
    const getTime = () => secondsPassed;
    const lap = () => laps.push(secondsPassed)
    setInterval(lap, 10000);
    const getLaps = () => laps;
    
    const reset = () => {secondsPassed = 0;};
    
    return{
        getTime: getTime,
        reset: reset,
        addTime: addTime,
        getLaps: getLaps
    }
}
const timer1 = newTimer();
//Övning 5 - Tärning 1
function dice()
{
    const throwDie = () => {console.log(Math.floor(Math.random() * 6 + 1))};
    
    return{
        throwDie: throwDie
    }
}
const die = new dice();

//Övning 6 - Tärning 2
function dices()
{
    let freezeBool = false;

    // const throwDie = () => {console.log(Math.floor(Math.random() * 6 + 1))};
    const freeze = () => freezeBool = true;
    const unFreeze = () => freezeBool = false;
    const roll = () => {
        if(freezeBool === false){
            console.log(Math.ceil(Math.random() * 6))
        }
    };
    
    return{
        // throwDie: throwDie,
        freeze: freeze,
        unFreeze: unFreeze,
        roll: roll
    }
}
const moreDice = new dices();
//Övning 7 - Gissa numret

//Inga globala variabler eftersom allting är inbäddat i en anonym funktion
//I den anonyma funktionen är det endast två variablar som är tillgängliga i de andra funktionerna. RandomNum och numOfGuesses
//Alla andra värden skickas in som argument till eller returneras från en funktion 

/* Skriv om gissa numret. Skriv om koden så att randomNumber och numberOfGuesses använder sig av functional closures istället.
När de initieras ska båda tilldelas ett objekt med två metoder var: */
(function () {
    // let randomNum = getRandomNumber();
    // let numOfGuesses = 0;
    function randomNum()
    {
        //Genererar ett nytt random nummer
        function reset()
        {
            getRandomNumber();
        }
        //Returnerar numret som genererats
        function getNumber()
        {
            reset();
        }

        return{
            reset: reset,
            getNumber: getNumber
        }
    }
    function numberOfGuesses()
    {
        //Sätter räknaren till 0 igen
        function reset()
        {
            numOfGuesses = 0;
        }
        //Lägger till 1 på räknaren
        function count()
        {
            numOfGuesses++
        }
        return{
            reset: reset,
            count: count
        }
    }
    btn = document.getElementById("button");
    btn.addEventListener("click", guess);

    function guess(e) {
        e.preventDefault();
        updateNumberOfGuesses();
        const guessedNumber = getGuess();
        const guessResult = compareNumbers(guessedNumber);
        displayGuessResult(guessResult);
    }

    function updateNumberOfGuesses() {
        numOfGuesses++;
        document.getElementById("guesses").innerText = `Antal gissningar: ${numOfGuesses}`;
    }

    function getGuess() {
        const input = document.querySelector("input");
        const guess = input.value;
        input.value = "";
        return guess;
    }

    function compareNumbers(number) {
        let result = "correct";
        if (number > randomNum) {
            result = "lower";
        } else if (number < randomNum) {
            result = "higher";
        }
        return result;
    }

    function displayGuessResult(result) {
        if (result === 'correct') {
            alert(`Du vann!! På ${numOfGuesses} försök.`);
            resetGame();
        }
        else if (result === 'higher') {
            document.getElementById("high-low").innerText = "Gissa högre";
        }
        else if (result === 'lower') {
            document.getElementById("high-low").innerText = "Gissa lägre";
        }
    }

    function getRandomNumber() {
        return Math.round(Math.random() * 100);
    }

    function resetGame() {
        numOfGuesses = 0;
        randomNum = getRandomNumber();
        document.getElementById("high-low").innerText = "";
        document.getElementById("guesses").innerText = `Antal gissningar:`;
    }
})();