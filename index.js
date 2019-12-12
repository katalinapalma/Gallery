
/**
 * @param img  Image to be displayed
 */
function displayImage(img) {
  let imageWrapper = document.getElementById("img-wrapper");
  let imageElement = document.createElement("img");
  imageElement.src = img.src;
  imageWrapper.appendChild(imageElement);
}