/* get page_id and use it to reference the corresponding navbar entry.
   then change style of navbar entry. */

var y = document.getElementsByClassName("page_id");
page_id = y[0].getAttribute("id")

var z = document.getElementById(page_id)
z.style.textDecoration = "underline";
z.style.textDecorationColor = "rgb(40,90,40)";


/* SEARCH TOOL TRYOUTS
var sq = document.getElementById("search_query");
console.log(sq.innerHTML)
var x = document.getElementsByClassName(sq.innerHTML)
console.log(x)
for (i=0; i<x.length; i++) {
    x[i].style.display = 'block';
} */
