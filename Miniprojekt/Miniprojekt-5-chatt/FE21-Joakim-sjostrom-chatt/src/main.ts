/*
Firebase
Max 25 meddelanden i db
läggs till nytt - senaste ska tas bort om lika med eller mer än 25
meddelande ska innehålla textinnehåll & namn på postern

Webappen
först fylla i namn
visa senaste 25 meddelanden
presenteras i kronologisk ordning
lägga till meddelande via formulär
uppdateras direkt med nya meddelanden
ska kunna ta bort sina egna meddelanden
*/
import {db} from "./modules/database";
import {onValue, ref, remove, push, update} from "firebase/database";
import {app} from "./modules/app"
//Referens till databas
const dbRef = ref(db);

onValue(dbRef, (snapshot) =>
{
    const data = snapshot.val();
    console.log("data: " + data);
});
const userName = (document.getElementById("userName") as HTMLInputElement);
const userMsg = (document.getElementById("userMsg") as HTMLInputElement);
const sendMsg = (document.getElementById("sendMsg") as HTMLElement);

sendMsg.addEventListener("click", (e) =>
{
    e.preventDefault();
    if(userName.value || userMsg.value == "")
    {
        return alert("Write a message and user name!");
    }
    else if(userName.value && userMsg.value != "")
    {
        return console.log("test");
    }
});