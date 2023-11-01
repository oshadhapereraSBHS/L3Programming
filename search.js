window.onload = function () {
    pushContent();
    check();
    fillContents();
    fillFilters();
document.getElementById("removeButton").style.display = "none";

document.getElementById("overlay").style.display = "none"

fillArray()

}
function fillArray(){
for (var i = 0; i < searchDisplay.length; i++) {
    imageSources.push(searchDisplay[i].source);
}

newPage();
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
    document.getElementById("removeButton").style.display = "block";

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
const imageSources = [];
 
    
function remove(){
    location.reload();
}

// function newPage() {
//     const imageList = document.getElementById("content");
//     const overlay = document.getElementById("overlay");
//     const overlayImage = document.getElementById("overlayImage");
//     const closeButton = document.getElementById("closeButton");

//     imageList.addEventListener("click", function (event) {
//         const target = event.target;
//         const listItem = findClosestListItem(target);

//         if (listItem) {
//             const clickedImageSrc = listItem.querySelector("img").src;

//             const i = Array.from(imageList.children).indexOf(listItem);

//             if (i >= 0 && i < searchDisplay.length) {
//                 overlayImage.src = clickedImageSrc;
//                 // Set other details as needed
//                 overlay.style.display = "grid";
//                 document.getElementById("container").style.display = "none";
//                 document.getElementById("itemTitle").innerHTML = searchDisplay[i].itemName; // Set item title
//             document.getElementById("itemId").innerHTML = searchDisplay[i].itemId
//             document.getElementById("itemDescription").innerHTML = searchDisplay[i].itemDescription
//             document.getElementById("itemKeywords").innerHTML = searchDisplay[i].keywords[0] + ", " + searchDisplay[i].keywords[1]
//             document.getElementById("itemCollection").innerHTML = searchDisplay[i].collection
//             document.getElementById("itemOrigin").innerHTML = searchDisplay[i].origin
//             document.getElementById("itemDateOfOrigin").innerHTML = searchDisplay[i].dateOfOrigin
//             document.getElementById("itemDateDonated").innerHTML = searchDisplay[i].dateDonated
//             document.getElementById("itemDonatedBy").innerHTML = searchDisplay[i].donatedBy
//             }
//         }
//     });

//     closeButton.addEventListener("click", function () {
//         overlay.style.display = "none";
//         document.getElementById("container").style.display = "block";
//     });

//     function findClosestListItem(element) {
//         while (element) {
//             if (element.tagName === "LI") {
//                 return element;
//             }
//             element = element.parentElement;
//         }
//         return null;
//     }
// }