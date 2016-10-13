/**
 * Business Logic
 */

// Creo l'array che conterrà la lista
var arInvitati = [];

/**
 * recuperaNominativo
 * recupera il nome inserito nella casella di testo 
 * e verifica se è popolata
 * 
 * @return string Nominativo
 */
function recuperaNominativo(nomeCampo)
{
    var Nominativo = document.getElementById(nomeCampo).value;

    if(Nominativo.length <= 1 )
    {
        alert('Inserire un nominativo');
        return false;
    }

    return Nominativo;
}

/**
 * duplicato
 * Verifica se già esiste un Nominativo nella lista (o array)
 * 
 * @param String nomeDaCercare
 * 
 * @return boolean;
 */
function duplicato(nomeDaCercare)
{
    var indice = arInvitati.indexOf(nomeDaCercare);

    if(indice==-1)
    {
        // significa che il nominativo non è presente nella lista
        return false;
    }

    // significa che il nominativo già esiste nella lista
    return true;
}

/**
 * aggiungiNominativo
 * Aggiunge un Nominativo in coda alla lista
 * 
 */
function aggiungiNominativo(nomeDaAggiungere)
{
    // === Verifico che il parametro esite
    if(typeof nomeDaAggiungere == 'undefined')
    {
        console.log('Nessun nominato passato');
        return false;
    }
    
    if(nomeDaAggiungere.length!=0)
    {
        arInvitati.push(nomeDaAggiungere);
        return true;
    }
}