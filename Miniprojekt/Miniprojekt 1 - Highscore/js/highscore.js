/*
DB - Array.js
index       name        score
0           Exempel0    100
1           Exempel1    83
2           Exempel2      57
3           Exempel3        33
4           Exempel4       12

//placeholder variable = newScore = 57
//for-loop för att kolla score med databasen exempelvis
//om newScore är samma som ett redan existerande highscore;
//      så sätts den in under (då poängen inte är slagen)
/*for(i < array.length)
{
    console.log(i, array[i].score);
    if(newScore == array[i].score)
    {
        console.log("Ja, " Plats);
    Plats = i+1;
    }
    else if(newScore > array[i].score)
    {
        Plats = i;
    }
}
*/
const highscoreDatabase = `https://rockpaperscissorshighscore-default-rtdb.europe-west1.firebasedatabase.app/.json`;
fetch(highscoreDatabase)
.then (r =>
    {
        return r.json();
    })
.then (d => 
    {
        for (const i in d)
        {
            console.log(i, d[i]);
            dbArray = d[i];
            
        }
        return dbArray = new Array[i];
});
//JS2 Miniprojekt 1
const highscoreDatabase = `https://rockpaperscissorshighscore-default-rtdb.europe-west1.firebasedatabase.app/.json`;

function compareScore()
{
    //Loop through console.log(i, d[i]); and compare local score
}

const highscoreElement = document.getElementById("highscore");

(function()
{
    const highscoreDatabase = `https://rockpaperscissorshighscore-default-rtdb.europe-west1.firebasedatabase.app/${playerName}.json`;
    let updateHighscore =
    {
        method: "PUT",
        body: JSON.stringify({
            name: `${playerName}`,
            score: `${playerScore}`,
        }),
        headers:
        {
            'Content-type': 'application/json; charset=UTF-8'
        }
    }

    fetch(highscoreDatabase, updateHighscore)
        .then(r=>
            {
                return r.json();
            })
        .then(d=>
            {
                const highscoreDatabase2 = "https://rockpaperscissorshighscore-default-rtdb.europe-west1.firebasedatabase.app/.json";
                for(const i in d)
                {
                    console.log(i, d[i]);
                    p = document.createElement("p");
                    highscoreElement.appendChild(p);
                    p.innerText = d[i];
                    //Plats is unused, so is localScore
                    for(let i = 0; i < d.length; i++)
                    {
                        console.log(i, d[i].score);
                        if(localScore == d[i].score)
                        {
                            console.log("Ja, ", Plats);
                            Plats[i] = i+1;
                        }
                        else if(localScore > d[i].score)
                        {
                            Plats[i] = i;
                        }
                    };
                }
            });
})();
