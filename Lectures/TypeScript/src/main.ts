//#region Variabler
let word:string = "Det här är en string";
word = "okejdå";
let calc:number;
calc = 5+6;
console.log(word, calc);
let firstName = "Clara";
//firstName = 56; //Can't assign wrong datatype
//#endregion  Variabler

//#region Arrayer
let arrayOfNumbers:number[] = [3, 5, 5];
//#endregion Arrayer

//#region Funktioner
function multiply(x:number, y:number):number
{
    return x*y;
}
console.log(multiply(4, 9));

function logName(first:string, last:string):void
{
    console.log("Your full name is: ", first, last);
}
logName("Arbie", "Rydberg");
//#endregion Funktioner

//#region Higher order funktion
function callback(textC:string):void
{
    console.log("In callback", textC);
}
function higherOrder(func: Function, textH:string):void
{
    console.log("In higherOrder");
    func(textH);
}
higherOrder(callback, "Today is the day!");

function doCalcOnArray(calc: Function, arr:number[]):number[]
{
    let resultArr:number[] = [];
    for( const el of arr)
    {
        resultArr.push(calc(el));
        return resultArr;
    }
};
function timesTwo(x:number):number
{
    return x * 2;
};
function square(x:number):number
{
    return x * x;
};
let arr:number[] = [2, 4, 6, 8, 10];
let timesTwoResult:number[];
let squareResult:number[];

timesTwoResult = doCalcOnArray(timesTwo, arr);
squareResult = doCalcOnArray(square, arr);
console.log(arr, timesTwoResult, squareResult);
//#endregion Higher order funktion

//#region Object
function sayHello(objekt:{first:string, last:string}):void
{
    console.log("Hello ", objekt.first, objekt.last);
};
sayHello({first: "Alaa", last: "Johansson"});

const obj =
{
    first: "Alaa",
    last: "Johansson"
};
sayHello1(obj);

type Name =
{
    first: string,
    last: string
}
//Parametern är av typen Name
function sayHello1(obj: Name){
    console.log('Hello,', obj.first, obj.last);
}
//Vi skapar ett nytt objekt av typen Name
//Lägger vi till eller tar bort en egenskap får vi ett error
const nameObject:Name = {
    first: 'Clara',
    last: 'The Dragon'
}
sayHello1(nameObject);

type Book =
{
    title:string,
    author:string,
    pages?: number,
    ebook:Function,
    logInfo: Function    
}
const aNiceBook:Book = 
{
    title:"cars",
    author: "Torqan",
    ebook():boolean
    {
        return false;
    },
    logInfo():void
    {
        console.log(this.title, this.author, this.pages);
    }
};
const book2:Book =
{
    title: "Muhammed Ali",
    author: "Muhammed Ali",
    pages: 244,
    ebook():boolean
    {
        return true;
    },
    logInfo():void
    {
        console.log(this.title, this.author, this.pages);
    }
}
console.log(aNiceBook);
console.log(book2);
//#endregion Objekt