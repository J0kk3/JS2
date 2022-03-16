// const img = document.createElement("img");
// document.body.appendChild(img);
//Detta funkar inte
// img.src="./img/dragon.jpg";

//const imgUrl = new URL("./img/dragon.jpg", import.meta.url);
//img.src = imgUrl.href; //kan använda .toString(); || .href;

const imgUrls =
[
    new URL("./img/ballongvisp.jpg", import.meta.url),
    new URL("./img/dragon.jpg", import.meta.url),
    new URL("./img/evilcat.jpg", import.meta.url)
];

for(const el of imgUrls)
{
    const img = document.createElement("img");
    document.body.appendChild(img);
    img.src = el.href;
}