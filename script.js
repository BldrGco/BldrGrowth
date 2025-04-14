document.addEventListener('DOMContentLoaded', () => {
    const statements = document.querySelector('.statements');

    const handleScroll = () => {
        const statementsPosition = statements.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;

        if (statementsPosition < windowHeight * 0.75) {
            statements.classList.add('visible');
        }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Check on page load
});
