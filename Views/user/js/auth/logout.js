////////////////////////////////////////////////////////////////////////////////////////////////////
// Salir del sistema 
////////////////////////////////////////////////////////////////////////////////////////////////////
function cerrarSesion() {
    $.ajax({
        url: './funciones/logout.php',
        type: 'POST',
        success: function (resp) {
            // Verifica la respuesta del servidor
            if (resp == 1) {
                // Limpiar los datos de sessionStorage antes de redirigir
                sessionStorage.removeItem('personaId');
                sessionStorage.removeItem('jwt_token');
                sessionStorage.removeItem('session_data');

                // Verifica que los datos hayan sido eliminados (opcional)
                console.log('Datos de sesión eliminados:', sessionStorage);

                // Redirige al usuario a la página de inicio de sesión
                window.location.href = './index.php';
            } else {
                alert("Error al cerrar la sesión");
            }
        }
    });
}

$('#btn-exit').on('click', function () {
    Swal.fire({
        title: '¿Quieres salir del sistema?',
        text: "La sesión actual se cerrará y dejarás el sistema.",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonText: 'Sí, salir',
        cancelButtonText: 'Cancelar'
    }).then((result) => {
        if (result.isConfirmed) {
            cerrarSesion(); // Llama a la función para cerrar sesión
        }
    });
});



