$.ajaxPrefilter(function( options, originalOptions, jqXHR ) { options.async = true; });

var y = document.getElementsByClassName("page_id");
page_id = y[0].getAttribute("id");

var z = document.getElementById(page_id+'_nav');
z.style.textDecoration = "underline";
z.style.textDecorationColor = "rgb(40,90,40)";

/* gallery small manual slider */

var slideIndex = 0;
showDivs(slideIndex);

function plusDivs(n) {
    showDivs(slideIndex += n);
}

function showDivs(n) {
    var i;
    var x = document.getElementsByClassName("gallery_small2");

    for (i = 0; i < x.length; i++) {
        x[i].style.display = "none"; 
    }
    
    var j;
    for (j = 0; j < 5; j++) {
	if ((slideIndex+j) < 0)
	{slideIndex = x.length-slideIndex};

	if ((slideIndex+j) > x.length-1)
	{slideIndex = 0-j};

	x[slideIndex+j].style.display = "block";
	
    };
}

/* filter function for the display of partners */

load_content();
var page_loaded = true;
var leder = true;
var stoffe = true;
var tapeten = true;

function content_filter(content) {
    if (content == 'leder') {

	/* hide the other content if page is loaded newly */
	if (page_loaded == true) {
	    var x = document.getElementsByClassName('stoffe');
	    for (i=0; i<x.length; i++) {
		x[i].style.display = 'none';
		stoffe = false;
	    }
	    var x = document.getElementsByClassName('tapeten');
	    for (i=0; i<x.length; i++) {
		x[i].style.display = 'none';
		tapeten = false;
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
    
    if (content == 'stoffe') {

	/* hide the other content if page is loaded newly */
	if (page_loaded == true) {
	    var x = document.getElementsByClassName('leder');
	    for (i=0; i<x.length; i++) {
		x[i].style.display = 'none';
		leder = false
	    }
	    var x = document.getElementsByClassName('tapeten');
	    for (i=0; i<x.length; i++) {
		x[i].style.display = 'none';
		tapeten = false
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
    
    if (content == 'tapeten') {

	/* hide the other content if page is loaded newly */
	if (page_loaded == true) {
	    var x = document.getElementsByClassName('leder');
	    for (i=0; i<x.length; i++) {
		x[i].style.display = 'none';
		leder = false;
	    }
	    var x = document.getElementsByClassName('stoffe');
	    for (i=0; i<x.length; i++) {
		x[i].style.display = 'none';
		stoffe = false;
	    }
	}
	/* display requested content (or hide it again) */
	var x = document.getElementsByClassName('tapeten');
	for (i=0; i<x.length; i++) {
	    if (x[i].style.display == 'block' && page_loaded == false) {
		x[i].style.display = 'none';
		document.getElementById('button_tapeten').style.border = 'none';
		tapeten = false;
	    }
	    else {
		x[i].style.display = 'block';
		document.getElementById('button_tapeten').style.border = '3px solid green';
		tapeten = true;
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
    if (leder == false && stoffe == false && tapeten == false) {
	leder = true;
	stoffe = true;
	tapeten = true;
	page_loaded = true;
	var contents = ['tapeten','leder','stoffe'];
	for (i=0; i<contents.length; i++) {
	    var x = document.getElementsByClassName(contents[i]);
	    for (j=0; j<x.length; j++) {
		x[j].style.display = 'block';
	    }
	}
    }
}

/* required functions to include other HTML file templates
$(function(){
    $("#base_generic_top").load("base_generic_top.html"); 
});

$(function(){
    $("#base_generic_bottom").load("base_generic_bottom.html"); 
}); */
