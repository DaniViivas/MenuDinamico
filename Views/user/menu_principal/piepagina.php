<?php
function piepagina()
{
    echo <<<HTML
        <!-- Footer Start -->
        <div class="container-fluid bg-dark text-secondary mt-5 pt-5">
            <div class="row px-xl-5 pt-5">
                <div class="col-lg-4 col-md-12 mb-5 pr-3 pr-xl-5">
                    <h5 class="text-secondary text-uppercase mb-4">Contáctanos</h5>
                    <p class="mb-4">Estamos aquí para ayudarte con todos tus productos importados de calidad. No dudes en contactarnos para más información.</p>
                    <p class="mb-2"><i class="fa fa-map-marker-alt text-primary mr-3"></i>Ciudad Universitaria, UNAH, Tegucigalpa, Honduras</p>
                    <p class="mb-2"><i class="fa fa-envelope text-primary mr-3"></i>info@importagoats.com</p>
                    <p class="mb-0"><i class="fa fa-phone-alt text-primary mr-3"></i></p>
                </div>
                <div class="col-lg-8 col-md-12">
                    <div class="row">
                        <div class="col-md-4 mb-5">
                            <h5 class="text-secondary text-uppercase mb-4">Boletín</h5>
                            <p>Suscríbete a nuestro boletín para recibir las últimas novedades y ofertas exclusivas.</p>
                            <form action="">
                                <div class="input-group">
                                    <input type="text" class="form-control" placeholder="Tu correo electrónico">
                                    <div class="input-group-append">
                                        <button class="btn btn-primary">Suscribirse</button>
                                    </div>
                                </div>
                            </form>
                            <h6 class="text-secondary text-uppercase mt-4 mb-3">Síguenos</h6>
                            <div class="d-flex">
                                <a class="btn btn-primary btn-square mr-2" href="#"><i class="fab fa-twitter"></i></a>
                                <a class="btn btn-primary btn-square mr-2" href="#"><i class="fab fa-facebook-f"></i></a>
                                <a class="btn btn-primary btn-square mr-2" href="#"><i class="fab fa-linkedin-in"></i></a>
                                <a class="btn btn-primary btn-square" href="#"><i class="fab fa-instagram"></i></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="row border-top mx-xl-5 py-4" style="border-color: rgba(256, 256, 256, .1) !important;">
                <div class="col-md-6 px-xl-0">
                    <p class="mb-md-0 text-center text-md-left text-secondary">
                        &copy; <a class="text-primary" href="#">ImportaGoats</a>. Todos los derechos reservados.
                        Diseñado por <a class="text-primary" href="https://htmlcodex.com">Grupo 10 - Lenguaje de programación 4</a>
                    </p>
                </div>
                <div class="col-md-6 px-xl-0 text-center text-md-right">
                    <img class="img-fluid" src="img/payments.png" alt="">
                </div>
            </div>
        </div>
        <!-- Footer End -->

        <!-- Back to Top -->
        <a href="#" class="btn btn-primary back-to-top"><i class="fa fa-angle-double-up"></i></a>

        <!-- INICIO RECURSOS JS -->

         <!-- LIBRERIAS JS -->
        <!-- Jquery -->
        <script src="./lib/jquery-3.6.0.js"></script>
        <!-- SweetAlert -->
        <script src="./lib/sweetalert2.min.js"></script>
        <!-- Bootstrap -->
        <script src="./lib/bootstrap.bundle.min.js"></script>

        <!-- Template Javascript -->
        <script src="./js/main.js" defer></script>
        <!-- Otros Recursos JS -->
        <script src="./mail/jqBootstrapValidation.min.js"></script>
        <script src="./mail/contact.js"></script>
        <script src="./lib/easing/easing.min.js"></script>
        <script src="./lib/owlcarousel/owl.carousel.min.js"></script>
        
        <!-- Funciones JS y demás -->

        <!-- Funciones del logeo y logout -->
        <script type="module" src="./js/auth/login.js"></script>
        <script src="./js/auth/logout.js"></script>
        <script src="./js/carga_formularios.js" defer></script>

        

        <!-- Cierre de funciones JS y demás -->
        <!-- FINAL RECURSOS JS -->
    </body>
HTML;
}