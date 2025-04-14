document.addEventListener('DOMContentLoaded', () => {
    console.log('Script loaded'); // Debug: Confirm script is running

    const statements = document.getElementById('statements');
    if (!statements) {
        console.error('Statements element not found');
        return;
    }

    console.log('Statements element found:', statements); // Debug: Confirm element is found

    const handleScroll = () => {
        const statementsPosition = statements.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;

        console.log('Statements position:', statementsPosition, 'Window height:', windowHeight); // Debug: Log positions

        if (statementsPosition < windowHeight * 0.75) {
            console.log('Adding visible class'); // Debug: Confirm class is added
            statements.classList.add('visible');
        }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Check on page load
});
