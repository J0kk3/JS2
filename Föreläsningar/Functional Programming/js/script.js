(function(){
    let score = 0;

    function updateScore()
{
    score++;
}

console.log(score)
updateScore();
updateScore();
updateScore();
updateScore();
console.log(score);

console.log("Den här funktionen anropas direkt");
})();

console.log(score);
//Destructing
let array = [1, 2, 3];

const indexZero = array[0];
const indexOne = array[1];
const indexTwo = array[2];

console.log(indexZero, indexOne, indexTwo);

//Samma som ovan
//Det går att ange default värde som endast gäller om den inte är deklarerad
 const [index0, index1, index2=100] = array;

 console.log(index0, index1, index2);

//Endast sista elementet i en variabel
 const [ , , last] = array;
 console.log(last);

//------------------------------------
//Destructing med object
 let object =
 {
     name: "Clara",
     age: 35,
     salary: 200000,
     height: "20 meters",
     weight: "51.85kg"
 }
const name = object.name;
const age = object.age;
const weight = object.weight;

console.log(name, age, weight);

//Samma som ovan
//Variabelnamnen måste stämma överens med egenskapsnamnen på objektet
//Går ange ett nytt default, det läggs ej till i objektet
const { name, age, weight} = object;

console.log(name, age, weight);

//I funktionen är inte hela arrayen tillgänglig utan de enskilda variablerna
let array = [1, 2, 3];
function getSample([a, b, c]){
    return b;
}
const sample = getSample(array);
console.log(sample);//2

//Objektet är inte tillgängligt i funktionen,
//endast de enskillda variablerna
function printData({firstName, age})
{
    console.log(firstName, age);
}
printData(object);
//De här objekten pekar på samma ställe i minnet,
//ändrar vi ett, ändras det andra också
const newObject = object;
newObject.firstName = "Forqan";
console.log(object);

//Klonar objectet, alltså det finns nu två ställen i minnet (skriver inte över)
objectClone = {...object};
objectClone.firstName = "cornelia";
console.log("klonat");
console.log(object, objectClone);
//-------------------------------

//Spread operator (...)
//Sprider ut arr1's element i mitten på arr2, varje element blir ett nytt element
const arr1 = [1, 2, 3, 4, 5];
const arr2 = [6, 7, ...arr1, 8, 9, 10];
console.log(arr2); //6, 7, 8, 1, 2, 3, 4, 5, 8, 9, 10

//Lägg ihop två objekt
const object1 = {
    name: "Jocke",
    age: 33,
}
 
const object2 = {
    salary: 1500000,
    height: '1.9 meters',
    weight: '92 KG'
}
const object3 = {...object1, ...object2};
console.log(object3);