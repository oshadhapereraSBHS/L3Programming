window.onload = function () {
    pushContent();
    check();
    fillContents();
    fillFilters();

}

var searchText = localStorage.getItem("searchText")

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


function check() {
    for (var i = 0; i < items.length; i++) {



        if (items[i].source.toLowerCase() == searchText ||
            items[i].itemId == searchText ||
            items[i].itemName.toLowerCase() == searchText ||
            items[i].keywords[0].toLowerCase() == searchText ||
            items[i].keywords[1].toLowerCase() == searchText ||
            items[i].origin.toLowerCase() == searchText ||
            items[i].collection.toLowerCase() == searchText ||
            items[i].dateOfOrigin == searchText ||
            items[i].dateDonated == searchText ||
            items[i].donatedBy.toLowerCase() == searchText) {
            searchDisplay.push(items[i]);
        }
    }
}

function fillContents() {
    for (var i = 0; i < searchDisplay.length; i++) {
        var main = document.getElementById("content");
        var list = document.createElement("li");
        var image = document.createElement("img");
        var heading = document.createElement("h3");
        var date = document.createElement("p")

        main.appendChild(list);
        list.appendChild(image);
        list.appendChild(heading);
        list.appendChild(date);

        image.src = searchDisplay[i].source;
        heading.innerHTML = searchDisplay[i].itemName;
        date.innerHTML = searchDisplay[i].dateOfOrigin;




    }
}


function fillFilters() {

    const keywords = [];
    const origin = [];
    const collection = [];
    const dateOfOrigin = [];

    for (var i = 0; i < searchDisplay.length; i++) {
        keywords.push(searchDisplay[i].keywords[0]);
        keywords.push(searchDisplay[i].keywords[1]);
        origin.push(searchDisplay[i].origin);
        collection.push(searchDisplay[i].collection);
        dateOfOrigin.push(searchDisplay[i].dateOfOrigin);

    }

    const newKeywords = [...new Set(keywords)];
    const newOrigin = [...new Set(origin)];
    const newCollection = [...new Set(collection)];
    const newDateOfOrigin = [...new Set(dateOfOrigin)];

    const filters = [
        [newKeywords, "keywordHeadingId"],
        [newOrigin, "originHeadingId"],
        [newCollection, "collectionHeadingId"],
        [newDateOfOrigin, "dateOfOriginHeadingId"]
    ]

    displayArrayInContainer(newKeywords, "keywordHeadingId", "keywords");
    displayArrayInContainer(newOrigin, "originHeadingId", "origin");
    displayArrayInContainer(newCollection, "collectionHeadingId", "collection");
    displayArrayInContainer(newDateOfOrigin, "dateOfOriginHeadingId", "dateOfOrigin");

    for (var i = 0; i < filters.length; i++) {
        if (filters[i][0].length === 0) {
            document.getElementById(filters[i][1]).style.display = 'none';
            document.getElementById("filterButton").style.display = 'none';
        }
    }
}


function filter() {

    for (var i = searchDisplay.length - 1; i >= 0; i--) {
        var shouldRemove = true; // Initialize a flag

        for (var x = 0; x < filters.length; x++) {

            var newFilter = filters[x][1].toLowerCase()
            if (searchDisplay[i].keywords[0].toLowerCase() == newFilter || searchDisplay[i].keywords[1].toLowerCase() == newFilter || searchDisplay[i].origin.toLowerCase() == newFilter || searchDisplay[i].collection.toLowerCase() == newFilter || searchDisplay[i].dateOfOrigin.toLowerCase() == newFilter) {
                shouldRemove = false; // At least one filter matched
                break; // No need to check other filters for this element

            } 
        }

        if (shouldRemove) {
            document.getElementById("content").removeChild(document.getElementById("content").children[i]);
            searchDisplay.splice(i, 1);
        }
    }

}

