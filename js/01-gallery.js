import { galleryItems } from './gallery-items.js';
// Change code below this line

// console.log(galleryItems);

const galleryList = document.querySelector(".gallery");
const galleryMarkap = galleryListItem(galleryItems);

//создание разметки галереи
function galleryListItem(img) {
    return img.map(({ preview, original, description }) => {
        return `
        <div class="gallery__item">
            <a class="gallery__link" href="${original}">
                <img class="gallery__image" src="${preview}" data-source="${original}" alt="${description}"/>
            </a>
        </div>`;
    }).join("");
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
    
    
instance.element().querySelector(".modal-img").src = evt.target.dataset.source;
instance.show();
}

//закрытие модального окна esc, библиотека basicLightbox

const instance = basicLightbox.create(`<img class="modal-img" src="">`,
    { onShow: instance => { window.addEventListener("keydown", onEscClick); }, },
    { onclose: instance => { window.removeEventListener("keydown", onEscClick); }, });

function onEscClick(evt) {
    if (evt.keyCode === 27) {
        instance.close();
        return;
    }
}
