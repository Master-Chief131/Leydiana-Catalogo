// No funciona xD revisar al final

// Función para desplazarse a una sección de manera suave
function scrollToSection(sectionId) {
  const section = document.getElementById(sectionId);
  if (section) {
    const headerOffset = 100; // Ajusta la altura del encabezado si es necesario
    const elementPosition = section.getBoundingClientRect().top;
    const offsetPosition = elementPosition - headerOffset;

    window.scrollBy({
      top: offsetPosition,
      behavior: "smooth"
    });
  }
}

document.addEventListener("DOMContentLoaded", function() {
  const verMasBtn = document.getElementById("ver-mas-btn");
  if (verMasBtn) {
    verMasBtn.addEventListener("click", function(event) {
      event.preventDefault();
      scrollToSection("catalogo");
    });
  }
});