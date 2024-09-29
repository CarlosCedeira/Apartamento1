// Seleccionamos el contenedor que tiene todas las imágenes
const contenedorImagenes = document.querySelector(".contenedor-imagenes");
const btnVerImagenes = document.querySelector("#btn-ver-imagenes");
const div = document.querySelector("#light-box");
const btnCloseLightBox = document.querySelector("#close-lightbox");
const btnNextImage = document.querySelector("#next");
const btnBackImage = document.querySelector("#back");
const imagenesLightBox = [
  // eliminar variable para seleccionarla dinamicametente array.from
  "./Images/Panoramica.png",
  "./Images/Habitacion3.png",
  "./Images/Cocina.png",
  "./Images/Habitacion2.png",
  "./Images/Habitacion1.jpg",
];
const nuevaImagen = document.createElement("img");
let indiceActual = 0; // Variable para mantener el índice actual de la imagen

function mostrarImagen() {
  nuevaImagen.src = imagenesLightBox[indiceActual]; // Cambia la fuente de la imagen
}

// Añadimos un evento de clic al contenedor
contenedorImagenes.addEventListener("click", (event) => {
  // Verificamos si el clic fue sobre una imagen (elemento 'img')
  if (event.target.tagName === "IMG") {
    div.style.display = "flex";
    div.appendChild(nuevaImagen);
    nuevaImagen.src = event.target.src;
  }
});

btnVerImagenes.addEventListener("click", (event) => {
  indiceActual = 0; // Restablece el índice a 0 al abrir el lightbox
  mostrarImagen(); // Muestra la primera imagen

  div.appendChild(nuevaImagen); // Añade la imagen al div
  div.style.display = "flex"; // Muestra el lightbox
});

btnCloseLightBox.addEventListener("click", (event) => {
  div.style.display = "none";

  Array.from(div.children).forEach((e) => {
    if (e.tagName === "IMG") {
      div.removeChild(e);
    }
  });
});

btnNextImage.addEventListener("click", (event) => {
  // Aumentamos el índice
  indiceActual++;

  // Verificamos si el índice excede el límite
  if (indiceActual >= imagenesLightBox.length) {
    indiceActual = 0; // Vuelve al inicio si llega al final
  }

  mostrarImagen(); // Muestra la nueva imagen
});

btnBackImage.addEventListener("click", (event) => {
  indiceActual--;

  // Verificamos si el índice excede el límite
  if (indiceActual < 0) {
    indiceActual = imagenesLightBox.length - 1;
  }

  mostrarImagen(); // Muestra la nueva imagen
});
