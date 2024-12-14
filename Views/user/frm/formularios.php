<?php

// Obtener el valor de 'caso' de la solicitud POST y sanitizarla con htmlspecialchars
$caso = htmlspecialchars(filter_input(INPUT_POST, 'caso', FILTER_DEFAULT));

/*htmlspecialchars() es una forma segura y recomendada de evitar inyecciones de HTML y JavaScript.*/

// Verificar que el caso es válido
if ($caso) {

    switch ($caso) {

        case "frm_nombre_funcion":
            frm_nombre_funcion();  // Llamada a la función para este caso
            break;

            // Puedes añadir más casos aquí para manejar diferentes formularios

        default:
            echo "Caso no válido o no definido.";
            break;
    }
} else {
    echo "El parámetro 'caso' es obligatorio y no fue recibido.";
}

// Función que maneja el formulario 'frm_nombre_funcion'
function frm_nombre_funcion()
{
    // Aquí puedes agregar la lógica para generar el formulario específico
    echo <<<HTML
   <form id="form-nombre-funcion">
        HEMOS LLEGADO
    </form>
HTML;
}