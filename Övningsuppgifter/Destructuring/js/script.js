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
    return {
        firstName: first,
        lastName: last
    }
}

const person2 = combineNames(person1, person0);