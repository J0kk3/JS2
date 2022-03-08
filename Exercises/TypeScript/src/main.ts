//#region - Övning 1.1 - Variabler
let zeroethVariable:number;
let firstVariable:number;
let secondVariable:number;

zeroethVariable = 0;
firstVariable = 1;
secondVariable = zeroethVariable+firstVariable;
console.log(secondVariable);
//#endregion - Övning 1.1
//#region - Övning 1.2
let stringVariable0:string;
let stringVariable1:string;
let stringVariable2:string;
stringVariable0 = "Kattbajs";
stringVariable1 = "Luktar";
stringVariable2 = "Inte gott!";
//#endregion - Övning 1.2
//#region - Övning 1.3
let numberVariable:number = 2;
let boolVariable:boolean;
if(typeof numberVariable === "number")
{
    console.log(boolVariable = true);
}
else
{
    console.log(boolVariable = false);
}
//#endregion - Övning 1.3
//#region - Övning 2.1 - Funktioner
function twoNumberArguments(x:number, y:number):number
{    
    return result = x * y
}
let result:number;
twoNumberArguments(25, 65);
console.log(result);
//#endregion - Övning 2.1
//#region - Övning 2.2
function twoDifferentArguments(x:number, y:number):boolean
{
    if(x + y >= 10)
    {
        differentArgumentResult = true;
    }
    else
    {
        differentArgumentResult = false;
    }
    return differentArgumentResult;
}
let differentArgumentResult:boolean;
console.log(twoDifferentArguments(5, 5));
console.log(twoDifferentArguments(1, 1));
//#endregion - Övning 2.2
//#region - Övning 2.3
function numberArr(arr:number[]):number
{
    for(let i = 0; i < arr.length; i++)
    {
        result = arr[i]+arr[i];
    }
    return result
}
let array0:number[] = [2, 4, 6, 8, 10];
console.log(numberArr(array0));
//#endregion - Övning 2.3
//#region - Övning 2.4
function twoArrayParams(x:string[], y:string[]):boolean
{
    if( x.length == y.length)
    {
        return true;
    }
    else
    {
        return false;
    }
};
let arrayLengthCheck0:string[] = ["1", "2", "3"];
let arrayLengthCheck1:string[] = ["4", "5", "6"];
console.log(twoArrayParams(arrayLengthCheck0, arrayLengthCheck1));
//#endregion - Övning 2.4
//#region - Övning 2.5
let arrayJävel0:string[] = ["1", "2", "3"];
let arrayJävel1:string[] = ["4", "5", "6"];
function arrayParamsReturnArray(x:string[], y:string[]):string[]
{
    let returnArray:string[];
    return returnArray = [...x, ...y];
}
console.log(arrayParamsReturnArray(arrayJävel0, arrayJävel1));
//#endregion - Övning 2.5
//#region - Övning 2.6
let nyJävlaArray:number[] = [1, 1, 1, 1];
function assåJagHarSlutPåMetodNamn0(x:number[]):string[]
{
    // let result:string[] = [x.toString()];
    let result:string[] = [];
    for(let i = 0; i < x.length; i++)
    {
         result.push(x[i].toString());
    }
    return result;
}
console.log(assåJagHarSlutPåMetodNamn0(nyJävlaArray));

//#endregion - Övning 2.6
//#region - Övning 2.7
function assåJagHarSlutPåMetodNamn1(param:Function, array0:number[], array1:number[]):number[]
{
    let resultArr:number[] = [];
    for (let i = 0; i < array0.length; i++)
    {
        resultArr.push (param(array0[i], array1[i]));
    }
    return resultArr;
}
function assåJagHarSlutPåMetodNamn2(x:number, y:number):number
{
    return x + y;
}
function assåJagHarSlutPåMetodNamn3(x:number, y:number):number
{
    return x * y;
}
const arrayJävel2:number[] = [1, 2, 3, 4];
const arrayJävel3:number[] = [2, 3, 4, 5];
console.log(assåJagHarSlutPåMetodNamn1(assåJagHarSlutPåMetodNamn2, arrayJävel2, arrayJävel3));
console.log(assåJagHarSlutPåMetodNamn1(assåJagHarSlutPåMetodNamn3, arrayJävel2, arrayJävel3));
//#endregion - Övning 2.7
//#region - Övning 3.1 - Objekt
type Name =
{
    name: string,
    age:number
    presentation:Function
}

const namnEtt:Name =
{
    name: "ett",
    age: 1,
    presentation():void
    {
        console.log(`namnEtt: ${this.name}, ${this.age}`);
    }
}
const namnTvå:Name =
{
    name: "två",
    age: 2,
    presentation():void
    {
        console.log(`namnTvå: ${this.name}, ${this.age}`);
    }
}
namnEtt.presentation();
namnTvå.presentation();
//#endregion - Övning 3.1
//#region - Övning 3.2
type Car =
{
    model: string,
    year:number,
    price:number
    // dennaFunktionenSkaReturneraNågot:Function
}
const yourCar:Car =
{
    model : "carModel",
    year : 864,
    price: 8790000
}
function dennaFunktionenSkaReturneraNågot(car:Car):Car
    {
        yourCar.price = car.price * 0.8
        return yourCar;
    }
console.log(dennaFunktionenSkaReturneraNågot(yourCar));
//#endregion - Övning 3.2
//#region - Övning 3.3
    // Skriv en funktion som tar emot ett argument av typ Animal. Funktionen ska inte returnera någonting.
    // Animal ska innehålla tre egenskaper
    // namn - en string
    // typ - en string
    // ålder - ett number
    // Funktionen ska logga all info om djuret i konsolen.
type Tajp =
{
    name:string,
    type:string,
    age:number
    animalInfo:Function
}
const börd:Tajp =
{
    name: "Forqan",
    type: "Fågel",
    age: 3,
    animalInfo():void
    {
        return console.log(`${this.name}, ${this.type}, ${this.age}`);
    }
}
börd.animalInfo();
//#endregion - Övning 3.3