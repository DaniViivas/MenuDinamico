////////////////////////////////////////////////////////////////////////////////////////////////////
// FUNCION PARA MANEJAR PETICIONES EXITOSAS
////////////////////////////////////////////////////////////////////////////////////////////////////

export function handleLoginSuccess(response) {
    console.log('Respuesta del servidor:', response);

    if (response.mensaje === 'Inicio de sesión exitoso.') {
        sessionStorage.setItem('jwt_token', response.token);
        sessionStorage.setItem('session_data', JSON.stringify(response.datos));
        sessionStorage.setItem('personaId', response.datos.id_persona_pk);

        Swal.fire({
            icon: 'success',
            title: 'Inicio de sesión exitoso',
            showConfirmButton: false,
            timer: 1500
        }).then(() => {
            window.location.replace('index.php');
        });
    } else {
        Swal.fire({
            icon: 'error',
            title: 'Error',
            text: response.mensaje,
            backdrop: 'rgba(0,0,0,0.4)'
        });
    }

    $('body').css('overflow', 'auto');
}
