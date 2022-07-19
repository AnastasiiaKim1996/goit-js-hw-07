import { galleryItems } from './gallery-items.js';
// Change code below this line

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
debugger;

documentGallery.addEventListener('click', openImage);

function openImage(event) {
  event.preventDefault();

  const openOriginalImg = basicLightbox.create(
    `
		<img src="${event.target.dataset.source}" width="1300" height="900">
	`,
    {
      onShow: () => window.addEventListener('keydown', pressEscToCloseImage),
      onClose: () =>
        window.removeEventListener('keydown', pressEscToCloseImage),
    },
  );
  openOriginalImg.show();

  function pressEscToCloseImage(event) {
    if (event.code === 'Escape') {
      openOriginalImg.close();
    }
  }
}

// --- method 2 ---//

// let openOriginalImage;

// documentGallery.addEventListener('click', e => {
//   e.preventDefault();
//   if (e.target.nodeName !== 'IMG') {
//     return;
//   } else
//     openOriginalImage = basicLightbox.create(`
// 		<img src="${e.target.dataset.source}" width="1300" height="900">
// 	`);
//   openOriginalImage.show();
// });

// function onPressEscToCloseImage(event) {
//   if (event.code !== 'Escape') {
//     return;
//   } else openOriginalImage.close();
// }
// documentGallery.addEventListener('keydown', onPressEscToCloseImage);
