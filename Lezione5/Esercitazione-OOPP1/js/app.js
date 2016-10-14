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
	PhotoGallery.setImage('foto1.jpg');
	PhotoGallery.setImage('foto2.jpg');
	PhotoGallery.setImage('foto3.jpg');
	PhotoGallery.setImage('foto4.jpg');
	PhotoGallery.setImage('foto5.jpg');
	PhotoGallery.setImage('foto6.jpg');
	PhotoGallery.setImage('foto7.jpg');
	PhotoGallery.setImage('foto8.jpg');
	PhotoGallery.setImage('foto9.jpg');


	// === Richiamo entryPoint
	entryPoint();
});