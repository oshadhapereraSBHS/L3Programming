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

        resultItem.innerHTML = data[i];

        var lineBreak = document.createElement("br");
        container.appendChild(lineBreak);

        container.appendChild(checkbox);
        container.appendChild(resultItem);

        checkbox.addEventListener("click", function () {
            var arrayIndex = this.getAttribute("data-array-name");
            var arrayItem = this.getAttribute("data-array-item");

            const nestedFilters = [arrayIndex, arrayItem];

            filters.push(nestedFilters);
        });
    }
}

function redirectToGallery(){
    window.location.href = "gallery.html";
}
function redirectToCatalogue(){
    window.location.href = "catalogue.html";
}
function redirectToContact(){
    window.location.href = "contact.html";
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
    console.log(items.length)
        for (var i=0; i<items.length; i++) {
            var main = document.getElementById("gallery");
            var list = document.createElement("li");
            var image = document.createElement("img");

    
            main.appendChild(list);
    
            list.appendChild(image);

        
            image.src = items[i].source;

        }
        
}


function searchPage(){
    window.location.href= "search.html"
}


let modalIndex = 0;
const modal = document.getElementById('slideshow-modal');
const modalImage = document.getElementById('modal-image');

function openSlideshow(index) {
    modal.style.display = 'block';
    modalImage.src = items[index].source; // Set the correct image source
    modalIndex = index;
}

function closeSlideshow() {
    modal.style.display = 'none';
}

function plusSlides(n) {
    modalIndex += n;
    if (modalIndex < 0) {
        modalIndex = items.length - 1;
    } else if (modalIndex >= items.length) {
        modalIndex = 0;
    }
    modalImage.src = items[modalIndex].source; // Set the correct image source
}

