$.ajaxPrefilter(function( options, originalOptions, jqXHR ) { options.async = true; });

/* get page_id and use it to reference the corresponding navbar entry.
   for this, we need to get the fetch the base_generic_top.html, which
   holds the required element. if we have it, we change its style. */
var y = document.getElementsByClassName("page_id");
page_id = y[0].getAttribute("id")
pi = '#' + page_id + '_nav';

/* function to fetch HTML page */
var getHTML = function ( url, callback ) {
	// Feature detection
	if ( !window.XMLHttpRequest ) return;
	// Create new request
	var xhr = new XMLHttpRequest();
	// Setup callback
	xhr.onload = function() {
		if ( callback && typeof( callback ) === 'function' ) {
			callback( this.responseXML );
		}
	}
	// Get the HTML
	xhr.open( 'GET', url );
	xhr.responseType = 'document';
	xhr.send();
};

/* fetch base_generic_top, get its element and change the style */
getHTML( '/base_generic_top.html', function (response) {
    var id_abroad = document.querySelector( pi );
    id_abroad.style.textDecoration = "underline";
    id_abroad.style.textDecorationColor = "rgb(40,90,40)";
});

/* required functions to include other HTML file templates */
$(function(){
    $("#base_generic_top").load("base_generic_top.html"); 
});

$(function(){
    $("#base_generic_bottom").load("base_generic_bottom.html"); 
});

/* Image gallery lightbox 1 (modal) */

// Open the Modal
function openModal() {
  document.getElementById('myModal').style.display = "block";
}

// Close the Modal
function closeModal() {
  document.getElementById('myModal').style.display = "none";
}

var slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("demo");
  var captionText = document.getElementById("caption");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
  captionText.innerHTML = dots[slideIndex-1].alt;
}

/* Image gallery lightbox 2 (modal) */

// Open the Modal
function openModal2() {
  document.getElementById('myModal2').style.display = "block";
}

// Close the Modal
function closeModal2() {
  document.getElementById('myModal2').style.display = "none";
}

var slideIndex = 1;
showSlides2(slideIndex);

// Next/previous controls
function plusSlides2(n) {
  showSlides2(slideIndex += n);
}

// Thumbnail image controls
function currentSlide2(n) {
  showSlides2(slideIndex = n);
}

function showSlides2(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides2");
  var dots = document.getElementsByClassName("demo");
  var captionText = document.getElementById("caption2");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
  captionText.innerHTML = dots[slideIndex-1].alt;
}
