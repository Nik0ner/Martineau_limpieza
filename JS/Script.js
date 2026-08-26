// Código para el efecto de encogimiento de la barra de navegación al hacer scroll.
window.addEventListener('DOMContentLoaded', event => {

    // Función para encoger la barra de navegación
    var navbarShrink = function () {
        // clase 'navbar-custom'
        const navbarCollapsible = document.body.querySelector('.navbar-custom');

        if (!navbarCollapsible) {
            return;
        }

        if (window.scrollY === 0) {
            navbarCollapsible.classList.remove('navbar-shrink');
        } else {
            navbarCollapsible.classList.add('navbar-shrink');
        }
    };

    navbarShrink();

    document.addEventListener('scroll', navbarShrink);
});




function enviar() {
    let nombre = document.getElementById("nombre");
    let email = document.getElementById("email");
    let telefono = document.getElementById("telefono");
    let servicio = document.getElementById("servicio");

    if (nombre.value == "") {
        nombre.style.border = "2px solid red";
    } else {
        nombre.style.border = "2px solid green";
        console.log("Campo Nombre completado");
    }

    if (email.value == "") {
        email.style.border = "2px solid red";
    } else {
        email.style.border = "2px solid green";
        console.log("Campo Email completado");
    }

    if (telefono.value == "") {
        telefono.style.border = "2px solid red";
    } else {
        telefono.style.border = "2px solid green";
        console.log("Campo Teléfono completado");
    }

    if (servicio.value == "") {
        servicio.style.border = "2px solid red";
    } else {
        servicio.style.border = "2px solid green";
        console.log("Campo Servicio completado");
    }

    if (nombre.value == "" || email.value == "" || telefono.value == "" || servicio.value == "") {
        alert("Completa todos los campos");
    } else {
        alert("Mensaje enviado correctamente");
        console.log("Mensaje enviado correctamente");
    }
}