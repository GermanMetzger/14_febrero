

const sonido = document.getElementById('miSonido');

let teclasPresionadas = {};

// Detectar las teclas que se presionan
document.addEventListener('keydown', function(event) {
    // Verificar si la tecla presionada es un número (0-9)
    if (event.key >= '0' && event.key <= '9') {
        const sonidoCopia = sonido.cloneNode();
        sonidoCopia.play();
    }
});

