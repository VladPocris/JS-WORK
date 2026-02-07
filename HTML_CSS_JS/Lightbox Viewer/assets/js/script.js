const images = document.querySelectorAll(".gallery-item");
const lightBox = document.querySelector(".lightbox");
const lightBoxImage = document.querySelector("#lightbox-image");
const lightBoxCloseBtn = document.querySelector("#close-btn");

function openLightBox(img) {
  lightBox.style.display = "flex";
  lightBoxImage.src = img.src.replace("-thumbnail", "");
}

function closeLightBox() {
  lightBox.style.display = "none";
}

images.forEach((img) => {
  img.addEventListener("click", () => openLightBox(img));
})

lightBoxCloseBtn.addEventListener("click", closeLightBox);

lightBox.addEventListener("click", (e) => {
  if (e.target === lightBox) {
    closeLightBox();
  }
});
