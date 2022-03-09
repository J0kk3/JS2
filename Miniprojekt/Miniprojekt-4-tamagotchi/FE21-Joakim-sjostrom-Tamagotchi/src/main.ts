class Tamagotchi
{
    public hapiness:number = 5; // 10 is happy, 0 is unhappy
    public hunger:number = 5; // 0 is full, 10 is starvation
    public tamaName:string;
    public tamaType:string;
    public isAlive:boolean = false;
    private id0;
    private id1;
    constructor(tamaName, tamaType)
    {
        this.tamaName = tamaName;
        this.tamaType = tamaType;
        
        this.id0 = setInterval(this.decreaseHapiness.bind(this), 4000);
        this.id1 = setInterval(this.increaseHunger.bind(this), 4000);
        // if(this.hunger >= 10)
        // {
        //     this.isAlive = false;
        //     //Reloads from increasedHunger()
        //     clearInterval(this.id0);
        // }
        // if(this.hapiness <= 0)
        // {
        //     this.isAlive = false;
        //     //Reload the page from decreaseHapiness()
        //     clearInterval(this.id1);
        // }
    }
    getName()
    {
        this.isAlive = true;
        console.log("name is: " + this.tamaName);
    }
    increaseHunger():number
    {
        console.log("Hunger: " + this.hunger);
        if(this.hunger >=10)
        {
            this.isAlive = false;
            window.location.reload();
            console.log("Called from hunger: " + this.isAlive);
        }
        return this.hunger++;
    }
    decreaseHapiness():number
    {
        if(this.hapiness <= 0)
        {
            this.isAlive = false;
            window.location.reload();
            console.log("called from hapiness: " + this.isAlive);
        }
        console.log("Hapiness: " + this.hapiness);
        return this.hapiness--;
    }
    play():number
    {
        console.log("Hapiness increased by 5");
        this.hapiness += 5;
        if(this.hapiness >= 10)
        {
            this.hapiness = 10;
        }
        return this.hapiness;
    }
    feed():number
    {
        if(this.hunger <= 0)
        {
            this.hapiness -= 3;
            console.log("Already full, hapiness decreased by 3! :C");
        }
        console.log("Hunger decreased by 5");
        return this.hunger -= 5;
    }
}
const test = new Tamagotchi(prompt("Pick a name"), "Type");