/* get page_id and use it to reference the corresponding navbar entry.
   then change style of navbar entry. */

var y = document.getElementsByClassName("page_id");
page_id = y[0].getAttribute("id")

console.log(page_id)

var z = document.getElementById(page_id)
z.style.textDecoration = "underline";
z.style.textDecorationColor = "rgb(40,90,40)";

/* required functions to include other HTML file templates */
$(function(){
    $("#base_generic_top").load("base_generic_top.html"); 
});

$(function(){
    $("#base_generic_bottom").load("base_generic_bottom.html"); 
});
