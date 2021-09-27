<?php

session_start();

require 'connection.php';

$db = getConnection();

// On enregistre les visiteurs dans ma base de donnée :
if (! empty($_POST)) {

    //Tableau (stocké dans la template index.phtml de mon formulaire) contenant toutes les erreurs du formulaire :
        $_SESSION['errors'] = [];

    // Vérification si le message de l'utilisateur n'existe pas déjà :
    // Récupération du message correspondant au prenom qui à été saisi dans le formulaire :
        $query = $db->prepare("
            SELECT id, prenom, nom, e_mail, message FROM visiteur WHERE message = ?
        ");

        $query->execute([
            $_POST['message']
        ]);

        $user = $query->fetch();

        // Si le message est pas vide => il existe déjà :
        if (! empty($user)) {
            $_SESSION['errors']['message'] = "Il existe déjà le même message avec ce prénom, veuillez écrire un autre message.";
        }

        // Avant d'enregistrer je regarde s'il y a des erreurs dans le formulaire :
	    // S'il y a des erreurs dans le tableau on redirige vers ma page d'accueil (le haut de ma template index.phtml) :
        if (count($_SESSION['errors']) > 0) {
            header('Location: index.php');
            exit();
        }
        else {
            // Pas d'erreurs dans le formulaire ? On supprime le tableau contenant les erreurs
		    unset($_SESSION['errors']);
        }

        // Enregistrement dans la base de données
        $query = $db->prepare("
            INSERT INTO visiteur (prenom, nom, e_mail, message) VALUES (?, ?, ?, ?)
        ");

        $query->execute([
            $_POST['prenom'],
            $_POST['nom'],
            $_POST['e_mail'],
            $_POST['message'],
        ]);

        // Redirection vers ma page d'accueil (le haut de ma template index.phtml) :
        header('Location: index.php');
        exit();
}