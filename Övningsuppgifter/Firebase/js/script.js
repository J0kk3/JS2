const url = "https://productassignment-56bbb-default-rtdb.europe-west1.firebasedatabase.app/.json";
// const kryddaUrl = "https://productassignment-56bbb-default-rtdb.europe-west1.firebasedatabase.app/Krydda.json";
// const iKaffeUrl = "https://console.firebase.google.com/u/0/project/productassignment-56bbb/database/productassignment-56bbb-default-rtdb/data/iKaffe.json";
// const matUrl = "https://productassignment-56bbb-default-rtdb.europe-west1.firebasedatabase.app/mat.json";
// const äppleUrl = "https://productassignment-56bbb-default-rtdb.europe-west1.firebasedatabase.app/%C3%84pple.json";
// const ölUrl = "https://productassignment-56bbb-default-rtdb.europe-west1.firebasedatabase.app/Öl.json";

fetch(url)
    .then(r=>
        {
        return r.json();
        })
    .then(d=>
        {
            console.log(d);
            for(const key in d)
            {
                // console.log(key, typeof key, d[key].url);
                let div = document.createElement("div");
                document.body.appendChild(div);
                div.className = "card";
                div.style.display="inline-block";
                let h3 = document.createElement("h3");
                div.appendChild(h3);
                h3.innerText=d[key].märke;
                let p0 = document.createElement("p");
                div.appendChild(p0);
                p0.innerText=d[key].namn;
                let img = document.createElement("img");
                div.appendChild(img);
                img.style.width="100px";
                img.src=d[key].url;
                let p1 = document.createElement("p");
                div.appendChild(p1);
                p1.innerText="pris: " + d[key].pris + "kr";
                let p2 = document.createElement("p");
                div.appendChild(p2);
                p2.innerText=d[key].beskrivning;
                p2.style.fontSize="10px";
            }
        });