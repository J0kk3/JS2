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
//annat s'tt att skriva samma sak:
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

//Övning 4 - Gissa numret