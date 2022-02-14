//Övning 1
const person =
{
    first: 'Elon',
    last: 'Musk',
    twitter: '@elonmusk',
    company: 'Space X'
}
function logCompAndTwitter({twitter, company})
{
    console.log(company, twitter);
}
logCompAndTwitter(person);

//Övning 2
h1 = document.createElement("h1");
document.body.appendChild(h1);

function displayFullName({firstE},{lastE})
{
    return h1.innerText = firstE + " " + lastE; //UNDEFINED WIIE! :D
    // return { firstE: firstE, lastE: lastE }
}
const elon = displayFullName(person.first, person.last);

//Övning 5
const person0 =
{
    first: "Clara",
    last: "Leivas",
    location: "Malmö"
}
const person1 =
{
    first: "Jonathan",
    last: "Sandqvist",
    location: "Los Angeles"
}

function combineNames({first}, {last})
{
    console.log(first, last);
    return { firstName: first, lastName: last }
}

const person2 = combineNames(person1, person0);