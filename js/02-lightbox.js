import { galleryItems } from './gallery-items.js';
// Change code below this line

// console.log(galleryItems);
const galleryList = document.querySelector(".gallery");
const galleryMarkap = galleryListItem(galleryItems);

//создание разметки галереи
function galleryListItem(img) {
    return img.map(({ preview, original, description }) => {
        return `
            <a class="gallery__link" href="${original}">
                <img class="gallery__image" src="${preview}" data-source="${original}" alt="${description}"/>
            </a>`; }).join("");
}

//Рендер галлереи
galleryList.insertAdjacentHTML("beforeend",  galleryMarkap);

//клик по элементу галереи, делегирование
galleryList.addEventListener("click", onPictureClick);

function onPictureClick(evt) {
    evt.preventDefault();
    if (!evt.target.classList.contains("gallery__image")) {
        return;
    }
};


//опции к библиотеке  SimpleLightbox

new SimpleLightbox(".gallery a", {
    captionsData: 'alt',
    captionDelay: 250,
    fadeSpeed: 170,
});
