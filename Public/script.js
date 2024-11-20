// script.js

// Cargar credenciales desde el archivo JSON
async function loadCredentials() {
    try {
        const response = await fetch('users.json'); // Ruta del archivo JSON
        if (!response.ok) throw new Error('Error al cargar las credenciales.');
        return await response.json(); // Devolver datos como objeto
    } catch (error) {
        console.error('Error:', error);
        return []; // En caso de error, devolver un array vacío
    }
}

// Manejar el evento de envío del formulario
document.getElementById('loginForm').addEventListener('submit', async function (e) {
    e.preventDefault(); // Evitar el comportamiento predeterminado del formulario

    // Cargar credenciales desde el archivo JSON
    const credentials = await loadCredentials();

    // Obtener los valores introducidos por el usuario
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Comprobar si las credenciales coinciden
    const validUser = credentials.find(user => user.username === username && user.password === password);

    // Mostrar mensajes según el resultado
    const messageElement = document.getElementById('message');
    if (validUser) {
        messageElement.style.color = 'green';
        messageElement.textContent = 'Inicio de sesión exitoso.';
        // Redirigir a otra página (opcional)
        setTimeout(() => {
            window.location.href = "dashboard.html"; // Cambiar ruta según tu página de destino
        }, 1000);
    } else {
        messageElement.style.color = 'red';
        messageElement.textContent = 'Usuario o contraseña incorrectos.';
    }
});
