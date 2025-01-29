document.addEventListener("DOMContentLoaded", function () {
  function loadScript(url) {
    const script = document.createElement("script");
    script.src = url;
    script.type = "text/javascript";
    document.head.appendChild(script);
  }

  const screenWidth = window.innerWidth;

  if (screenWidth <= 768) {
    // Cargar script para dispositivos móviles
    loadScript("lightboxMobile.js");
  } else {
    // Cargar script para ordenadores y tablets
    loadScript("lightboxComputer.js");
  }
});
