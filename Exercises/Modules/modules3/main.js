//#region Instructions
/*
calculator.js
    skriv minst två funktioner som tar emot två argument var: nummer1 och nummer2
    funktion 1 ska addera numren och returnera värdet
    funktion 2 ska multiplicera numren och returnera värdet
    exportera alla funktioner
display.js
    skriv en funktion som tar ett argument: text
    funktionen ska skapa ett h1-element med texten text
    exportera funktionen
main.js
    importera alla funktioner från calculator.js och display.js
*/
//#endregion Instructions
import { addNums, multiplyNums } from "./modules/calculator.js";
addNums(16, 24);
multiplyNums(16, 24);