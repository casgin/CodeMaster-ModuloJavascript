/**
 * Application Logic and Behavioral Logic
 */

function gestioneAzione1()
{
	// application logic per azione1
	var elencoImg = document.getElementsByTagName('img');
	console.log(elencoImg);

	for(var i=0; i<elencoImg.length; i++)
	{
		var tagIMG_singolo = elencoImg[i];
		console.log(tagIMG_singolo.getAttribute('title'));

		document.getElementById('message').innerHTML += '<br/>' + tagIMG_singolo.getAttribute('title');
	}

}




function entryPoint()
{
	// Domanda 2
	document.getElementById('btnAzione1')
			.addEventListener('click', gestioneAzione1);

}


// Domanda 1
window.addEventListener('load', function(){

	// Seleziono tutti i tag img
	// Utilizzando getElementsByTagName otteniamo una "collection"
	// di elementi.
	var elencoImg = document.getElementsByTagName('img');

	// dato che ho una collection, ho la proprietà ".length"
	// che mi dice quanti elementi ho nella collection
	
	// Voglio esaminare ogni elemento della collection
	// utilizzando un ciclo for
	// for(indice_partenza; condizione_fine; incremento_iterazione)
	for(var i=0; i<elencoImg.length; i++)
	{
		// Recupero un elemento dalla collection
		// nomeCollection[indice]
		var singoloImg = elencoImg[i];

		// Mostro in console, l'attributo "src"
		console.log(singoloImg.getAttribute('src'));
	}

	// Richiamo entryPoint()
	entryPoint();
});