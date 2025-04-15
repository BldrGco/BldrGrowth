console.log("Script loaded");

document.addEventListener("DOMContentLoaded", function() {
    const statements = document.getElementById("statements");
    const statementItems = statements.querySelectorAll('.statement-item');
    console.log("Statements element found:", statements);
    console.log("Statement items found:", statementItems);

    if (statements) {
        if (window.innerWidth > 768) {
            // On desktop, apply sequential fade-in
            statementItems.forEach((item, index) => {
                setTimeout(() => {
                    item.classList.add('visible');
                    console.log(`Adding visible class to statement ${index + 1}`);
                }, 1000 * (index + 1)); // Delay each statement by 1 second (1000ms)
            });
        } else {
            // On mobile, show all statements immediately since they're in normal flow
            statementItems.forEach(item => {
                item.classList.add('visible');
                console.log("Adding visible class to all statements for mobile");
            });
        }
    }
});
