import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

const documentGallery = document.querySelector('.gallery');

function createGalleryItems(galleryItems) {
  return galleryItems.reduce(
    (acc, item) =>
      acc +
      ` <div class="gallery__item">
             <a class="gallery__link" href="${item.original}">
                <img
                    class="gallery__image"
                    src="${item.preview}"
                    data-source="${item.original}"
                    alt="${item.description}"
                />
            </a>
        </div>`,
    '',
  );
}

const createLi = createGalleryItems(galleryItems);
documentGallery.insertAdjacentHTML('beforeend', createLi);

// --- Using the standalone variant ---//

new SimpleLightbox('.gallery a', {
  disableRightClick: true,
  scrollZoom: false,
  captionDelay: 250,
  captionsData: 'alt',
});
