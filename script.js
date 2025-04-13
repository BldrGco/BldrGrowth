// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Newsletter form submission
document.getElementById('newsletter-form').addEventListener('submit', function(e) {
    e.preventDefault();
    const email = this.querySelector('input').value;
    alert(`Thank you for subscribing with ${email}!`);
    this.reset();
});
