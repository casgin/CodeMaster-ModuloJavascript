/**
 * Application Logic and Behavioral Logic
 */

/**
 * verificaCampiVuoti
 * Verifica che i campi di pagina.html siano popolati e
 * maggiori di 2 caratteri
 * 
 * @return true
 */
function verificaCampiVuoti() {
	
	// Recupero il valore del campo fldNome
	var fldNome = document.getElementById('fldNome').value;
	if(fldNome.length==0)
	{
		mostraAvviso('campo Nome obbligatorio','fldNome');	
	}

	var fldCognome = document.getElementById('fldCognome').value;
	if(fldCognome.length==0)
	{
		mostraAvviso('campo Cognome obbligatorio','fldCognome');		
	}

	var fldEmail = document.getElementById('fldEmail').value;
	if(fldEmail.length==0)
	{
		mostraAvviso('campo Email obbligatorio','fldEmail');
	}

}

/**
 * mostraAvviso 
 * mostra il messaggio di alert per avvirtire l'utente
 * che di tratta di un campo obbligatorio
 * 
 * @param  string frase   frase da mostrare all'utente
 * @param  string fldName attributo id del campo
 * 
 * @return true
 */
function mostraAvviso(frase,fldName)
{
	alert(frase);
	document.getElementById(fldName)
			.classList.add('campoObbligatorio');
	return true;
}

function calcolaCostoSpedizione() {

	var costoSpedizione = 0;

	// voglio recuperare il valore del campo select
	// per la città selezionata	 
	var indiceSelezionato = document
								.getElementById('fldCitta')
								.selectedIndex;

	switch(indiceSelezionato)
	{
		case 2:
		case 3:
			costoSpedizione = 10;
			break;

		case 4:
			costoSpedizione = 25;
			break;

		default:
			costoSpedizione = 5;
			break;	
	}	

	return costoSpedizione;
}

/**
 * mostraCostoSpedizione 
 * Visualizza in pagina (alert) il costo di spedizione
 * 
 * @param  int importo 	Importo della spedizione
 * @return true         
 */
function mostraCostoSpedizione(importo)
{
	alert('Il costo spezione ='.concat(importo));
	return true;
}

function mostraRiepilogo() {}

function mostraElencoCitta() {}

// -----------------------------

function sommaTantiNumeri()
{
	// ho a disposizione un array "arguments" predefinito
	var Totale=0;

	for(var i in arguments)
	{
		console.log(typeof arguments[i]);
		if(typeof arguments[i] == 'number')
		{
			Totale += arguments[i];
		}
		
	}
	return Totale;
}

// -----------------------------

function entryPoint()
{
	document
		.getElementById('btnInviaDati')
		.addEventListener('click', function(){

			verificaCampiVuoti();

			mostraCostoSpedizione( 
				// utilizzo il return di questa funzione
				// come argomento di mostraCostoSpedizione
				calcolaCostoSpedizione()
				);

			// E' come scrivere
			// var Costo = calcolaCostoSpedizione();
			// mostraCostoSpedizione(Costo);

			mostraRiepilogo();
			mostraElencoCitta();


		});


}



window.addEventListener('load', function() {
	
	// === Inizializzazione Applicativo


	// === Richiamo entryPoint()
	entryPoint();
});

window.addEventListener('unload', function(){
	alert('sto chiudendo la finestra');
});

document.addEventListener('unload', function(){
	alert('sto chiudendo il documento');
});