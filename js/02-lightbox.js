import { galleryItems } from './gallery-items.js';
// Change code below this line

let galleryMarkup = "";

galleryItems.forEach((galleryItem) => {
    //do magic
    const itemMarkup = `<a class="gallery__item" href=${galleryItem.original}>
        <img
        class="gallery__image"
        src="${galleryItem.preview}"
        alt="${galleryItem.description}"
        />
    </a>`;

    galleryMarkup += itemMarkup;
});

const galleryElem = document.querySelector(".gallery");

galleryElem.insertAdjacentHTML("beforeend", galleryMarkup);

const modalImage = new SimpleLightbox('.gallery a', { captionsData: `alt`, captionDelay:250 });
