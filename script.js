// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Show statements when scrolling within Hero
window.addEventListener('scroll', () => {
    const statements = document.getElementById('statements');
    const hero = document.getElementById('hero');
    const scrollPosition = window.scrollY;
    const heroHeight = hero.offsetHeight;

    if (scrollPosition > 50 && scrollPosition < heroHeight * 0.8) {
        statements.classList.add('visible');
    } else {
        statements.classList.remove('visible');
    }
});
