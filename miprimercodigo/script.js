// 1. Seleccionamos el buscador y todas las tarjetas de la web
const buscador = document.getElementById('buscador');
const tarjetas = document.querySelectorAll('.bloque-solacion');

// 2. Escuchamos lo que el usuario escribe en tiempo real
buscador.addEventListener('input', function(evento) {
    // Convertimos lo que escribe el usuario a minúsculas para evitar problemas con las mayúsculas
    const textoUsuario = evento.target.value.toLowerCase();

    // 3. Recorremos cada tarjeta de la página una por una
    tarjetas.forEach(function(tarjeta) {
        // Obtenemos todo el texto que hay dentro de la tarjeta (título, descripción, etc.)
        const textoTarjeta = tarjeta.textContent.toLowerCase();

        // 4. Comprobamos si el texto del usuario está incluido dentro de la tarjeta
        if (textoTarjeta.includes(textoUsuario)) {
            // Si coincide, mostramos la tarjeta de forma flexible (su estado original)
            tarjeta.style.display = 'flex';
        } else {
            // Si no coincide, ocultamos la tarjeta por completo
            tarjeta.style.display = 'none';
        }
    });
});