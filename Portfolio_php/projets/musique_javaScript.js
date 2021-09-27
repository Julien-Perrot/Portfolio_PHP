let btnAfficher = document.getElementById('btnAfficher');
let note = document.getElementById('note');
let containerMusique = document.querySelector('.containerMusique');

const musiques = [
{
	'artist'	:	'Vitaa & Slimane',
	'title'		:	'Versus / Chapitre II',
	'notes'		:	2
},
{
	'artist'	:	'Ninho',
	'title'		:	'M.I.L.S 3',
	'notes'		:	5
},
{
	'artist'	:	'Maes',
	'title'		:	'Les Derniers Salopards',
	'notes'		:	7
},
{
	'artist'	:	'Angèle',
	'title'		:	'Brol',
	'notes'		:	8
},
{
	'artist'	:	'Francis',
	'title'		:	'Cabrel',
	'notes'		:	9
},
{
	'artist'	:	'Dadju',
	'title'		:	'Poison ou Antidote',
	'notes'		:	1
},
{
	'artist'	:	'Les Enfoirés',
	'title'		:	'Le Pari(s) des Enfoirés',
	'notes'		:	4
},
{
	'artist'	:	'AC/DC',
	'title'		:	'Power UP',
	'notes'		:	10
},
{
	'artist'	:	'Grand Corps Malade',
	'title'		:	'Mesdames',
	'notes'		:	3
},
{
	'artist'	:	'Johnny Hallyday',
	'title'		:	'Son rêve américain',
	'notes'		:	6
},
{
	'artist'	:	'Indochine',
	'title'		:	'Singles Collection',
	'notes'		:	5
},
{
	'artist'	:	'Vianney',
	'title'		:	'N\'attendons pas',
	'notes'		:	3
},
{
	'artist'	:	'Kendji Girac',
	'title'		:	'Mi vida',
	'notes'		:	0
},
{
	'artist'	:	'PNL',
	'title'		:	'Deux frères',
	'notes'		:	4
},
{
	'artist'	:	'Jul',
	'title'		:	'La Machine',
	'notes'		:	0
},
{
	'artist'	:	'Soprano',
	'title'		:	'Phoenix',
	'notes'		:	7
},
{
	'artist'	:	'Julien Doré',
	'title'		:	'Aimée',
	'notes'		:	2
},
{
	'artist'	:	'Claudio Capéo',
	'title'		:	'Penso a te',
	'notes'		:	1
},
{
	'artist'	:	'Zola',
	'title'		:	'Survie',
	'notes'		:	6
},
{
	'artist'	:	'Patrick Fiori',
	'title'		:	'Un air de famille',
	'notes'		:	9
}];

// Affichage de la liste complète des musiques
btnAfficher.addEventListener('click', function() {
	containerMusique.textContent = "";
	for (let i = 0 ; i < musiques.length ; i++) {
		let element = document.createElement('div');
		element.classList.add('musique-item');
		let artiste = musiques[i].artist;
		let titre = musiques[i].title;
		let note = musiques[i].notes;
		element.innerHTML = "Artiste = " + artiste + "<br />Titre : " + titre + "<br />Note : " + note + "/10";
		containerMusique.appendChild(element);
	}
})

// Affichage des musiques selon une note minimal
note.addEventListener('change', function() {
	containerMusique.textContent = "";
	let noteChoisie = note.value;
 	for (let i = 0 ; i < musiques.length; i++) {
		if (musiques[i].notes >= noteChoisie) {
			let element = document.createElement('div');
			element.classList.add('musique-item');
			let artiste = musiques[i].artist;
			let titre = musiques[i].title;
			let note = musiques[i].notes;
			element.innerHTML = "Artiste = " + artiste + "<br />Titre : " + titre + "<br />Note : " + note + "/10";
			containerMusique.appendChild(element);
		}
	}
})