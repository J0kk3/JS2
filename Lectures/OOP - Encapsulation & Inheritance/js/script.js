//#region
class Person
{
    #name;
    #height;

    constructor(name, height)
    {
        this.name = name;
        this.height = height; 
    }

    getName()
    {
        return this.name;
    }

    getHeight()
    {
        return this.height;
    }

    setHeight(newHeight)
    {
        this.height = newHeight;
    }
}

const person = new Person("Forqan", 195);
console.log(person);
console.log(person.height); //Undefined
//console.log(person.#height); //Syntax error: reference to undeclared private field or method name
console.log(person.getHeight(), person.getName());
person.setHeight(176);
console.log(person.getHeight(), person.getName());
//#endregion
//#region Inheritance
class Student extends Person
{
    #school;
    constructor(name, height, school)
    {
        super(name, height);
        this.#school = school;
    }
    getSchool()
    {
        return this.#school;
    }
    intro()
    {
        console.log(`Hello, my name is, ${this.#name}`);
    }
}
const student = new Student("Felix", 182, "Grit");
console.log(student);
const person = new Person("Natta", 168);
console.log(person);
//#endregion Inheritance