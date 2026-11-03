
// FORMULARIO DE CONTACTO 


//  OBTENER LOS ELEMENTOS DEL HTML


const formulario = document.getElementById("contactoForm");

const nombre = document.getElementById("nombre");
const email = document.getElementById("email");
const telefono = document.getElementById("telefono");
const mensaje = document.getElementById("mensaje");

const resultado = document.getElementById("resultado-envio");


//  EXPRESIONES REGULARES

const patronEmail = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

const patronTelefono = /^\+?[\d\s().-]+$/;


// FUNCION PARA MOSTRAR ERRORES

function mostrarError(campo, idError, texto) {

    const contenedorError = document.getElementById(idError);

    contenedorError.textContent = texto;

    campo.classList.add("campo-error");

    campo.setAttribute("aria-invalid", "true");
}


// FUNCION PARA LIMPIAR ERRORES

function limpiarError(campo, idError) {

    const contenedorError = document.getElementById(idError);

    contenedorError.textContent = "";

    campo.classList.remove("campo-error");

    campo.removeAttribute("aria-invalid");
}


//  VALIDAR NOMBRE

function validarNombre() {

    const valor = nombre.value.trim();

    nombre.value = valor;

    limpiarError(nombre, "errorNombre");

    if (valor === "") {

        mostrarError(nombre, "errorNombre",
            "El nombre y apellido son obligatorios.");

        return false;
    }

    if (valor.length < 2) {

        mostrarError(nombre, "errorNombre",
            "El nombre debe tener al menos 2 caracteres.");

        return false;
    }

    if (valor.length > 60) {

        mostrarError(nombre, "errorNombre",
            "El nombre no puede superar los 60 caracteres.");

        return false;
    }

    return true;
}


// VALIDAR CORREO ELECTRONICO

function validarEmail() {

    const valor = email.value.trim();

    email.value = valor;

    limpiarError(email, "errorEmail");

    if (valor === "") {

        mostrarError(email, "errorEmail",
            "El correo electrónico es obligatorio.");

        return false;
    }

    if (valor.length > 100) {

        mostrarError(email, "errorEmail",
            "El correo no puede superar los 100 caracteres.");

        return false;
    }

    if (!patronEmail.test(valor)) {

        mostrarError(email, "errorEmail",
            "Ingresá un correo electrónico válido.");

        return false;
    }

    return true;
}


// VALIDAR TELEFONO

function validarTelefono() {

    const valor = telefono.value.trim();

    telefono.value = valor;

    limpiarError(telefono, "errorTelefono");

    const cantidadDigitos = valor.replace(/\D/g, "").length;

    if (valor === "") {

        mostrarError(telefono, "errorTelefono",
            "El teléfono es obligatorio.");

        return false;
    }

    if (!patronTelefono.test(valor)) {

        mostrarError(telefono, "errorTelefono",
            "El teléfono contiene caracteres no permitidos.");

        return false;
    }

    if (cantidadDigitos < 8 || cantidadDigitos > 15) {

        mostrarError(telefono, "errorTelefono",
            "El teléfono debe tener entre 8 y 15 dígitos.");

        return false;
    }

    return true;
}


//  VALIDAR MENSAJE

function validarMensaje() {

    const valor = mensaje.value.trim();

    mensaje.value = valor;

    limpiarError(mensaje, "errorMensaje");

    if (valor === "") {

        mostrarError(mensaje, "errorMensaje",
            "El mensaje es obligatorio.");

        return false;
    }

    if (valor.length < 10) {

        mostrarError(mensaje, "errorMensaje",
            "El mensaje debe tener al menos 10 caracteres.");

        return false;
    }

    if (valor.length > 500) {

        mostrarError(mensaje, "errorMensaje",
            "El mensaje no puede superar los 500 caracteres.");

        return false;
    }

    return true;
}


//  CONTROLAR EL ENVIO DEL FORMULARIO

formulario.addEventListener("submit", function(event) {

    // Evita el envío tradicional del formulario
    event.preventDefault();

    // Ejecuta todas las validaciones
    const nombreValido = validarNombre();
    const emailValido = validarEmail();
    const telefonoValido = validarTelefono();
    const mensajeValido = validarMensaje();


    // Comprueba si todos los campos son validos
    if (
        nombreValido &&
        emailValido &&
        telefonoValido &&
        mensajeValido
    ) {

        // Si todos los datos son correctos, crea el resumen
        mostrarResumen();

        // Limpia los campos para permitir un nuevo envío
        formulario.reset();

    } else {

        // Si hay errores, enfoca el primer campo inválido
        if (!nombreValido) {
            nombre.focus();
        } else if (!emailValido) {
            email.focus();
        } else if (!telefonoValido) {
            telefono.focus();
        } else if (!mensajeValido) {
            mensaje.focus();
        }

    }

});


//  CREAR Y MOSTRAR EL RESUMEN

function mostrarResumen() {

    // Crear los elementos HTML
    const tarjeta = document.createElement("div");

    const titulo = document.createElement("h3");

    const parrafoNombre = document.createElement("p");

    const parrafoEmail = document.createElement("p");

    const parrafoTelefono = document.createElement("p");

    const parrafoMensaje = document.createElement("p");


    // Asignar clases CSS
    tarjeta.classList.add("resumen-contacto");


    // Incorporar el contenido
    titulo.textContent = "¡Mensaje recibido correctamente!";

    parrafoNombre.textContent = "Nombre: " + nombre.value;

    parrafoEmail.textContent = "Correo: " + email.value;

    parrafoTelefono.textContent = "Teléfono: " + telefono.value;

    parrafoMensaje.textContent = "Mensaje: " + mensaje.value;


    // Agregar los elementos a la tarjeta
    tarjeta.appendChild(titulo);

    tarjeta.appendChild(parrafoNombre);

    tarjeta.appendChild(parrafoEmail);

    tarjeta.appendChild(parrafoTelefono);

    tarjeta.appendChild(parrafoMensaje);


    // Agregar la tarjeta al documento HTML
    resultado.appendChild(tarjeta);

}

