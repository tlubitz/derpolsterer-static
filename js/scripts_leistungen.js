/* get page_id and use it to reference the corresponding navbar entry.
   then change style of navbar entry. */

var y = document.getElementsByClassName("page_id");
page_id = y[0].getAttribute("id")

var z = document.getElementById(page_id)
z.style.textDecoration = "underline";
z.style.textDecorationColor = "rgb(40,90,40)";


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
