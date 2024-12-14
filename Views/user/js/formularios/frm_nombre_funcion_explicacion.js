// Esperamos a que el documento esté completamente cargado antes de ejecutar el código
$(document).ready(function () {

    // Escuchamos el evento 'submit' del formulario con el id '#form-nombre-funcion'
    $('#form-nombre-funcion').on('submit', function (e) {

        // Prevenimos el comportamiento por defecto del formulario (evitar la recarga de la página)
        e.preventDefault();

        // Mostramos un mensaje en la consola para confirmar que el formulario ha sido enviado
        console.log('Formulario de Nombre de Función enviado!');

        // Creamos un objeto FormData para obtener los datos del formulario en formato adecuado
        var formData = new FormData(this);

        // Usamos AJAX para enviar los datos al servidor sin recargar la página
        $.ajax({
            url: 'URL DE LA API',   // Aquí debes poner la URL del servidor que procesará el formulario
            type: 'POST',           // Indicamos que el tipo de solicitud es POST
            data: formData,         // Los datos del formulario se pasan en el cuerpo de la solicitud
            processData: false,     // Indicamos que no se debe procesar los datos de manera automática (esto es necesario cuando se usa FormData)
            contentType: false,     // No especificamos el tipo de contenido para que jQuery lo maneje automáticamente

            // Si la solicitud se realiza correctamente
            success: function (response) {
                // Mostramos la respuesta del servidor en la consola
                console.log('Respuesta del servidor:', response);

                // Comprobamos si el servidor respondió indicando éxito
                if (response.success) {
                    // Si la respuesta es exitosa, mostramos un mensaje de éxito
                    alert('Formulario enviado correctamente');
                } else {
                    // Si el servidor respondió con error, mostramos un mensaje de error
                    alert('Error en el envío del formulario');
                }
            },

            // Si ocurre un error en la solicitud AJAX
            error: function (xhr, status, error) {
                // Mostramos el error en la consola para facilitar la depuración
                console.error('Error al enviar el formulario:', error);

                // Mostramos una alerta al usuario indicando que hubo un error al procesar la solicitud
                alert('Hubo un error al procesar la solicitud.');
            }
        });
    });
});
