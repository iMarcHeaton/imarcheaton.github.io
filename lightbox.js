/* JS Document */

/*
Author  : Luc Heaton
URL     : lucheaton.com
Email   : luc@lucheaton.com
*/

var imageIndex = 0;

var lightboxImage;
var lightboxTitle;
var lightboxDetail;

var imageData;
var images;
var imageTitles;
var imageDetails;

loadData();
showImage(imageIndex);

function loadData() {
	lightboxImage = document.getElementById("lightbox-image");
	lightboxDetail = document.getElementById("lightbox-detail");

	imageData = document.getElementsByClassName("image-data");
	images = document.getElementsByClassName("image");
	imageDetails = document.getElementsByClassName("image-detail");
}

function currentImage(_index) {
	imageIndex = _index;
	showImage();
}

function openLightbox() {
	document.getElementById("lightbox").style.display = "block";
}

function closeLightbox() {
	document.getElementById("lightbox").style.display = "none";
}

function showImage() {
	if (imageIndex > images.length) {imageIndex = 0;}
	if (imageIndex < 0) {imageIndex = imageData.length;}

	lightboxImage.src = images[imageIndex].src;
	lightboxDetail.innerHTML = imageDetails[imageIndex].innerHTML;
}