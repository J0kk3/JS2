//#region 1.1 - Type Aliases
type arrayThreeThings = [string, number, boolean];
const test : arrayThreeThings = ["test", 7, true];
//#endregion 1.1
//#region 1.2
type  arrayFour = [boolean, number[], string, arrayThreeThings];
const vaFan : arrayFour = [false, [1, 2, 3, 1, 2, 3], "pitbull", ["string", 13, false]];
//#endregion 1.2
//#region 1.3
type objectMedTvåEgenskaper = {name:string, age:number};
type detKännsSomJagGörSammaIgen = [string, objectMedTvåEgenskaper, objectMedTvåEgenskaper];

const roadkill0 : detKännsSomJagGörSammaIgen = ["cat", {name:"Jocke", age:34}, {name:"Felix", age:16}];
//#endregion 1.3
//#region 2.1 - Unions
let door : "open"  | "closed";
//#endregion 2.1
//#region 2.2
let gameResult : "win" | "lose" | "draw";
function generateResut() : typeof gameResult
{
    const random = Math.ceil(Math.random()*3);
    console.log(random);
    if(random==1) return "win";
    else if(random==2) return "lose";
    else return "draw"
}
console.log(generateResut());
//#endregion 2.2
//#region 2.3
//Beskrivning, Temperatur, Vindhastighet
let desc : "awful" | "nice" | "ok";
type weatherObject = {desc:string, temp:string, speed:string};
function mögVäder():object
{

    return void
}
//#endregion 2.3
//#region 3.1 - Klasser

//#endregion 3.1
//#region 3.2

//#endregion 3.2