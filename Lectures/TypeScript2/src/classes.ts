class Car
{
    //Ska inte kunna modifieras men ses
    // public readonly make:string;
    // public readonly model:string;
    // public readonly year:number;
    //Ska varken kunna modifieras eller ses
    private readonly doorLockCode:number;
 
    constructor(
    
        public readonly make:string,
        public readonly model:string,
        public readonly year:number)
    {
        // this.#make = make;
        // this.#model = model;
        // this.#year = year;

        //Koden genereras av en privat metod
        this.doorLockCode = this.generateDoorLockCode();
    }
     private generateDoorLockCode():number
    {
        return Math.ceil(Math.random() * 1000000);
    }
    //Publik metod som använder den privata koden
    public openAllDoors():void
    {
        console.log('Opening with', this.doorLockCode);
    }
    //Getters, ger tillgång till fälten
    // getMake():string
    // {
    //     return this.#make;
    // }
    // getModel():string
    // {
    //     return this.#model;
    // }
    // getYear():number
    // {
    //     return this.#year;
    // }
}
 
const car = new Car('Toyota', 'Corolla', 1999);
console.log(car.make, car.model, car.year);
car.openAllDoors();