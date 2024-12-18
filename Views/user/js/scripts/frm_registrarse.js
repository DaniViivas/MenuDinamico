alert("HEMOS LLEGADO AL SCRIPT frm_registrarse.js CHAVAL")

function inicializarFormulario() {
    console.log("Inicializando formulario de Nombre frm_registrarse");

    if (typeof inicializarValidaciones === 'function') {
        inicializarValidaciones(); // Llama a las validaciones comunes
        console.log('Validaciones inicializadas en frm_registrarse.js');
    } else {
        console.warn('No se encontró la función inicializarValidaciones.');
    }
}

document.addEventListener('DOMContentLoaded', function () {


    // Inicializa los elementos de pestañas de Bootstrap
    const formTabs = new bootstrap.Tab(document.getElementById('step1-tab'));
    const nextBtns = document.querySelectorAll('[data-bs-toggle="tab"]'); // Botones de "Siguiente"
    const prevBtns = document.querySelectorAll('[data-bs-target^="#step"]'); // Botones de "Atrás"

    // Función para validar cada paso
    function validateStep(stepId) {
        const form = document.querySelector(`#${stepId} form`);
        const inputs = form.querySelectorAll('input, select, textarea');
        let isValid = true;

        inputs.forEach(input => {
            if (input.required && input.value.trim() === '') {
                input.classList.add('is-invalid');
                isValid = false;
            } else {
                input.classList.remove('is-invalid');
            }
        });

        return isValid;
    }

    // Maneja el clic en los botones "Siguiente"
    nextBtns.forEach(btn => {
        btn.addEventListener('click', function (e) {
            const targetTab = e.target.getAttribute('data-bs-target');
            const currentStep = e.target.getAttribute('data-bs-toggle');
            const stepId = currentStep ? currentStep : targetTab;

            // Valida el paso antes de continuar
            if (validateStep(stepId.substring(1))) {
                const nextTab = new bootstrap.Tab(document.querySelector(targetTab));
                nextTab.show();
            }
        });
    });

    // Maneja el clic en los botones "Atrás"
    prevBtns.forEach(btn => {
        btn.addEventListener('click', function (e) {
            const targetTab = e.target.getAttribute('data-bs-target');
            const prevTab = new bootstrap.Tab(document.querySelector(targetTab));
            prevTab.show();
        });
    });

    // Configura la acción de "Registrar" al enviar el formulario
    const submitBtn = document.querySelector('#step3 button[type="submit"]');
    submitBtn.addEventListener('click', function (e) {
        e.preventDefault();

        // Valida el último paso
        if (validateStep('step3')) {
            // Aquí puedes hacer la lógica para enviar los datos, como usar AJAX
            const formData = new FormData(document.getElementById('form-frm_registrarse'));
            console.log('Datos enviados:', Object.fromEntries(formData));

            // Simula un envío exitoso
            alert('¡Formulario enviado con éxito!');
            // Reinicia el formulario
            document.getElementById('form-frm_registrarse').reset();
        } else {
            alert('Por favor, complete todos los campos antes de continuar.');
        }
    });
});
