////////////////////////////////////////////////////////////////////////////////////////////////////
// FUNCION PARA MANEJAR EL ERRORES
////////////////////////////////////////////////////////////////////////////////////////////////////

export function handleLoginError(jqXHR, textStatus, errorThrown) {
    console.error('Error de solicitud:', jqXHR, textStatus, errorThrown);

    Swal.fire({
        icon: 'error',
        title: 'Error',
        text: `Error al procesar la solicitud: ${textStatus} - ${errorThrown}`
    });

    $('body').css('overflow', 'auto');
}
