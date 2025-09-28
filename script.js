document.addEventListener('DOMContentLoaded', () => {

    // Custom Cursor functionality
    const cursorDot = document.querySelector('.cursor-dot');
    const cursorOutline = document.querySelector('.cursor-outline');

    window.addEventListener('mousemove', (e) => {
        const posX = e.clientX;
        const posY = e.clientY;

        cursorDot.style.left = `${posX}px`;
        cursorDot.style.top = `${posY}px`;

        cursorOutline.animate({
            left: `${posX}px`,
            top: `${posY}px`
        }, { duration: 500, fill: "forwards" });
    });

    // Form submission handling
    const contactForm = document.getElementById('contact-form');
    const formMessage = document.getElementById('form-message');

    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();

        formMessage.textContent = 'Sending message...';
        formMessage.style.color = '#fff';

        const formData = new FormData(contactForm);

        // Simulate a form submission
        setTimeout(() => {
            if (formData.get('name') && formData.get('email') && formData.get('message')) {
                formMessage.textContent = 'Message sent successfully! I will get back to you shortly.';
                formMessage.style.color = 'var(--primary-color)';
                contactForm.reset();
            } else {
                formMessage.textContent = 'Please fill out all fields.';
                formMessage.style.color = 'var(--accent-color)';
            }
        }, 1500);
    });

});