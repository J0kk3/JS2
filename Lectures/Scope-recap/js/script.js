//Global Scope
const global = "Den här är i det globala scopet";
console.log(global);

(function myFunction()
{
    //Function Scope
    const functionScope = "Det här är i funktionen";
    console.log(global);
    console.log(functionScope);
    console.log(block);
})();

if(true)
{
    //Block Scope
    const block = "I block scopet";
    console.log(global);
    console.log(block);
}
console.log(block);
console.log("_____________________");

/* let counter = 0; //Flyttar man counter hit och tar bort den där nere;
   så blir den global och värdet i konsolen blir 4, 8, 12, 16 */
function count()
{
    let counter = 0;

    function countUp()
    {
        counter++;
    }
    countUp();
    countUp();
    countUp();
    countUp();
    console.log(counter); //4
}
count();
count();
count();
count(); //4 visas 4ggr i konsollen