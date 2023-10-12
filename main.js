const items = [];
const searchDisplay = [];   


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

function searchPage(){
    window.location.href= "search.html";
    var intialSearchText = document.getElementById("searchText").value;
    var finalSeachText = intialSearchText.toLowerCase();
    localStorage.setItem("searchText", finalSeachText)
}

function homePage(){
    window.location.href= "index.html"
}
