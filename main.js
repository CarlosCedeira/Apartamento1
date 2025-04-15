document.addEventListener("DOMContentLoaded", function () {
  function loadScript(url) {
    const script = document.createElement("script");
    script.src = url;
    script.type = "text/javascript";
    document.head.appendChild(script);
  }

  const screenWidth = window.innerWidth;

  document.getElementById("airbnb").addEventListener("click", function () {
    window.open(
      "https://www.airbnb.es/rooms/36137898?source_impression_id=p3_1655367898_/hQK/RuyNsyx6LYw",
      "_blank"
    );
  });

  if (screenWidth <= 768) {
    // Cargar script para dispositivos móviles
    loadScript("lightboxMobile.js");
  } else {
    // Cargar script para ordenadores y tablets
    loadScript("lightboxComputer.js");
  }
});

const body = document.querySelector("body");
const nav = document.querySelector("nav");
const contactar = document.getElementById("contactar");
const overlay = document.getElementById("overlay");
const formularioReserva = document.getElementById("formulario-reserva");
const cerrarFormulario = document.getElementById("cerrar-formulario");

contactar.addEventListener("click", function () {
  formularioReserva.style.display = "block";
  overlay.style.display = "block";
  body.style.overflow =
    "hidden"; /* Evita el desplazamiento cuando el formulario está visible */
  nav.style.display = "none";
});

cerrarFormulario.addEventListener("click", function () {
  body.style.removeProperty("overflow");
  formularioReserva.style.display = "none";
  overlay.style.display = "none";
  nav.style.display = "block";
});
