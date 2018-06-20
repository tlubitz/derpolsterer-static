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
