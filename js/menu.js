// OBTENER ELEMENTOS DEL HTML

const botonMenu = document.getElementById("menuToggle");
const menu = document.getElementById("menuPrincipal");

// ABRIR Y CERRAR EL MENU

botonMenu.addEventListener("click", function() {

    menu.classList.toggle("open");
    botonMenu.classList.toggle("active");

    const estaAbierto = menu.classList.contains("open");

    botonMenu.setAttribute("aria-expanded", estaAbierto);

});

// CERRAR EL MENU AL SELECCIONAR UN ENLACE

const enlaces = menu.querySelectorAll("a");

enlaces.forEach(function(enlace) {
    enlace.addEventListener("click", function() {
        menu.classList.remove("open");
        botonMenu.classList.remove("active");
        botonMenu.setAttribute("aria-expanded", "false");
    });
});