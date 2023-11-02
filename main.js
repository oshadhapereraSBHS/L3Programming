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
    if (document.getElementById("searchText").value == null || document.getElementById("searchText").value == "") {
        alert("Please enter a valid search text")
    } else {
        var intialSearchText = document.getElementById("searchText").value;
        var finalSearchText = intialSearchText.toLowerCase();
        localStorage.setItem("searchText", finalSearchText);
        window.location.href = "search.html";
    }
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

function redirectToGallery() {
    window.location.href = "gallery.html";
}

function redirectToCatalogue() {
    window.location.href = "search.html";
}

function redirectToContact() {
    window.location.href = "contact.html";
}
var currentIndex = 0; // Track the current index of the displayed image

function openFullscreenImage(index) {
    var gallery = document.querySelector(".gallery");
    var heading = document.querySelector(".pageHeading");

    var backgroundFiller1 = document.getElementById("backgroundFiller1");
    var backgroundFiller2 = document.getElementById("backgroundFiller2");
    var navDiv = document.querySelector(".navDiv");


    var fullscreenImage = document.querySelector(".fullscreen-image");
    var image = fullscreenImage.querySelector("img");
    image.src = items[index].source;
    fullscreenImage.style.display = "grid";
    gallery.style.display = "none";
    heading.style.display = "none";

    // Hide the divs
    backgroundFiller1.style.display = "none";
    backgroundFiller2.style.display = "none";
    navDiv.style.display = "none";


    currentIndex = index;
}

// Function to close the fullscreen image
function closeFullscreenImage() {
    var gallery = document.querySelector(".gallery");
    var fullscreenImage = document.querySelector(".fullscreen-image");
    fullscreenImage.style.display = "none";
    gallery.style.display = "grid";


    var backgroundFiller1 = document.getElementById("backgroundFiller1");
    var backgroundFiller2 = document.getElementById("backgroundFiller2");
    var navDiv = document.querySelector(".navDiv");

    // Hide the divs
    backgroundFiller1.style.display = "grid";
    backgroundFiller2.style.display = "grid";
    navDiv.style.display = "grid";
}
// Function to display the previous image
function showPreviousImage() {
    if (currentIndex > 0) {
        currentIndex--;
    } else {
        currentIndex = items.length - 1; // Reset to the last image if at the first image
    }
    openFullscreenImage(currentIndex);
}

// Function to display the next image
function showNextImage() {
    if (currentIndex < items.length - 1) {
        currentIndex++;
    } else {
        currentIndex = 0; // Reset to the first image if at the end
    }
    openFullscreenImage(currentIndex);
}
// Define your fillGallery function
function fillGallery() {
    var gallery = document.querySelector(".gallery");
    for (var i = 0; i < items.length; i++) {
        var list = document.createElement("div");
        list.className = "gallery-item";
        var image = document.createElement("img");
        image.src = items[i].source;
        image.alt = "Image " + (i + 1);
        list.appendChild(image);
        gallery.appendChild(list);
        // Add a click event listener to each gallery item
        list.addEventListener("click", (function (index) {
            return function () {
                openFullscreenImage(index);
            };
        })(i));
    }
}


window.onload = function () {
    pushContent();
    fillGallery();
    // Close full screen image when clicking on the close icon
    var closeIcon = document.querySelector(".close-icon");
    if (closeIcon) {
        closeIcon.addEventListener("click", closeFullscreenImage);
    }
    // Add event listeners to the left and right arrows
    var arrowLeft = document.querySelector(".arrow-left");
    var arrowRight = document.querySelector(".arrow-right");
    if (arrowLeft) {
        arrowLeft.addEventListener("click", showPreviousImage);
    }
    if (arrowRight) {
        arrowRight.addEventListener("click", showNextImage);
    }
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

function contactSubmit() {
    var required1 = document.getElementById("required1").value;
    var required2 = document.getElementById("required2").value;
    var required3 = document.getElementById("required3").value;
    // if (required1 == null || required1 == "") {
    //     alert("Please your first name")
    // } else if (required2 == null || required2 == "") {
    //     alert("Please your email address")
    // } else if (required3 == null || required3 == "") {
    //     alert("Please your message")
    // } else {
    //     document.getElementById("row2").style.display = "none"
    //     document.getElementById("col2").style.display = "none"
    //     document.getElementById("col1").style.display = "none"
    //     document.getElementById("receivedContact").innerHTML = "Thank you for contacting us."
    // }
}