
window.onload = function() {
    pushContent();
    check();
    fillContents();
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

function check(){
//     for (var i=0; i<items.length; i++) {
//         if(items[i].source == searchText || 
//             items[i].itemId == searchText || 
//             items[i].itemName == searchText || 
//             items[i].keywords == searchText || 
//             items[i].origin == searchText || 
//             items[i].collection == searchText || 
//             items[i].dateOfOrigin == searchText|| 
//             items[i].dateDonated == searchText|| 
//             items[i].donatedBy == searchText){
//             searchDisplay.push(items[i]);
            
//         }
//     }
    }

function fillContents() {
    for (var i=0; i<searchDisplay.length; i++) {
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



