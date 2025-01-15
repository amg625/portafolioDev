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
        projectsSection.scrollIntoView({ behavior: "smooth" });
    });

    // Agregar desplazamiento suave para enlaces del menú
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
document.getElementById("send-whatsapp").addEventListener("click", () => {
    const phoneNumber = "5215588101487"; // Reemplaza con el número de teléfono (formato internacional)
    const message = "¡Hola! Estoy interesado en contactarte."; // Mensaje inicial
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

    // Abre la URL en una nueva pestaña
    window.open(whatsappUrl, "_blank");
});