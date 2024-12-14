////////////////////////////////////////////////////////////////////////////////////////////////////
// FUNCION PARA MANEJAR EL LOGIN
////////////////////////////////////////////////////////////////////////////////////////////////////

import { handleLoginSuccess } from './handlers/successHandlers.js';
import { handleLoginError } from './handlers/errorHandlers.js';

function loginUser(event) {
    console.log("LLEGAMOS ACA")
    alert("HOLAAAAAAA")
    event.preventDefault();
    const usuario = document.getElementById('usuario').value.trim();
    const contrasena = document.getElementById('contrasena').value.trim();

    if (!usuario || !contrasena) {
        Swal.fire({
            icon: 'warning',
            title: 'Campos vacíos',
            text: 'Por favor, complete ambos campos para iniciar sesión.',
            backdrop: 'rgba(0,0,0,0.4)'
        });
        return;
    }

    $('body').css('overflow', 'hidden');

    const requestData = { usuario, contrasena };

    $.ajax({
        url: 'http://localhost/Proyecto_LP4_ImportaGoats/public/auth_cliente/',
        type: 'POST',
        data: JSON.stringify(requestData),
        contentType: 'application/json',
        dataType: 'json',
        success: handleLoginSuccess,
        error: handleLoginError
    });
}
