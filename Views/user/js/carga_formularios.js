document.addEventListener('DOMContentLoaded', function () {

    ////////////////////////////////////////////////////////////////////////////////////////////////////
    // MANEJA LOS EVENTOS DE CADA FORMULARIO
    ////////////////////////////////////////////////////////////////////////////////////////////////////

    $(document).on('click', '#frm_nombre_funcion', function (event) {
        //alert("Llegamos a carga_formularios")
        event.preventDefault();
        cargarFormulario('frm_nombre_funcion');
    });

    $(document).on('click', '#frm_login', function (event) {
        //alert("Llegamos a carga_formularios")
        event.preventDefault();
        cargarFormulario('frm_login');
    });

    $(document).on('click', '#frm_registrarse', function (event) {
        //alert("Llegamos a carga_formularios")
        event.preventDefault();
        cargarFormulario('frm_registrarse');
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

////////////////////////////////////////////////////////////////////////////////////////////////////
// MANEJA LA CARGA DE FORMULARIOS DINÁMICAMENTE
////////////////////////////////////////////////////////////////////////////////////////////////////

function cargarScriptFormulario(caso) {
    // Definir dependencias si las hay
    const dependencias = {
        'frm_nombre_funcion': ['js/utilidades/nombre_funcion.js'],
        'frm_registrarse': ['js/utilidades/validaciones.js'],
        'frm_login': ['js/utilidades/log.js'],
    };

    // Si el formulario tiene dependencias, las cargamos
    let scriptsToLoad = dependencias[caso] || [];

    // Agregar siempre el script principal del formulario
    scriptsToLoad.push(`js/scripts/${caso}.js`);

    cargarScriptsEnOrden(scriptsToLoad, function () {
        console.log(`Todos los scripts para ${caso} cargados correctamente.`);

        // Verificar si la función está disponible globalmente antes de invocar
        if (typeof window.inicializarFormulario === "function") {
            window.inicializarFormulario(); // Asegúrate de que la función esté en el ámbito global
        } else {
            console.warn(`La función inicializarFormulario no está definida en el script de ${caso}.`);
        }
    });
}


// Función auxiliar para cargar scripts dinámicamente en orden
function cargarScriptsEnOrden(scripts, callback) {
    if (scripts.length === 0) {
        if (callback) callback();
        return;
    }

    let script = document.createElement('script');
    script.src = scripts[0];
    script.onload = function () {
        console.log(`Script ${scripts[0]} cargado.`);
        scripts.shift();
        cargarScriptsEnOrden(scripts, callback);
    };
    script.onerror = function () {
        console.error(`Error al cargar el script: ${scripts[0]}`);
    };

    document.body.appendChild(script);
}




// Función auxiliar para inicializar el formulario si existe la función
function ejecutarInicializacionFormulario() {
    if (typeof inicializarFormulario === "function") {
        try {
            inicializarFormulario(); // Llamada a la inicialización del formulario
        } catch (error) {
            console.error("Error al inicializar el formulario:", error);
        }
    } else {
        console.warn("La función 'inicializarFormulario' no está definida.");
    }
}
