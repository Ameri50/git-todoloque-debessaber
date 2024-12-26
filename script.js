document.querySelectorAll('.command').forEach(command => {
    command.addEventListener('click', () => {
        // Pregunta al usuario si quiere ver más información
        const question = `¿Quieres saber más sobre el comando "${command.textContent}"?`;
        const answer = confirm(question);

        if (answer) {
            // Toggle the display of the troubles
            const troubles = command.nextElementSibling;
            if (troubles.style.display === "block") {
                troubles.style.display = "none"; // Oculta si ya está visible
            } else {
                // Oculta todos los demás mensajes de contratiempos
                document.querySelectorAll('.troubles').forEach(t => t.style.display = "none");
                troubles.style.display = "block"; // Muestra el contratiempo correspondiente
            }
        }
    });
});