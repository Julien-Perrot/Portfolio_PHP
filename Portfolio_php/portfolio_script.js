// Fonction de mes phrases d'introduction en typing sous mon titre h2 :
let texts = ["Je suis Julien.", "Développeur Web Junior.", "Je suis motivé, passionné (un peu geek).", "À la recherche d'un emploi."];
let count = 0;
	function changeText() {
   		$(".typewrite").text(texts[count]);
   		count < 4 ? count++ : count = 0;
}
setInterval(changeText, 2000);

// Fonction pour le scroll de ma nav_bar :
$(document).ready(function(){
	$(window).bind('scroll', function() {
		let navHeight = $('.header').height();
		if ($(window).scrollTop() > navHeight) {
			$('.navbar').addClass('fixed');
			// Fonction pour le positionnement de mes <li> et <a> à gauche quand vient le scroll (.nav-1 = et la premiere classe de ma balise <li></li>). 
			//$('.nav-1').addClass('toleft');
		 }
		else {
			$('.navbar').removeClass('fixed');
			// Fonction pour le positionnement de mes <li> et <a> à gauche quand vient le scroll (.nav-1 = et la premiere classe de ma balise <li></li>).
			//$('.nav-1').removeClass('toleft');
		 }
	});
});

// Fonction d'affiche au clic sur les BTN dans section Projet :
$(document).ready(function() {

	// Au clic sur les boutons :
	$('.btn').on('click', function(event) {
		// important ? :
		event.stopPropagation();

		// Je récupère les data-id de mes BTN :
		let id = $(this).data('id');

		// On ferme les box sauf celle concernée :
		$(".box:not(#box-"+id+")").hide();

		// On ouvre ou ferme les bos concernée
		$(".box-"+id).slideToggle();
	});

	// Fermeture de la section card du projet au clic en dehors des div :
	/* $(window).on('click', function() {
		$(".box").slideUp();
	});
	*/
});

// Fonction pour le scroll de l'image music.png pour le retour en haut de page :
let mybutton = document.getElementById("myBtn");

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
    mybutton.style.display = "block";
  }
  else {
    mybutton.style.display = "none";
  }
}