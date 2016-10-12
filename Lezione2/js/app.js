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

function gestioneAzione2()
{
	// application logic per azione1
	var elencoImg = document.getElementsByTagName('img');

	// Creo una variabile che conterrà l'output HTML
	// da inserire dentro il div.message
	var output = '';

	for(var i=0; i<elencoImg.length; i++)
	{
		// Recupero un tag "img" dalla collection	
		var tagIMG_singolo = elencoImg[i];	

		// Creo in modo "incrementale" una stringa che contiene
		// l'output
		output += '<br/>' 
				+ tagIMG_singolo
						.getAttribute('alt')	// recupero attributo "alt"
						.toUpperCase();			// lo converto in MAIUSCOLO

	}

	// Inserisco il contenuto di output dentro il div
	document.getElementById('message').innerHTML = output;

}

function gestioneAzione3()
{
	var elencoImg = document.getElementsByTagName('img');
	elencoImg[2].classList.add('bordered');
	elencoImg[6].classList.add('bordered');

}

function entryPoint()
{
	// Domanda 2
	document.getElementById('btnAzione1')
			.addEventListener('click', gestioneAzione1);

	// Domanda 3
	document.getElementById('btnAzione2')
			.addEventListener('click', gestioneAzione2);

	// Domanda 4
	document.getElementById('btnAzione3')
			.addEventListener('click', gestioneAzione3);

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