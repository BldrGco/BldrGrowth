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

        // Adjusted trigger point to 90% of the viewport height
        if (statementsPosition < windowHeight * 0.9) {
            console.log('Adding visible class'); // Debug: Confirm class is added
            statements.classList.add('visible');
            // Remove the event listener after the animation triggers to improve performance
            window.removeEventListener('scroll', handleScroll);
        }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Check on page load
});
