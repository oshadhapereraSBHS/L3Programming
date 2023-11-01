// window.onload = function() {

//     pushContent();
//     fillGallery()
// }


// function pushContent() {

    
//     items.push(Item1);
//     items.push(Item2);
//     items.push(Item3);
//     items.push(Item4);
//     items.push(Item5);
//     items.push(Item6);    
//     items.push(Item7);
//     items.push(Item8);
//     items.push(Item9);    
//     items.push(Item10);
//     items.push(Item11);
//     items.push(Item12);
//     items.push(Item13);
//     items.push(Item14);
//     items.push(Item15);
// }



// function fillGallery(){
//     console.log(items)
//         for (var i=0; i<items.length; i++) {
//             var main = document.getElementById("gallery");
//             var list = document.createElement("li");
//             var image = document.createElement("img");

    
//             main.appendChild(list);
    
//             list.appendChild(image);

        
//             image.src = items[i].source;

//         }
        
// }


// function searchPage(){
//     window.location.href= "search.html"
// }



// let modalIndex = 0;
// const modal = document.getElementById('slideshow-modal');
// const modalImage = document.getElementById('modal-image');

// function openSlideshow(index) {
//     modal.style.display = 'block';
//     modalImage.src = items[index].source;
//     modalIndex = index;
// }

// function closeSlideshow() {
//     modal.style.display = 'none';
// }

// function plusSlides(n) {
//     modalIndex += n;
//     if (modalIndex < 0) {
//         modalIndex = items.length - 1;
//     } else if (modalIndex >= items.length) {
//         modalIndex = 0;
//     }
//     modalImage.src = items[modalIndex].source;
// }

// // Call fillGallery function to populate the list with images
// fillGallery();
