console.log("lightboxComputer.js");

// Seleccionamos el contenedor que tiene todas las imágenes
const contenedorImagenes = document.querySelector(".contenedor-imagenes");
const btnVerImagenes = document.querySelector("#btn-ver-imagenes");
const div = document.querySelector("#light-box");
const btnCloseLightBox = document.querySelector("#close-lightbox");
const btnNextImage = document.querySelector("#next");
const btnBackImage = document.querySelector("#back");
const nuevaImagen = document.createElement("img"); // Imagen que se añadirá al lightbox

// Seleccionamos todas las imágenes dentro de .contenedor-imagenes y extraemos sus fuentes
const imagenesLightBox = Array.from(
  contenedorImagenes.querySelectorAll("img")
).map((img) => img.src);

let indiceActual = 0; // Variable para mantener el índice actual de la imagen

function mostrarImagen() {
  // Cambiamos la fuente de la imagen a mostrar
  nuevaImagen.src = imagenesLightBox[indiceActual];
}

function abrirLightbox(src, indice) {
  div.style.display = "flex";
  div.appendChild(nuevaImagen);
  nuevaImagen.src = src;
  if (!isNaN(indice)) {
    indiceActual = indice;
  }

  // Centrar el lightbox verticalmente
  div.scrollIntoView({ behavior: "smooth", block: "center" });
}

function cerrarLightbox() {
  div.style.display = "none";
  nuevaImagen.remove();
}

function siguienteImagen() {
  indiceActual = (indiceActual + 1) % imagenesLightBox.length;
  mostrarImagen();
}

function anteriorImagen() {
  indiceActual =
    (indiceActual - 1 + imagenesLightBox.length) % imagenesLightBox.length;
  mostrarImagen();
}

// Añadimos un evento de clic al contenedor de imágenes
contenedorImagenes.addEventListener("click", (event) => {
  if (event.target.tagName === "IMG") {
    const indice = parseInt(event.target.dataset.indice);
    abrirLightbox(event.target.src, indice);
  }
});

btnCloseLightBox.addEventListener("click", cerrarLightbox);

btnNextImage.addEventListener("click", siguienteImagen);

btnBackImage.addEventListener("click", anteriorImagen);

// Añadir navegación con teclado
document.addEventListener("keydown", (event) => {
  if (div.style.display === "flex") {
    if (event.key === "ArrowRight") {
      siguienteImagen();
    } else if (event.key === "ArrowLeft") {
      anteriorImagen();
    } else if (event.key === "Escape") {
      cerrarLightbox();
    }
  }
});
