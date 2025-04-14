console.log("Script loaded");

document.addEventListener("DOMContentLoaded", function() {
    const statements = document.getElementById("statements");
    console.log("Statements element found:", statements);
    if (statements) {
        setTimeout(() => {
            statements.classList.add("visible");
            console.log("Adding visible class for fade-in");
        }, 2000);
    }
});
