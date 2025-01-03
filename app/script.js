// Funcion para copiar email o algun texto.

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

document.addEventListener("DOMContentLoaded", () => {
    // Desplazamiento suave para "Ver Proyectos"
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

    // Manejo del formulario de contacto
    const contactForm = document.getElementById("contact-form");

    contactForm.addEventListener("submit", (event) => {
        event.preventDefault();
        alert("Gracias por tu mensaje. Me pondré en contacto pronto.");
        contactForm.reset();
    });
});