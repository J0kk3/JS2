class Tamagotchi
{
    public happiness:number = 5; // 10 is happy, 0 is unhappy
    public hunger:number = 5; // 0 is full, 10 is starvation
    public tamaName:string;
    // public tamaType:tamaTypes;
    public tamaType:string;
    public isAlive:boolean = false;
    private id0;
    private id1;
    
    constructor(tamaName, tamaType)
    {
        this.tamaName = tamaName;
        this.tamaType = tamaType;
        // this.tamaType = this.getRandomTama();
        
        const tamaNameP = document.getElementById("tamaNameP");
        tamaNameP.innerText = `Tamagotchi name: ${this.tamaName}`;
        
        const tamaTypeP = document.getElementById("tamaTypeP");
        tamaTypeP.innerText = `Tamagotchi type: ${this.tamaType}`;
        
        this.id0 = setInterval(this.decreaseHapiness.bind(this), 4000);
        this.id1 = setInterval(this.increaseHunger.bind(this), 4000);
    }
    getName()
    {
        this.isAlive = true;
        console.log("name is: " + this.tamaName);
    }
    increaseHunger():number|string
    {
        const HungerP = document.getElementById("hungerP");
        if(this.hunger >=10)
        {
            this.isAlive = false;
            clearInterval(this.id1);
            clearInterval(this.id0);
            // window.location.reload();
            spawnBtn.style.visibility = "visible";
            this.hunger = 5;
            this.happiness = 5;
            console.log("Called from hunger: isAlive - " + this.isAlive);
        }
        return this.hunger++, HungerP.innerText = `Hunger: ${this.hunger}`;
    }
    decreaseHapiness():number|string
    {
        const happinessP = document.getElementById("happinessP");
        
        if(this.happiness <= 0)
        {
            this.isAlive = false;
            clearInterval(this.id1);
            clearInterval(this.id0);
            // window.location.reload();
            console.log("called from hapiness: isAlive - " + this.isAlive);
            spawnBtn.style.visibility = "visible";
            this.hunger = 5;
            this.happiness = 5;
        }
        return this.happiness--, happinessP.innerText = `Happiness: ${this.happiness}`;
    }
    play():number|void
    {
        const playBtn = document.getElementById("play");
        playBtn.addEventListener("click", () => this.play());
        console.log("Hapiness increased by 5");
        this.happiness += 5;
        if(this.happiness >= 10)
        {
            this.happiness = 10;
        }
        return this.happiness, playBtn.addEventListener("click", () => this.play());
    }
    feed():number|void
    {
        const feedBtn = document.getElementById("feed");
        // feedBtn.addEventListener("click", () => this.feed());
        if(this.hunger <= 0)
        {
            this.happiness -= 3;
            console.log("Already full, hapiness decreased by 3! :C");
        }
        console.log("Hunger decreased by 5");
        return this.hunger -= 5,feedBtn.addEventListener("click", () => this.feed());
    }
    
}
let spawnTama = new Tamagotchi(prompt("pick a name..."), prompt("Pick a type..."));

//#region Buttons

//Spawn Button
const spawnBtn = document.getElementById("spawn");
spawnBtn.addEventListener("click", () => {let spawnTama =  new Tamagotchi(prompt("pick a name..."),prompt("Pick a type..."))});
if (this.isAlive = true)
{
    spawnBtn.style.visibility = "hidden";
}
else
{
    spawnBtn.style.visibility = "visible";
}
//Feed Button
const feedBtn = document.getElementById("feed");
feedBtn.addEventListener("click", () => spawnTama.feed());
//Play Button
const playBtn = document.getElementById("play");
playBtn.addEventListener("click", () => spawnTama.play());
//Reset Button
const resetBtn = document.getElementById("reset");
resetBtn.addEventListener("click", () => window.location.reload());
//#endregion Buttons