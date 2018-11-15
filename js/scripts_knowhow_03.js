$.ajaxPrefilter(function( options, originalOptions, jqXHR ) { options.async = true; });

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

    if (screen.width > 767) {
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



/* SHOP ITEMS */
/* 1 */
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
            id: [1578207150195],
            node: document.getElementById('product-component-5d288dce26a'),
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

/* 3 */
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
            id: [1578235101299],
            node: document.getElementById('product-component-bc456be5dac'),
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
            id: [983849140339],
            node: document.getElementById('product-component-b2c5147676f'),
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
            id: [1578323345523],
            node: document.getElementById('product-component-d21d926fbeb'),
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

/* 12 */
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
            id: [1578310041715],
            node: document.getElementById('product-component-000b66976a8'),
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
