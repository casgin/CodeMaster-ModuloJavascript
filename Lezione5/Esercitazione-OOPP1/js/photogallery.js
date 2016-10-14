/* Photo Gallery Obejct */

var PhotoGallery = new Object();

// --- Creo le proprietà
PhotoGallery.indicePhoto = 0;
PhotoGallery.arImmagini = [];

// --- Creo i metodi
PhotoGallery.getNextPhoto = function() {};
PhotoGallery.getPrevPhoto = function() {};
PhotoGallery.getImage = function(indice) {};
PhotoGallery.getFirstPhoto = function() {};

/**
 * getNumPhoto 
 * Restituisce quante foto abbiamo nella gallery
 * 
 * @return int Numero foto
 */
PhotoGallery.getNumPhoto = function() 
{
	return this.arImmagini.length;
}

/**
 * setImage 
 * Inserisce un'immagine nell'array
 * 
 * @param String nomeImmagine nome del file
 */
PhotoGallery.setImage = function(nomeImmagine)
{
	this.arImmagini.push(nomeImmagine);
}