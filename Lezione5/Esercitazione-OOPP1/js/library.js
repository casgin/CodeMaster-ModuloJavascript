/**
 * Business Logic
 */

// Creo un'instanza dell'oggetto generico,
// SINGLE INSTANCE
// interno all'interprete Javascript
// che di fatto non contiene nulla
var anagrafica = new Object();

// --- Aggiungo le proprieta (o attributi)
anagrafica.Nome = 'Gianfranco';
anagrafica.Cognome = 'Castro';
anagrafica.Email = 'gianfanco.castro@gmail.com';

// --- Aggiungo i metodi
anagrafica.getNome = function()
{
	return this.Nome;
}

anagrafica.getNominativoComplmeto = function()
{
	var nominativo = '';

	nominativo = this.Nome + ' - ' + this.Cognome + ' - ' 
					+ this.Email;

	return nominativo;				
}

anagrafica.setNome = function(nuovoNome)
{
	// quando imposto un nome lo voglio già convertito in maiuscolo
	this.Nome = nuovoNome.toUpperCase();
}

anagrafica.setCognome = function(nuovoCognome)
{
	this.Cognome = nuovoCognome;
}

anagrafica.sendToDatabase = function()
{
	
}