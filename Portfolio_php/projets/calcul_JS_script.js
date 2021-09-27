$(function() {
            let champsNote = $('#notes');
            let moyenneCalculee = $('.moyenneCalculee');
            let formulaire = $('.blocCentral');

            formulaire.on('submit', function(e) {
                e.preventDefault();
                let valeurChamps = champsNote.val();
                let tableauValeurs = valeurChamps.split(',');
                let moyenne = calculerMoyenne(tableauValeurs);
                moyenneCalculee.text(moyenne);              
            })

            const calculerMoyenne = (tab) => {
                let somme = 0;
                tab.forEach(element => somme += parseInt(element));
                return somme / tab.length;
            }
        })