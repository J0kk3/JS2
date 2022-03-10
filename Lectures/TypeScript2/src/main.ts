import{Coin, getUserDataResult} from "./types" //ingen filändelse med typescript
//Union types
let mynt: 'krona'|'klave';
// mynt = 'tia'; //Klagar
mynt = 'krona'; //OK

function headsOrTails():void
{
    let random = Math.floor(Math.random()*2);
    console.log(random);
    if(random == 0)
    {
        return console.log("heads");
    }
    else if (random == 1)
    {
        return console.log("tails");
    }
}
console.log(headsOrTails());

function singlaSlant():Coin // moduler ersatte "heads | "tails med Coin
{
    if(Math.random()<0.5) return "heads";
    else return "tails";
}
console.log(singlaSlant());

function getUserData():getUserDataResult // ersatt return:[] | [] A or B med getUserDataResult från modul
{
    if(singlaSlant() === "tails")
    {
        return ["Error", Error("User not found")];
    }
    else
    {
        return ["Success", {userName: "bigF", id: 2323434343}];
    }
}
console.log(getUserData());
const userResult = getUserData();
if(userResult[0] === "Error")
{
    console.log(userResult[1]);
}
else
{
    console.log(userResult[1].userName);
}