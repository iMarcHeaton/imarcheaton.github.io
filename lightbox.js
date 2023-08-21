/* JS Document */

/*
Author  : Luc Heaton
URL     : lucheaton.com
Email   : luc@lucheaton.com
*/

var imageIndex = 0;
showImage(imageIndex);

function currentImage(_index) {
	imageIndex = _index
	showImage();
}

function openLightbox() {
	document.getElementById("lightbox").style.display = "block";
}

function closeLightbox() {
	document.getElementById("lightbox").style.display = "none";
}

function showImage() {
	var images = document.getElementsByClassName("lightbox-image");
	if (imageIndex > images.length) {imageIndex = 0}
	if (imageIndex < 0) {imageIndex = images.length}
	for (var i = 0; i < images.length; i++) {
		images[i].style.display = "none";
	}
	images[imageIndex].style.display = "block";
}