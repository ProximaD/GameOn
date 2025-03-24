document.addEventListener("DOMContentLoaded", function () {
    const menuToggle = document.getElementById("menu-toggle");
    const navLinks = document.querySelectorAll(".nav__link");

    // Add click event to each nav__link
    navLinks.forEach(link => {
        link.addEventListener("click", () => {
            menuToggle.checked = false; // Uncheck the checkbox to close menu
        });
    });
});
