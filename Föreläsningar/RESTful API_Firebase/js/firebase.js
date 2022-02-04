const url2 = "https://firstdatabaseproject-56909-default-rtdb.europe-west1.firebasedatabase.app/moviesDB.json";

fetch(url2)
    .then(r=>r.json())
    .then(d=>{console.log("Listar alla filmer", d)
    //Logga endast namnet på varje film i konsolen
    for(const movie in d)
    {
        console.log(movie.name);
    }
});

const newMovie =
{
    name: "Rise of Skywalker",
    director: "JJ Abrams",
    score: 6.5
};

const headerObject2 =
{
    "Content-Type": 'application/json; charset=UTF-8'
};

const init = 
{
    method: "POST",
    body: JSON.stringify(newMovie),
    headers: headerObject2
}
//Kommenterar bort, så samma post inte läggs till varje gång
// fetch(url2, init)
//     .then(r=>r.json())
//     .then(d=>console.log("Posted new movie", d));

//Ta bort post nr 0
// const hannibalURL = "https://firstdatabaseproject-56909-default-rtdb.europe-west1.firebasedatabase.app/moviesDB/0.json";
// fetch(hannibalURL, 
//     {
//         method: "DELETE",
//     })
//     .then(r=>r.json())
//     .then(d=>console.log("DELETE", d));

//Put
const skywalkerURL = "https://firstdatabaseproject-56909-default-rtdb.europe-west1.firebasedatabase.app/moviesDB/-Mv3JvipVGs4al6c5MQz.json"
fetch(skywalkerURL,
{
    method: "PUT",
    body: JSON.stringify.json(
    {
        name: "Scarface"
    }),
    headers: headerObject2,
}).then(r=>r.json()).then(d=>console.log(d));

//Patch
const skywalkerUR2L = "https://firstdatabaseproject-56909-default-rtdb.europe-west1.firebasedatabase.app/moviesDB/-Mv3JvipVGs4al6c5MQz.json"
fetch(skywalkerURL2,
{
    method: "PATCH",
    body: JSON.stringify.json(
    {
        name: "Godfather"
    }),
    headers: headerObject2,
}).then(r=>r.json()).then(d=>console.log(d));