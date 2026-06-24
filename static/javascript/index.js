document.addEventListener('DOMContentLoaded', function() {

    // Navbar scroll effect
    window.addEventListener('scroll', function() {
        const navbar = document.querySelector('.navbar');
        if (navbar && window.scrollY > 50) {
            navbar.classList.add('scrolled');
        }
    });

    // Contact form
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            const name = document.getElementById('contactName').value.trim();
            const email = document.getElementById('contactEmail').value.trim();
            const message = document.getElementById('contactMessage').value.trim();
            if (!name || !email || !message) {
                alert('Please fill in all required fields.');
                return;
            }
            const subject = encodeURIComponent('Therapy Consultation Inquiry');
            const body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\nPhone: ${document.getElementById('contactPhone').value}\n\nMessage:\n${message}`);
            window.location.href = `mailto:janko.skudar@gmail.com?subject=${subject}&body=${body}`;
            document.getElementById('formSuccess').style.display = 'block';
        });
    }

});
