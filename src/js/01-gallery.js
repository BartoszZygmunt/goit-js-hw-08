// Change code below this line
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

import { galleryItems } from './gallery-items.js';

const galleryElement = document.querySelector('.gallery');

//tworzę znaczniki html
const galleryItemsMarkup = galleryItems.map(item => {
  return `
    <li class="gallery__item">
      <a class="gallery__link" href="${item.original}">
        <img class="gallery__image" src="${item.preview}" alt="${item.description}" />
      </a>
    </li>
  `;
});

//dodaję do DOM
// galleryElement.innerHTML = galleryItemsMarkup.join("");
galleryElement.insertAdjacentHTML('beforeend', galleryItemsMarkup.join(''));

//inicjuję galerię
let lightbox = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionDelay: 250,
});
