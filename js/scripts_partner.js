/* get page_id and use it to reference the corresponding navbar entry.
   then change style of navbar entry. */

var y = document.getElementsByClassName("page_id");
page_id = y[0].getAttribute("id")

var z = document.getElementById(page_id)

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
    var x = document.getElementsByClassName("gallery_small");
    console.log(x)

    for (i = 0; i < x.length; i++) {
        x[i].style.display = "none"; 
    }
    
    var j;
    for (j = 0; j < 5; j++) {
	if ((slideIndex+j) < 0)
	{slideIndex = x.length-slideIndex};

	if ((slideIndex+j) > x.length-1)
	{slideIndex = 0-j};

	console.log('show:',slideIndex+j)
	x[slideIndex+j].style.display = "block";
	
    };
}

/* filter function for the display of partners */

load_content();
var page_loaded = true;
var leder = true;
var stoffe = true;
var zubehoer = true;

function content_filter(content) {
    if (content == 'leder') {

	/* hide the other content if page is loaded newly */
	if (page_loaded == true) {
	    var x = document.getElementsByClassName('stoffe');
	    for (i=0; i<x.length; i++) {
		x[i].style.display = 'none';
		stoffe = false;
	    }
	    var x = document.getElementsByClassName('zubehoer');
	    for (i=0; i<x.length; i++) {
		x[i].style.display = 'none';
		zubehoer = false;
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
	    var x = document.getElementsByClassName('zubehoer');
	    for (i=0; i<x.length; i++) {
		x[i].style.display = 'none';
		zubehoer = false
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
    
    if (content == 'zubehoer') {

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
	var x = document.getElementsByClassName('zubehoer');
	for (i=0; i<x.length; i++) {
	    if (x[i].style.display == 'block' && page_loaded == false) {
		x[i].style.display = 'none';
		document.getElementById('button_zubehoer').style.border = 'none';
		zubehoer = false;
	    }
	    else {
		x[i].style.display = 'block';
		document.getElementById('button_zubehoer').style.border = '3px solid green';
		zubehoer = true;
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
    if (leder == false && stoffe == false && zubehoer == false) {
	leder = true;
	stoffe = true;
	zubehoer = true;
	page_loaded = true;
	var contents = ['zubehoer','leder','stoffe'];
	for (i=0; i<contents.length; i++) {
	    var x = document.getElementsByClassName(contents[i]);
	    for (j=0; j<x.length; j++) {
		x[j].style.display = 'block';
	    }
	}
    }
}
