/**
 * Business Logic
 */

// Dichiaro una variabile GLOBALE
var Totale = 0;

// Dichiaro la mia funziona "sommatoria"
function sommatoria(numero)
{
	// Prendo la variabile GLOBALE e gli sommo il numero
	// forzo la conversione del numero verso il tipo INTERO
	Totale += parseInt(numero);

	// Mostro il risultato in console
	console.log('Totale = '.concat(Totale));
}