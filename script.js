document.getElementById('loginForm').addEventListener('submit', function (e) {
    e.preventDefault(); // Evita que se recargue la página al hacer submit

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
 

    const users = [
        {
            "username": "juano",
            "password": "sesion" 
        },
        {
            "username": "alberto",
            "password": "alberto123" 
        }
    ];

    // Buscar usuario en la lista
    const user = users.find(u => u.username === username);

    if (user) {
        // Comprobar si la contraseña introducida coincide con la almacenada
        if (user.password === password) {
            document.getElementById('message').textContent = "¡Acceso concedido!";
            document.getElementById('message').style.color = "green";

            window.location.href = "menu.html"; // Redirige al menú
        } else {
            document.getElementById('message').textContent = "Contraseña incorrecta.";
            document.getElementById('message').style.color = "red";
        }
    } else {
        document.getElementById('message').textContent = "Usuario no encontrado.";
        document.getElementById('message').style.color = "red";
    }
});
