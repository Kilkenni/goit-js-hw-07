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

const modalImage = basicLightbox.create(`<img width="800">`);

function zoomImage(event) {
    event.preventDefault();

    const picOrigin = event.target.getAttribute("data-source");

    modalImage.element().firstElementChild.innerHTML = `<img src=${picOrigin} width="800">`; // modalImage = div >> div >> img

    modalImage.show();

    document.addEventListener('keydown', (event) => {
    if (event.code === "Escape") {
       modalImage.close() 
    }
});
}

galleryElem.addEventListener("click", zoomImage);
