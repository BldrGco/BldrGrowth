// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Show statements when scrolling past Hero
window.addEventListener('scroll', () => {
    const statements = document.getElementById('statements');
    const hero = document.getElementById('hero');
    const heroBottom = hero.getBoundingClientRect().bottom;

    if (heroBottom <= 0) {
        statements.classList.add('visible');
    } else {
        statements.classList.remove('visible');
    }
});
