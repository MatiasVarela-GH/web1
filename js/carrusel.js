// obtener elementos del HTML

const imagen = document.getElementById("hero-imagen");
const subtitulo = document.getElementById("hero-subtitulo");
const tituloInicio = document.getElementById("hero-tituloInicio");
const tituloDestacado = document.getElementById("hero-tituloDestacado");
const tituloFinal = document.getElementById("hero-tituloFinal");
const descripcion = document.getElementById("hero-descripcion");

const anterior = document.querySelector(".prev");
const siguiente = document.querySelector(".next");

const puntos = document.querySelectorAll(".dot");

// contenido de las diapositivas

const diapositivas = [
    {
        imagen: "img/hero-bebe.png",
        alt: "Bebe explorando sus primeros alimentos",
        subtitulo: "UNA GUIA PARA CADA ETAPA",
        tituloInicio: "Descubri una",
        tituloDestacado: "alimentacion a medida",
        tituloFinal: "para tu bebe",
        descripcion: "Informacion, recetas y consejos para acompañar cada etapa de su crecimiento de forma saludable, segura y deliciosa.",
    },

    {
        imagen: "img/hero-frutas.png",
        alt: "Bebe explorando nuevos sabores",
        subtitulo: "NUEVOS SABORES",
        tituloInicio: "Descubri nuevos",
        tituloDestacado: "sabores naturales",
        tituloFinal: "para tu bebé",
        descripcion: "Frutas y alimentos naturales para comenzar a descubrir nuevos sabores.",
    },

    {
        imagen: "img/hero-texturas.png",
        alt: "Bebe descubriendo nuevas texturas",
        subtitulo: "DESCUBRIR Y APRENDER",
        tituloInicio: "Aprendé sobre",
        tituloDestacado: "nuevas texturas",
        tituloFinal: "en cada etapa",
        descripcion: "Preparaciones adaptadas a cada etapa del desarrollo de tu bebe.",
    },

    {
        imagen: "img/hero-verduras.png",
        alt: "Bebe incorporando alimentos variados",
        subtitulo: "ALIMENTACION VARIADA",
        tituloInicio: "Incorporá",
        tituloDestacado: "alimentos variados",
        tituloFinal: "de forma segura",
        descripcion: "Ideas para incorporar nuevos alimentos de forma saludable y segura.",
    },
];

let indiceActual = 0;

function mostrarDiapositiva() {
    const diapositiva = diapositivas[indiceActual];
    imagen.src = diapositiva.imagen;
    imagen.alt = diapositiva.alt;

    subtitulo.textContent = diapositiva.subtitulo;

    tituloInicio.textContent = diapositiva.tituloInicio;
    tituloDestacado.textContent = diapositiva.tituloDestacado;
    tituloFinal.textContent = diapositiva.tituloFinal;

    descripcion.textContent = diapositiva.descripcion;

    puntos.forEach(function(punto, indice) {
    punto.classList.remove("active");

    if (indice === indiceActual) {
        punto.classList.add("active");
    }
})
}

function siguienteDipositiva() {
    indiceActual++;

    if (indiceActual >= diapositivas.length) {
        indiceActual = 0;
    }

    mostrarDiapositiva();
}

siguiente.addEventListener("click", siguienteDipositiva);

function anteriorDipositiva() {
    indiceActual--;

    if (indiceActual < 0) {
        indiceActual = diapositivas.length - 1;
    }

    mostrarDiapositiva();
}

anterior.addEventListener("click", anteriorDipositiva);
