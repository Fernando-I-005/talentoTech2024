// Seleccionar el cuerpo del documento y el botón
const body = document.body;
const toggleButton = document.getElementById('toggleMode');

// Agregar un evento al botón para alternar entre modos
toggleButton.addEventListener('click', () => {
    console.log("Botón presionado");
    // Alternar las clases de Bootstrap para claro y oscuro
    body.classList.toggle('bg-light');
    body.classList.toggle('text-dark');
    body.classList.toggle('bg-dark');
    body.classList.toggle('text-light');

    // Cambiar el texto del botón según el modo activo
    if (body.classList.contains('bg-dark')) {
        toggleButton.textContent = 'Cambiar a Modo Claro';
    } else {
        toggleButton.textContent = 'Cambiar a Modo Oscuro';
    }
});

