const url = "https://productassignment-56bbb-default-rtdb.europe-west1.firebasedatabase.app/.json";
const kryddaUrl = "https://productassignment-56bbb-default-rtdb.europe-west1.firebasedatabase.app/Krydda.json";
const iKaffeUrl = "https://console.firebase.google.com/u/0/project/productassignment-56bbb/database/productassignment-56bbb-default-rtdb/data/iKaffe.json";
const matUrl = "https://productassignment-56bbb-default-rtdb.europe-west1.firebasedatabase.app/mat.json";
const äppleUrl = "https://productassignment-56bbb-default-rtdb.europe-west1.firebasedatabase.app/%C3%84pple.json";
const ölUrl = "https://productassignment-56bbb-default-rtdb.europe-west1.firebasedatabase.app/%C3%96l.json";

fetch(url)
    .then(r=>r.json())
    .then(d=>{console.log("Listar alla produkter", d)
    //Logga endast namnet på varje produkt i konsolen
    for(const i in d)
    {
        console.log(i);
    }
});

const namn0 = document.getElementById("namn0");
fetch(ölUrl)
    .then(r=>r.json())
    .then(d=>{d
        //undefined
        namn0.innerHTML = ölUrl.namn;
});
const namn1 = document.getElementById("namn1");
const namn2 = document.getElementById("namn2");
const namn3 = document.getElementById("namn3");
const namn4 = document.getElementById("namn4");

const märke0 = document.getElementById("märke0");
const märke1 = document.getElementById("märke1");
const märke2 = document.getElementById("märke2");
const märke3 = document.getElementById("märke3");
const märke4 = document.getElementById("märke4");

const pris0 = document.getElementById("pris0");
const pris1 = document.getElementById("pris1");
const pris2 = document.getElementById("pris2");
const pris3 = document.getElementById("pris3");
const pris4 = document.getElementById("pris4");

const desc0 = document.getElementById("desc0");
const desc1 = document.getElementById("desc1");
const desc2 = document.getElementById("desc2");
const desc3 = document.getElementById("desc3");
const desc4 = document.getElementById("desc4");