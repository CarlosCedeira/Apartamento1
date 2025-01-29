console.log("lightboxMobile.js");

document.addEventListener("DOMContentLoaded", function () {
  const contenedorImagenes = document.querySelector(".contenedor-imagenes");
  const images = contenedorImagenes.querySelectorAll("figure img");

  let currentIndex = 1;

  function showImage(index) {
    images.forEach((img, i) => {
      img.parentElement.style.zIndex = i === index ? 1 : 0;
      img.parentElement.classList.toggle("hidden", i !== index);
    });
  }

  function nextImage() {
    currentIndex = (currentIndex + 1) % images.length;
    showImage(currentIndex);
  }

  images.forEach((img) => {
    img.addEventListener("click", nextImage);
  });

  showImage(currentIndex);
  console.log("detected touch");
});
