const initApp = () => {
    const hamburgerBtn = document.getElementById('hamburger-button');
    const mobileMenu = document.getElementById('mobile-menu');
    const body = document.body;

    // Función para alternar la visibilidad del menú y habilitar/deshabilitar el scroll del body
    const toggleMenu = () => {
        mobileMenu.classList.toggle('hidden');
        mobileMenu.classList.toggle('flex');
        hamburgerBtn.classList.toggle('toggle-btn');

        if (mobileMenu.classList.contains('hidden')) {
            // Si el menú se oculta, se vuelve a habilitar el scroll en el body
            body.style.overflow = 'visible';
        } else {
            // Si el menú se muestra, se deshabilita el scroll en el body
            body.style.overflow = 'hidden';
        }
    };

    // Evento de clic en el botón de hamburguesa para mostrar/ocultar el menú
    hamburgerBtn.addEventListener('click', toggleMenu);

    // Evento de clic en el menú para ocultarlo al seleccionar una opción
    mobileMenu.addEventListener('click', toggleMenu);
};

// Llamada a la función al cargar el contenido de la página
document.addEventListener('DOMContentLoaded', initApp);



/**
 * Ajusta el desplazamiento de la página para que la sección seleccionada sea visible debajo del encabezado pegajoso.
 */
const adjustScroll = () => {
    // Obtiene la altura del encabezado pegajoso más un espacio adicional de 32 píxeles
    const stickyHeaderHeight = document.getElementById('sticky-header').offsetHeight + 32;

    // Obtiene el ID de la sección seleccionada del hash de la URL
    const targetSectionId = window.location.hash.slice(1);

    if (targetSectionId) {
        // Obtiene el elemento de la sección seleccionada
        const targetSection = document.getElementById(targetSectionId);

        if (targetSection) {
            // Calcula el desplazamiento objetivo restando la altura del encabezado pegajoso
            const targetOffset = targetSection.offsetTop - stickyHeaderHeight;

            // Realiza el desplazamiento suave hasta la sección objetivo
            window.scrollTo({ top: targetOffset, behavior: 'smooth' });
        }
    }
};

// Llama a la función al cargar la página para ajustar el desplazamiento inicial
window.addEventListener('DOMContentLoaded', adjustScroll);

// Llama a la función cuando se cambia el hash de la URL, por ejemplo, al seleccionar una opción del menú móvil
window.addEventListener('hashchange', adjustScroll);






window.addEventListener('scroll', function() {
    let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    
    // Ajusta la velocidad de desplazamiento de las capas según tus preferencias
    // Puedes multiplicar el scrollTop por diferentes valores para lograr diferentes efectos de parallax
    document.querySelector('.parallax-layer').style.transform = 'translateY(' + (scrollTop * 0.5) + 'px)';
  });
  