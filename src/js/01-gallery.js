
// Add imports above this line
import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";
import { galleryItems } from './gallery-items';
// Change code below this line
console.log(galleryItems);
const markup = createMarkup(galleryItems);
const galleryList = document.querySelector(".gallery");
 galleryList.insertAdjacentHTML("beforeend", markup)
const lightbox = new SimpleLightbox('.gallery a', {captionsData:"",captionDelay: 250, captionPosition: "bottom", navText: ['-','+']});
function createMarkup(arr) {
return arr.map(({ preview, original, description}) => {
      return `
      <li class="gallery__item">
   <a class="gallery__link" href="${original}">
      <img class="gallery__image" src="${preview}" alt="${description}" />
   </a>
    </li>
      ` 
    }).join("");
}