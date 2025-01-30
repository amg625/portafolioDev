// FUNCION PARA COPIAR EMAIL CON ICON
function copyEmail() {
    const emailText = document.getElementById('email-text').textContent;
    navigator.clipboard.writeText(emailText)
        .then(() => {
            alert('Correo copiado al portapapeles.');
        })
        .catch(err => {
            console.error('Error al copiar el correo:', err);
        });
}


// FUNCION PARA NAVEGAR DINAMICAMENTE EN EL SITIO WEB
document.addEventListener("DOMContentLoaded", () => {
    // Desplazamiento suave para "Ver Proyectos" (Desde el botón)
    const viewProjectsButton = document.getElementById("view-projects");

    viewProjectsButton.addEventListener("click", () => {
        const projectsSection = document.getElementById("projects");
        // scrollIntoView: Es un método nativo de los elementos del DOM que desplaza la vista del navegador para que el elemento sea visible dentro de la ventana (viewport).
        projectsSection.scrollIntoView({ behavior: "smooth" }); // smooth: Indica que el desplazamiento debe realizarse de manera suave (con una animación). Sin esta opción, el desplazamiento sería inmediato.
    });

    // Agregar desplazamiento suave para enlaces del menú
    // querySelectorAll: Devuelve todos los elementos que coinciden con el selector CSS especificado.
    const menuLinks = document.querySelectorAll("header nav ul li a");

    menuLinks.forEach(link => {
        link.addEventListener("click", (event) => {
            event.preventDefault(); // Evita el comportamiento predeterminado del enlace
            const targetId = link.getAttribute("href").substring(1); // Obtiene el ID sin el #
            const targetSection = document.getElementById(targetId); // Encuentra la sección objetivo
            targetSection.scrollIntoView({ behavior: "smooth" }); // Desplaza suavemente
        });
    });

    const contactForm = document.getElementById("contact-form");

    contactForm.addEventListener("submit", (event) => {
        event.preventDefault();
        alert("Gracias por tu mensaje. Me pondré en contacto pronto.");
        contactForm.reset();
    });
});



// FUNCION PARA AGREGAR BOTON DE WHATSAPP
document.addEventListener("DOMContentLoaded", () => { //El botón se carga dinámicamente después del script, usamos DOMContentLoaded o sin usarlo colocariamos el script al final del <body>
document.getElementById("send-whatsapp").addEventListener("click", () => {
    const phoneNumber = "5215588101487"; // Reemplaza con el número de teléfono (formato internacional)
    const message = "¡Hola! Estoy interesado en contactarte."; // Mensaje inicial
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

    // Abre la URL en una nueva pestaña
    window.open(whatsappUrl, "_blank");
});
});

// FUNCION PARA AMPLIAR IMAGENES
function openModal(imgElement) {
    const modal = document.getElementById("imageModal");
    const modalImg = document.getElementById("modalImg");

    modal.style.display = "flex";
    modalImg.src = imgElement.src; // Usa la misma imagen que fue clickeada
}

function closeModal() {
    document.getElementById("imageModal").style.display = "none";
}