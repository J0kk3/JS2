const img = document.createElement("img");
document.body.appendChild(img);
//Detta funkar inte
// img.src="./img/dragon.jpg";

const imgUrl = new URL("./img/dragon.jpg", import.meta.url);
img.src = imgUrl.href; //kan använda .toString(); || .href;