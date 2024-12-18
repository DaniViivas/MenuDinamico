alert("HEMOS LLEGADO AL SCRIPT frm_login.js CHAVAL")

function inicializarFormulario() {
    console.log("Inicializando formulario de Nombre de Login");

    if (typeof inicializarLog === 'function') {
        inicializarLog(); // Llama a las validaciones comunes
        console.log('Log inicializadas en frm_login.js');
    } else {
        console.warn('No se encontró la función inicializarLog.');
    }
}