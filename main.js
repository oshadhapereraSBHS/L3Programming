const items = [];
const searchDisplay = [];


class Item {
    constructor(source, itemId, itemName, itemDescription, keywords, origin, collection, dateOfOrigin, dateDonated, donatedBy) {
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

function searchPage() {
    window.location.href = "search.html";

    var intialSearchText = document.getElementById("searchText").value;
    var finalSeachText = intialSearchText.toLowerCase();
    localStorage.setItem("searchText", finalSeachText)

}

function homePage() {
    window.location.href = "index.html"
}


function checkKeyPress(event) {
    if (event.keyCode === 13) {
        event.preventDefault();
        searchPage();
    }
}
const filters = [];

function displayArrayInContainer(data, containerId, arrayName) {
    const container = document.getElementById(containerId);
    container.style.fontWeight = 'bold';

    for (var i = 0; i < data.length; i++) {
        var checkbox = document.createElement("input");
        checkbox.type = "checkbox";

        checkbox.setAttribute("data-array-name", arrayName);
        checkbox.setAttribute("data-array-item", data[i]);

        var resultItem = document.createElement("label");
        resultItem.classList.add('p-text');

//         resultItem.innerHTML = data[i];

//         var lineBreak = document.createElement("br");
//         container.appendChild(lineBreak);

//         container.appendChild(checkbox);
//         container.appendChild(resultItem);

//         checkbox.addEventListener("click", function () {
//             var arrayIndex = this.getAttribute("data-array-name");
//             var arrayItem = this.getAttribute("data-array-item");

//             const nestedFilters = [arrayIndex, arrayItem];

//             filters.push(nestedFilters);
//         });
    }
}