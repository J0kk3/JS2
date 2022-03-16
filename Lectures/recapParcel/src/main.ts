// const img = document.createElement("img");
// document.body.appendChild(img);
//Detta funkar inte
// img.src="./img/dragon.jpg";

//const imgUrl = new URL("./img/dragon.jpg", import.meta.url);
//img.src = imgUrl.href; //kan använda .toString(); || .href;

const imgNames = ["ballongvisp", "dragon", "evilcat"];

for(const el of imgNames)
{
    const img = document.createElement("img");
    document.body.appendChild(img);
    const imgUrl = new URL(`.img/${el}.jpg`, import.meta.url);
    img.src = imgUrl.href;
}