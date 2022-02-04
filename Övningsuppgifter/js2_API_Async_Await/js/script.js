/*Övning 1: Skapa ett promise som
    1. Genererar ett random nummer mellan 0 och 10
    2. Anropar resolved-funktionen om numret är udda och skickar med numret som argument
    3. Anropar reject-funktionen om numret är jämnt och skickar med ett felmeddelande som argument
När Promiset är resolved, ska value visas i ett h1 element i then-metoden.
När Promiset blir rejected, ska felmeddelandet loggas i konsolen i catch-metoden.
*/
const promise = new Promise(function(resolved, rejected)
{
    const rand = Math.round(Math.random()*10);
    if(rand%2===1)
    {
        resolved(rand);
    }
    else
    {
        rejected("Numret är jämnt");
    }
});

promise.then(number=>
    {
        const h1 = document.createElement("h1");
        h1.innerText = number;
        document.body.append(h1);
    })
    .catch(error=>console.log(error));
/*
Övning 2: Skapa ett promise som tar 3 sekunder på sig att
    1. Generera ett random nummer mellan 0 och 50
    2. Anropa resolved-funktionen om numret är mellan 10 och 30
    3. Eller anropa reject-funktionen om numret inte är mellan 10 och 30
När promiset blir resolved, ska value visas i ett h1-element. 
När promiset blir rejected, ska felmeddelandet loggas i konsolen
*/
const timerPromise = new Promise(function(resolved, rejected)
{
    setTimeout(function()
    {
        const rand = Math.floor(Math.random()*50);
        if(rand < 30 && rand > 10)
        {
            resolved(rand);
        }
        else
        {
            rejected("Det blev fel");
        }
    }, 3000);
});
timerPromise
.then(number=>
    {
        const h1 = document.createElement("h1");
        h1.innerText = number;
        document.body.append(h1);
    })
    .catch(e=>
        {
            console.log(e)
            const p = document.createElement("p");
            p.innerText = e;
            document.body.append(p);
        });
/*
3) Skapa två promises som båda tar random tid mellan 0 och 5 sekunder på sig att
    1. Generera ett random nummer mellan 0 och 50
    2. Anropa resolved-funktionen om numret är mer än 5
    3. Eller anropa reject-funktionen om numret är mindre än 5
När promiset blir resolved, ska value samt vilket promise det kommer ifrån visas i ett h1-element. 
När promiset blir rejected, ska felmeddelandet samt vilket promise det kom ifrån loggas i konsolen.
*/
//const rand = Math.floor(Math.random()*50);
const promise1 = new Promise(function(resolved, rejected)
{
    setTimeout(function()
    {
        const rand = Math.floor(Math.random()*50);
        if(rand > 5)
        {
            resolved(rand);
        }
        else if(rand < 5)
        {
            rejected("Det blev fel");
        }
    }, Math.floor(Math.random()*5));
});
promise1.then(rand=>
    {
        const h1 = document.createElement("h1");
        h1.innerText = rand;
        document.body.append(h1);
        h1.style.color="red";
    })
    .catch(e=>
        {
            console.log(e)
            const p = document.createElement("p");
            p.innerText = e;
            document.body.append(p);
        });
const promise2 = new Promise(function(resolved, rejected)
{
    setTimeout(function()
    {
        const rand = Math.floor(Math.random()*50);
        if(rand > 5)
        {
            resolved(rand);
        }
        else if(rand < 5)
        {
            rejected("Det blev fel");
        }
    }, Math.floor(Math.random()*5));
});

promise2.then(rand=>
    {
        const h1 = document.createElement("h1");
        h1.innerText = rand;
        document.body.append(h1);
        h1.style.color="red";
    })
    .catch(e=>
        {
            console.log(e)
            const p = document.createElement("p");
            p.innerText = e;
            document.body.append(p);
        });

// function returnPromise()
// {
//     const timerPromise = new Promise(function
//         (resolve, reject)
//         {
//             setTimeout(function()
//             {
//             const randNum = Math.round(Math.random()* 100);

//             if (randNum > 50)
//             {
//                 resolve(randNum)
//             }
//             else
//             {
//                 reject("Numret är mindre än 50");
//             }
//         }, 2000);
//         });
//         return timerPromise;
// }

// const myPromise = returnPromise();
// console.log(myPromise);
// myPromise
//     .then(value=>console.log(value))
//     .catch((error=>console.log(error)));