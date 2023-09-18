const items = [];


class Item {
    constructor(source, itemId, itemName, itemDescription, keywords, origin, collection, dateOfOrigin, dateDonated, donatedBy){
        this.source = source;
        this.itemId = itemId;
        this.itemName = itemName;
        this.itemDescription = itemDescription;
        this.keywords = keywords;
        this.origin = origin;
        this.collection = collection;
        this.dateOfOrigin = dateOfOrigin;
        this.dateDonated = dateDonated;
        this.donatedBy = donatedBy;

    }
}

const Item1 = new Item (
    "/images/museum (1).jpg",
    1,
    "World War I Plaque",
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
    ["Gallipoli","War"],
    "New Zealand",
    "War",
    "1981",
    "2009",
    "Tom Smith",
);


const Item2 = new Item (
    "/images/museum (13).jpg",
    2,
    "Stained Glass Painting",
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
    ["Art","Stained glass"],
    "New Zealand",
    "Art",
    "1941",
    "1988",
    "Frank Peters",
);

const Item3 = new Item (
    "/images/museum (16).jpg",
    3,
    "D Grant, SBHS Headmaster",
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
    ["War","Headmaster"],
    "New Zealand",
    "War",
    "1918",
    "1949",
    "William Te Amo",
);


// window.onload = function() {

//     pushContent();
//     fillContents();
// }


// function pushContent() {
    
//     items.push(Item1);
//     items.push(Item2);
//     items.push(Item3);
// }

// function fillContents() {

    
    
//     for (var i=0; i<items.length; i++) {
//         var main = document.getElementById("content");
//         var list = document.createElement("li");
//         var image = document.createElement("img");
//         var heading = document.createElement("h3");
//         var subheading = document.createElement("p");
//         var date = document.createElement("p")

//         main.appendChild(image);
//         main.appendChild(heading);
//         main.appendChild(subheading);
//         main.appendChild(date);
    
//         image.src = items[i].source;
//         heading.innerHTML = items[i].itemName;
//         subheading.innerHTML = items[i].collection;
//         date.innerHTML = items[i].dateOfOrigin;
//     }
    
// }