const body = document.body;
//Buttons
const btnSten = document.getElementById("stenBtn");
const btnSax = document.getElementById("saxBtn");
const btnPåse = document.getElementById("påseBtn");
const goBtn = document.getElementById("goBtn");
//PlayerName
// const playerName = document.getElementById("playerName");
const nameInput = document.getElementById("nameInput");

let numGen = Math.round(Math.random() * 2);
const choices = ["sten", "sax", "påse"];

//PlayerName
let playerName = prompt("Please enter your name:");
console.log(playerName);
playerH1.innerText = `${playerName} Score:`;
// playerName.innerText = nameInput;
// goBtn.addEventListener("click", function ()
// {
//     playerName.innerText = nameInput.value;
//     playerH1.innerText = `${nameInput.value} Score:`;
// });

//CPUs choice
let cpuChoice = choices[numGen];
let playerChoice = '';

//Score
const playerScoreP = document.getElementById("playerScoreP");
const cpuScoreP = document.getElementById("cpuScoreP");
let playerScore = 0;
let cpuScore = 0;

//Link playerChoice to buttons
btnSten.addEventListener("click", function ()
{
    playerChoice = "sten";

    let numGen = Math.round(Math.random() * 2);
    let cpuChoice = choices[numGen];
    //Win
    if (playerChoice === "sten" && cpuChoice === "sax")
    {
        console.log("you win!");
        playerScore++;
        playerScoreP.innerText++;
    }
    //Lose
    else if (playerChoice === "sten" && cpuChoice === "påse")
    {
        console.log("you lose!");
        cpuScore++;
        cpuScoreP.innerText++;
    }
    //Draw
    else
    {
        console.log("draw");
    }
    //Win Condition
    // if(playerScore === 3)
    // {
    //     alert("You Win");
    //     resetGame();
    // }
    //Lose Condition
    if(cpuScore === 3)
    {
        alert("You lose!");
        
        resetGame();
    }
    console.log("Your choice: ",playerChoice,"CPU's choice: ", cpuChoice);
});
btnSax.addEventListener("click", function ()
{
    playerChoice = "sax";
    
    let numGen = Math.round(Math.random() * 2);
    let cpuChoice = choices[numGen];
 
    //Win
    if (playerChoice === "sax" && cpuChoice === "påse")
    {
        console.log("you win!");
        playerScore++;
        playerScoreP.innerText++;
    }
    //Lose
    else if (playerChoice === "sax" && cpuChoice === "sten")
    {
        console.log("you lose!");
        cpuScore++;
        cpuScoreP.innerText++;
    }
    //Draw
    else
    {
        console.log("draw");
    }
    //Win condition
    // if(playerScore === 3)
    // {
    //     alert("You Win");
    //     resetGame();
    // }
    //Lose condition
    if(cpuScore === 3)
    {
        alert("You lose!");
        resetGame();
    }
    console.log("Your choice: ",playerChoice,"CPU's choice: ", cpuChoice);
});
btnPåse.addEventListener("click", function ()
{
    playerChoice = "påse";
    
    let numGen = Math.round(Math.random() * 2);
    let cpuChoice = choices[numGen];
    //Lose
    if (playerChoice === "Påse" && cpuChoice === "sax")
    {
        console.log("you lose!");
        cpuScore++;
        cpuScoreP.innerText++;
    }
    //Win
    else if (playerChoice === "påse" && cpuChoice === "sten")
    {
        console.log("you win!");
        playerScore++;
        playerScoreP.innerText++;
    }
    //Draw
    else
    {
        console.log("draw");
    }
    //Wind condition
    // if(playerScore === 3)
    // {
    //     alert("You Win");
    //     resetGame();
    // }
    //Lose Condition
    if(cpuScore === 3)
    {
        alert("You lose!");
        resetGame();
    }
    console.log("Your choice: ",playerChoice,"CPU's choice: ", cpuChoice);
});
function resetGame()
{
    playerScore = 0;
    cpuScore = 0;
    playerScoreP.innerText = 0;
    cpuScoreP.innerText = 0;
    console.clear()
}
//JS2 Miniprojekt 1
const highscoreDatabase = `https://rockpaperscissorshighscore-default-rtdb.europe-west1.firebasedatabase.app/.json`;

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
                }
                
    });
})();