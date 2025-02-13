document.addEventListener("DOMContentLoaded", () => {
    const services = document.querySelectorAll(".service");

    services.forEach(service => {
        service.addEventListener("mouseenter", () => {
            service.style.background = "#007bff";
            service.style.color = "white";
        });
        service.addEventListener("mouseleave", () => {
            service.style.background = "white";
            service.style.color = "#333";
        });
    });
});
document.addEventListener("DOMContentLoaded", () => {
    const skills = document.querySelectorAll(".skill");

    skills.forEach(skill => {
        skill.addEventListener("mouseenter", () => {
            skill.style.background = "#007bff";
            skill.style.color = "white";
        });
        skill.addEventListener("mouseleave", () => {
            skill.style.background = "white";
            skill.style.color = "#333";
        });
    });
});
document.addEventListener("DOMContentLoaded", () => {
    const apps = document.querySelectorAll(".app-card");

    apps.forEach(app => {
        app.addEventListener("mouseenter", () => {
            app.style.background = "#007bff";
            app.style.color = "white";
        });
        app.addEventListener("mouseleave", () => {
            app.style.background = "white";
            app.style.color = "#333";
        });
    });
});
document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("contact-form");

    form.addEventListener("submit", (event) => {
        event.preventDefault();

        alert("Merci pour votre message ! Je vous répondrai dès que possible.");
        
        
        form.reset();
    });
});
