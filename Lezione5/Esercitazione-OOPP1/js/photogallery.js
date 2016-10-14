/* Photo Gallery Obejct */

var PhotoGallery = new Object();

// --- Creo le proprietà
PhotoGallery.indicePhoto = 0;
PhotoGallery.arImmagini = [];
PhotoGallery.folder = '';



// --- Creo i metodi
PhotoGallery.setFolder = function(nomeCartella) {
	this.folder = nomeCartella;
};

// ------------------------------------------------

PhotoGallery.getFolder = function() {
	return this.folder;
};

// ------------------------------------------------

PhotoGallery.getNextPhoto = function() {
	// Incremento indice
	this.indicePhoto++;
	if(this.indicePhoto>=this.arImmagini.length)
	{
		this.indicePhoto=0;
	}

	return this.getImage(this.indicePhoto);
};

// ------------------------------------------------

PhotoGallery.getPrevPhoto = function() {
		// Incremento indice
	this.indicePhoto--;
	if(this.indicePhoto<=this.arImmagini.length)
	{
		this.indicePhoto=0;
	}

	return this.getImage(this.indicePhoto);

};

// ------------------------------------------------

PhotoGallery.getFirstPhoto = function() {
	return this.getImage(0);
};

// ------------------------------------------------

/**
 * getImage 
 * Restituisce il nome dell'immegine in base all'indicie passato
 * 
 * @param  int indice 
 * @return mixed  (boolean/string)
 */
PhotoGallery.getImage = function(indice) {
	// Verifico che indice sia compreso nell'array
	if(typeof this.arImmagini[indice] !== 'undefined')
	{
		return this.folder+'/'+this.arImmagini[indice];
	}

	return false;
};

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