document.addEventListener('DOMContentLoaded', () => {
    console.log('Script loaded');

    const statements = document.getElementById('statements');
    if (!statements) {
        console.error('Statements element not found');
        return;
    }

    console.log('Statements element found:', statements);

    setTimeout(() => {
        console.log('Adding visible class for fade-in');
        statements.classList.add('visible');
    }, 2000);
});
