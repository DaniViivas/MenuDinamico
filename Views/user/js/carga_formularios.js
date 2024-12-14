document.addEventListener('DOMContentLoaded', function () {
    ////////////////////////////////////////////////////////////////////////////////////////////////////
    // MANEJA LOS EVENTOS DE CADA FORMULARIO
    ////////////////////////////////////////////////////////////////////////////////////////////////////

    $(document).on('click', '#frm_nombre_funcion', function (event) {
        //alert("Llegamos a carga_formularios")
        event.preventDefault();
        cargarFormulario('frm_nombre_funcion');
    });

});

////////////////////////////////////////////////////////////////////////////////////////////////////
// MANEJA LA CARGA DE FORMULARIOS DINÁMICAMENTE
////////////////////////////////////////////////////////////////////////////////////////////////////

function cargarFormulario(caso) {
    console.log("Datos enviados:", { caso: caso });

    // Mostrar indicador de carga
    $("#Contendor-Dinamico").html('<div class="loading">Cargando...</div>');

    $.ajax({
        url: './frm/formularios.php',
        type: 'POST',
        data: { caso: caso },
        success: function (resp) {
            console.log("Respuesta recibida:", resp);
            $("#Contendor-Dinamico").html(resp);

            // Cargar el script específico para inicializar el formulario
            cargarScriptFormulario(caso);
        },
        error: function () {
            alert('Error al cargar el formulario.');
            $("#Contendor-Dinamico").html('<div class="error">Error al cargar el formulario</div>');
        }
    });
}

// Función para cargar dinámicamente el script correspondiente
function cargarScriptFormulario(caso) {
    let scriptPath = `js/scripts/${caso}.js`; // Ruta del script del formulario

    // Crear un elemento <script> y agregarlo al DOM
    let script = document.createElement('script');
    script.src = scriptPath;
    script.onload = function () {
        console.log(`Script ${scriptPath} cargado correctamente`);
        if (typeof inicializarFormulario === "function") {
            inicializarFormulario();
        } else {
            console.warn(`La función inicializarFormulario no está definida en ${scriptPath}`);
        }
    };
    script.onerror = function () {
        console.error(`Error al cargar el script: ${scriptPath}`);
    };

    document.body.appendChild(script);
}
