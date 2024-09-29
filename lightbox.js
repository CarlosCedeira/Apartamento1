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

// Añadimos un evento de clic al contenedor de imágenes
contenedorImagenes.addEventListener("click", (event) => {
  // Verificamos si el clic fue sobre una imagen (elemento 'img')
  if (event.target.tagName === "IMG") {
    div.style.display = "flex";
    div.appendChild(nuevaImagen); // Añadimos la imagen al lightbox
    nuevaImagen.src = event.target.src; // Asignamos la fuente de la imagen clicada

    // Obtenemos el índice de la imagen a partir del atributo data-indice
    indiceActual = parseInt(event.target.dataset.indice);
  }
});

btnVerImagenes.addEventListener("click", () => {
  // Restablecemos el índice al abrir el lightbox desde el botón "Ver más"
  indiceActual = 0;
  mostrarImagen(); // Muestra la primera imagen
  div.appendChild(nuevaImagen); // Añadimos la imagen al lightbox
  div.style.display = "flex"; // Muestra el lightbox
});

btnCloseLightBox.addEventListener("click", () => {
  div.style.display = "none"; // Ocultamos el lightbox
  nuevaImagen.remove(); // Eliminamos la imagen del lightbox
});

btnNextImage.addEventListener("click", () => {
  // Incrementamos el índice
  indiceActual++;

  // Si llegamos al final de la lista, volvemos al inicio
  if (indiceActual >= imagenesLightBox.length) {
    indiceActual = 0;
  }

  mostrarImagen(); // Actualizamos la imagen mostrada en el lightbox
});

btnBackImage.addEventListener("click", () => {
  // Decrementamos el índice
  indiceActual--;

  // Si el índice es menor que 0, volvemos a la última imagen
  if (indiceActual < 0) {
    indiceActual = imagenesLightBox.length - 1;
  }

  mostrarImagen(); // Actualizamos la imagen mostrada en el lightbox
});
