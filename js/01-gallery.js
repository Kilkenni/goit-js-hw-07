import { galleryItems } from './gallery-items.js';
// Change code below this line

let galleryMarkup = "";

galleryItems.forEach((galleryItem) => {
    //do magic
    const itemMarkup = `<div class="gallery__item">
        <a class="gallery__link" href=${galleryItem.original}>
            <img
            class="gallery__image"
            src=${galleryItem.preview}
            data-source=${galleryItem.original}
            alt=${galleryItem.description}
            />
        </a>
    </div>`;

    galleryMarkup += itemMarkup;
});

const galleryElem = document.querySelector(".gallery");

galleryElem.insertAdjacentHTML("beforeend", galleryMarkup);

function zoomImage(event) {
    event.preventDefault();

    const picOrigin = event.target.getAttribute("data-source");
}

galleryElem.addEventListener("click", zoomImage);

//console.log(galleryItems);
