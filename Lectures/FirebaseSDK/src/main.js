import {db} from "./modules/firebaseApp.js";
import {onValue, ref, remove, push, update} from "firebase/database";

//Databasreferens
const dbRef = ref(db, "Jocke"); //kollar bara ändringar här
// const dbRef = ref(db); //utan endpoint

onValue(dbRef, snapshot =>
{
    const data = snapshot.val();
    displayNames(data);
});

function displayNames(data)
{
    const div = document.querySelector("#db-names");
    div.innerHTML = "";

    for(const key in data)
    {
        console.log(key, data[key].name);
        const h5 = document.createElement("h5");
        h5.innerText = data[key].testigen;
        div.append(h5);
    }
};

const removeBtn = document.querySelector("removeBtn");
removeBtn.addEventListener("click", (e) =>
{
    e.preventDefault();
    const idInput = document.querySelector("#id")
    const movieRef = ref(db, "direktUrl" + idInput.value); //markera direkt url till grejen som ska tas bort
    remove(movieRef);
});

const addBtn = document.querySelector("#add");
addBtn.addEventListener("click", (e)=>
{
    e.preventDefault();

    const nameInput = document.querySelector("#name");
    const directorInput = document.querySelector("#director");
    const scoreInput = document.querySelector("#score");

    const movieToPost =
    {
        name: nameInput.value,
        director: directorInput.value,
        score: scoreInput.value
    }
    console.log(movieToPost);

    const newMovieKey = push(dbRef).key;
    console.log(newMovieKey);

    const newMovie = {};
    newMovie[newMovieKey] = movieToPost;
    update(dbRef, newMovie)
});

const changeBtn = document.querySelector("#change");
changeBtn.addEventListener("cick", e=>
{
    e.preventDefault();
    const nameInput = document.querySelector("#changeName");
    const directorInput = document.querySelector("#changeDirector");
    const scoreInput = document.querySelector("#changeScore");

    const id = "randomfilepath";
    const movieToUpdate = {};
    movieToUpdate[id + "/name"] = nameInput.value;
    update(dbRef, movieToUpdate);
});