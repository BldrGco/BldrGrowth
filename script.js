document.addEventListener('DOMContentLoaded', () => {
    console.log('Script loaded'); // Debug: Confirm script is running

    const statements = document.getElementById('statements');
    if (!statements) {
        console.error('Statements element not found');
        return;
    }

    console.log('Statements element found:', statements); // Debug: Confirm element is found

    // Add the 'visible' class after a 2-second delay
    setTimeout(() => {
        console.log('Adding visible class for fade-in'); // Debug
        statements.classList.add('visible');
    }, 2000); // 2000ms = 2 seconds
});
