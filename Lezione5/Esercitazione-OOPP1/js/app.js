/**
 * Application Logic and Behavioral Logic
 */

/**
 * drawPhoto
 * Disegna il nomeImmagine nel tag img#photoContent
 * 
 * @param  String nomeImmagine nome del file
 */
function drawPhoto(nomeImmagine)
{
	document.getElementById('photoContent')
				.setAttribute('src', nomeImmagine);	
}

function entryPoint()
{
	// === Voglio inserire la prima immagine nella pagina,
	// === Utilizzando il metodo getFirtPhoto()
	drawPhoto(PhotoGallery.getFirstPhoto());


	// === Attivo gli EventListener
	document
		.getElementById('btnNextPhoto')
		.addEventListener('click', function(){
			drawPhoto(PhotoGallery.getNextPhoto());
		});


	document
		.getElementById('btnPrevPhoto')
		.addEventListener('click', function(){
			drawPhoto(PhotoGallery.getPrevPhoto());
		});

}

window.addEventListener('load', function(){

	// === Inizializziazione
	// chiamata AJAX verso WS Rest -> array di JSON
	PhotoGallery.setFolder('media');
	PhotoGallery.setImage('foto1.png');
	PhotoGallery.setImage('foto2.png');
	PhotoGallery.setImage('foto3.png');
	PhotoGallery.setImage('foto4.png');
	PhotoGallery.setImage('foto5.png');
	PhotoGallery.setImage('foto6.png');
	PhotoGallery.setImage('foto7.png');
	PhotoGallery.setImage('foto8.png');
	PhotoGallery.setImage('foto9.png');


	// === Richiamo entryPoint
	entryPoint();
});