

function manageAggiungi()
{

}

function creaTagLi(nominativo)
{
    // Creo una variabie che mi rappresenta un tag "li"
    var objTagLi = document.createElement('li');

    // Gli inserisco dentro il tag del contenuto
    objTagLi.innerText = nominativo;
    objTagLi.classList.add('bordato');
    objTagLi.addEventListener('mouseover', function(){console.log('eccomi')});

    // aggiungo il tag "li" al suo parent che ul#riepilogo
    document
        .getElementById('riepilogo')
        .appendChild(objTagLi);

}


function manageCasellaTestoNominativo(evento)
{    
    // === Se è stato premuto Invio
    if(evento.keyCode == 13)
    {
        var NominativoDaInserire = recuperaNominativo('fldNominativoAdd');

        // Verifico che non sia duplicato
        if(!duplicato(NominativoDaInserire) )
        // sintassi alternativa:   
        // if( duplicato(NominativoDaInserire) == false)
        {
            aggiungiNominativo(NominativoDaInserire);

            // Pulisco il contenuto della casella di testo
            document.getElementById('fldNominativoAdd').value = '';

            // Mostro riepilogo
            creaTagLi(NominativoDaInserire);

        }

    }
}


/**
 * entryPoint
 * Punto di partenza del nostro applicativo
 */
function entryPoint()
{
    // --- Gestione pulsante "aggiungi"
    document
        .getElementById('btnAggiungi')
        .addEventListener('click', manageAggiungi);

   // --- Gestione casella di testo
   document
        .getElementById('fldNominativoAdd')
        .addEventListener('keypress', manageCasellaTestoNominativo);

}

// Vanilla Javascript
window.addEventListener('load', function(){
    // === Fase di inizializzazione

    // === Richiamo entryPoint
    entryPoint();

});

