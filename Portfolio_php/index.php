<?php

// Je démarre la session base.phtml qui est ma nav_bar et mon footer :
session_start();

// J'exige une connection ma base de donnée.
require 'connection.php';

// Contenu spécifique de la page : 
    $template = 'index';
    $title = 'Portfolio';

// J'affiche le code html de ma nav_bar et de mon footer a mes pages
require 'base.phtml';