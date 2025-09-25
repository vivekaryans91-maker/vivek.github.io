document.addEventListener('DOMContentLoaded', function() {
    // Smooth scrolling for navigation links
    document.querySelectorAll('nav a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();

            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Update current year in footer
    document.getElementById('current-year').textContent = new Date().getFullYear();

    // Intersection Observer for scroll animations (optional, but nice)
    // This makes sections fade in as you scroll to them
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1 // Trigger when 10% of the item is visible
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in');
                observer.unobserve(entry.target); // Stop observing once animated
            }
        });
    }, observerOptions);

    document.querySelectorAll('section').forEach(section => {
        section.classList.add('hide-on-load'); // Add initial hidden state
        observer.observe(section);
    });

    // For portfolio items specifically, if you want a staggered effect
    document.querySelectorAll('.portfolio-item').forEach(item => {
        item.classList.add('hide-on-load');
        observer.observe(item);
    });

    document.querySelectorAll('.service-card').forEach(card => {
        card.classList.add('hide-on-load');
        observer.observe(card);
    });
});
