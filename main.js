// Define an array to store items and another for search results
const items = [];
const searchDisplay = [];

// Define a class to create Item objects
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

// Function to navigate to the search page
function searchPage() {
    // Check if the search text is empty, and display alert if it is.
    if (document.getElementById("searchText").value == null || document.getElementById("searchText").value == "") {
        alert("Please enter a valid search text");
    } else {
        // Convert search text to lowercase and store the search text in local storage, then navigate to the search page
        var initialSearchText = document.getElementById("searchText").value;
        var finalSearchText = initialSearchText.toLowerCase();
        localStorage.setItem("searchText", finalSearchText);
        window.location.href = "search.html";
    }
} //end of searchPage function

// Function to navigate to the home page
function homePage() {
    window.location.href = "index.html";
} //end of homePage function

// Function to trigger a search on Enter key press - and using preventDefault to stop default action of reloading
function checkKeyPress(event) {
    if (event.keyCode === 13) {
        event.preventDefault();
        searchPage();
    }
} //end of checkKeyPress function

// Array to store filters
const filters = [];

// Function to display an array in a container
function displayArrayInContainer(data, containerId, arrayName) {
    //defining container from HTML page, and making text bold
    const container = document.getElementById(containerId);
    container.style.fontWeight = 'bold';

    //looping through array
    for (var i = 0; i < data.length; i++) {
        //creating checkbox inputs
        var checkbox = document.createElement("input");
        checkbox.type = "checkbox";

        // Store array name and item to be used for filtering
        checkbox.setAttribute("dataArrayName", arrayName);
        checkbox.setAttribute("dataArrayItem", data[i]);

        //variable for results as label elements
        var resultItem = document.createElement("label");
        resultItem.classList.add('p-text');

        //text for results label
        resultItem.innerHTML = data[i];

        //adding spacess between lines
        var lineBreak = document.createElement("br");
        container.appendChild(lineBreak);

        //appending checkboxes and result labels
        container.appendChild(checkbox);
        container.appendChild(resultItem);

        // Add event listener for checkbox click to handle filtering
        checkbox.addEventListener("click", function () {
            //getting attributes for filters
            var arrayIndex = this.getAttribute("dataArrayName");
            var arrayItem = this.getAttribute("dataArrayItem");

            // Store selected filters in a nested array
            const nestedFilters = [arrayIndex, arrayItem];

            //push nested filters elements into filters array
            filters.push(nestedFilters);
        });
    }
} //end of displayArrayInContainer function

// Functions to navigate to other pages
function redirectToGallery() {
    window.location.href = "gallery.html";
} //end of redirectToGallery function

function redirectToCatalogue() {
    window.location.href = "search.html";
} //end of redirectToCatalogue function

function redirectToContact() {
    window.location.href = "contact.html";
} //end of redirectToContact function

// Variable to track the currently displayed image
var currentIndex = 0;

// Function to open a fullscreen image
function openFullscreenImage(i) {
    // defining variables in respect to HTML elements
    var gallery = document.querySelector(".gallery");
    var heading = document.querySelector(".pageHeading");
    var backgroundFiller1 = document.getElementById("backgroundFiller1");
    var backgroundFiller2 = document.getElementById("backgroundFiller2");
    var navDiv = document.querySelector(".navDiv");

    // Elements to show when displaying the fullscreen image
    var fullscreenImage = document.querySelector(".fullscreenImage");
    var image = fullscreenImage.querySelector("img");
    //defining image sources from the items array
    image.src = items[i].source;
    //grid display for fullscreen images in gallery
    fullscreenImage.style.display = "grid";

    //hiding gallery lists and navigation bar in fullscreen mode
    gallery.style.display = "none";
    heading.style.display = "none";
    backgroundFiller1.style.display = "none";
    backgroundFiller2.style.display = "none";
    navDiv.style.display = "none";

    //setting current index to find which image to show full screen
    currentIndex = i;
} //end of openFullScreenImage function

// Function to close the fullscreen image
function closeFullscreenImage() {
    // defining variables in respect to HTML elements
    var gallery = document.querySelector(".gallery");
    var fullscreenImage = document.querySelector(".fullscreenImage");
    //hiding full screen image
    fullscreenImage.style.display = "none";
    //showing gallery list
    gallery.style.display = "grid";

    // Elements to show when the fullscreen image is closed
    var backgroundFiller1 = document.getElementById("backgroundFiller1");
    var backgroundFiller2 = document.getElementById("backgroundFiller2");
    var navDiv = document.querySelector(".navDiv");
    backgroundFiller1.style.display = "grid";
    backgroundFiller2.style.display = "grid";
    navDiv.style.display = "grid";
} //end of closeFullScreenImage function

// Function to show the previous image in fullscreen
function showPreviousImage() {
    //decreasing current index so image goes to the previous image
    if (currentIndex > 0) {
        currentIndex--;
    } else {
        //if the image is the first image in the list, go back to the last image in the list
        currentIndex = items.length - 1;
    }
    //open fullscreen mode on the current image
    openFullscreenImage(currentIndex);
} //end of showPreviousImage function

// Function to show the next image in fullscreen
function showNextImage() {
    //increasing current index so image goes to the next image
    if (currentIndex < items.length - 1) {
        currentIndex++;
    } else {
        //if the image is the last image in the list, go back to the first image in the list
        currentIndex = 0;
    }
    //open fullscreen mode on the current image
    openFullscreenImage(currentIndex);
} //end of showNextImage function

// Function to populate the gallery with items
function fillGallery() {
    //define gallery unordered list
    var gallery = document.querySelector(".gallery");
    //looping through items array
    for (var i = 0; i < items.length; i++) {
        //creating list items for gallery
        var list = document.createElement("div");
        list.className = "galleryItem";
        //creating images for list items
        var image = document.createElement("img");
        //images sources
        image.src = items[i].source;
        //image alt description
        image.alt = "Image " + (i + 1);
        //appending images to list items
        list.appendChild(image);
        //appending list items to gallery
        gallery.appendChild(list);
        //adding event listener to list items
        list.addEventListener("click", (function (i) {
            return function () {
                //opening corresposnding fullscreen when list item is clicked
                openFullscreenImage(i);
            };
        })(i));
    }
} //end of fillGallery function

// Function to initialize the page
window.onload = function () {
    //closing fullscreen mode
    closeFullscreenImage();
    //pushing content into array
    pushContent();
    //filling gallery with images
    fillGallery();

    // Add event listeners for close, previous, and next buttons when corresponding buttons are clicked
    var closeIcon = document.querySelector(".closeIcon");
    if (closeIcon) {
        closeIcon.addEventListener("click", closeFullscreenImage);
    }
    var arrowLeft = document.querySelector(".arrowLeft");
    var arrowRight = document.querySelector(".arrowRight");
    if (arrowLeft) {
        arrowLeft.addEventListener("click", showPreviousImage);
    }
    if (arrowRight) {
        arrowRight.addEventListener("click", showNextImage);
    }
} //end of window onload function

// Function to populate the items array with Item objects by pushing them into items array
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
} //end of push content function

// Function to handle contact form submission
function contactSubmit() {
    //setting variables for the three required fields
    var required1 = document.getElementById("required1").value;
    var required2 = document.getElementById("required2").value;
    var required3 = document.getElementById("required3").value;
    //if name is not filled in, alert asking for name
    if (required1 == null || required1 == "") {
        alert("Please your first name")
    } else if (required2 == null || required2 == "") {
        //if email is not filled in, alert asking for email
        alert("Please your email address")
    } else if (required3 == null || required3 == "") {
        //if message is not filled in, alert asking for message
        alert("Please your message")
    } else {
        //when submit is pressed, hide cntact form and show thank you message
        document.getElementById("row2").style.display = "none"
        document.getElementById("col2").style.display = "none"
        document.getElementById("col1").style.display = "none"
        document.getElementById("receivedContact").innerHTML = "Thank you for contacting us."
    }
} //end of contactSubmit function