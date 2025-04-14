document.addEventListener('DOMContentLoaded', () => {
    console.log('Script loaded'); // Debug: Confirm script is running

    const statements = document.getElementById('statements');
    if (!statements) {
        console.error('Statements element not found');
        return;
    }

    console.log('Statements element found:', statements); // Debug: Confirm element is found

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            console.log('Intersection ratio:', entry.intersectionRatio); // Debug: Log visibility
            if (entry.isIntersecting) {
                console.log('Adding visible class'); // Debug: Confirm class is added
                statements.classList.add('visible');
                observer.disconnect(); // Stop observing once the animation triggers
            }
        });
    }, {
        root: null, // Use viewport as root
        rootMargin: '-100px', // Delay trigger until element is 100px into the viewport
        threshold: 0.1 // Trigger when 10% of the element is visible
    });

    observer.observe(statements);

    // Fallback: Add visible class after 2 seconds if observer doesn't trigger
    setTimeout(() => {
        if (!statements.classList.contains('visible')) {
            console.log('Fallback: Adding visible class after delay');
            statements.classList.add('visible');
        }
    }, 2000);
});
