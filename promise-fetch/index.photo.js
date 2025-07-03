// --------------------------------------------------
// Задание #3
// --------------------------------------------------

const PHOTOS_URL = 'https://api.slingacademy.com/v1/sample-data/photos/';

const container = document.querySelector('#data-container');
const loader = document.querySelector('#loader');
loader.hidden = false;

function createNewElement (tag, classes = '') {
  const element = document.createElement(tag);
  element.className = classes;
  return element;
};

function getPhotoElement(url, title) {
  const liElement = createNewElement('li', 'photo-item');
  const imgElement = createNewElement('img', 'photo-item__image');
  imgElement.src = url;
  const headerElement = createNewElement('h3', 'photo-item__title');
  headerElement.textContent = title;
  liElement.append(imgElement, headerElement);

  return liElement;
};

function getFastestLoadedPhoto(ids) {
  const requests = ids.map((id) => fetch(`${PHOTOS_URL}${id}`));
  Promise.race(requests)
    .then((response) => response.json())
    .then((data) => {
      const { url, title } = data.photo;
      const photoElement = getPhotoElement(url, title);
      container.append(photoElement);
    })
    .catch((error) => {
      console.log(error);
    })
    .finally(() => {
      loader.hidden = true;
    });
};

getFastestLoadedPhoto([60, 12, 55]);
