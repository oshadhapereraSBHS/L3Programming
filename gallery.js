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


window.onload = function() {

    pushContent();
    fillGallery()
}


function pushContent() {

    
    items.push(Item1);
    items.push(Item2);
    items.push(Item3);
    items.push(Item4);
    items.push(Item5);
    items.push(Item6);    
    items.push(Item7);
    items.push(Item8);
    items.push(Item9);    
    items.push(Item10);
    items.push(Item11);
    items.push(Item12);
    items.push(Item13);
    items.push(Item14);
    items.push(Item15);
}



function fillGallery(){


        for (var i=0; i<items.length; i++) {
            var main = document.getElementById("gallery");
            var list = document.createElement("li");
            var image = document.createElement("img");

    
            main.appendChild(list);
    
            list.appendChild(image);

        
            image.src = items[i].source;

        }
        
}