// main.js for EcoHarmony Hub

// You can add JavaScript for interactive elements here if needed.
// For example, a mobile navigation toggle, form validations, etc.

document.addEventListener('DOMContentLoaded', () => {
    // Example: Smooth scrolling for anchor links (optional)
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();

            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Example: Simple form submission handler for contact page (optional, client-side only)
    const contactForm = document.querySelector('.contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            alert('Form submitted! (This is a demo, no actual submission is made.)');
            this.reset();
        });
    }
});