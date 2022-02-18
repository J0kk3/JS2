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
function displayFullName({first},{last})
{
    h1 = document.createElement("h1");
    document.body.appendChild(h1);
    console.log(h1);
    return h1.innerText = first + " " + last;
}
const elon = displayFullName(person, person);
//Övning 3
const item =
{
    name: "Xbox One X",
    originalPrice: 499.99,
    discount: 0.15
}

function returnTotalNumberAndPrice(number, item)
{
    h2 = document.createElement("h2");
    document.body.appendChild(h2);
    let price = item.originalPrice * number;
    return h2.innerText = "Total price: " + price +" " + "no of items: " + number;
}
const xboxPrice = returnTotalNumberAndPrice(4, item);
//Övning 4
function xboxDiscountPrice(item)
{
    h3 = document.createElement("h3");
    document.body.appendChild(h3);
    
    discountPrice = item.originalPrice - (item.originalPrice * item.discount);
    
    return h3.innerText = discountPrice;
}
const discountedPrice = xboxDiscountPrice(item);
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