console.log("lightboxMobile.js");

window.onload = function () {
  console.log("Window fully loaded");

  const contenedorImagenes = document.querySelector(".contenedor-imagenes");
  console.log("contenedorImagenes:", contenedorImagenes);

  if (contenedorImagenes) {
    const images = contenedorImagenes.querySelectorAll("figure img");
    console.log("Images found:", images.length);

    let currentIndex = 0;

    function showImage(index) {
      images.forEach((img, i) => {
        img.parentElement.style.zIndex = i === index ? 1 : 0;
        img.parentElement.classList.toggle("hidden", i !== index);
      });
    }

    function nextImage() {
      console.log("nextImage function called");
      currentIndex = (currentIndex + 1) % images.length;
      showImage(currentIndex);
    }

    images.forEach((img) => {
      img.addEventListener("click", nextImage);
      console.log("Event listener added to image");
    });

    showImage(currentIndex);
  } else {
    console.log("contenedorImagenes not found");
  }
};
