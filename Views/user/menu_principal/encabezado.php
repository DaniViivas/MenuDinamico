<?php

function encabezado($title)
{
    /* Se usa la caracteristicas de Heredoc <<<NOMBRE_IDENTIFICADOR 
    Para que no haya problemas con usar comilla simple o comilla doble  dentro del bloque 
    */
    echo <<<HTML

    <!-- ACA SE PONE EL HTML -->
    <!-- ESTO SERA ESTATICO -->
    
    <!doctype html>
    <html lang="es">
                    <!-- INICIO DEL HEAD  -->

        <head>

        <meta charset="utf-8">
        <title>FRONTEND LP4 PROYECTO</title>
        <meta content="width=device-width, initial-scale=1.0" name="viewport">
        <meta content="Free HTML Templates" name="keywords">
        <meta content="Free HTML Templates" name="description">

        <!-- ACA SE COLOCAN LOS RECURSOS ESTATICOS, CSS, ASSETS, ETC  -->
        
        <!-- Favicon -->
        <link href="./img/logo.svg" rel="icon">
        <!-- Google Web Fonts -->
        <link rel="preconnect" href="https://fonts.gstatic.com">
        <link href="./css/bootstrap.min.css" rel="stylesheet">
        <link href="./assets/fonts/roboto.css" rel="stylesheet">
        <!-- Font Awesome CDN -->
        <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css" rel="stylesheet">

       
        <!-- Font Awesome -->

        <!-- Libraries Stylesheet -->
        <link href="./lib/animate/animate.min.css" rel="stylesheet">
        <link href="./lib/owlcarousel/assets/owl.carousel.min.css" rel="stylesheet">
        <!-- Customized Bootstrap Stylesheet -->
        <link href="./css/style.css" rel="stylesheet">

        <!-- CIERRE DE RECUROS ESTATICOS  -->
        </head>
                 <!-- CIERRE DEL HEAD  -->

HTML; // Este debe ir pegado hasta la izq, por caractesiticas de php usando HEREDOC
}