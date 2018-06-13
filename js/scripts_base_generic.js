/* get page_id and use it to reference the corresponding navbar entry.
   then change style of navbar entry. */

var y = document.getElementsByClassName("page_id");
page_id = y[0].getAttribute("id")



/* SEARCH TOOL STUFF TRYOUTS
console.log(page_id)

if (page_id == 'search_page') {
    loaded = true;
}
else {
    loaded = false;
}


function make_block() {
    var p = document.getElementById('tipue_search_input');
    if (p.style.display == 'block') {
	p.style.display = 'none';
    }
    if (p.style.display == 'none') {
	p.style.display = 'block';
    }
}

$(document).ready(function() {
    $('#tipue_search_input').tipuesearch();
    var p = document.getElementById('tipue_search_input');
    console.log(p.value)

    if (p.value != '' && loaded == false) {
	var newUrl = ['http://127.0.0.1:8000/shop/search?q='+p.value];
	document.location.href = newUrl;

    }

});
*/
