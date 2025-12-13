// Código para el efecto de encogimiento de la barra de navegación al hacer scroll.
window.addEventListener('DOMContentLoaded', event => {

    // Función para encoger la barra de navegación
    var navbarShrink = function () {
        // Selector: Usamos la clase 'navbar-custom' que tienes en tu HTML
        const navbarCollapsible = document.body.querySelector('.navbar-custom');

        if (!navbarCollapsible) {
            return;
        }

        // Comprueba si el desplazamiento vertical es 0 (estás arriba del todo)
        if (window.scrollY === 0) {
            navbarCollapsible.classList.remove('navbar-shrink');
        } else {
            // Si has hecho scroll, añade la clase
            navbarCollapsible.classList.add('navbar-shrink');
        }
    };

    // Llama a la función una vez al cargar (en caso de refrescar la página no en el tope)
    navbarShrink();

    // Llama a la función cada vez que se desplaza la página
    document.addEventListener('scroll', navbarShrink);
});