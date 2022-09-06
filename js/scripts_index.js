$.ajaxPrefilter(function( options, originalOptions, jqXHR ) { options.async = true; });

/* gallery large automatic slider */

var slideIndex = 0;
carousel();

function carousel() {
    var i;
    var x = document.getElementsByClassName("gallery_index");
    /*var y = document.getElementsByClassName("gallery_header");*/
    for (i = 0; i < x.length; i++) {
	x[i].style.display = "none";
	/*y[i].style.display = "none";*/
    }
    slideIndex++;
    if (slideIndex > x.length) {slideIndex = 1} 
    x[slideIndex-1].style.display = "block";
    /*y[slideIndex-1].style.display = "block"; */
    setTimeout(carousel, 5000); // Change image every 5 seconds
}

/* gallery small manual slider MAIN */
var clicked = 0;
var slideIndex2 = 0;
showDivs(slideIndex2);

function plusDivs(n) {
    showDivs(slideIndex2 += n);
}

function showDivs(n) {

    var i;
    var x = document.getElementsByClassName("gallery_small2");

    for (i = 0; i < x.length; i++) {
        x[i].style.display = "none";
    }
    
    var j;

    if (screen.width >= 767) {
	var els = 3;
    }
    else if (screen.width >= 600){
	var els = 2;
    }
    else {
	var els = 1;
    }
    
    for (j = 0; j < els; j++) {
	if ((slideIndex2+j) < 0)
	{slideIndex2 = x.length-slideIndex2};

	if ((slideIndex2+j) > x.length-1)
	{slideIndex2 = 0-j};

	x[slideIndex2+j].style.display = "block";

	/* by some reason the iframe of the hidden elements
	   is set to 'auto', which makes it too small for our
	   interface; thus, we correct this manually */
	if (clicked == 1) {
	    ifr = x[slideIndex2+j].getElementsByTagName("iframe");
	    ifr[0].style.height = "550px"; }

    };
    clicked = 1;
}

/* required functions to include other HTML file templates
$(function(){
    $("#base_generic_top").load("base_generic_top.html"); 
});

$(function(){
    $("#base_generic_bottom").load("base_generic_bottom.html"); 
}); */


/* Image gallery lightbox 1 (modal) */
// Open the Modal
//function openModal() {
//  document.getElementById('myModal').style.display = "block";
//}
//
// Close the Modal
//function closeModal() {
//  document.getElementById('myModal').style.display = "none";
//}
//
//var slideIndex = 1;
//showSlides(slideIndex);
//
// Next/previous controls
//function plusSlides(n) {
//  showSlides(slideIndex += n);
//}
//
// Thumbnail image controls
//function currentSlide(n) {
//  showSlides(slideIndex = n);
//}
/*
function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var captionText = document.getElementById("caption");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slides[slideIndex-1].style.display = "block";
}

/* Image gallery lightbox 2 (modal) */

// Open the Modal
//function openModal2() {
//  document.getElementById('myModal2').style.display = "block";
//}

// Close the Modal
//function closeModal2() {
//  document.getElementById('myModal2').style.display = "none";
//}
//
//var slideIndex = 1;
//showSlides2(slideIndex);
//
// Next/previous controls
//function plusSlides2(n) {
//  showSlides2(slideIndex += n);
//}
//
// Thumbnail image controls
//function currentSlide2(n) {
//  showSlides2(slideIndex = n);
//}

//function showSlides2(n) {
//  var i;
//  var slides = document.getElementsByClassName("mySlides2");
//  var captionText = document.getElementById("caption2");
//  if (n > slides.length) {slideIndex = 1}
//  if (n < 1) {slideIndex = slides.length}
//  for (i = 0; i < slides.length; i++) {
//    slides[i].style.display = "none";
//  }
//  slides[slideIndex-1].style.display = "block";
//}

/* Animation of logo flyer */
$(document).ready(function(e) {
    var width = $(document).width();

    function goRight() {
        $("#animate").animate({
        left: width
      }, 5000, function() {
         setTimeout(goLeft, 50);
      });
    }
    function goLeft() {
        $("#animate").animate({
        left: 0
      }, 5000, function() {
         setTimeout(goRight, 50);
      });
    }

    setTimeout(goRight, 50);
});



/* SHOP ITEMS */
/* 1 */

/* 2 */
(function () {
      var scriptURL = 'https://sdks.shopifycdn.com/buy-button/latest/buy-button-storefront.min.js';
      if (window.ShopifyBuy) {
        if (window.ShopifyBuy.UI) {
          ShopifyBuyInit();
        } else {
          loadScript();
        }
      } else {
        loadScript();
      }

      function loadScript() {
        var script = document.createElement('script');
        script.async = true;
        script.src = scriptURL;
        (document.getElementsByTagName('head')[0] || document.getElementsByTagName('body')[0]).appendChild(script);
        script.onload = ShopifyBuyInit;
      }

      function ShopifyBuyInit() {
        var client = ShopifyBuy.buildClient({
          domain: 'test-polsterer.myshopify.com',
          storefrontAccessToken: '0ae1ef1a65581fa69b7bb96bbf56a31b',
        });

        ShopifyBuy.UI.onReady(client).then(function (ui) {
          ui.createComponent('product', {
            id: [1578292478067],
            node: document.getElementById('product-component-ee44c511e07'),
            moneyFormat: '%E2%82%AC%7B%7Bamount_with_comma_separator%7D%7D',
            options: {
  "product": {
    "buttonDestination": "modal",
    "variantId": "all",
    "width": "580px",
    "contents": {
      "imgWithCarousel": false,
      "variantTitle": false,
      "options": false,
      "description": false,
      "buttonWithQuantity": false,
      "quantity": false
    },
    "text": {
      "button": "Produkt anzeigen"
    },
    "styles": {
      "product": {
        "@media (min-width: 601px)": {
          "max-width": "100%",
          "margin-left": "0",
          "margin-bottom": "50px"
        }
      },
      "button": {
        "background-color": "#285a28",
        ":hover": {
          "background-color": "#245124"
        },
        ":focus": {
          "background-color": "#245124"
        }
      },
      "compareAt": {
        "font-size": "12px"
      }
    }
  },
  "cart": {
    "contents": {
      "button": true
    },
    "text": {
      "button": "Zur Kasse"
    },
    "styles": {
      "button": {
        "background-color": "#285a28",
        ":hover": {
          "background-color": "#245124"
        },
        ":focus": {
          "background-color": "#245124"
        }
      },
      "footer": {
        "background-color": "#ffffff"
      }
    }
  },
  "modalProduct": {
    "contents": {
      "img": false,
      "imgWithCarousel": true,
      "variantTitle": false,
      "buttonWithQuantity": true,
      "button": false,
      "quantity": false
    },
    "text": {
      "button": "In den Einkaufswagen"
    },
    "styles": {
      "product": {
        "@media (min-width: 601px)": {
          "max-width": "100%",
          "margin-left": "0px",
          "margin-bottom": "0px"
        }
      },
      "button": {
        "background-color": "#285a28",
        ":hover": {
          "background-color": "#245124"
        },
        ":focus": {
          "background-color": "#245124"
        }
      }
    }
  },
  "toggle": {
    "styles": {
      "toggle": {
        "background-color": "#285a28",
        ":hover": {
          "background-color": "#245124"
        },
        ":focus": {
          "background-color": "#245124"
        }
      }
    }
  },
  "productSet": {
    "styles": {
      "products": {
        "@media (min-width: 601px)": {
          "margin-left": "-20px"
        }
      }
    }
  }
}
          });
        });
      }
    })();

/* 3 (Palisanderstuehle - bought) */

/* 4 */
(function () {
      var scriptURL = 'https://sdks.shopifycdn.com/buy-button/latest/buy-button-storefront.min.js';
      if (window.ShopifyBuy) {
        if (window.ShopifyBuy.UI) {
          ShopifyBuyInit();
        } else {
          loadScript();
        }
      } else {
        loadScript();
      }

      function loadScript() {
        var script = document.createElement('script');
        script.async = true;
        script.src = scriptURL;
        (document.getElementsByTagName('head')[0] || document.getElementsByTagName('body')[0]).appendChild(script);
        script.onload = ShopifyBuyInit;
      }

      function ShopifyBuyInit() {
        var client = ShopifyBuy.buildClient({
          domain: 'test-polsterer.myshopify.com',
          storefrontAccessToken: '0ae1ef1a65581fa69b7bb96bbf56a31b',
        });

        ShopifyBuy.UI.onReady(client).then(function (ui) {
          ui.createComponent('product', {
            id: [1578171302003],
            node: document.getElementById('product-component-d5d7b7054b1'),
            moneyFormat: '%E2%82%AC%7B%7Bamount_with_comma_separator%7D%7D',
            options: {
  "product": {
    "buttonDestination": "modal",
    "variantId": "all",
    "width": "580px",
    "contents": {
      "imgWithCarousel": false,
      "variantTitle": false,
      "options": false,
      "description": false,
      "buttonWithQuantity": false,
      "quantity": false
    },
    "text": {
      "button": "Produkt anzeigen"
    },
    "styles": {
      "product": {
        "@media (min-width: 601px)": {
          "max-width": "100%",
          "margin-left": "0",
          "margin-bottom": "50px"
        }
      },
      "button": {
        "background-color": "#285a28",
        ":hover": {
          "background-color": "#245124"
        },
        ":focus": {
          "background-color": "#245124"
        }
      },
      "compareAt": {
        "font-size": "12px"
      }
    }
  },
  "cart": {
    "contents": {
      "button": true
    },
    "text": {
      "button": "Zur Kasse"
    },
    "styles": {
      "button": {
        "background-color": "#285a28",
        ":hover": {
          "background-color": "#245124"
        },
        ":focus": {
          "background-color": "#245124"
        }
      },
      "footer": {
        "background-color": "#ffffff"
      }
    }
  },
  "modalProduct": {
    "contents": {
      "img": false,
      "imgWithCarousel": true,
      "variantTitle": false,
      "buttonWithQuantity": true,
      "button": false,
      "quantity": false
    },
    "text": {
      "button": "In den Einkaufswagen"
    },
    "styles": {
      "product": {
        "@media (min-width: 601px)": {
          "max-width": "100%",
          "margin-left": "0px",
          "margin-bottom": "0px"
        }
      },
      "button": {
        "background-color": "#285a28",
        ":hover": {
          "background-color": "#245124"
        },
        ":focus": {
          "background-color": "#245124"
        }
      }
    }
  },
  "toggle": {
    "styles": {
      "toggle": {
        "background-color": "#285a28",
        ":hover": {
          "background-color": "#245124"
        },
        ":focus": {
          "background-color": "#245124"
        }
      }
    }
  },
  "productSet": {
    "styles": {
      "products": {
        "@media (min-width: 601px)": {
          "margin-left": "-20px"
        }
      }
    }
  }
}
          });
        });
      }
    })();

/* 5 */
    (function () {
      var scriptURL = 'https://sdks.shopifycdn.com/buy-button/latest/buy-button-storefront.min.js';
      if (window.ShopifyBuy) {
        if (window.ShopifyBuy.UI) {
          ShopifyBuyInit();
        } else {
          loadScript();
        }
      } else {
        loadScript();
      }

      function loadScript() {
        var script = document.createElement('script');
        script.async = true;
        script.src = scriptURL;
        (document.getElementsByTagName('head')[0] || document.getElementsByTagName('body')[0]).appendChild(script);
        script.onload = ShopifyBuyInit;
      }

      function ShopifyBuyInit() {
        var client = ShopifyBuy.buildClient({
          domain: 'test-polsterer.myshopify.com',
          storefrontAccessToken: '0ae1ef1a65581fa69b7bb96bbf56a31b',
        });

        ShopifyBuy.UI.onReady(client).then(function (ui) {
          ui.createComponent('product', {
            id: [1578316922995],
            node: document.getElementById('product-component-5707359b12c'),
            moneyFormat: '%E2%82%AC%7B%7Bamount_with_comma_separator%7D%7D',
            options: {
  "product": {
    "buttonDestination": "modal",
    "variantId": "all",
    "width": "580px",
    "contents": {
      "imgWithCarousel": false,
      "variantTitle": false,
      "options": false,
      "description": false,
      "buttonWithQuantity": false,
      "quantity": false
    },
    "text": {
      "button": "Produkt anzeigen"
    },
    "styles": {
      "product": {
        "@media (min-width: 601px)": {
          "max-width": "100%",
          "margin-left": "0",
          "margin-bottom": "50px"
        }
      },
      "button": {
        "background-color": "#285a28",
        ":hover": {
          "background-color": "#245124"
        },
        ":focus": {
          "background-color": "#245124"
        }
      },
      "compareAt": {
        "font-size": "12px"
      }
    }
  },
  "cart": {
    "contents": {
      "button": true
    },
    "text": {
      "button": "Zur Kasse"
    },
    "styles": {
      "button": {
        "background-color": "#285a28",
        ":hover": {
          "background-color": "#245124"
        },
        ":focus": {
          "background-color": "#245124"
        }
      },
      "footer": {
        "background-color": "#ffffff"
      }
    }
  },
  "modalProduct": {
    "contents": {
      "img": false,
      "imgWithCarousel": true,
      "variantTitle": false,
      "buttonWithQuantity": true,
      "button": false,
      "quantity": false
    },
    "text": {
      "button": "In den Einkaufswagen"
    },
    "styles": {
      "product": {
        "@media (min-width: 601px)": {
          "max-width": "100%",
          "margin-left": "0px",
          "margin-bottom": "0px"
        }
      },
      "button": {
        "background-color": "#285a28",
        ":hover": {
          "background-color": "#245124"
        },
        ":focus": {
          "background-color": "#245124"
        }
      }
    }
  },
  "toggle": {
    "styles": {
      "toggle": {
        "background-color": "#285a28",
        ":hover": {
          "background-color": "#245124"
        },
        ":focus": {
          "background-color": "#245124"
        }
      }
    }
  },
  "productSet": {
    "styles": {
      "products": {
        "@media (min-width: 601px)": {
          "margin-left": "-20px"
        }
      }
    }
  }
}
          });
        });
      }
    })();

/* 6 */
    (function () {
      var scriptURL = 'https://sdks.shopifycdn.com/buy-button/latest/buy-button-storefront.min.js';
      if (window.ShopifyBuy) {
        if (window.ShopifyBuy.UI) {
          ShopifyBuyInit();
        } else {
          loadScript();
        }
      } else {
        loadScript();
      }

      function loadScript() {
        var script = document.createElement('script');
        script.async = true;
        script.src = scriptURL;
        (document.getElementsByTagName('head')[0] || document.getElementsByTagName('body')[0]).appendChild(script);
        script.onload = ShopifyBuyInit;
      }

      function ShopifyBuyInit() {
        var client = ShopifyBuy.buildClient({
          domain: 'test-polsterer.myshopify.com',
          storefrontAccessToken: '0ae1ef1a65581fa69b7bb96bbf56a31b',
        });

        ShopifyBuy.UI.onReady(client).then(function (ui) {
          ui.createComponent('product', {
            id: [1578334290035],
            node: document.getElementById('product-component-019e4a8d157'),
            moneyFormat: '%E2%82%AC%7B%7Bamount_with_comma_separator%7D%7D',
            options: {
  "product": {
    "buttonDestination": "modal",
    "variantId": "all",
    "width": "580px",
    "contents": {
      "imgWithCarousel": false,
      "variantTitle": false,
      "options": false,
      "description": false,
      "buttonWithQuantity": false,
      "quantity": false
    },
    "text": {
      "button": "Produkt anzeigen"
    },
    "styles": {
      "product": {
        "@media (min-width: 601px)": {
          "max-width": "100%",
          "margin-left": "0",
          "margin-bottom": "50px"
        }
      },
      "button": {
        "background-color": "#285a28",
        ":hover": {
          "background-color": "#245124"
        },
        ":focus": {
          "background-color": "#245124"
        }
      },
      "compareAt": {
        "font-size": "12px"
      }
    }
  },
  "cart": {
    "contents": {
      "button": true
    },
    "text": {
      "button": "Zur Kasse"
    },
    "styles": {
      "button": {
        "background-color": "#285a28",
        ":hover": {
          "background-color": "#245124"
        },
        ":focus": {
          "background-color": "#245124"
        }
      },
      "footer": {
        "background-color": "#ffffff"
      }
    }
  },
  "modalProduct": {
    "contents": {
      "img": false,
      "imgWithCarousel": true,
      "variantTitle": false,
      "buttonWithQuantity": true,
      "button": false,
      "quantity": false
    },
    "text": {
      "button": "In den Einkaufswagen"
    },
    "styles": {
      "product": {
        "@media (min-width: 601px)": {
          "max-width": "100%",
          "margin-left": "0px",
          "margin-bottom": "0px"
        }
      },
      "button": {
        "background-color": "#285a28",
        ":hover": {
          "background-color": "#245124"
        },
        ":focus": {
          "background-color": "#245124"
        }
      }
    }
  },
  "toggle": {
    "styles": {
      "toggle": {
        "background-color": "#285a28",
        ":hover": {
          "background-color": "#245124"
        },
        ":focus": {
          "background-color": "#245124"
        }
      }
    }
  },
  "productSet": {
    "styles": {
      "products": {
        "@media (min-width: 601px)": {
          "margin-left": "-20px"
        }
      }
    }
  }
}
          });
        });
      }
    })();


/* 7 */

/* 8 */
    (function () {
      var scriptURL = 'https://sdks.shopifycdn.com/buy-button/latest/buy-button-storefront.min.js';
      if (window.ShopifyBuy) {
        if (window.ShopifyBuy.UI) {
          ShopifyBuyInit();
        } else {
          loadScript();
        }
      } else {
        loadScript();
      }

      function loadScript() {
        var script = document.createElement('script');
        script.async = true;
        script.src = scriptURL;
        (document.getElementsByTagName('head')[0] || document.getElementsByTagName('body')[0]).appendChild(script);
        script.onload = ShopifyBuyInit;
      }

      function ShopifyBuyInit() {
        var client = ShopifyBuy.buildClient({
          domain: 'test-polsterer.myshopify.com',
          storefrontAccessToken: '0ae1ef1a65581fa69b7bb96bbf56a31b',
        });

        ShopifyBuy.UI.onReady(client).then(function (ui) {
          ui.createComponent('product', {
            id: [1578160816243],
            node: document.getElementById('product-component-5b8b23d8475'),
            moneyFormat: '%E2%82%AC%7B%7Bamount_with_comma_separator%7D%7D',
            options: {
  "product": {
    "buttonDestination": "modal",
    "variantId": "all",
    "width": "580px",
    "contents": {
      "imgWithCarousel": false,
      "variantTitle": false,
      "options": false,
      "description": false,
      "buttonWithQuantity": false,
      "quantity": false
    },
    "text": {
      "button": "Produkt anzeigen"
    },
    "styles": {
      "product": {
        "@media (min-width: 601px)": {
          "max-width": "100%",
          "margin-left": "0",
          "margin-bottom": "50px"
        }
      },
      "button": {
        "background-color": "#285a28",
        ":hover": {
          "background-color": "#245124"
        },
        ":focus": {
          "background-color": "#245124"
        }
      },
      "compareAt": {
        "font-size": "12px"
      }
    }
  },
  "cart": {
    "contents": {
      "button": true
    },
    "text": {
      "button": "Zur Kasse"
    },
    "styles": {
      "button": {
        "background-color": "#285a28",
        ":hover": {
          "background-color": "#245124"
        },
        ":focus": {
          "background-color": "#245124"
        }
      },
      "footer": {
        "background-color": "#ffffff"
      }
    }
  },
  "modalProduct": {
    "contents": {
      "img": false,
      "imgWithCarousel": true,
      "variantTitle": false,
      "buttonWithQuantity": true,
      "button": false,
      "quantity": false
    },
    "text": {
      "button": "In den Einkaufswagen"
    },
    "styles": {
      "product": {
        "@media (min-width: 601px)": {
          "max-width": "100%",
          "margin-left": "0px",
          "margin-bottom": "0px"
        }
      },
      "button": {
        "background-color": "#285a28",
        ":hover": {
          "background-color": "#245124"
        },
        ":focus": {
          "background-color": "#245124"
        }
      }
    }
  },
  "toggle": {
    "styles": {
      "toggle": {
        "background-color": "#285a28",
        ":hover": {
          "background-color": "#245124"
        },
        ":focus": {
          "background-color": "#245124"
        }
      }
    }
  },
  "productSet": {
    "styles": {
      "products": {
        "@media (min-width: 601px)": {
          "margin-left": "-20px"
        }
      }
    }
  }
}
          });
        });
      }
    })();

/* 9 */
    (function () {
      var scriptURL = 'https://sdks.shopifycdn.com/buy-button/latest/buy-button-storefront.min.js';
      if (window.ShopifyBuy) {
        if (window.ShopifyBuy.UI) {
          ShopifyBuyInit();
        } else {
          loadScript();
        }
      } else {
        loadScript();
      }

      function loadScript() {
        var script = document.createElement('script');
        script.async = true;
        script.src = scriptURL;
        (document.getElementsByTagName('head')[0] || document.getElementsByTagName('body')[0]).appendChild(script);
        script.onload = ShopifyBuyInit;
      }

      function ShopifyBuyInit() {
        var client = ShopifyBuy.buildClient({
          domain: 'test-polsterer.myshopify.com',
          storefrontAccessToken: '0ae1ef1a65581fa69b7bb96bbf56a31b',
        });

        ShopifyBuy.UI.onReady(client).then(function (ui) {
          ui.createComponent('product', {
            id: [1578267803763],
            node: document.getElementById('product-component-c1cbe12ffe5'),
            moneyFormat: '%E2%82%AC%7B%7Bamount_with_comma_separator%7D%7D',
            options: {
  "product": {
    "buttonDestination": "modal",
    "variantId": "all",
    "width": "580px",
    "contents": {
      "imgWithCarousel": false,
      "variantTitle": false,
      "options": false,
      "description": false,
      "buttonWithQuantity": false,
      "quantity": false
    },
    "text": {
      "button": "Produkt anzeigen"
    },
    "styles": {
      "product": {
        "@media (min-width: 601px)": {
          "max-width": "100%",
          "margin-left": "0",
          "margin-bottom": "50px"
        }
      },
      "button": {
        "background-color": "#285a28",
        ":hover": {
          "background-color": "#245124"
        },
        ":focus": {
          "background-color": "#245124"
        }
      },
      "compareAt": {
        "font-size": "12px"
      }
    }
  },
  "cart": {
    "contents": {
      "button": true
    },
    "text": {
      "button": "Zur Kasse"
    },
    "styles": {
      "button": {
        "background-color": "#285a28",
        ":hover": {
          "background-color": "#245124"
        },
        ":focus": {
          "background-color": "#245124"
        }
      },
      "footer": {
        "background-color": "#ffffff"
      }
    }
  },
  "modalProduct": {
    "contents": {
      "img": false,
      "imgWithCarousel": true,
      "variantTitle": false,
      "buttonWithQuantity": true,
      "button": false,
      "quantity": false
    },
    "text": {
      "button": "In den Einkaufswagen"
    },
    "styles": {
      "product": {
        "@media (min-width: 601px)": {
          "max-width": "100%",
          "margin-left": "0px",
          "margin-bottom": "0px"
        }
      },
      "button": {
        "background-color": "#285a28",
        ":hover": {
          "background-color": "#245124"
        },
        ":focus": {
          "background-color": "#245124"
        }
      }
    }
  },
  "toggle": {
    "styles": {
      "toggle": {
        "background-color": "#285a28",
        ":hover": {
          "background-color": "#245124"
        },
        ":focus": {
          "background-color": "#245124"
        }
      }
    }
  },
  "productSet": {
    "styles": {
      "products": {
        "@media (min-width: 601px)": {
          "margin-left": "-20px"
        }
      }
    }
  }
}
          });
        });
      }
    })();

/* 10 */
    (function () {
      var scriptURL = 'https://sdks.shopifycdn.com/buy-button/latest/buy-button-storefront.min.js';
      if (window.ShopifyBuy) {
        if (window.ShopifyBuy.UI) {
          ShopifyBuyInit();
        } else {
          loadScript();
        }
      } else {
        loadScript();
      }

      function loadScript() {
        var script = document.createElement('script');
        script.async = true;
        script.src = scriptURL;
        (document.getElementsByTagName('head')[0] || document.getElementsByTagName('body')[0]).appendChild(script);
        script.onload = ShopifyBuyInit;
      }

      function ShopifyBuyInit() {
        var client = ShopifyBuy.buildClient({
          domain: 'test-polsterer.myshopify.com',
          storefrontAccessToken: '0ae1ef1a65581fa69b7bb96bbf56a31b',
        });

        ShopifyBuy.UI.onReady(client).then(function (ui) {
          ui.createComponent('product', {
            id: [1578284286067],
            node: document.getElementById('product-component-de29495542e'),
            moneyFormat: '%E2%82%AC%7B%7Bamount_with_comma_separator%7D%7D',
            options: {
  "product": {
    "buttonDestination": "modal",
    "variantId": "all",
    "width": "580px",
    "contents": {
      "imgWithCarousel": false,
      "variantTitle": false,
      "options": false,
      "description": false,
      "buttonWithQuantity": false,
      "quantity": false
    },
    "text": {
      "button": "Produkt anzeigen"
    },
    "styles": {
      "product": {
        "@media (min-width: 601px)": {
          "max-width": "100%",
          "margin-left": "0",
          "margin-bottom": "50px"
        }
      },
      "button": {
        "background-color": "#285a28",
        ":hover": {
          "background-color": "#245124"
        },
        ":focus": {
          "background-color": "#245124"
        }
      },
      "compareAt": {
        "font-size": "12px"
      }
    }
  },
  "cart": {
    "contents": {
      "button": true
    },
    "text": {
      "button": "Zur Kasse"
    },
    "styles": {
      "button": {
        "background-color": "#285a28",
        ":hover": {
          "background-color": "#245124"
        },
        ":focus": {
          "background-color": "#245124"
        }
      },
      "footer": {
        "background-color": "#ffffff"
      }
    }
  },
  "modalProduct": {
    "contents": {
      "img": false,
      "imgWithCarousel": true,
      "variantTitle": false,
      "buttonWithQuantity": true,
      "button": false,
      "quantity": false
    },
    "text": {
      "button": "In den Einkaufswagen"
    },
    "styles": {
      "product": {
        "@media (min-width: 601px)": {
          "max-width": "100%",
          "margin-left": "0px",
          "margin-bottom": "0px"
        }
      },
      "button": {
        "background-color": "#285a28",
        ":hover": {
          "background-color": "#245124"
        },
        ":focus": {
          "background-color": "#245124"
        }
      }
    }
  },
  "toggle": {
    "styles": {
      "toggle": {
        "background-color": "#285a28",
        ":hover": {
          "background-color": "#245124"
        },
        ":focus": {
          "background-color": "#245124"
        }
      }
    }
  },
  "productSet": {
    "styles": {
      "products": {
        "@media (min-width: 601px)": {
          "margin-left": "-20px"
        }
      }
    }
  }
}
          });
        });
      }
    })();


/* 11 */

/* 12 (Sessel, Art Deco - bought) */

/* 13 */
    (function () {
      var scriptURL = 'https://sdks.shopifycdn.com/buy-button/latest/buy-button-storefront.min.js';
      if (window.ShopifyBuy) {
        if (window.ShopifyBuy.UI) {
          ShopifyBuyInit();
        } else {
          loadScript();
        }
      } else {
        loadScript();
      }

      function loadScript() {
        var script = document.createElement('script');
        script.async = true;
        script.src = scriptURL;
        (document.getElementsByTagName('head')[0] || document.getElementsByTagName('body')[0]).appendChild(script);
        script.onload = ShopifyBuyInit;
      }

      function ShopifyBuyInit() {
        var client = ShopifyBuy.buildClient({
          domain: 'test-polsterer.myshopify.com',
          storefrontAccessToken: '0ae1ef1a65581fa69b7bb96bbf56a31b',
        });

        ShopifyBuy.UI.onReady(client).then(function (ui) {
          ui.createComponent('product', {
            id: [1578196500595],
            node: document.getElementById('product-component-2871bc0f072'),
            moneyFormat: '%E2%82%AC%7B%7Bamount_with_comma_separator%7D%7D',
            options: {
  "product": {
    "buttonDestination": "modal",
    "variantId": "all",
    "width": "580px",
    "contents": {
      "imgWithCarousel": false,
      "variantTitle": false,
      "options": false,
      "description": false,
      "buttonWithQuantity": false,
      "quantity": false
    },
    "text": {
      "button": "Produkt anzeigen"
    },
    "styles": {
      "product": {
        "@media (min-width: 601px)": {
          "max-width": "100%",
          "margin-left": "0",
          "margin-bottom": "50px"
        }
      },
      "button": {
        "background-color": "#285a28",
        ":hover": {
          "background-color": "#245124"
        },
        ":focus": {
          "background-color": "#245124"
        }
      },
      "compareAt": {
        "font-size": "12px"
      }
    }
  },
  "cart": {
    "contents": {
      "button": true
    },
    "text": {
      "button": "Zur Kasse"
    },
    "styles": {
      "button": {
        "background-color": "#285a28",
        ":hover": {
          "background-color": "#245124"
        },
        ":focus": {
          "background-color": "#245124"
        }
      },
      "footer": {
        "background-color": "#ffffff"
      }
    }
  },
  "modalProduct": {
    "contents": {
      "img": false,
      "imgWithCarousel": true,
      "variantTitle": false,
      "buttonWithQuantity": true,
      "button": false,
      "quantity": false
    },
    "text": {
      "button": "In den Einkaufswagen"
    },
    "styles": {
      "product": {
        "@media (min-width: 601px)": {
          "max-width": "100%",
          "margin-left": "0px",
          "margin-bottom": "0px"
        }
      },
      "button": {
        "background-color": "#285a28",
        ":hover": {
          "background-color": "#245124"
        },
        ":focus": {
          "background-color": "#245124"
        }
      }
    }
  },
  "toggle": {
    "styles": {
      "toggle": {
        "background-color": "#285a28",
        ":hover": {
          "background-color": "#245124"
        },
        ":focus": {
          "background-color": "#245124"
        }
      }
    }
  },
  "productSet": {
    "styles": {
      "products": {
        "@media (min-width: 601px)": {
          "margin-left": "-20px"
        }
      }
    }
  }
}
          });
        });
      }
    })();

/* 14 */
    (function () {
      var scriptURL = 'https://sdks.shopifycdn.com/buy-button/latest/buy-button-storefront.min.js';
      if (window.ShopifyBuy) {
        if (window.ShopifyBuy.UI) {
          ShopifyBuyInit();
        } else {
          loadScript();
        }
      } else {
        loadScript();
      }

      function loadScript() {
        var script = document.createElement('script');
        script.async = true;
        script.src = scriptURL;
        (document.getElementsByTagName('head')[0] || document.getElementsByTagName('body')[0]).appendChild(script);
        script.onload = ShopifyBuyInit;
      }

      function ShopifyBuyInit() {
        var client = ShopifyBuy.buildClient({
          domain: 'test-polsterer.myshopify.com',
          storefrontAccessToken: '0ae1ef1a65581fa69b7bb96bbf56a31b',
        });

        ShopifyBuy.UI.onReady(client).then(function (ui) {
          ui.createComponent('product', {
            id: [1578143973491],
            node: document.getElementById('product-component-2d3d882216d'),
            moneyFormat: '%E2%82%AC%7B%7Bamount_with_comma_separator%7D%7D',
            options: {
  "product": {
    "buttonDestination": "modal",
    "variantId": "all",
    "width": "580px",
    "contents": {
      "imgWithCarousel": false,
      "variantTitle": false,
      "options": false,
      "description": false,
      "buttonWithQuantity": false,
      "quantity": false
    },
    "text": {
      "button": "Produkt anzeigen"
    },
    "styles": {
      "product": {
        "@media (min-width: 601px)": {
          "max-width": "100%",
          "margin-left": "0",
          "margin-bottom": "50px"
        }
      },
      "button": {
        "background-color": "#285a28",
        ":hover": {
          "background-color": "#245124"
        },
        ":focus": {
          "background-color": "#245124"
        }
      },
      "compareAt": {
        "font-size": "12px"
      }
    }
  },
  "cart": {
    "contents": {
      "button": true
    },
    "text": {
      "button": "Zur Kasse"
    },
    "styles": {
      "button": {
        "background-color": "#285a28",
        ":hover": {
          "background-color": "#245124"
        },
        ":focus": {
          "background-color": "#245124"
        }
      },
      "footer": {
        "background-color": "#ffffff"
      }
    }
  },
  "modalProduct": {
    "contents": {
      "img": false,
      "imgWithCarousel": true,
      "variantTitle": false,
      "buttonWithQuantity": true,
      "button": false,
      "quantity": false
    },
    "text": {
      "button": "In den Einkaufswagen"
    },
    "styles": {
      "product": {
        "@media (min-width: 601px)": {
          "max-width": "100%",
          "margin-left": "0px",
          "margin-bottom": "0px"
        }
      },
      "button": {
        "background-color": "#285a28",
        ":hover": {
          "background-color": "#245124"
        },
        ":focus": {
          "background-color": "#245124"
        }
      }
    }
  },
  "toggle": {
    "styles": {
      "toggle": {
        "background-color": "#285a28",
        ":hover": {
          "background-color": "#245124"
        },
        ":focus": {
          "background-color": "#245124"
        }
      }
    }
  },
  "productSet": {
    "styles": {
      "products": {
        "@media (min-width: 601px)": {
          "margin-left": "-20px"
        }
      }
    }
  }
}
          });
        });
      }
    })();

/* 15 */
    (function () {
      var scriptURL = 'https://sdks.shopifycdn.com/buy-button/latest/buy-button-storefront.min.js';
      if (window.ShopifyBuy) {
        if (window.ShopifyBuy.UI) {
          ShopifyBuyInit();
        } else {
          loadScript();
        }
      } else {
        loadScript();
      }

      function loadScript() {
        var script = document.createElement('script');
        script.async = true;
        script.src = scriptURL;
        (document.getElementsByTagName('head')[0] || document.getElementsByTagName('body')[0]).appendChild(script);
        script.onload = ShopifyBuyInit;
      }

      function ShopifyBuyInit() {
        var client = ShopifyBuy.buildClient({
          domain: 'test-polsterer.myshopify.com',
          storefrontAccessToken: '0ae1ef1a65581fa69b7bb96bbf56a31b',
        });

        ShopifyBuy.UI.onReady(client).then(function (ui) {
          ui.createComponent('product', {
            id: [1578218389619],
            node: document.getElementById('product-component-0ecbe322378'),
            moneyFormat: '%E2%82%AC%7B%7Bamount_with_comma_separator%7D%7D',
            options: {
  "product": {
    "buttonDestination": "modal",
    "variantId": "all",
    "width": "580px",
    "contents": {
      "imgWithCarousel": false,
      "variantTitle": false,
      "options": false,
      "description": false,
      "buttonWithQuantity": false,
      "quantity": false
    },
    "text": {
      "button": "Produkt anzeigen"
    },
    "styles": {
      "product": {
        "@media (min-width: 601px)": {
          "max-width": "100%",
          "margin-left": "0",
          "margin-bottom": "50px"
        }
      },
      "button": {
        "background-color": "#285a28",
        ":hover": {
          "background-color": "#245124"
        },
        ":focus": {
          "background-color": "#245124"
        }
      },
      "compareAt": {
        "font-size": "12px"
      }
    }
  },
  "cart": {
    "contents": {
      "button": true
    },
    "text": {
      "button": "Zur Kasse"
    },
    "styles": {
      "button": {
        "background-color": "#285a28",
        ":hover": {
          "background-color": "#245124"
        },
        ":focus": {
          "background-color": "#245124"
        }
      },
      "footer": {
        "background-color": "#ffffff"
      }
    }
  },
  "modalProduct": {
    "contents": {
      "img": false,
      "imgWithCarousel": true,
      "variantTitle": false,
      "buttonWithQuantity": true,
      "button": false,
      "quantity": false
    },
    "text": {
      "button": "In den Einkaufswagen"
    },
    "styles": {
      "product": {
        "@media (min-width: 601px)": {
          "max-width": "100%",
          "margin-left": "0px",
          "margin-bottom": "0px"
        }
      },
      "button": {
        "background-color": "#285a28",
        ":hover": {
          "background-color": "#245124"
        },
        ":focus": {
          "background-color": "#245124"
        }
      }
    }
  },
  "toggle": {
    "styles": {
      "toggle": {
        "background-color": "#285a28",
        ":hover": {
          "background-color": "#245124"
        },
        ":focus": {
          "background-color": "#245124"
        }
      }
    }
  },
  "productSet": {
    "styles": {
      "products": {
        "@media (min-width: 601px)": {
          "margin-left": "-20px"
        }
      }
    }
  }
}
          });
        });
      }
    })();


/* 16 */
    (function () {
      var scriptURL = 'https://sdks.shopifycdn.com/buy-button/latest/buy-button-storefront.min.js';
      if (window.ShopifyBuy) {
        if (window.ShopifyBuy.UI) {
          ShopifyBuyInit();
        } else {
          loadScript();
        }
      } else {
        loadScript();
      }

      function loadScript() {
        var script = document.createElement('script');
        script.async = true;
        script.src = scriptURL;
        (document.getElementsByTagName('head')[0] || document.getElementsByTagName('body')[0]).appendChild(script);
        script.onload = ShopifyBuyInit;
      }

      function ShopifyBuyInit() {
        var client = ShopifyBuy.buildClient({
          domain: 'test-polsterer.myshopify.com',
          storefrontAccessToken: '0ae1ef1a65581fa69b7bb96bbf56a31b',
        });

        ShopifyBuy.UI.onReady(client).then(function (ui) {
          ui.createComponent('product', {
            id: [1578302046323],
            node: document.getElementById('product-component-fbc0c247b5b'),
            moneyFormat: '%E2%82%AC%7B%7Bamount_with_comma_separator%7D%7D',
            options: {
  "product": {
    "buttonDestination": "modal",
    "variantId": "all",
    "width": "580px",
    "contents": {
      "imgWithCarousel": false,
      "variantTitle": false,
      "options": false,
      "description": false,
      "buttonWithQuantity": false,
      "quantity": false
    },
    "text": {
      "button": "Produkt anzeigen"
    },
    "styles": {
      "product": {
        "@media (min-width: 601px)": {
          "max-width": "100%",
          "margin-left": "0",
          "margin-bottom": "50px"
        }
      },
      "button": {
        "background-color": "#285a28",
        ":hover": {
          "background-color": "#245124"
        },
        ":focus": {
          "background-color": "#245124"
        }
      },
      "compareAt": {
        "font-size": "12px"
      }
    }
  },
  "cart": {
    "contents": {
      "button": true
    },
    "text": {
      "button": "Zur Kasse"
    },
    "styles": {
      "button": {
        "background-color": "#285a28",
        ":hover": {
          "background-color": "#245124"
        },
        ":focus": {
          "background-color": "#245124"
        }
      },
      "footer": {
        "background-color": "#ffffff"
      }
    }
  },
  "modalProduct": {
    "contents": {
      "img": false,
      "imgWithCarousel": true,
      "variantTitle": false,
      "buttonWithQuantity": true,
      "button": false,
      "quantity": false
    },
    "text": {
      "button": "In den Einkaufswagen"
    },
    "styles": {
      "product": {
        "@media (min-width: 601px)": {
          "max-width": "100%",
          "margin-left": "0px",
          "margin-bottom": "0px"
        }
      },
      "button": {
        "background-color": "#285a28",
        ":hover": {
          "background-color": "#245124"
        },
        ":focus": {
          "background-color": "#245124"
        }
      }
    }
  },
  "toggle": {
    "styles": {
      "toggle": {
        "background-color": "#285a28",
        ":hover": {
          "background-color": "#245124"
        },
        ":focus": {
          "background-color": "#245124"
        }
      }
    }
  },
  "productSet": {
    "styles": {
      "products": {
        "@media (min-width: 601px)": {
          "margin-left": "-20px"
        }
      }
    }
  }
}
          });
        });
      }
    })();


/* 17 */
    (function () {
      var scriptURL = 'https://sdks.shopifycdn.com/buy-button/latest/buy-button-storefront.min.js';
      if (window.ShopifyBuy) {
        if (window.ShopifyBuy.UI) {
          ShopifyBuyInit();
        } else {
          loadScript();
        }
      } else {
        loadScript();
      }

      function loadScript() {
        var script = document.createElement('script');
        script.async = true;
        script.src = scriptURL;
        (document.getElementsByTagName('head')[0] || document.getElementsByTagName('body')[0]).appendChild(script);
        script.onload = ShopifyBuyInit;
      }

      function ShopifyBuyInit() {
        var client = ShopifyBuy.buildClient({
          domain: 'test-polsterer.myshopify.com',
          storefrontAccessToken: '0ae1ef1a65581fa69b7bb96bbf56a31b',
        });

        ShopifyBuy.UI.onReady(client).then(function (ui) {
          ui.createComponent('product', {
            id: [1578249715827],
            node: document.getElementById('product-component-6159a4e5c08'),
            moneyFormat: '%E2%82%AC%7B%7Bamount_with_comma_separator%7D%7D',
            options: {
  "product": {
    "buttonDestination": "modal",
    "variantId": "all",
    "width": "580px",
    "contents": {
      "imgWithCarousel": false,
      "variantTitle": false,
      "options": false,
      "description": false,
      "buttonWithQuantity": false,
      "quantity": false
    },
    "text": {
      "button": "Produkt anzeigen"
    },
    "styles": {
      "product": {
        "@media (min-width: 601px)": {
          "max-width": "100%",
          "margin-left": "0",
          "margin-bottom": "50px"
        }
      },
      "button": {
        "background-color": "#285a28",
        ":hover": {
          "background-color": "#245124"
        },
        ":focus": {
          "background-color": "#245124"
        }
      },
      "compareAt": {
        "font-size": "12px"
      }
    }
  },
  "cart": {
    "contents": {
      "button": true
    },
    "text": {
      "button": "Zur Kasse"
    },
    "styles": {
      "button": {
        "background-color": "#285a28",
        ":hover": {
          "background-color": "#245124"
        },
        ":focus": {
          "background-color": "#245124"
        }
      },
      "footer": {
        "background-color": "#ffffff"
      }
    }
  },
  "modalProduct": {
    "contents": {
      "img": false,
      "imgWithCarousel": true,
      "variantTitle": false,
      "buttonWithQuantity": true,
      "button": false,
      "quantity": false
    },
    "text": {
      "button": "In den Einkaufswagen"
    },
    "styles": {
      "product": {
        "@media (min-width: 601px)": {
          "max-width": "100%",
          "margin-left": "0px",
          "margin-bottom": "0px"
        }
      },
      "button": {
        "background-color": "#285a28",
        ":hover": {
          "background-color": "#245124"
        },
        ":focus": {
          "background-color": "#245124"
        }
      }
    }
  },
  "toggle": {
    "styles": {
      "toggle": {
        "background-color": "#285a28",
        ":hover": {
          "background-color": "#245124"
        },
        ":focus": {
          "background-color": "#245124"
        }
      }
    }
  },
  "productSet": {
    "styles": {
      "products": {
        "@media (min-width: 601px)": {
          "margin-left": "-20px"
        }
      }
    }
  }
}
          });
        });
      }
    })();

/* 18 */
    (function () {
      var scriptURL = 'https://sdks.shopifycdn.com/buy-button/latest/buy-button-storefront.min.js';
      if (window.ShopifyBuy) {
        if (window.ShopifyBuy.UI) {
          ShopifyBuyInit();
        } else {
          loadScript();
        }
      } else {
        loadScript();
      }

      function loadScript() {
        var script = document.createElement('script');
        script.async = true;
        script.src = scriptURL;
        (document.getElementsByTagName('head')[0] || document.getElementsByTagName('body')[0]).appendChild(script);
        script.onload = ShopifyBuyInit;
      }

      function ShopifyBuyInit() {
        var client = ShopifyBuy.buildClient({
          domain: 'test-polsterer.myshopify.com',
          storefrontAccessToken: '0ae1ef1a65581fa69b7bb96bbf56a31b',
        });

        ShopifyBuy.UI.onReady(client).then(function (ui) {
          ui.createComponent('product', {
            id: [1578277109875],
            node: document.getElementById('product-component-9f3a9b01584'),
            moneyFormat: '%E2%82%AC%7B%7Bamount_with_comma_separator%7D%7D',
            options: {
  "product": {
    "buttonDestination": "modal",
    "variantId": "all",
    "width": "580px",
    "contents": {
      "imgWithCarousel": false,
      "variantTitle": false,
      "options": false,
      "description": false,
      "buttonWithQuantity": false,
      "quantity": false
    },
    "text": {
      "button": "Produkt anzeigen"
    },
    "styles": {
      "product": {
        "@media (min-width: 601px)": {
          "max-width": "100%",
          "margin-left": "0",
          "margin-bottom": "50px"
        }
      },
      "button": {
        "background-color": "#285a28",
        ":hover": {
          "background-color": "#245124"
        },
        ":focus": {
          "background-color": "#245124"
        }
      },
      "compareAt": {
        "font-size": "12px"
      }
    }
  },
  "cart": {
    "contents": {
      "button": true
    },
    "text": {
      "button": "Zur Kasse"
    },
    "styles": {
      "button": {
        "background-color": "#285a28",
        ":hover": {
          "background-color": "#245124"
        },
        ":focus": {
          "background-color": "#245124"
        }
      },
      "footer": {
        "background-color": "#ffffff"
      }
    }
  },
  "modalProduct": {
    "contents": {
      "img": false,
      "imgWithCarousel": true,
      "variantTitle": false,
      "buttonWithQuantity": true,
      "button": false,
      "quantity": false
    },
    "text": {
      "button": "In den Einkaufswagen"
    },
    "styles": {
      "product": {
        "@media (min-width: 601px)": {
          "max-width": "100%",
          "margin-left": "0px",
          "margin-bottom": "0px"
        }
      },
      "button": {
        "background-color": "#285a28",
        ":hover": {
          "background-color": "#245124"
        },
        ":focus": {
          "background-color": "#245124"
        }
      }
    }
  },
  "toggle": {
    "styles": {
      "toggle": {
        "background-color": "#285a28",
        ":hover": {
          "background-color": "#245124"
        },
        ":focus": {
          "background-color": "#245124"
        }
      }
    }
  },
  "productSet": {
    "styles": {
      "products": {
        "@media (min-width: 601px)": {
          "margin-left": "-20px"
        }
      }
    }
  }
}
          });
        });
      }
    })();

/* 19 */
    (function () {
      var scriptURL = 'https://sdks.shopifycdn.com/buy-button/latest/buy-button-storefront.min.js';
      if (window.ShopifyBuy) {
        if (window.ShopifyBuy.UI) {
          ShopifyBuyInit();
        } else {
          loadScript();
        }
      } else {
        loadScript();
      }

      function loadScript() {
        var script = document.createElement('script');
        script.async = true;
        script.src = scriptURL;
        (document.getElementsByTagName('head')[0] || document.getElementsByTagName('body')[0]).appendChild(script);
        script.onload = ShopifyBuyInit;
      }

      function ShopifyBuyInit() {
        var client = ShopifyBuy.buildClient({
          domain: 'test-polsterer.myshopify.com',
          storefrontAccessToken: '0ae1ef1a65581fa69b7bb96bbf56a31b',
        });

        ShopifyBuy.UI.onReady(client).then(function (ui) {
          ui.createComponent('product', {
            id: [1578198368371],
            node: document.getElementById('product-component-5dfbec4e259'),
            moneyFormat: '%E2%82%AC%7B%7Bamount_with_comma_separator%7D%7D',
            options: {
  "product": {
    "buttonDestination": "modal",
    "variantId": "all",
    "width": "580px",
    "contents": {
      "imgWithCarousel": false,
      "variantTitle": false,
      "options": false,
      "description": false,
      "buttonWithQuantity": false,
      "quantity": false
    },
    "text": {
      "button": "Produkt anzeigen"
    },
    "styles": {
      "product": {
        "@media (min-width: 601px)": {
          "max-width": "100%",
          "margin-left": "0",
          "margin-bottom": "50px"
        }
      },
      "button": {
        "background-color": "#285a28",
        ":hover": {
          "background-color": "#245124"
        },
        ":focus": {
          "background-color": "#245124"
        }
      },
      "compareAt": {
        "font-size": "12px"
      }
    }
  },
  "cart": {
    "contents": {
      "button": true
    },
    "text": {
      "button": "Zur Kasse"
    },
    "styles": {
      "button": {
        "background-color": "#285a28",
        ":hover": {
          "background-color": "#245124"
        },
        ":focus": {
          "background-color": "#245124"
        }
      },
      "footer": {
        "background-color": "#ffffff"
      }
    }
  },
  "modalProduct": {
    "contents": {
      "img": false,
      "imgWithCarousel": true,
      "variantTitle": false,
      "buttonWithQuantity": true,
      "button": false,
      "quantity": false
    },
    "text": {
      "button": "In den Einkaufswagen"
    },
    "styles": {
      "product": {
        "@media (min-width: 601px)": {
          "max-width": "100%",
          "margin-left": "0px",
          "margin-bottom": "0px"
        }
      },
      "button": {
        "background-color": "#285a28",
        ":hover": {
          "background-color": "#245124"
        },
        ":focus": {
          "background-color": "#245124"
        }
      }
    }
  },
  "toggle": {
    "styles": {
      "toggle": {
        "background-color": "#285a28",
        ":hover": {
          "background-color": "#245124"
        },
        ":focus": {
          "background-color": "#245124"
        }
      }
    }
  },
  "productSet": {
    "styles": {
      "products": {
        "@media (min-width: 601px)": {
          "margin-left": "-20px"
        }
      }
    }
  }
}
          });
        });
      }
    })();

    (function () {
      var scriptURL = 'https://sdks.shopifycdn.com/buy-button/latest/buy-button-storefront.min.js';
      if (window.ShopifyBuy) {
        if (window.ShopifyBuy.UI) {
          ShopifyBuyInit();
        } else {
          loadScript();
        }
      } else {
        loadScript();
      }
      function loadScript() {
        var script = document.createElement('script');
        script.async = true;
        script.src = scriptURL;
        (document.getElementsByTagName('head')[0] || document.getElementsByTagName('body')[0]).appendChild(script);
        script.onload = ShopifyBuyInit;
      }
      function ShopifyBuyInit() {
        var client = ShopifyBuy.buildClient({
          domain: 'test-polsterer.myshopify.com',
          storefrontAccessToken: '0ae1ef1a65581fa69b7bb96bbf56a31b',
        });
        ShopifyBuy.UI.onReady(client).then(function (ui) {
          ui.createComponent('product', {
            id: '4454665125967',
            node: document.getElementById('product-component-1579510515570'),
            moneyFormat: '%E2%82%AC%7B%7Bamount_with_comma_separator%7D%7D',
            options: {
      "product": {
        "styles": {
          "product": {
            "@media (min-width: 601px)": {
              "max-width": "calc(25% - 20px)",
              "margin-left": "20px",
              "margin-bottom": "50px"
            }
          },
          "button": {
            "font-size": "16px",
            "padding-top": "16px",
            "padding-bottom": "16px",
            ":hover": {
              "background-color": "#245124"
            },
            "background-color": "#285a28",
            ":focus": {
              "background-color": "#245124"
            },
            "padding-left": "26px",
            "padding-right": "26px"
          },
          "quantityInput": {
            "font-size": "16px",
            "padding-top": "16px",
            "padding-bottom": "16px"
          }
        },
        "buttonDestination": "modal",
        "contents": {
          "options": false
        },
        "width": "580px",
        "text": {
          "button": "Produkt anzeigen"
        }
      },
      "productSet": {
        "styles": {
          "products": {
            "@media (min-width: 601px)": {
              "margin-left": "-20px"
            }
          }
        }
      },
      "modalProduct": {
        "contents": {
          "img": false,
          "imgWithCarousel": true,
          "button": false,
          "buttonWithQuantity": true
        },
        "styles": {
          "product": {
            "@media (min-width: 601px)": {
              "max-width": "100%",
              "margin-left": "0px",
              "margin-bottom": "0px"
            }
          },
          "button": {
            "font-size": "16px",
            "padding-top": "16px",
            "padding-bottom": "16px",
            ":hover": {
              "background-color": "#245124"
            },
            "background-color": "#285a28",
            ":focus": {
              "background-color": "#245124"
            },
            "padding-left": "26px",
            "padding-right": "26px"
          },
          "quantityInput": {
            "font-size": "16px",
            "padding-top": "16px",
            "padding-bottom": "16px"
          }
        },
        "text": {
          "button": "In den Einkaufswagen"
        }
      },
      "cart": {
        "styles": {
          "button": {
            "font-size": "16px",
            "padding-top": "16px",
            "padding-bottom": "16px",
            ":hover": {
              "background-color": "#245124"
            },
            "background-color": "#285a28",
            ":focus": {
              "background-color": "#245124"
            }
          },
          "title": {
            "color": "#4c4c4c"
          },
          "header": {
            "color": "#4c4c4c"
          },
          "lineItems": {
            "color": "#4c4c4c"
          },
          "subtotalText": {
            "color": "#4c4c4c"
          },
          "subtotal": {
            "color": "#4c4c4c"
          },
          "notice": {
            "color": "#4c4c4c"
          },
          "currency": {
            "color": "#4c4c4c"
          },
          "close": {
            "color": "#4c4c4c",
            ":hover": {
              "color": "#4c4c4c"
            }
          },
          "empty": {
            "color": "#4c4c4c"
          },
          "noteDescription": {
            "color": "#4c4c4c"
          },
          "discountText": {
            "color": "#4c4c4c"
          },
          "discountIcon": {
            "fill": "#4c4c4c"
          },
          "discountAmount": {
            "color": "#4c4c4c"
          }
        },
        "text": {
          "button": "Zur Kasse"
        }
      },
      "toggle": {
        "styles": {
          "toggle": {
            "background-color": "#285a28",
            ":hover": {
              "background-color": "#245124"
            },
            ":focus": {
              "background-color": "#245124"
            }
          },
          "count": {
            "font-size": "16px"
          }
        }
      },
      "lineItem": {
        "styles": {
          "variantTitle": {
            "color": "#4c4c4c"
          },
          "title": {
            "color": "#4c4c4c"
          },
          "price": {
            "color": "#4c4c4c"
          },
          "fullPrice": {
            "color": "#4c4c4c"
          },
          "discount": {
            "color": "#4c4c4c"
          },
          "discountIcon": {
            "fill": "#4c4c4c"
          },
          "quantity": {
            "color": "#4c4c4c"
          },
          "quantityIncrement": {
            "color": "#4c4c4c",
            "border-color": "#4c4c4c"
          },
          "quantityDecrement": {
            "color": "#4c4c4c",
            "border-color": "#4c4c4c"
          },
          "quantityInput": {
            "color": "#4c4c4c",
            "border-color": "#4c4c4c"
          }
        }
      }
    },
          });
        });
      }
    })();

    (function () {
      var scriptURL = 'https://sdks.shopifycdn.com/buy-button/latest/buy-button-storefront.min.js';
      if (window.ShopifyBuy) {
        if (window.ShopifyBuy.UI) {
          ShopifyBuyInit();
        } else {
          loadScript();
        }
      } else {
        loadScript();
      }
      function loadScript() {
        var script = document.createElement('script');
        script.async = true;
        script.src = scriptURL;
        (document.getElementsByTagName('head')[0] || document.getElementsByTagName('body')[0]).appendChild(script);
        script.onload = ShopifyBuyInit;
      }
      function ShopifyBuyInit() {
        var client = ShopifyBuy.buildClient({
          domain: 'test-polsterer.myshopify.com',
          storefrontAccessToken: '0ae1ef1a65581fa69b7bb96bbf56a31b',
        });
        ShopifyBuy.UI.onReady(client).then(function (ui) {
          ui.createComponent('product', {
            id: '4454664470607',
            node: document.getElementById('product-component-1579510752730'),
            moneyFormat: '%E2%82%AC%7B%7Bamount_with_comma_separator%7D%7D',
            options: {
      "product": {
        "styles": {
          "product": {
            "@media (min-width: 601px)": {
              "max-width": "calc(25% - 20px)",
              "margin-left": "20px",
              "margin-bottom": "50px"
            }
          },
          "button": {
            "font-size": "16px",
            "padding-top": "16px",
            "padding-bottom": "16px",
            ":hover": {
              "background-color": "#245124"
            },
            "background-color": "#285a28",
            ":focus": {
              "background-color": "#245124"
            },
            "padding-left": "26px",
            "padding-right": "26px"
          },
          "quantityInput": {
            "font-size": "16px",
            "padding-top": "16px",
            "padding-bottom": "16px"
          }
        },
        "buttonDestination": "modal",
        "contents": {
          "options": false
        },
        "width": "580px",
        "text": {
          "button": "Produkt anzeigen"
        }
      },
      "productSet": {
        "styles": {
          "products": {
            "@media (min-width: 601px)": {
              "margin-left": "-20px"
            }
          }
        }
      },
      "modalProduct": {
        "contents": {
          "img": false,
          "imgWithCarousel": true,
          "button": false,
          "buttonWithQuantity": true
        },
        "styles": {
          "product": {
            "@media (min-width: 601px)": {
              "max-width": "100%",
              "margin-left": "0px",
              "margin-bottom": "0px"
            }
          },
          "button": {
            "font-size": "16px",
            "padding-top": "16px",
            "padding-bottom": "16px",
            ":hover": {
              "background-color": "#245124"
            },
            "background-color": "#285a28",
            ":focus": {
              "background-color": "#245124"
            },
            "padding-left": "26px",
            "padding-right": "26px"
          },
          "quantityInput": {
            "font-size": "16px",
            "padding-top": "16px",
            "padding-bottom": "16px"
          }
        },
        "text": {
          "button": "In den Einkaufswagen"
        }
      },
      "cart": {
        "styles": {
          "button": {
            "font-size": "16px",
            "padding-top": "16px",
            "padding-bottom": "16px",
            ":hover": {
              "background-color": "#245124"
            },
            "background-color": "#285a28",
            ":focus": {
              "background-color": "#245124"
            }
          },
          "title": {
            "color": "#4c4c4c"
          },
          "header": {
            "color": "#4c4c4c"
          },
          "lineItems": {
            "color": "#4c4c4c"
          },
          "subtotalText": {
            "color": "#4c4c4c"
          },
          "subtotal": {
            "color": "#4c4c4c"
          },
          "notice": {
            "color": "#4c4c4c"
          },
          "currency": {
            "color": "#4c4c4c"
          },
          "close": {
            "color": "#4c4c4c",
            ":hover": {
              "color": "#4c4c4c"
            }
          },
          "empty": {
            "color": "#4c4c4c"
          },
          "noteDescription": {
            "color": "#4c4c4c"
          },
          "discountText": {
            "color": "#4c4c4c"
          },
          "discountIcon": {
            "fill": "#4c4c4c"
          },
          "discountAmount": {
            "color": "#4c4c4c"
          }
        },
        "text": {
          "button": "Zur Kasse"
        }
      },
      "toggle": {
        "styles": {
          "toggle": {
            "background-color": "#285a28",
            ":hover": {
              "background-color": "#245124"
            },
            ":focus": {
              "background-color": "#245124"
            }
          },
          "count": {
            "font-size": "16px"
          }
        }
      },
      "lineItem": {
        "styles": {
          "variantTitle": {
            "color": "#4c4c4c"
          },
          "title": {
            "color": "#4c4c4c"
          },
          "price": {
            "color": "#4c4c4c"
          },
          "fullPrice": {
            "color": "#4c4c4c"
          },
          "discount": {
            "color": "#4c4c4c"
          },
          "discountIcon": {
            "fill": "#4c4c4c"
          },
          "quantity": {
            "color": "#4c4c4c"
          },
          "quantityIncrement": {
            "color": "#4c4c4c",
            "border-color": "#4c4c4c"
          },
          "quantityDecrement": {
            "color": "#4c4c4c",
            "border-color": "#4c4c4c"
          },
          "quantityInput": {
            "color": "#4c4c4c",
            "border-color": "#4c4c4c"
          }
        }
      }
    },
          });
        });
      }
    })();

    (function () {
      var scriptURL = 'https://sdks.shopifycdn.com/buy-button/latest/buy-button-storefront.min.js';
      if (window.ShopifyBuy) {
        if (window.ShopifyBuy.UI) {
          ShopifyBuyInit();
        } else {
          loadScript();
        }
      } else {
        loadScript();
      }
      function loadScript() {
        var script = document.createElement('script');
        script.async = true;
        script.src = scriptURL;
        (document.getElementsByTagName('head')[0] || document.getElementsByTagName('body')[0]).appendChild(script);
        script.onload = ShopifyBuyInit;
      }
      function ShopifyBuyInit() {
        var client = ShopifyBuy.buildClient({
          domain: 'test-polsterer.myshopify.com',
          storefrontAccessToken: '0ae1ef1a65581fa69b7bb96bbf56a31b',
        });
        ShopifyBuy.UI.onReady(client).then(function (ui) {
          ui.createComponent('product', {
            id: '4454663880783',
            node: document.getElementById('product-component-1579510904044'),
            moneyFormat: '%E2%82%AC%7B%7Bamount_with_comma_separator%7D%7D',
            options: {
      "product": {
        "styles": {
          "product": {
            "@media (min-width: 601px)": {
              "max-width": "calc(25% - 20px)",
              "margin-left": "20px",
              "margin-bottom": "50px"
            }
          },
          "button": {
            "font-size": "16px",
            "padding-top": "16px",
            "padding-bottom": "16px",
            ":hover": {
              "background-color": "#245124"
            },
            "background-color": "#285a28",
            ":focus": {
              "background-color": "#245124"
            },
            "padding-left": "26px",
            "padding-right": "26px"
          },
          "quantityInput": {
            "font-size": "16px",
            "padding-top": "16px",
            "padding-bottom": "16px"
          }
        },
        "buttonDestination": "modal",
        "contents": {
          "options": false
        },
        "width": "580px",
        "text": {
          "button": "Produkt anzeigen"
        }
      },
      "productSet": {
        "styles": {
          "products": {
            "@media (min-width: 601px)": {
              "margin-left": "-20px"
            }
          }
        }
      },
      "modalProduct": {
        "contents": {
          "img": false,
          "imgWithCarousel": true,
          "button": false,
          "buttonWithQuantity": true
        },
        "styles": {
          "product": {
            "@media (min-width: 601px)": {
              "max-width": "100%",
              "margin-left": "0px",
              "margin-bottom": "0px"
            }
          },
          "button": {
            "font-size": "16px",
            "padding-top": "16px",
            "padding-bottom": "16px",
            ":hover": {
              "background-color": "#245124"
            },
            "background-color": "#285a28",
            ":focus": {
              "background-color": "#245124"
            },
            "padding-left": "26px",
            "padding-right": "26px"
          },
          "quantityInput": {
            "font-size": "16px",
            "padding-top": "16px",
            "padding-bottom": "16px"
          }
        },
        "text": {
          "button": "In den Einkaufswagen"
        }
      },
      "cart": {
        "styles": {
          "button": {
            "font-size": "16px",
            "padding-top": "16px",
            "padding-bottom": "16px",
            ":hover": {
              "background-color": "#245124"
            },
            "background-color": "#285a28",
            ":focus": {
              "background-color": "#245124"
            }
          },
          "title": {
            "color": "#4c4c4c"
          },
          "header": {
            "color": "#4c4c4c"
          },
          "lineItems": {
            "color": "#4c4c4c"
          },
          "subtotalText": {
            "color": "#4c4c4c"
          },
          "subtotal": {
            "color": "#4c4c4c"
          },
          "notice": {
            "color": "#4c4c4c"
          },
          "currency": {
            "color": "#4c4c4c"
          },
          "close": {
            "color": "#4c4c4c",
            ":hover": {
              "color": "#4c4c4c"
            }
          },
          "empty": {
            "color": "#4c4c4c"
          },
          "noteDescription": {
            "color": "#4c4c4c"
          },
          "discountText": {
            "color": "#4c4c4c"
          },
          "discountIcon": {
            "fill": "#4c4c4c"
          },
          "discountAmount": {
            "color": "#4c4c4c"
          }
        },
        "text": {
          "button": "Zur Kasse"
        }
      },
      "toggle": {
        "styles": {
          "toggle": {
            "background-color": "#285a28",
            ":hover": {
              "background-color": "#245124"
            },
            ":focus": {
              "background-color": "#245124"
            }
          },
          "count": {
            "font-size": "16px"
          }
        }
      },
      "lineItem": {
        "styles": {
          "variantTitle": {
            "color": "#4c4c4c"
          },
          "title": {
            "color": "#4c4c4c"
          },
          "price": {
            "color": "#4c4c4c"
          },
          "fullPrice": {
            "color": "#4c4c4c"
          },
          "discount": {
            "color": "#4c4c4c"
          },
          "discountIcon": {
            "fill": "#4c4c4c"
          },
          "quantity": {
            "color": "#4c4c4c"
          },
          "quantityIncrement": {
            "color": "#4c4c4c",
            "border-color": "#4c4c4c"
          },
          "quantityDecrement": {
            "color": "#4c4c4c",
            "border-color": "#4c4c4c"
          },
          "quantityInput": {
            "color": "#4c4c4c",
            "border-color": "#4c4c4c"
          }
        }
      }
    },
          });
        });
      }
    })();

    (function () {
      var scriptURL = 'https://sdks.shopifycdn.com/buy-button/latest/buy-button-storefront.min.js';
      if (window.ShopifyBuy) {
        if (window.ShopifyBuy.UI) {
          ShopifyBuyInit();
        } else {
          loadScript();
        }
      } else {
        loadScript();
      }
      function loadScript() {
        var script = document.createElement('script');
        script.async = true;
        script.src = scriptURL;
        (document.getElementsByTagName('head')[0] || document.getElementsByTagName('body')[0]).appendChild(script);
        script.onload = ShopifyBuyInit;
      }
      function ShopifyBuyInit() {
        var client = ShopifyBuy.buildClient({
          domain: 'test-polsterer.myshopify.com',
          storefrontAccessToken: '0ae1ef1a65581fa69b7bb96bbf56a31b',
        });
        ShopifyBuy.UI.onReady(client).then(function (ui) {
          ui.createComponent('product', {
            id: '4454663290959',
            node: document.getElementById('product-component-1579510954937'),
            moneyFormat: '%E2%82%AC%7B%7Bamount_with_comma_separator%7D%7D',
            options: {
      "product": {
        "styles": {
          "product": {
            "@media (min-width: 601px)": {
              "max-width": "calc(25% - 20px)",
              "margin-left": "20px",
              "margin-bottom": "50px"
            }
          },
          "button": {
            "font-size": "16px",
            "padding-top": "16px",
            "padding-bottom": "16px",
            ":hover": {
              "background-color": "#245124"
            },
            "background-color": "#285a28",
            ":focus": {
              "background-color": "#245124"
            },
            "padding-left": "26px",
            "padding-right": "26px"
          },
          "quantityInput": {
            "font-size": "16px",
            "padding-top": "16px",
            "padding-bottom": "16px"
          }
        },
        "buttonDestination": "modal",
        "contents": {
          "options": false
        },
        "width": "580px",
        "text": {
          "button": "Produkt anzeigen"
        }
      },
      "productSet": {
        "styles": {
          "products": {
            "@media (min-width: 601px)": {
              "margin-left": "-20px"
            }
          }
        }
      },
      "modalProduct": {
        "contents": {
          "img": false,
          "imgWithCarousel": true,
          "button": false,
          "buttonWithQuantity": true
        },
        "styles": {
          "product": {
            "@media (min-width: 601px)": {
              "max-width": "100%",
              "margin-left": "0px",
              "margin-bottom": "0px"
            }
          },
          "button": {
            "font-size": "16px",
            "padding-top": "16px",
            "padding-bottom": "16px",
            ":hover": {
              "background-color": "#245124"
            },
            "background-color": "#285a28",
            ":focus": {
              "background-color": "#245124"
            },
            "padding-left": "26px",
            "padding-right": "26px"
          },
          "quantityInput": {
            "font-size": "16px",
            "padding-top": "16px",
            "padding-bottom": "16px"
          }
        },
        "text": {
          "button": "In den Einkaufswagen"
        }
      },
      "cart": {
        "styles": {
          "button": {
            "font-size": "16px",
            "padding-top": "16px",
            "padding-bottom": "16px",
            ":hover": {
              "background-color": "#245124"
            },
            "background-color": "#285a28",
            ":focus": {
              "background-color": "#245124"
            }
          },
          "title": {
            "color": "#4c4c4c"
          },
          "header": {
            "color": "#4c4c4c"
          },
          "lineItems": {
            "color": "#4c4c4c"
          },
          "subtotalText": {
            "color": "#4c4c4c"
          },
          "subtotal": {
            "color": "#4c4c4c"
          },
          "notice": {
            "color": "#4c4c4c"
          },
          "currency": {
            "color": "#4c4c4c"
          },
          "close": {
            "color": "#4c4c4c",
            ":hover": {
              "color": "#4c4c4c"
            }
          },
          "empty": {
            "color": "#4c4c4c"
          },
          "noteDescription": {
            "color": "#4c4c4c"
          },
          "discountText": {
            "color": "#4c4c4c"
          },
          "discountIcon": {
            "fill": "#4c4c4c"
          },
          "discountAmount": {
            "color": "#4c4c4c"
          }
        },
        "text": {
          "button": "Zur Kasse"
        }
      },
      "toggle": {
        "styles": {
          "toggle": {
            "background-color": "#285a28",
            ":hover": {
              "background-color": "#245124"
            },
            ":focus": {
              "background-color": "#245124"
            }
          },
          "count": {
            "font-size": "16px"
          }
        }
      },
      "lineItem": {
        "styles": {
          "variantTitle": {
            "color": "#4c4c4c"
          },
          "title": {
            "color": "#4c4c4c"
          },
          "price": {
            "color": "#4c4c4c"
          },
          "fullPrice": {
            "color": "#4c4c4c"
          },
          "discount": {
            "color": "#4c4c4c"
          },
          "discountIcon": {
            "fill": "#4c4c4c"
          },
          "quantity": {
            "color": "#4c4c4c"
          },
          "quantityIncrement": {
            "color": "#4c4c4c",
            "border-color": "#4c4c4c"
          },
          "quantityDecrement": {
            "color": "#4c4c4c",
            "border-color": "#4c4c4c"
          },
          "quantityInput": {
            "color": "#4c4c4c",
            "border-color": "#4c4c4c"
          }
        }
      }
    },
          });
        });
      }
    })();

    (function () {
      var scriptURL = 'https://sdks.shopifycdn.com/buy-button/latest/buy-button-storefront.min.js';
      if (window.ShopifyBuy) {
        if (window.ShopifyBuy.UI) {
          ShopifyBuyInit();
        } else {
          loadScript();
        }
      } else {
        loadScript();
      }
      function loadScript() {
        var script = document.createElement('script');
        script.async = true;
        script.src = scriptURL;
        (document.getElementsByTagName('head')[0] || document.getElementsByTagName('body')[0]).appendChild(script);
        script.onload = ShopifyBuyInit;
      }
      function ShopifyBuyInit() {
        var client = ShopifyBuy.buildClient({
          domain: 'test-polsterer.myshopify.com',
          storefrontAccessToken: '0ae1ef1a65581fa69b7bb96bbf56a31b',
        });
        ShopifyBuy.UI.onReady(client).then(function (ui) {
          ui.createComponent('product', {
            id: '4454662996047',
            node: document.getElementById('product-component-1579511000256'),
            moneyFormat: '%E2%82%AC%7B%7Bamount_with_comma_separator%7D%7D',
            options: {
      "product": {
        "styles": {
          "product": {
            "@media (min-width: 601px)": {
              "max-width": "calc(25% - 20px)",
              "margin-left": "20px",
              "margin-bottom": "50px"
            }
          },
          "button": {
            "font-size": "16px",
            "padding-top": "16px",
            "padding-bottom": "16px",
            ":hover": {
              "background-color": "#245124"
            },
            "background-color": "#285a28",
            ":focus": {
              "background-color": "#245124"
            },
            "padding-left": "26px",
            "padding-right": "26px"
          },
          "quantityInput": {
            "font-size": "16px",
            "padding-top": "16px",
            "padding-bottom": "16px"
          }
        },
        "buttonDestination": "modal",
        "contents": {
          "options": false
        },
        "width": "580px",
        "text": {
          "button": "Produkt anzeigen"
        }
      },
      "productSet": {
        "styles": {
          "products": {
            "@media (min-width: 601px)": {
              "margin-left": "-20px"
            }
          }
        }
      },
      "modalProduct": {
        "contents": {
          "img": false,
          "imgWithCarousel": true,
          "button": false,
          "buttonWithQuantity": true
        },
        "styles": {
          "product": {
            "@media (min-width: 601px)": {
              "max-width": "100%",
              "margin-left": "0px",
              "margin-bottom": "0px"
            }
          },
          "button": {
            "font-size": "16px",
            "padding-top": "16px",
            "padding-bottom": "16px",
            ":hover": {
              "background-color": "#245124"
            },
            "background-color": "#285a28",
            ":focus": {
              "background-color": "#245124"
            },
            "padding-left": "26px",
            "padding-right": "26px"
          },
          "quantityInput": {
            "font-size": "16px",
            "padding-top": "16px",
            "padding-bottom": "16px"
          }
        },
        "text": {
          "button": "In den Einkaufswagen"
        }
      },
      "cart": {
        "styles": {
          "button": {
            "font-size": "16px",
            "padding-top": "16px",
            "padding-bottom": "16px",
            ":hover": {
              "background-color": "#245124"
            },
            "background-color": "#285a28",
            ":focus": {
              "background-color": "#245124"
            }
          },
          "title": {
            "color": "#4c4c4c"
          },
          "header": {
            "color": "#4c4c4c"
          },
          "lineItems": {
            "color": "#4c4c4c"
          },
          "subtotalText": {
            "color": "#4c4c4c"
          },
          "subtotal": {
            "color": "#4c4c4c"
          },
          "notice": {
            "color": "#4c4c4c"
          },
          "currency": {
            "color": "#4c4c4c"
          },
          "close": {
            "color": "#4c4c4c",
            ":hover": {
              "color": "#4c4c4c"
            }
          },
          "empty": {
            "color": "#4c4c4c"
          },
          "noteDescription": {
            "color": "#4c4c4c"
          },
          "discountText": {
            "color": "#4c4c4c"
          },
          "discountIcon": {
            "fill": "#4c4c4c"
          },
          "discountAmount": {
            "color": "#4c4c4c"
          }
        },
        "text": {
          "button": "Zur Kasse"
        }
      },
      "toggle": {
        "styles": {
          "toggle": {
            "background-color": "#285a28",
            ":hover": {
              "background-color": "#245124"
            },
            ":focus": {
              "background-color": "#245124"
            }
          },
          "count": {
            "font-size": "16px"
          }
        }
      },
      "lineItem": {
        "styles": {
          "variantTitle": {
            "color": "#4c4c4c"
          },
          "title": {
            "color": "#4c4c4c"
          },
          "price": {
            "color": "#4c4c4c"
          },
          "fullPrice": {
            "color": "#4c4c4c"
          },
          "discount": {
            "color": "#4c4c4c"
          },
          "discountIcon": {
            "fill": "#4c4c4c"
          },
          "quantity": {
            "color": "#4c4c4c"
          },
          "quantityIncrement": {
            "color": "#4c4c4c",
            "border-color": "#4c4c4c"
          },
          "quantityDecrement": {
            "color": "#4c4c4c",
            "border-color": "#4c4c4c"
          },
          "quantityInput": {
            "color": "#4c4c4c",
            "border-color": "#4c4c4c"
          }
        }
      }
    },
          });
        });
      }
    })();

    (function () {
      var scriptURL = 'https://sdks.shopifycdn.com/buy-button/latest/buy-button-storefront.min.js';
      if (window.ShopifyBuy) {
        if (window.ShopifyBuy.UI) {
          ShopifyBuyInit();
        } else {
          loadScript();
        }
      } else {
        loadScript();
      }
      function loadScript() {
        var script = document.createElement('script');
        script.async = true;
        script.src = scriptURL;
        (document.getElementsByTagName('head')[0] || document.getElementsByTagName('body')[0]).appendChild(script);
        script.onload = ShopifyBuyInit;
      }
      function ShopifyBuyInit() {
        var client = ShopifyBuy.buildClient({
          domain: 'test-polsterer.myshopify.com',
          storefrontAccessToken: '0ae1ef1a65581fa69b7bb96bbf56a31b',
        });
        ShopifyBuy.UI.onReady(client).then(function (ui) {
          ui.createComponent('product', {
            id: '4454662602831',
            node: document.getElementById('product-component-1579511070258'),
            moneyFormat: '%E2%82%AC%7B%7Bamount_with_comma_separator%7D%7D',
            options: {
      "product": {
        "styles": {
          "product": {
            "@media (min-width: 601px)": {
              "max-width": "calc(25% - 20px)",
              "margin-left": "20px",
              "margin-bottom": "50px"
            }
          },
          "button": {
            "font-size": "16px",
            "padding-top": "16px",
            "padding-bottom": "16px",
            ":hover": {
              "background-color": "#245124"
            },
            "background-color": "#285a28",
            ":focus": {
              "background-color": "#245124"
            },
            "padding-left": "26px",
            "padding-right": "26px"
          },
          "quantityInput": {
            "font-size": "16px",
            "padding-top": "16px",
            "padding-bottom": "16px"
          }
        },
        "buttonDestination": "modal",
        "contents": {
          "options": false
        },
        "width": "580px",
        "text": {
          "button": "Produkt anzeigen"
        }
      },
      "productSet": {
        "styles": {
          "products": {
            "@media (min-width: 601px)": {
              "margin-left": "-20px"
            }
          }
        }
      },
      "modalProduct": {
        "contents": {
          "img": false,
          "imgWithCarousel": true,
          "button": false,
          "buttonWithQuantity": true
        },
        "styles": {
          "product": {
            "@media (min-width: 601px)": {
              "max-width": "100%",
              "margin-left": "0px",
              "margin-bottom": "0px"
            }
          },
          "button": {
            "font-size": "16px",
            "padding-top": "16px",
            "padding-bottom": "16px",
            ":hover": {
              "background-color": "#245124"
            },
            "background-color": "#285a28",
            ":focus": {
              "background-color": "#245124"
            },
            "padding-left": "26px",
            "padding-right": "26px"
          },
          "quantityInput": {
            "font-size": "16px",
            "padding-top": "16px",
            "padding-bottom": "16px"
          }
        },
        "text": {
          "button": "In den Einkaufswagen"
        }
      },
      "cart": {
        "styles": {
          "button": {
            "font-size": "16px",
            "padding-top": "16px",
            "padding-bottom": "16px",
            ":hover": {
              "background-color": "#245124"
            },
            "background-color": "#285a28",
            ":focus": {
              "background-color": "#245124"
            }
          },
          "title": {
            "color": "#4c4c4c"
          },
          "header": {
            "color": "#4c4c4c"
          },
          "lineItems": {
            "color": "#4c4c4c"
          },
          "subtotalText": {
            "color": "#4c4c4c"
          },
          "subtotal": {
            "color": "#4c4c4c"
          },
          "notice": {
            "color": "#4c4c4c"
          },
          "currency": {
            "color": "#4c4c4c"
          },
          "close": {
            "color": "#4c4c4c",
            ":hover": {
              "color": "#4c4c4c"
            }
          },
          "empty": {
            "color": "#4c4c4c"
          },
          "noteDescription": {
            "color": "#4c4c4c"
          },
          "discountText": {
            "color": "#4c4c4c"
          },
          "discountIcon": {
            "fill": "#4c4c4c"
          },
          "discountAmount": {
            "color": "#4c4c4c"
          }
        },
        "text": {
          "button": "Zur Kasse"
        }
      },
      "toggle": {
        "styles": {
          "toggle": {
            "background-color": "#285a28",
            ":hover": {
              "background-color": "#245124"
            },
            ":focus": {
              "background-color": "#245124"
            }
          },
          "count": {
            "font-size": "16px"
          }
        }
      },
      "lineItem": {
        "styles": {
          "variantTitle": {
            "color": "#4c4c4c"
          },
          "title": {
            "color": "#4c4c4c"
          },
          "price": {
            "color": "#4c4c4c"
          },
          "fullPrice": {
            "color": "#4c4c4c"
          },
          "discount": {
            "color": "#4c4c4c"
          },
          "discountIcon": {
            "fill": "#4c4c4c"
          },
          "quantity": {
            "color": "#4c4c4c"
          },
          "quantityIncrement": {
            "color": "#4c4c4c",
            "border-color": "#4c4c4c"
          },
          "quantityDecrement": {
            "color": "#4c4c4c",
            "border-color": "#4c4c4c"
          },
          "quantityInput": {
            "color": "#4c4c4c",
            "border-color": "#4c4c4c"
          }
        }
      }
    },
          });
        });
      }
    })();

    (function () {
      var scriptURL = 'https://sdks.shopifycdn.com/buy-button/latest/buy-button-storefront.min.js';
      if (window.ShopifyBuy) {
        if (window.ShopifyBuy.UI) {
          ShopifyBuyInit();
        } else {
          loadScript();
        }
      } else {
        loadScript();
      }
      function loadScript() {
        var script = document.createElement('script');
        script.async = true;
        script.src = scriptURL;
        (document.getElementsByTagName('head')[0] || document.getElementsByTagName('body')[0]).appendChild(script);
        script.onload = ShopifyBuyInit;
      }
      function ShopifyBuyInit() {
        var client = ShopifyBuy.buildClient({
          domain: 'test-polsterer.myshopify.com',
          storefrontAccessToken: '0ae1ef1a65581fa69b7bb96bbf56a31b',
        });
        ShopifyBuy.UI.onReady(client).then(function (ui) {
          ui.createComponent('product', {
            id: '4454662242383',
            node: document.getElementById('product-component-1579511104923'),
            moneyFormat: '%E2%82%AC%7B%7Bamount_with_comma_separator%7D%7D',
            options: {
      "product": {
        "styles": {
          "product": {
            "@media (min-width: 601px)": {
              "max-width": "calc(25% - 20px)",
              "margin-left": "20px",
              "margin-bottom": "50px"
            }
          },
          "button": {
            "font-size": "16px",
            "padding-top": "16px",
            "padding-bottom": "16px",
            ":hover": {
              "background-color": "#245124"
            },
            "background-color": "#285a28",
            ":focus": {
              "background-color": "#245124"
            },
            "padding-left": "26px",
            "padding-right": "26px"
          },
          "quantityInput": {
            "font-size": "16px",
            "padding-top": "16px",
            "padding-bottom": "16px"
          }
        },
        "buttonDestination": "modal",
        "contents": {
          "options": false
        },
        "width": "580px",
        "text": {
          "button": "Produkt anzeigen"
        }
      },
      "productSet": {
        "styles": {
          "products": {
            "@media (min-width: 601px)": {
              "margin-left": "-20px"
            }
          }
        }
      },
      "modalProduct": {
        "contents": {
          "img": false,
          "imgWithCarousel": true,
          "button": false,
          "buttonWithQuantity": true
        },
        "styles": {
          "product": {
            "@media (min-width: 601px)": {
              "max-width": "100%",
              "margin-left": "0px",
              "margin-bottom": "0px"
            }
          },
          "button": {
            "font-size": "16px",
            "padding-top": "16px",
            "padding-bottom": "16px",
            ":hover": {
              "background-color": "#245124"
            },
            "background-color": "#285a28",
            ":focus": {
              "background-color": "#245124"
            },
            "padding-left": "26px",
            "padding-right": "26px"
          },
          "quantityInput": {
            "font-size": "16px",
            "padding-top": "16px",
            "padding-bottom": "16px"
          }
        },
        "text": {
          "button": "In den Einkaufswagen"
        }
      },
      "cart": {
        "styles": {
          "button": {
            "font-size": "16px",
            "padding-top": "16px",
            "padding-bottom": "16px",
            ":hover": {
              "background-color": "#245124"
            },
            "background-color": "#285a28",
            ":focus": {
              "background-color": "#245124"
            }
          },
          "title": {
            "color": "#4c4c4c"
          },
          "header": {
            "color": "#4c4c4c"
          },
          "lineItems": {
            "color": "#4c4c4c"
          },
          "subtotalText": {
            "color": "#4c4c4c"
          },
          "subtotal": {
            "color": "#4c4c4c"
          },
          "notice": {
            "color": "#4c4c4c"
          },
          "currency": {
            "color": "#4c4c4c"
          },
          "close": {
            "color": "#4c4c4c",
            ":hover": {
              "color": "#4c4c4c"
            }
          },
          "empty": {
            "color": "#4c4c4c"
          },
          "noteDescription": {
            "color": "#4c4c4c"
          },
          "discountText": {
            "color": "#4c4c4c"
          },
          "discountIcon": {
            "fill": "#4c4c4c"
          },
          "discountAmount": {
            "color": "#4c4c4c"
          }
        },
        "text": {
          "button": "Zur Kasse"
        }
      },
      "toggle": {
        "styles": {
          "toggle": {
            "background-color": "#285a28",
            ":hover": {
              "background-color": "#245124"
            },
            ":focus": {
              "background-color": "#245124"
            }
          },
          "count": {
            "font-size": "16px"
          }
        }
      },
      "lineItem": {
        "styles": {
          "variantTitle": {
            "color": "#4c4c4c"
          },
          "title": {
            "color": "#4c4c4c"
          },
          "price": {
            "color": "#4c4c4c"
          },
          "fullPrice": {
            "color": "#4c4c4c"
          },
          "discount": {
            "color": "#4c4c4c"
          },
          "discountIcon": {
            "fill": "#4c4c4c"
          },
          "quantity": {
            "color": "#4c4c4c"
          },
          "quantityIncrement": {
            "color": "#4c4c4c",
            "border-color": "#4c4c4c"
          },
          "quantityDecrement": {
            "color": "#4c4c4c",
            "border-color": "#4c4c4c"
          },
          "quantityInput": {
            "color": "#4c4c4c",
            "border-color": "#4c4c4c"
          }
        }
      }
    },
          });
        });
      }
    })();

    (function () {
      var scriptURL = 'https://sdks.shopifycdn.com/buy-button/latest/buy-button-storefront.min.js';
      if (window.ShopifyBuy) {
        if (window.ShopifyBuy.UI) {
          ShopifyBuyInit();
        } else {
          loadScript();
        }
      } else {
        loadScript();
      }
      function loadScript() {
        var script = document.createElement('script');
        script.async = true;
        script.src = scriptURL;
        (document.getElementsByTagName('head')[0] || document.getElementsByTagName('body')[0]).appendChild(script);
        script.onload = ShopifyBuyInit;
      }
      function ShopifyBuyInit() {
        var client = ShopifyBuy.buildClient({
          domain: 'test-polsterer.myshopify.com',
          storefrontAccessToken: '0ae1ef1a65581fa69b7bb96bbf56a31b',
        });
        ShopifyBuy.UI.onReady(client).then(function (ui) {
          ui.createComponent('product', {
            id: '4454660472911',
            node: document.getElementById('product-component-1579511142873'),
            moneyFormat: '%E2%82%AC%7B%7Bamount_with_comma_separator%7D%7D',
            options: {
      "product": {
        "styles": {
          "product": {
            "@media (min-width: 601px)": {
              "max-width": "calc(25% - 20px)",
              "margin-left": "20px",
              "margin-bottom": "50px"
            }
          },
          "button": {
            "font-size": "16px",
            "padding-top": "16px",
            "padding-bottom": "16px",
            ":hover": {
              "background-color": "#245124"
            },
            "background-color": "#285a28",
            ":focus": {
              "background-color": "#245124"
            },
            "padding-left": "26px",
            "padding-right": "26px"
          },
          "quantityInput": {
            "font-size": "16px",
            "padding-top": "16px",
            "padding-bottom": "16px"
          }
        },
        "buttonDestination": "modal",
        "contents": {
          "options": false
        },
        "width": "580px",
        "text": {
          "button": "Produkt anzeigen"
        }
      },
      "productSet": {
        "styles": {
          "products": {
            "@media (min-width: 601px)": {
              "margin-left": "-20px"
            }
          }
        }
      },
      "modalProduct": {
        "contents": {
          "img": false,
          "imgWithCarousel": true,
          "button": false,
          "buttonWithQuantity": true
        },
        "styles": {
          "product": {
            "@media (min-width: 601px)": {
              "max-width": "100%",
              "margin-left": "0px",
              "margin-bottom": "0px"
            }
          },
          "button": {
            "font-size": "16px",
            "padding-top": "16px",
            "padding-bottom": "16px",
            ":hover": {
              "background-color": "#245124"
            },
            "background-color": "#285a28",
            ":focus": {
              "background-color": "#245124"
            },
            "padding-left": "26px",
            "padding-right": "26px"
          },
          "quantityInput": {
            "font-size": "16px",
            "padding-top": "16px",
            "padding-bottom": "16px"
          }
        },
        "text": {
          "button": "In den Einkaufswagen"
        }
      },
      "cart": {
        "styles": {
          "button": {
            "font-size": "16px",
            "padding-top": "16px",
            "padding-bottom": "16px",
            ":hover": {
              "background-color": "#245124"
            },
            "background-color": "#285a28",
            ":focus": {
              "background-color": "#245124"
            }
          },
          "title": {
            "color": "#4c4c4c"
          },
          "header": {
            "color": "#4c4c4c"
          },
          "lineItems": {
            "color": "#4c4c4c"
          },
          "subtotalText": {
            "color": "#4c4c4c"
          },
          "subtotal": {
            "color": "#4c4c4c"
          },
          "notice": {
            "color": "#4c4c4c"
          },
          "currency": {
            "color": "#4c4c4c"
          },
          "close": {
            "color": "#4c4c4c",
            ":hover": {
              "color": "#4c4c4c"
            }
          },
          "empty": {
            "color": "#4c4c4c"
          },
          "noteDescription": {
            "color": "#4c4c4c"
          },
          "discountText": {
            "color": "#4c4c4c"
          },
          "discountIcon": {
            "fill": "#4c4c4c"
          },
          "discountAmount": {
            "color": "#4c4c4c"
          }
        },
        "text": {
          "button": "Zur Kasse"
        }
      },
      "toggle": {
        "styles": {
          "toggle": {
            "background-color": "#285a28",
            ":hover": {
              "background-color": "#245124"
            },
            ":focus": {
              "background-color": "#245124"
            }
          },
          "count": {
            "font-size": "16px"
          }
        }
      },
      "lineItem": {
        "styles": {
          "variantTitle": {
            "color": "#4c4c4c"
          },
          "title": {
            "color": "#4c4c4c"
          },
          "price": {
            "color": "#4c4c4c"
          },
          "fullPrice": {
            "color": "#4c4c4c"
          },
          "discount": {
            "color": "#4c4c4c"
          },
          "discountIcon": {
            "fill": "#4c4c4c"
          },
          "quantity": {
            "color": "#4c4c4c"
          },
          "quantityIncrement": {
            "color": "#4c4c4c",
            "border-color": "#4c4c4c"
          },
          "quantityDecrement": {
            "color": "#4c4c4c",
            "border-color": "#4c4c4c"
          },
          "quantityInput": {
            "color": "#4c4c4c",
            "border-color": "#4c4c4c"
          }
        }
      }
    },
          });
        });
      }
    })();

    (function () {
      var scriptURL = 'https://sdks.shopifycdn.com/buy-button/latest/buy-button-storefront.min.js';
      if (window.ShopifyBuy) {
        if (window.ShopifyBuy.UI) {
          ShopifyBuyInit();
        } else {
          loadScript();
        }
      } else {
        loadScript();
      }
      function loadScript() {
        var script = document.createElement('script');
        script.async = true;
        script.src = scriptURL;
        (document.getElementsByTagName('head')[0] || document.getElementsByTagName('body')[0]).appendChild(script);
        script.onload = ShopifyBuyInit;
      }
      function ShopifyBuyInit() {
        var client = ShopifyBuy.buildClient({
          domain: 'test-polsterer.myshopify.com',
          storefrontAccessToken: '0ae1ef1a65581fa69b7bb96bbf56a31b',
        });
        ShopifyBuy.UI.onReady(client).then(function (ui) {
          ui.createComponent('product', {
            id: '4454659784783',
            node: document.getElementById('product-component-1579511174563'),
            moneyFormat: '%E2%82%AC%7B%7Bamount_with_comma_separator%7D%7D',
            options: {
      "product": {
        "styles": {
          "product": {
            "@media (min-width: 601px)": {
              "max-width": "calc(25% - 20px)",
              "margin-left": "20px",
              "margin-bottom": "50px"
            }
          },
          "button": {
            "font-size": "16px",
            "padding-top": "16px",
            "padding-bottom": "16px",
            ":hover": {
              "background-color": "#245124"
            },
            "background-color": "#285a28",
            ":focus": {
              "background-color": "#245124"
            },
            "padding-left": "26px",
            "padding-right": "26px"
          },
          "quantityInput": {
            "font-size": "16px",
            "padding-top": "16px",
            "padding-bottom": "16px"
          }
        },
        "buttonDestination": "modal",
        "contents": {
          "options": false
        },
        "width": "580px",
        "text": {
          "button": "Produkt anzeigen"
        }
      },
      "productSet": {
        "styles": {
          "products": {
            "@media (min-width: 601px)": {
              "margin-left": "-20px"
            }
          }
        }
      },
      "modalProduct": {
        "contents": {
          "img": false,
          "imgWithCarousel": true,
          "button": false,
          "buttonWithQuantity": true
        },
        "styles": {
          "product": {
            "@media (min-width: 601px)": {
              "max-width": "100%",
              "margin-left": "0px",
              "margin-bottom": "0px"
            }
          },
          "button": {
            "font-size": "16px",
            "padding-top": "16px",
            "padding-bottom": "16px",
            ":hover": {
              "background-color": "#245124"
            },
            "background-color": "#285a28",
            ":focus": {
              "background-color": "#245124"
            },
            "padding-left": "26px",
            "padding-right": "26px"
          },
          "quantityInput": {
            "font-size": "16px",
            "padding-top": "16px",
            "padding-bottom": "16px"
          }
        },
        "text": {
          "button": "In den Einkaufswagen"
        }
      },
      "cart": {
        "styles": {
          "button": {
            "font-size": "16px",
            "padding-top": "16px",
            "padding-bottom": "16px",
            ":hover": {
              "background-color": "#245124"
            },
            "background-color": "#285a28",
            ":focus": {
              "background-color": "#245124"
            }
          },
          "title": {
            "color": "#4c4c4c"
          },
          "header": {
            "color": "#4c4c4c"
          },
          "lineItems": {
            "color": "#4c4c4c"
          },
          "subtotalText": {
            "color": "#4c4c4c"
          },
          "subtotal": {
            "color": "#4c4c4c"
          },
          "notice": {
            "color": "#4c4c4c"
          },
          "currency": {
            "color": "#4c4c4c"
          },
          "close": {
            "color": "#4c4c4c",
            ":hover": {
              "color": "#4c4c4c"
            }
          },
          "empty": {
            "color": "#4c4c4c"
          },
          "noteDescription": {
            "color": "#4c4c4c"
          },
          "discountText": {
            "color": "#4c4c4c"
          },
          "discountIcon": {
            "fill": "#4c4c4c"
          },
          "discountAmount": {
            "color": "#4c4c4c"
          }
        },
        "text": {
          "button": "Zur Kasse"
        }
      },
      "toggle": {
        "styles": {
          "toggle": {
            "background-color": "#285a28",
            ":hover": {
              "background-color": "#245124"
            },
            ":focus": {
              "background-color": "#245124"
            }
          },
          "count": {
            "font-size": "16px"
          }
        }
      },
      "lineItem": {
        "styles": {
          "variantTitle": {
            "color": "#4c4c4c"
          },
          "title": {
            "color": "#4c4c4c"
          },
          "price": {
            "color": "#4c4c4c"
          },
          "fullPrice": {
            "color": "#4c4c4c"
          },
          "discount": {
            "color": "#4c4c4c"
          },
          "discountIcon": {
            "fill": "#4c4c4c"
          },
          "quantity": {
            "color": "#4c4c4c"
          },
          "quantityIncrement": {
            "color": "#4c4c4c",
            "border-color": "#4c4c4c"
          },
          "quantityDecrement": {
            "color": "#4c4c4c",
            "border-color": "#4c4c4c"
          },
          "quantityInput": {
            "color": "#4c4c4c",
            "border-color": "#4c4c4c"
          }
        }
      }
    },
          });
        });
      }
    })();

    (function () {
      var scriptURL = 'https://sdks.shopifycdn.com/buy-button/latest/buy-button-storefront.min.js';
      if (window.ShopifyBuy) {
        if (window.ShopifyBuy.UI) {
          ShopifyBuyInit();
        } else {
          loadScript();
        }
      } else {
        loadScript();
      }
      function loadScript() {
        var script = document.createElement('script');
        script.async = true;
        script.src = scriptURL;
        (document.getElementsByTagName('head')[0] || document.getElementsByTagName('body')[0]).appendChild(script);
        script.onload = ShopifyBuyInit;
      }
      function ShopifyBuyInit() {
        var client = ShopifyBuy.buildClient({
          domain: 'test-polsterer.myshopify.com',
          storefrontAccessToken: '0ae1ef1a65581fa69b7bb96bbf56a31b',
        });
        ShopifyBuy.UI.onReady(client).then(function (ui) {
          ui.createComponent('product', {
            id: '4454659260495',
            node: document.getElementById('product-component-1579511233119'),
            moneyFormat: '%E2%82%AC%7B%7Bamount_with_comma_separator%7D%7D',
            options: {
      "product": {
        "styles": {
          "product": {
            "@media (min-width: 601px)": {
              "max-width": "calc(25% - 20px)",
              "margin-left": "20px",
              "margin-bottom": "50px"
            }
          },
          "button": {
            "font-size": "16px",
            "padding-top": "16px",
            "padding-bottom": "16px",
            ":hover": {
              "background-color": "#245124"
            },
            "background-color": "#285a28",
            ":focus": {
              "background-color": "#245124"
            },
            "padding-left": "26px",
            "padding-right": "26px"
          },
          "quantityInput": {
            "font-size": "16px",
            "padding-top": "16px",
            "padding-bottom": "16px"
          }
        },
        "buttonDestination": "modal",
        "contents": {
          "options": false
        },
        "width": "580px",
        "text": {
          "button": "Produkt anzeigen"
        }
      },
      "productSet": {
        "styles": {
          "products": {
            "@media (min-width: 601px)": {
              "margin-left": "-20px"
            }
          }
        }
      },
      "modalProduct": {
        "contents": {
          "img": false,
          "imgWithCarousel": true,
          "button": false,
          "buttonWithQuantity": true
        },
        "styles": {
          "product": {
            "@media (min-width: 601px)": {
              "max-width": "100%",
              "margin-left": "0px",
              "margin-bottom": "0px"
            }
          },
          "button": {
            "font-size": "16px",
            "padding-top": "16px",
            "padding-bottom": "16px",
            ":hover": {
              "background-color": "#245124"
            },
            "background-color": "#285a28",
            ":focus": {
              "background-color": "#245124"
            },
            "padding-left": "26px",
            "padding-right": "26px"
          },
          "quantityInput": {
            "font-size": "16px",
            "padding-top": "16px",
            "padding-bottom": "16px"
          }
        },
        "text": {
          "button": "In den Einkaufswagen"
        }
      },
      "cart": {
        "styles": {
          "button": {
            "font-size": "16px",
            "padding-top": "16px",
            "padding-bottom": "16px",
            ":hover": {
              "background-color": "#245124"
            },
            "background-color": "#285a28",
            ":focus": {
              "background-color": "#245124"
            }
          },
          "title": {
            "color": "#4c4c4c"
          },
          "header": {
            "color": "#4c4c4c"
          },
          "lineItems": {
            "color": "#4c4c4c"
          },
          "subtotalText": {
            "color": "#4c4c4c"
          },
          "subtotal": {
            "color": "#4c4c4c"
          },
          "notice": {
            "color": "#4c4c4c"
          },
          "currency": {
            "color": "#4c4c4c"
          },
          "close": {
            "color": "#4c4c4c",
            ":hover": {
              "color": "#4c4c4c"
            }
          },
          "empty": {
            "color": "#4c4c4c"
          },
          "noteDescription": {
            "color": "#4c4c4c"
          },
          "discountText": {
            "color": "#4c4c4c"
          },
          "discountIcon": {
            "fill": "#4c4c4c"
          },
          "discountAmount": {
            "color": "#4c4c4c"
          }
        },
        "text": {
          "button": "Zur Kasse"
        }
      },
      "toggle": {
        "styles": {
          "toggle": {
            "background-color": "#285a28",
            ":hover": {
              "background-color": "#245124"
            },
            ":focus": {
              "background-color": "#245124"
            }
          },
          "count": {
            "font-size": "16px"
          }
        }
      },
      "lineItem": {
        "styles": {
          "variantTitle": {
            "color": "#4c4c4c"
          },
          "title": {
            "color": "#4c4c4c"
          },
          "price": {
            "color": "#4c4c4c"
          },
          "fullPrice": {
            "color": "#4c4c4c"
          },
          "discount": {
            "color": "#4c4c4c"
          },
          "discountIcon": {
            "fill": "#4c4c4c"
          },
          "quantity": {
            "color": "#4c4c4c"
          },
          "quantityIncrement": {
            "color": "#4c4c4c",
            "border-color": "#4c4c4c"
          },
          "quantityDecrement": {
            "color": "#4c4c4c",
            "border-color": "#4c4c4c"
          },
          "quantityInput": {
            "color": "#4c4c4c",
            "border-color": "#4c4c4c"
          }
        }
      }
    },
          });
        });
      }
    })();

    (function () {
      var scriptURL = 'https://sdks.shopifycdn.com/buy-button/latest/buy-button-storefront.min.js';
      if (window.ShopifyBuy) {
        if (window.ShopifyBuy.UI) {
          ShopifyBuyInit();
        } else {
          loadScript();
        }
      } else {
        loadScript();
      }
      function loadScript() {
        var script = document.createElement('script');
        script.async = true;
        script.src = scriptURL;
        (document.getElementsByTagName('head')[0] || document.getElementsByTagName('body')[0]).appendChild(script);
        script.onload = ShopifyBuyInit;
      }
      function ShopifyBuyInit() {
        var client = ShopifyBuy.buildClient({
          domain: 'test-polsterer.myshopify.com',
          storefrontAccessToken: '0ae1ef1a65581fa69b7bb96bbf56a31b',
        });
        ShopifyBuy.UI.onReady(client).then(function (ui) {
          ui.createComponent('product', {
            id: '4454657720399',
            node: document.getElementById('product-component-1579511269828'),
            moneyFormat: '%E2%82%AC%7B%7Bamount_with_comma_separator%7D%7D',
            options: {
      "product": {
        "styles": {
          "product": {
            "@media (min-width: 601px)": {
              "max-width": "calc(25% - 20px)",
              "margin-left": "20px",
              "margin-bottom": "50px"
            }
          },
          "button": {
            "font-size": "16px",
            "padding-top": "16px",
            "padding-bottom": "16px",
            ":hover": {
              "background-color": "#245124"
            },
            "background-color": "#285a28",
            ":focus": {
              "background-color": "#245124"
            },
            "padding-left": "26px",
            "padding-right": "26px"
          },
          "quantityInput": {
            "font-size": "16px",
            "padding-top": "16px",
            "padding-bottom": "16px"
          }
        },
        "buttonDestination": "modal",
        "contents": {
          "options": false
        },
        "width": "580px",
        "text": {
          "button": "Produkt anzeigen"
        }
      },
      "productSet": {
        "styles": {
          "products": {
            "@media (min-width: 601px)": {
              "margin-left": "-20px"
            }
          }
        }
      },
      "modalProduct": {
        "contents": {
          "img": false,
          "imgWithCarousel": true,
          "button": false,
          "buttonWithQuantity": true
        },
        "styles": {
          "product": {
            "@media (min-width: 601px)": {
              "max-width": "100%",
              "margin-left": "0px",
              "margin-bottom": "0px"
            }
          },
          "button": {
            "font-size": "16px",
            "padding-top": "16px",
            "padding-bottom": "16px",
            ":hover": {
              "background-color": "#245124"
            },
            "background-color": "#285a28",
            ":focus": {
              "background-color": "#245124"
            },
            "padding-left": "26px",
            "padding-right": "26px"
          },
          "quantityInput": {
            "font-size": "16px",
            "padding-top": "16px",
            "padding-bottom": "16px"
          }
        },
        "text": {
          "button": "In den Einkaufswagen"
        }
      },
      "cart": {
        "styles": {
          "button": {
            "font-size": "16px",
            "padding-top": "16px",
            "padding-bottom": "16px",
            ":hover": {
              "background-color": "#245124"
            },
            "background-color": "#285a28",
            ":focus": {
              "background-color": "#245124"
            }
          },
          "title": {
            "color": "#4c4c4c"
          },
          "header": {
            "color": "#4c4c4c"
          },
          "lineItems": {
            "color": "#4c4c4c"
          },
          "subtotalText": {
            "color": "#4c4c4c"
          },
          "subtotal": {
            "color": "#4c4c4c"
          },
          "notice": {
            "color": "#4c4c4c"
          },
          "currency": {
            "color": "#4c4c4c"
          },
          "close": {
            "color": "#4c4c4c",
            ":hover": {
              "color": "#4c4c4c"
            }
          },
          "empty": {
            "color": "#4c4c4c"
          },
          "noteDescription": {
            "color": "#4c4c4c"
          },
          "discountText": {
            "color": "#4c4c4c"
          },
          "discountIcon": {
            "fill": "#4c4c4c"
          },
          "discountAmount": {
            "color": "#4c4c4c"
          }
        },
        "text": {
          "button": "Zur Kasse"
        }
      },
      "toggle": {
        "styles": {
          "toggle": {
            "background-color": "#285a28",
            ":hover": {
              "background-color": "#245124"
            },
            ":focus": {
              "background-color": "#245124"
            }
          },
          "count": {
            "font-size": "16px"
          }
        }
      },
      "lineItem": {
        "styles": {
          "variantTitle": {
            "color": "#4c4c4c"
          },
          "title": {
            "color": "#4c4c4c"
          },
          "price": {
            "color": "#4c4c4c"
          },
          "fullPrice": {
            "color": "#4c4c4c"
          },
          "discount": {
            "color": "#4c4c4c"
          },
          "discountIcon": {
            "fill": "#4c4c4c"
          },
          "quantity": {
            "color": "#4c4c4c"
          },
          "quantityIncrement": {
            "color": "#4c4c4c",
            "border-color": "#4c4c4c"
          },
          "quantityDecrement": {
            "color": "#4c4c4c",
            "border-color": "#4c4c4c"
          },
          "quantityInput": {
            "color": "#4c4c4c",
            "border-color": "#4c4c4c"
          }
        }
      }
    },
          });
        });
      }
    })();