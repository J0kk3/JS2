const url = "https://jsonplaceholder.typicode.com/posts/";

const post = 
{
    title: "repost",
    body: "lorem",
    userid: 33
}

const header = 
{
    "Content-type": 'application/json; charset=UTF-8'
}

//Lägger till en post
fetch(url,
{
    method: "POST",
    body: JSON.stringify(post),
    headers: header
})
    .then(r=>r.json())
    .then(d=>console.log(d));
//Lägger till post nr12
const urlDelete = 
//Listar alla posts
fetch(url)
    .then(r=>r.json())
    .then(d=>console.log(d));
