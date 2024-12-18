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

        case "frm_login":
            frm_login();  // Llamada a la función para este caso
            break;

        case "frm_registrarse":
            frm_registrarse();  // Llamada a la función para este caso
            break;

            // Puedes añadir más casos aquí para manejar diferentes formularios

        default:
            echo "Caso no válido o no definido.";
            break;
    }
} else {
    echo "El parámetro 'caso' es obligatorio y no fue recibido.";
}

////////////////////////////////////////////////////////////////////////////////////////////////////
// MANEJA EL FORMULARIO DE PRUEBA
////////////////////////////////////////////////////////////////////////////////////////////////////
function frm_nombre_funcion()
{
    // Aquí puedes agregar la lógica para generar el formulario específico
    echo <<<HTML
   <form id="form-nombre-funcion">
   <label for="nombre">PROBAR API:</label>
    
    <button type="submit">Enviar</button>
       
    </form>
    <div id="chiste"></div> <!-- Aquí se mostrará el chiste -->
HTML;
}

////////////////////////////////////////////////////////////////////////////////////////////////////
// MANEJA EL FORMULARIO DE LOGEO
////////////////////////////////////////////////////////////////////////////////////////////////////
function frm_login()
{
    echo <<<HTML
    <form id="form-frm_logins" action="" method="POST">

        <div class="container-fluid bg-light py-5">
            <div id="login" class="signin-card mx-auto p-4 bg-white shadow rounded" style="max-width: 400px;">
                <div class="logo-image text-center mb-3">
                    <img src="./img/logo.svg" 
                         alt="Logo" title="Logo" class="img-fluid rounded-circle" style="width: 250px;">
                </div>
                <h1 class="text-center font-weight-bold mb-2">Inicia Sesión</h1>
                <p class="text-center text-muted">Ingresa tus datos</p>

                <div id="form-login-username" class="form-group mb-3">
                    <input id="usuario" class="form-control border-dark rounded-0" 
                           name="usuario" type="text" placeholder="Usuario" required>
                </div>
                <div id="form-login-password" class="form-group mb-3">
                    <input id="contrasena" class="form-control border-dark rounded-0" 
                           name="contraseña" type="password" placeholder="Contraseña" required>
                </div>
                <div id="form-login-remember" class="form-group mb-3">
                    <div class="form-check">
                        <input id="remember" type="checkbox" class="form-check-input">
                        <label for="remember" class="form-check-label text-muted">Recuérdame</label>
                    </div>
                </div>
                <div>
                    <button class="btn btn-primary btn-block text-uppercase font-weight-bold" 
                            type="submit" name="Submit">Ingresar</button>
                </div>
            </div>
        </div>
    </form>
HTML;
}


////////////////////////////////////////////////////////////////////////////////////////////////////
// MANEJA EL FORMULARIO DE LOGEO
////////////////////////////////////////////////////////////////////////////////////////////////////
function frm_registrarse()
{
    echo <<<HTML

       <!-- Formulario de Registro de Cliente -->

       <div class="container mt-4">
    <div class="form-container bg-light p-4 rounded shadow-sm">

        <h2 class="text-center mb-4">Registro de Cliente</h2>

        <!-- Navegación de pestañas -->
        <ul class="nav nav-tabs" id="formTabs" role="tablist">
            <li class="nav-item" role="presentation">
                <button class="nav-link active" id="step1-tab" data-bs-toggle="tab" data-bs-target="#step1" type="button" role="tab">Paso 1</button>
            </li>
            <li class="nav-item" role="presentation">
                <button class="nav-link" id="step2-tab" data-bs-toggle="tab" data-bs-target="#step2" type="button" role="tab">Paso 2</button>
            </li>
            <li class="nav-item" role="presentation">
                <button class="nav-link" id="step3-tab" data-bs-toggle="tab" data-bs-target="#step3" type="button" role="tab">Paso 3</button>
            </li>
        </ul>

        <!-- Contenido de las pestañas -->
        <div class="tab-content mt-3" id="formTabsContent">
            <!-- Paso 1 -->
            <div class="tab-pane fade show active" id="step1" role="tabpanel">
                <form id="form-frm_registrarse">
                    <div class="row">
                        <div class="col-md-6 mb-3">
                            <label for="nombre" class="form-label">Nombre</label>
                            <input type="text" class="form-control" id="nombre" name="nombre" required>
                        </div>
                        <div class="col-md-6 mb-3">
                            <label for="apellido" class="form-label">Apellido</label>
                            <input type="text" class="form-control" id="apellido" name="apellido" required>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-md-6 mb-3">
                            <label for="genero" class="form-label">Género</label>
                            <select class="form-select" id="genero" name="genero" required>
                                <option value="">Selecciona</option>
                                <option value="Masculino">Masculino</option>
                                <option value="Femenino">Femenino</option>
                            </select>
                        </div>
                        <div class="col-md-6 mb-3">
                            <label for="fecha_nacimiento" class="form-label">Fecha de Nacimiento</label>
                            <input type="date" class="form-control" id="fecha_nacimiento" name="fecha_nacimiento" required>
                        </div>
                    </div>
                    <button class="btn btn-primary float-end" type="button" data-bs-target="#step2" data-bs-toggle="tab">Siguiente</button>
                </form>
            </div>

            <!-- Paso 2 -->
            <div class="tab-pane fade" id="step2" role="tabpanel">
                <form>
                    <div class="row">
                        <div class="col-md-6 mb-3">
                            <label for="DNI" class="form-label">DNI</label>
                            <input type="text" class="form-control" id="DNI" name="DNI" required>
                        </div>
                        <div class="col-md-6 mb-3">
                            <label for="telefono" class="form-label">Teléfono</label>
                            <input type="text" class="form-control" id="telefono" name="telefono" required>
                        </div>
                    </div>
                    <div class="mb-3">
                        <label for="direccion" class="form-label">Dirección</label>
                        <textarea class="form-control" id="direccion" name="direccion" rows="3" required></textarea>
                    </div>
                    <button class="btn btn-secondary" type="button" data-bs-target="#step1" data-bs-toggle="tab">Atrás</button>
                    <button class="btn btn-primary float-end" type="button" data-bs-target="#step3" data-bs-toggle="tab">Siguiente</button>
                </form>
            </div>

            <!-- Paso 3 -->
            <div class="tab-pane fade" id="step3" role="tabpanel">
                <form>
                    <div class="row">
                        <div class="col-md-6 mb-3">
                            <label for="usuario" class="form-label">Usuario</label>
                            <input type="text" class="form-control" id="usuario" name="usuario" required>
                        </div>
                        <div class="col-md-6 mb-3">
                            <label for="contrasena" class="form-label">Contraseña</label>
                            <input type="password" class="form-control" id="contrasena" name="contrasena" required>
                        </div>
                    </div>
                    <div class="mb-3">
                        <label for="id_tipo_persona_fk" class="form-label">Tipo de Persona</label>
                        <select class="form-select" id="id_tipo_persona_fk" name="id_tipo_persona_fk" required>
                            <option value="">Selecciona</option>
                            <option value="1">Cliente</option>
                            <option value="2">Proveedor</option>
                        </select>
                    </div>
                    <button class="btn btn-secondary" type="button" data-bs-target="#step2" data-bs-toggle="tab">Atrás</button>
                    <button class="btn btn-success float-end" type="submit">Registrar</button>
                </form>
            </div>
        </div>
    </div>
</div>

HTML;
}
