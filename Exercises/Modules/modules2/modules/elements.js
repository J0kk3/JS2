//#region Instructions
// elements.js
    // skriv två funktioner som tar emot två argument var: färg och text
    // funktion 1 ska skapa ett h1-element med texten text och bakgrundsfärg färg
    // funktion 2 ska skapa ett p-element med texten text och textfärgen färg
    // exportera båda funktionerna
// main.js
    // importera båda funktionerna från elements.js
    // anropa funktionerna några gånger
//#endregion Instructions

function createH1(color, text)
{
    const h1 = document.createElement("h1");
    document.body.appendChild(h1);
    h1.style.color = `${color}`;
    h1.innerText = `${text}`;    
}
function createP(color, text)
{
    const p = document.createElement("p");
    document.body.appendChild(p);
    p.style.color = `${color}`;
    p.innerText = `${text}`;
}
export {createH1, createP};