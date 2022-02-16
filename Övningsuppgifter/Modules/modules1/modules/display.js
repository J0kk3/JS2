/*skriv en funktion som tar emot två argument
antal och hue
funktionen ska skapa lika många h1-element som antal, med text-färgen hue. Innertext ska vara numret i ordningen på h1-elementet 
exportera funktionen
*/
// body = document.getElementById("minjävlabody");
// function createH1(amount, hue)
// {
//    for(let i = 0; i < amount; i++)
//    {
//     h1 = document.createElement("h1");
//     body.appendChild(h1);
//    }
//    h1.style.color = `hsl(${hue}, 80%, 70%)`;
// }
// export{createH1};

function displayH1(amount, hue)
{
    for(let i = 0; i < amount; i++)
   {
        const h1 = document.createElement("h1");
        h1.style.color = `hsl(${hue}, 80%, 70%)`;
        h1.innerText = i+1;    
        document.body.appendChild(h1);
   }
}

export{displayH1};