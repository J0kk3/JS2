const body = document.body;
//Buttons
const btnSten = document.getElementById("stenBtn");
const btnSax = document.getElementById("saxBtn");
const btnPåse = document.getElementById("påseBtn");
const goBtn = document.getElementById("goBtn");
//PlayerName
const playerName = document.getElementById("playerName");
const nameInput = document.getElementById("nameInput");

let numGen = Math.round(Math.random() * 2);
const choices = ["sten", "sax", "påse"];

//PlayerName
// playerName.innerText = nameInput;
goBtn.addEventListener("click", function ()
{
    playerName.innerText = nameInput.value;
    playerH1.innerText = `${nameInput.value} Score:`;
});

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

    if (playerChoice === "sten" && cpuChoice === "sax")
    {
        console.log("you win!");
        playerScore++;
        playerScoreP.innerText++;
    }
    else if (playerChoice === "sten" && cpuChoice === "påse")
    {
        console.log("you lose!");
        cpuScore++;
        cpuScoreP.innerText++;
    }
    else
    {
        console.log("draw");
    }
    if(playerScore === 3)
    {
        alert("You Win");
        playerScore = 0;
        cpuScore = 0;
        playerScoreP.innerText = 0;
        cpuScoreP.innerText = 0;
        console.clear();
    }
    if(cpuScore === 3)
    {
        alert("You lose!");
        playerScore = 0;
        cpuScore = 0;
        playerScoreP.innerText = 0;
        cpuScoreP.innerText = 0;
        console.clear();
    }
    console.log("Your choice: ",playerChoice,"CPU's choice: ", cpuChoice);
});
btnSax.addEventListener("click", function ()
{
    playerChoice = "sax";
    
    let numGen = Math.round(Math.random() * 2);
    let cpuChoice = choices[numGen];
 
    
    if (playerChoice === "sax" && cpuChoice === "påse")
    {
        console.log("you win!");
        playerScore++;
        playerScoreP.innerText++;
    }
    else if (playerChoice === "sax" && cpuChoice === "sten")
    {
        console.log("you lose!");
        cpuScore++;
        cpuScoreP.innerText++;
    }
    else
    {
        console.log("draw");
    }
    if(playerScore === 3)
    {
        alert("You Win");
        playerScore = 0;
        cpuScore = 0;
        playerScoreP.innerText = 0;
        cpuScoreP.innerText = 0;
        console.clear();
    }
    if(cpuScore === 3)
    {
        alert("You lose!");
        playerScore = 0;
        cpuScore = 0;
        playerScoreP.innerText = 0;
        cpuScoreP.innerText = 0;
        console.clear();
    }
    console.log("Your choice: ",playerChoice,"CPU's choice: ", cpuChoice);
});
btnPåse.addEventListener("click", function ()
{
    playerChoice = "påse";
    
    let numGen = Math.round(Math.random() * 2);
    let cpuChoice = choices[numGen];
    
    if (playerChoice === "Påse" && cpuChoice === "sax")
    {
        console.log("you lose!");
        cpuScore++;
        cpuScoreP.innerText++;
    }
    else if (playerChoice === "påse" && cpuChoice === "sten")
    {
        console.log("you win!");
        playerScore++;
        playerScoreP.innerText++;
    }
    else
    {
        console.log("draw");
    }
    if(playerScore === 3)
    {
        alert("You Win");
        playerScore = 0;
        cpuScore = 0;
        playerScoreP.innerText = 0;
        cpuScoreP.innerText = 0;
        console.clear();

    }
    if(cpuScore === 3)
    {
        alert("You lose!");
        playerScore = 0;
        cpuScore = 0;
        playerScoreP.innerText = 0;
        cpuScoreP.innerText = 0;
        console.clear();
    }
    console.log("Your choice: ",playerChoice,"CPU's choice: ", cpuChoice);
});