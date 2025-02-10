console.log("lightboxMobile.js");

window.onload = function () {
  console.log("Window fully loaded");

  const contenedorImagenes = document.querySelector(".contenedor-imagenes");
  const dots = document.querySelectorAll(".carousel-indicators .dot");
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
      dots.forEach((dot, i) => {
        dot.classList.toggle("active", i === index);
      });
    }

    function nextImage() {
      console.log("nextImage function called");
      currentIndex = (currentIndex + 1) % images.length;
      showImage(currentIndex);
    }

    function prevImage() {
      console.log("prevImage function called");
      currentIndex = (currentIndex - 1 + images.length) % images.length;
      showImage(currentIndex);
    }

    images.forEach((img) => {
      img.addEventListener("click", nextImage);
      console.log("Event listener added to image");
    });

    dots.forEach((dot) => {
      dot.addEventListener("click", (e) => {
        currentIndex = parseInt(e.target.dataset.indice);
        showImage(currentIndex);
      });
    });

    // Eventos táctiles para deslizar
    let startX = 0;
    let endX = 0;

    contenedorImagenes.addEventListener("touchstart", (e) => {
      startX = e.touches[0].clientX;
    });

    contenedorImagenes.addEventListener("touchmove", (e) => {
      endX = e.touches[0].clientX;
    });

    contenedorImagenes.addEventListener("touchend", () => {
      if (startX > endX + 50) {
        nextImage();
      } else if (startX < endX - 50) {
        prevImage();
      }
    });

    showImage(currentIndex);
  } else {
    console.log("contenedorImagenes not found");
  }
};
