/**
 * Application Logic and Behavioral Logic
 */


function attivaTrigger()
{
	// sto in ascolto che viene cliccato il button
	var btnSomma=document.getElementById('PulsanteSomma');

	btnSomma.addEventListener('click', function(){

		// Recupero il valore della casella di testo
		var objNumero = document.getElementById('fldNumero');
		console.log(objNumero);

		// Recupero quanto inserito nella casella di testo
		// e lo inserisco nella variabile "NumeroInserito"
		var NumeroInserito = objNumero.value;

		// Richiamo la funzione che si occupa di fare la sommatoria
		sommatoria(NumeroInserito);

		// Disegno in pagina, nel tag div id="risultato"
		// una stringa HTML che contiene il totale
		document
			.getElementById('risultato')				// dammi questo tad identificato da ID
			.innerHTML='Risultato = '.concat(Totale);	// inserisci questo contenuto

	});
	
}


// Individo l'evento di caricamento della pagina
window.addEventListener(
	'load', 				// nome evento 
	function(){				// funzione di gestione evento
		
		console.log('Pagina caricata');
		attivaTrigger();

	}
);
