/* gallery large automatic slider */

var slideIndex = 0;
carousel();

function carousel() {
    var i;
    var x = document.getElementsByClassName("gallery_index");
    for (i = 0; i < x.length; i++) {
      x[i].style.display = "none"; 
    }
    slideIndex++;
    if (slideIndex > x.length) {slideIndex = 1} 
    x[slideIndex-1].style.display = "block"; 
    setTimeout(carousel, 5000); // Change image every 5 seconds
}


/* gallery small manual slider MAIN */

var slideIndex2 = 0;
showDivs(slideIndex2);

function plusDivs(n) {
    showDivs(slideIndex2 += n);
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
	if ((slideIndex2+j) < 0)
	{slideIndex2 = x.length-slideIndex2};

	if ((slideIndex2+j) > x.length-1)
	{slideIndex2 = 0-j};

	console.log('show:',slideIndex2+j)
	x[slideIndex2+j].style.display = "block";
	
    };
}



