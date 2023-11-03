//run function when window loads
window.onload = function () {
    // push items into array
    pushContent();

    // Check for search criteria and filter items accordingly
    check();

    // Fill the contents of the page based on search results
    fillContents();

    // Populate filters
    fillFilters();
    //Hide remove button
    document.getElementById("removeButton").style.display = "none";

    // Hide the overlay and fill array with image sources
    document.getElementById("overlay").style.display = "none";
    fillArray();

    // Check if a search text exists in local storage
    if (localStorage.getItem("searchText") == null) {
        searchTextExists = false;
    }

    // If search text exists and no search results are found, display unsuccessful search message
    if (searchTextExists && searchDisplay.length == 0) {
        document.getElementById("filtersHeading").style.display = "none";
        document.getElementById("noItems").innerHTML = "Your search does not match any items.";
    }
    // If no search text exists and no search results are found, hide the filters
    else if (searchTextExists == false && searchDisplay.length == 0) {
        document.getElementById("filtersHeading").style.display = "none";
    }
} //end of window onload function

function fillArray() {
    for (var i = 0; i < searchDisplay.length; i++) {
        //looping through searchDisplay and pushing image sources into imageSources array
        imageSources.push(searchDisplay[i].source);
    }
    // Create overlay using the search results
    newPage();
} //end of fillArray function

// Retrieve search text from local storage and set a flag for it
var searchText = localStorage.getItem("searchText");
var searchTextExists = true;

// Function to populate the items array with item objects
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
} //enf of pushContent function

// Function to check and filter items based on the search criteria
function check() {
    if (localStorage.getItem("searchText") == null) {
        //if not search text entered, set searchTextExists to false
        searchTextExists = false;
    }

    // If search text exists, compare items to search criteria and populate searchDisplay
    if (searchTextExists) {
        //loop throug items array
        for (var i = 0; i < items.length; i++) {
            //change item description to lowercase
            var description = items[i].itemDescription.toLowerCase();
            //set search text to lowercase
            var searchTextLower = searchText.toLowerCase();
            //split item description into individual words
            var words = description.split(' ');
            //flag for matching description to search text
            var matchFound = false;
            //looping through words array
            for (var x = 0; x < words.length; x++) {
                //if search text matched words from description, set matchFound to true
                if (words[x] === searchTextLower) {
                    matchFound = true;
                    break;
                }
            }

            //check if any item properties match the search text (matches for item description were done seperately because it has multiple words and needed to be broken down into seperate words)
            if (items[i].source.toLowerCase() == searchText ||
                items[i].itemId == searchText ||
                items[i].itemName.toLowerCase() == searchText ||
                items[i].keywords[0].toLowerCase() == searchText ||
                items[i].keywords[1].toLowerCase() == searchText ||
                items[i].origin.toLowerCase() == searchText ||
                items[i].collection.toLowerCase() == searchText ||
                items[i].dateOfOrigin == searchText ||
                items[i].dateDonated == searchText ||
                items[i].donatedBy.toLowerCase() == searchText || matchFound) {
                //push matching items into searchDisplay array
                searchDisplay.push(items[i]);

            }
        }
    }
} //end of check function

// Function to populate the page with search results
function fillContents() {
    //loop through search display array
    for (var i = 0; i < searchDisplay.length; i++) {
        //setting variables for elements to be created
        var main = document.getElementById("content");
        var list = document.createElement("li");
        var image = document.createElement("img");
        var heading = document.createElement("h3");
        var date = document.createElement("p");

        //appending elements so unordered list contains list items, and list items contain an image, heading and dat
        main.appendChild(list);
        list.appendChild(image);
        list.appendChild(heading);
        list.appendChild(date);

        //setting image source, item name innerHTML and date innerHTML
        image.src = searchDisplay[i].source;
        heading.innerHTML = searchDisplay[i].itemName;
        date.innerHTML = searchDisplay[i].dateOfOrigin;
    }
} //end of fillContents function

// Function to fill filter containers and determine their visibility
function fillFilters() {
    //setting arrays for filters
    const keywords = [];
    const origin = [];
    const collection = [];
    const dateOfOrigin = [];

    //looping through searchDisplay array
    for (var i = 0; i < searchDisplay.length; i++) {
        //pushing each item propery from searchDisplay into corresponding filter array
        keywords.push(searchDisplay[i].keywords[0]);
        keywords.push(searchDisplay[i].keywords[1]);
        origin.push(searchDisplay[i].origin);
        collection.push(searchDisplay[i].collection);
        dateOfOrigin.push(searchDisplay[i].dateOfOrigin);
    }

    //removing duplicates using sets for filter arrays
    const newKeywords = [...new Set(keywords)];
    const newOrigin = [...new Set(origin)];
    const newCollection = [...new Set(collection)];
    const newDateOfOrigin = [...new Set(dateOfOrigin)];

    //defining an array as a  whole using all previously defined sets
    const filters = [
        [newKeywords, "keywordHeadingId"],
        [newOrigin, "originHeadingId"],
        [newCollection, "collectionHeadingId"],
        [newDateOfOrigin, "dateOfOriginHeadingId"]
    ]

    // Populate filter containers for each filter array using displayArrayInContainer
    displayArrayInContainer(newKeywords, "keywordHeadingId", "keywords");
    displayArrayInContainer(newOrigin, "originHeadingId", "origin");
    displayArrayInContainer(newCollection, "collectionHeadingId", "collection");
    displayArrayInContainer(newDateOfOrigin, "dateOfOriginHeadingId", "dateOfOrigin");

    //loop through filters array
    for (var i = 0; i < filters.length; i++) {
        //hide empty filters
        if (filters[i][0].length === 0) {
            document.getElementById(filters[i][1]).style.display = 'none';
            document.getElementById("filterButton").style.display = 'none';
        }
    }
} //end of fillFilters function

// Function to filter and update the displayed items based on selected filters
function filter() {
    // Display the remove button
    document.getElementById("removeButton").style.display = "block";

    // Create a copy of the searchDisplay array for filtering
    const searchDisplayCopy = [...searchDisplay];
    const contentElement = document.getElementById("content");

    // Clear the existing content in the contentElement
    while (contentElement.firstChild) {
        contentElement.removeChild(contentElement.firstChild);
    }

    for (var i = searchDisplayCopy.length - 1; i >= 0; i--) {
        // Initialize a flag to determine if an item should be removed
        var shouldRemove = true;

        // Loop through the selected filters
        for (var x = 0; x < filters.length; x++) {
            // Convert the current filter to lowercase
            var newFilter = filters[x][1].toLowerCase();

            // Check if the item matches the current filter in terms of keywords, origin, collection, or date of origin
            if (
                searchDisplayCopy[i].keywords[0].toLowerCase() == newFilter ||
                searchDisplayCopy[i].keywords[1].toLowerCase() == newFilter ||
                searchDisplayCopy[i].origin.toLowerCase() == newFilter ||
                searchDisplayCopy[i].collection.toLowerCase() == newFilter ||
                searchDisplayCopy[i].dateOfOrigin.toLowerCase() == newFilter
            ) {
                // Set shouldRemove to false if match found
                shouldRemove = false;
                break;
            }
        }

        // If the item should not be removed based on filters, carry on
        if (!shouldRemove) {
            // Get the current item from the copied searchDisplay array
            const item = searchDisplayCopy[i];

            // Create new list items to display the item
            const li = document.createElement("li");
            const img = document.createElement("img");
            var heading = document.createElement("h3");
            var date = document.createElement("p");

            // Append heading and date to the list item
            li.appendChild(img);
            contentElement.appendChild(li);
            li.appendChild(heading);
            li.appendChild(date);

            // Set the image source, heading text, and date text based on the item
            img.src = item.source;
            heading.innerHTML = item.itemName;
            date.innerHTML = item.dateOfOrigin;
        }
    }
} //end of filter function

// Array to store image sources
const imageSources = [];

// Function to reload the page when remove filters is pressed
function remove() {
    location.reload();
} //end of remove function

// Function to open overlay for displaying item details
function newPage() {
    // Get references to relevant elements on the page
    const imageList = document.getElementById("content");
    const overlay = document.getElementById("overlay");
    const overlayImage = document.getElementById("overlayImage");
    const closeButton = document.getElementById("closeButton");

    // Add a click event listener to the image list
    imageList.addEventListener("click", function (event) {
        const target = event.target;

        // Find the closest list item clicked
        const listItem = findClosestListItem(target);

        if (listItem) {
            // Get the source of the clicked image and its index in the list
            const clickedImageSrc = listItem.querySelector("img").src;
            const i = Array.from(imageList.children).indexOf(listItem);

            //Loop through array
            if (i >= 0 && i < searchDisplay.length) {
                // Set the overlay image source
                overlayImage.src = clickedImageSrc;

                // Display the overlay and hide the main content
                overlay.style.display = "grid";
                document.getElementById("container").style.display = "none";

                // Set the details of the selected item in the overlay using item properties
                document.getElementById("itemTitle").innerHTML = searchDisplay[i].itemName;
                document.getElementById("itemId").innerHTML = searchDisplay[i].itemId;
                document.getElementById("itemDescription").innerHTML = searchDisplay[i].itemDescription;
                document.getElementById("itemKeywords").innerHTML = searchDisplay[i].keywords[0] + ", " + searchDisplay[i].keywords[1];
                document.getElementById("itemCollection").innerHTML = searchDisplay[i].collection;
                document.getElementById("itemOrigin").innerHTML = searchDisplay[i].origin;
                document.getElementById("itemDateOfOrigin").innerHTML = searchDisplay[i].dateOfOrigin;
                document.getElementById("itemDateDonated").innerHTML = searchDisplay[i].dateDonated;
                document.getElementById("itemDonatedBy").innerHTML = searchDisplay[i].donatedBy;
            }
        }
    });

    // Add a click event listener to the close button of the overlay
    closeButton.addEventListener("click", function () {
        // Hide the overlay
        overlay.style.display = "none";
        document.getElementById("container").style.display = "block";
    });

    // Function to find the closest list item
    function findClosestListItem(element) {
        // Start a loop that continues until the element becomes null.
        while (element) {
            // Check if the current element has a tagName of "LI," (means its a list item)
            if (element.tagName === "LI") {
                // If it is a list item, return this element as the closest list item found.
                return element;
            }
            // If the current element is not list element, move back to the unordered list.
            element = element.parentElement;
        }
        // If no list element is found, return null to show that no list item was found.
        return null;
    }
} //end of newPage function