//#region instructions
// display.js
//        skriv en funktion som tar emot tre argument
//   storlek, typ (h1 / p osv)  och text
//   funktionen ska skapa ett element av typen typ med textstorleken storlek
//   Innertext ska vara argumentet text 
//   exportera funktionen
// main.js
//   importera funktionen från display.js
//   anropa funktionen några gånger
//#endregion instructions


function createElement(size, type, text)
{
     type = typeOfElement(type)
     function typeOfElement(type)
     {
          type = document.createElement(type);
          document.body.appendChild(type);
          type.innerText = text;
          type.style.fontSize = `${size}px`;
     };
}
export {createElement};