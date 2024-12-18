
alert("HEMOS LLEGADO AL SCRIPT frm_nombre_funcion.js CHAVAL")

function inicializarFormulario() {
    console.log("Inicializando formulario de Nombre de Función");

    if (typeof inicializarNombre_funcion === 'function') {
        inicializarNombre_funcion(); // Llama a las validaciones comunes
        console.log('Nombre_funcion inicializadas en frm_nombre_funcion.js');
    } else {
        console.warn('No se encontró la función inicializarNombre_funcion.');
    }
}

$(document).ready(function () {
    // Configura eventos del formulario
    $('#form-nombre-funcion').on('submit', function (e) {
        e.preventDefault();
        console.log('Formulario de Nombre de Función enviado!');

        $.ajax({
            url: 'https://v2.jokeapi.dev/joke/Any?lang=es',
            type: 'GET',
            success: function (response) {
                console.log('Respuesta del servidor:', response);

                if (response.error) {
                    alert('Hubo un error al obtener el chiste.');
                } else {
                    const chiste = response.type === 'single' ? response.joke : `${response.setup} - ${response.delivery}`;
                    $('#chiste').text(chiste);
                }
            },
            error: function () {
                console.error('Error al obtener el chiste');
                alert('Hubo un error al obtener el chiste.');
            }
        });
    });
});
