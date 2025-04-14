document.addEventListener('DOMContentLoaded', () => {
    console.log('Script loaded'); // Debug: Confirm script is running

    const statements = document.getElementById('statements');
    if (!statements) {
        console.error('Statements element not found');
        return;
    }

    console.log('Statements element found:', statements); // Debug: Confirm element is found

    const statementItems = statements.querySelectorAll('.statement-item');
    if (!statementItems.length) {
        console.error('No statement items found');
        return;
    }

    // Store the original text in data-text attribute and clear the content
    statementItems.forEach(item => {
        const text = item.textContent.trim();
        item.setAttribute('data-text', text);
        item.textContent = ''; // Clear the initial text
    });

    // Function to animate typing for a single statement
    function typeText(element, text, speed = 100) {
        let i = 0;
        function type() {
            if (i < text.length) {
                element.textContent = text.substring(0, i + 1);
                i++;
                setTimeout(type, speed);
            } else {
                // Remove the blinking cursor when done
                element.classList.add('typing-complete');
            }
        }
        type();
    }

    // Animate each statement with a delay between them
    statementItems.forEach((item, index) => {
        const text = item.getAttribute('data-text');
        setTimeout(() => {
            console.log(`Starting typing animation for statement ${index + 1}: ${text}`); // Debug
            typeText(item, text, 100); // 100ms per character
        }, index * 2000); // Delay each statement by 2 seconds
    });
});
