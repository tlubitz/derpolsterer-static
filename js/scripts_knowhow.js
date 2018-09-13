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

/* filter function for the display of content */
load_content();
var page_loaded = true;
var pflege = true;
var stoffe = true;
var leder = true;
var holz = true;
var handwerk = true;

function content_filter(content) {

    /* PFLEGE */
    if (content == 'pflege') {

	/* hide the other content if page is loaded newly */
	if (page_loaded == true) {
	    var x = document.getElementsByClassName('stoffe');
	    for (i=0; i<x.length; i++) {
		x[i].style.display = 'none';
		stoffe = false;
	    }
	    var x = document.getElementsByClassName('leder');
	    for (i=0; i<x.length; i++) {
		x[i].style.display = 'none';
		leder = false;
	    }
	    var x = document.getElementsByClassName('holz');
	    for (i=0; i<x.length; i++) {
		x[i].style.display = 'none';
		holz = false;
	    }
	    var x = document.getElementsByClassName('handwerk');
	    for (i=0; i<x.length; i++) {
		x[i].style.display = 'none';
		handwerk = false;
	    }
	}
	
	/* display requested content (or hide it again) */
	var x = document.getElementsByClassName('pflege');
	for (i=0; i<x.length; i++) {
	    if (x[i].style.display == 'block' && page_loaded == false) {
		x[i].style.display = 'none';
		document.getElementById('button_pflege').style.border = 'none';
		pflege = false;
	    }
	    else {
		x[i].style.display = 'block';
		document.getElementById('button_pflege').style.border = '3px solid green';
		pflege = true;
	    }
	}

	/* determine that the page is not newly loaded atm */
	if (page_loaded == true) {
	    page_loaded = false;
	}
    }

    /* STOFFE */
    if (content == 'stoffe') {

	/* hide the other content if page is loaded newly */
	if (page_loaded == true) {
	    var x = document.getElementsByClassName('pflege');
	    for (i=0; i<x.length; i++) {
		x[i].style.display = 'none';
		pflege = false
	    }
	    var x = document.getElementsByClassName('leder');
	    for (i=0; i<x.length; i++) {
		x[i].style.display = 'none';
		leder = false
	    }
	    var x = document.getElementsByClassName('holz');
	    for (i=0; i<x.length; i++) {
		x[i].style.display = 'none';
		holz = false;
	    }
	    var x = document.getElementsByClassName('handwerk');
	    for (i=0; i<x.length; i++) {
		x[i].style.display = 'none';
		handwerk = false;
	    }
	}
	
	/* display requested content (or hide it again) */
	var x = document.getElementsByClassName('stoffe');
	for (i=0; i<x.length; i++) {
	    if (x[i].style.display == 'block' && page_loaded == false) {
		x[i].style.display = 'none';
		document.getElementById('button_stoffe').style.border = 'none';
		stoffe = false;
	    }
	    else {
		x[i].style.display = 'block';
		document.getElementById('button_stoffe').style.border = '3px solid green';
		stoffe = true;
	    }
	}
	/* determine that the page is not newly loaded atm */
	if (page_loaded == true) {
	    page_loaded = false;
	}
    }

    /* LEDER */
    if (content == 'leder') {

	/* hide the other content if page is loaded newly */
	if (page_loaded == true) {
	    var x = document.getElementsByClassName('pflege');
	    for (i=0; i<x.length; i++) {
		x[i].style.display = 'none';
		pflege = false;
	    }
	    var x = document.getElementsByClassName('stoffe');
	    for (i=0; i<x.length; i++) {
		x[i].style.display = 'none';
		stoffe = false;
	    }
	    var x = document.getElementsByClassName('holz');
	    for (i=0; i<x.length; i++) {
		x[i].style.display = 'none';
		holz = false;
	    }
	    var x = document.getElementsByClassName('handwerk');
	    for (i=0; i<x.length; i++) {
		x[i].style.display = 'none';
		handwerk = false;
	    }
	}
	/* display requested content (or hide it again) */
	var x = document.getElementsByClassName('leder');
	for (i=0; i<x.length; i++) {
	    if (x[i].style.display == 'block' && page_loaded == false) {
		x[i].style.display = 'none';
		document.getElementById('button_leder').style.border = 'none';
		leder = false;
	    }
	    else {
		x[i].style.display = 'block';
		document.getElementById('button_leder').style.border = '3px solid green';
		leder = true;
	    }
	}
	/* determine that the page is not newly loaded atm */
	if (page_loaded == true) {
	    page_loaded = false;
	}
    }

    /* HOLZ */    
    if (content == 'holz') {

	/* hide the other content if page is loaded newly */
	if (page_loaded == true) {
	    var x = document.getElementsByClassName('pflege');
	    for (i=0; i<x.length; i++) {
		x[i].style.display = 'none';
		pflege = false;
	    }
	    var x = document.getElementsByClassName('stoffe');
	    for (i=0; i<x.length; i++) {
		x[i].style.display = 'none';
		stoffe = false;
	    }
	    var x = document.getElementsByClassName('leder');
	    for (i=0; i<x.length; i++) {
		x[i].style.display = 'none';
		leder = false;
	    }
	    var x = document.getElementsByClassName('handwerk');
	    for (i=0; i<x.length; i++) {
		x[i].style.display = 'none';
		handwerk = false;
	    }
	}
	/* display requested content (or hide it again) */
	var x = document.getElementsByClassName('holz');
	for (i=0; i<x.length; i++) {
	    if (x[i].style.display == 'block' && page_loaded == false) {
		x[i].style.display = 'none';
		document.getElementById('button_holz').style.border = 'none';
		holz = false;
	    }
	    else {
		x[i].style.display = 'block';
		document.getElementById('button_holz').style.border = '3px solid green';
		holz = true;
	    }
	}
	/* determine that the page is not newly loaded atm */
	if (page_loaded == true) {
	    page_loaded = false;
	}
    }
    
    /* HANDWERK */
    if (content == 'handwerk') {

	/* hide the other content if page is loaded newly */
	if (page_loaded == true) {
	    var x = document.getElementsByClassName('pflege');
	    for (i=0; i<x.length; i++) {
		x[i].style.display = 'none';
		pflege = false;
	    }
	    var x = document.getElementsByClassName('stoffe');
	    for (i=0; i<x.length; i++) {
		x[i].style.display = 'none';
		stoffe = false;
	    }
	    var x = document.getElementsByClassName('holz');
	    for (i=0; i<x.length; i++) {
		x[i].style.display = 'none';
		holz = false;
	    }
	    var x = document.getElementsByClassName('leder');
	    for (i=0; i<x.length; i++) {
		x[i].style.display = 'none';
		leder = false;
	    }
	}
	/* display requested content (or hide it again) */
	var x = document.getElementsByClassName('handwerk');
	for (i=0; i<x.length; i++) {
	    if (x[i].style.display == 'block' && page_loaded == false) {
		x[i].style.display = 'none';
		document.getElementById('button_handwerk').style.border = 'none';
		handwerk = false;
	    }
	    else {
		x[i].style.display = 'block';
		document.getElementById('button_handwerk').style.border = '3px solid green';
		handwerk = true;
	    }
	}
	/* determine that the page is not newly loaded atm */
	if (page_loaded == true) {
	    page_loaded = false;
	}
    }

    /* in the end, make sure that the page is not empty */
    load_content();
}

function load_content() {
    if (pflege == false && stoffe == false && leder == false && holz == false && handwerk == false) {
	pflege = true;
	stoffe = true;
	leder = true;
	holz = true;
	handwerk = true;
	page_loaded = true;
	var contents = ['leder','pflege','stoffe','holz','handwerk'];
	for (i=0; i<contents.length; i++) {
	    var x = document.getElementsByClassName(contents[i]);
	    for (j=0; j<x.length; j++) {
		x[j].style.display = 'block';
	    }
	}
    }
}


/* before / after slider by twenty twenty */
$(function() {
    $(".bac[data-orientation!='vertical']").twentytwenty({default_offset_pct: 0.7,before_label:'vorher',after_label:'nachher'});
});

/* required functions to include other HTML file templates */
$(function(){
    $("#base_generic_top").load("base_generic_top.html"); 
});

$(function(){
    $("#base_generic_bottom").load("base_generic_bottom.html"); 
});

