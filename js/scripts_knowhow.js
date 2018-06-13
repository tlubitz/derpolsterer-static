/* get page_id and use it to reference the corresponding navbar entry.
   then change style of navbar entry. */

var y = document.getElementsByClassName("page_id");
page_id = y[0].getAttribute("id")

var z = document.getElementById(page_id)

z.style.textDecoration = "underline";
z.style.textDecorationColor = "rgb(40,90,40)";

/* filter function for the display of content */
load_content();
var page_loaded = true;
var pflege = true;
var stoffe = true;
var polster = true;

function content_filter(content) {
    if (content == 'pflege') {

	/* hide the other content if page is loaded newly */
	if (page_loaded == true) {
	    var x = document.getElementsByClassName('stoffe');
	    for (i=0; i<x.length; i++) {
		x[i].style.display = 'none';
		stoffe = false;
	    }
	    var x = document.getElementsByClassName('polster');
	    for (i=0; i<x.length; i++) {
		x[i].style.display = 'none';
		polster = false;
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
    
    if (content == 'stoffe') {

	/* hide the other content if page is loaded newly */
	if (page_loaded == true) {
	    var x = document.getElementsByClassName('pflege');
	    for (i=0; i<x.length; i++) {
		x[i].style.display = 'none';
		pflege = false
	    }
	    var x = document.getElementsByClassName('polster');
	    for (i=0; i<x.length; i++) {
		x[i].style.display = 'none';
		polster = false
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
    
    if (content == 'polster') {

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
	}
	/* display requested content (or hide it again) */
	var x = document.getElementsByClassName('polster');
	for (i=0; i<x.length; i++) {
	    if (x[i].style.display == 'block' && page_loaded == false) {
		x[i].style.display = 'none';
		document.getElementById('button_polster').style.border = 'none';
		polster = false;
	    }
	    else {
		x[i].style.display = 'block';
		document.getElementById('button_polster').style.border = '3px solid green';
		polster = true;
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
    if (pflege == false && stoffe == false && polster == false) {
	pflege = true;
	stoffe = true;
	polster = true;
	page_loaded = true;
	var contents = ['polster','pflege','stoffe'];
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
