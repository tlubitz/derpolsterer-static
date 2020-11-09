$.ajaxPrefilter(function( options, originalOptions, jqXHR ) { options.async = true; });

var y = document.getElementsByClassName("page_id");
page_id = y[0].getAttribute("id");

var z = document.getElementById(page_id+'_nav');
z.style.textDecoration = "underline";
z.style.textDecorationColor = "rgb(40,90,40)";

/* required functions to include other HTML file templates
$(function(){
    $("#base_generic_top").load("base_generic_top.html"); 
});

$(function(){
    $("#base_generic_bottom").load("base_generic_bottom.html"); 
    }); */

/*
var iframes = document.querySelectorAll("iframe");
console.log(iframes);

iframes.forEach(function (currentValue, currentIndex, listObj){
    console.log(currentValue);
})

var iframe = document.getElementById('iframe');
var style = document.createElement('style');
style.textContent =
  'body {' +
  '  background-color: some-color;' +
  '  background-image: some-image;' +
  '}' 
;
iframe.contentDocument.head.appendChild(style);

$('iframe').load( function() {
    $('iframe').contents().find("head")
      .append($("<style type='text/css'>  .shopify-buy__product__title{ min-height:43px; }  </style>"));
});
*/

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
          },
          "description": {
            "font-family": "Josefin Slab, sans-serif",
            "font-weight": "bold",
            "font-size": "15px"
          }
        },
        "googleFonts": [
          "Josefin Slab"
        ],        
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
          },
          "description": {
            "font-family": "Josefin Slab, sans-serif",
            "font-weight": "bold",
            "font-size": "15px"
          }
        },
        "googleFonts": [
          "Josefin Slab"
        ],
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
          },
          "description": {
            "font-family": "Josefin Slab, sans-serif",
            "font-weight": "bold",
            "font-size": "15px"
          }
        },
        "googleFonts": [
          "Josefin Slab"
        ], 
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
          },
          "description": {
            "font-family": "Josefin Slab, sans-serif",
            "font-weight": "bold",
            "font-size": "15px"
          }
        },
        "googleFonts": [
          "Josefin Slab"
        ], 
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
          },
          "description": {
            "font-family": "Josefin Slab, sans-serif",
            "font-weight": "bold",
            "font-size": "15px"
          }
        },
        "googleFonts": [
          "Josefin Slab"
        ], 
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
          },
          "description": {
            "font-family": "Josefin Slab, sans-serif",
            "font-weight": "bold",
            "font-size": "15px"
          }
        },
        "googleFonts": [
          "Josefin Slab"
        ], 
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
          },
          "description": {
            "font-family": "Josefin Slab, sans-serif",
            "font-weight": "bold",
            "font-size": "15px"
          }
        },
        "googleFonts": [
          "Josefin Slab"
        ], 
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
          },
          "description": {
            "font-family": "Josefin Slab, sans-serif",
            "font-weight": "bold",
            "font-size": "15px"
          }
        },
        "googleFonts": [
          "Josefin Slab"
        ], 
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
          },
          "description": {
            "font-family": "Josefin Slab, sans-serif",
            "font-weight": "bold",
            "font-size": "15px"
          }
        },
        "googleFonts": [
          "Josefin Slab"
        ], 
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
          },
          "description": {
            "font-family": "Josefin Slab, sans-serif",
            "font-weight": "bold",
            "font-size": "15px"
          }
        },
        "googleFonts": [
          "Josefin Slab"
        ], 
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
          },
          "description": {
            "font-family": "Josefin Slab, sans-serif",
            "font-weight": "bold",
            "font-size": "15px"
          }
        },
        "googleFonts": [
          "Josefin Slab"
        ], 
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
          },
          "description": {
            "font-family": "Josefin Slab, sans-serif",
            "font-weight": "bold",
            "font-size": "15px"
          }
        },
        "googleFonts": [
          "Josefin Slab"
        ], 
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
          },
          "description": {
            "font-family": "Josefin Slab, sans-serif",
            "font-weight": "bold",
            "font-size": "15px"
          }
        },
        "googleFonts": [
          "Josefin Slab"
        ], 
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
          },
          "description": {
            "font-family": "Josefin Slab, sans-serif",
            "font-weight": "bold",
            "font-size": "15px"
          }
        },
        "googleFonts": [
          "Josefin Slab"
        ], 
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
          },
          "description": {
            "font-family": "Josefin Slab, sans-serif",
            "font-weight": "bold",
            "font-size": "15px"
          }
        },
        "googleFonts": [
          "Josefin Slab"
        ], 
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
          },
          "description": {
            "font-family": "Josefin Slab, sans-serif",
            "font-weight": "bold",
            "font-size": "15px"
          }
        },
        "googleFonts": [
          "Josefin Slab"
        ], 
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
          },
          "description": {
            "font-family": "Josefin Slab, sans-serif",
            "font-weight": "bold",
            "font-size": "15px"
          }
        },
        "googleFonts": [
          "Josefin Slab"
        ], 
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
          },
          "description": {
            "font-family": "Josefin Slab, sans-serif",
            "font-weight": "bold",
            "font-size": "15px"
          }
        },
        "googleFonts": [
          "Josefin Slab"
        ], 
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
          },
          "description": {
            "font-family": "Josefin Slab, sans-serif",
            "font-weight": "bold",
            "font-size": "15px"
          }
        },
        "googleFonts": [
          "Josefin Slab"
        ], 
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
          },
          "description": {
            "font-family": "Josefin Slab, sans-serif",
            "font-weight": "bold",
            "font-size": "15px"
          }
        },
        "googleFonts": [
          "Josefin Slab"
        ], 
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
          },
          "description": {
            "font-family": "Josefin Slab, sans-serif",
            "font-weight": "bold",
            "font-size": "15px"
          }
        },
        "googleFonts": [
          "Josefin Slab"
        ], 
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
          },
          "description": {
            "font-family": "Josefin Slab, sans-serif",
            "font-weight": "bold",
            "font-size": "15px"
          }
        },
        "googleFonts": [
          "Josefin Slab"
        ], 
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
            id: '4828832792655',
            node: document.getElementById('product-component-1604920949082'),
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
          "title": {
            "font-family": "Quantico, sans-serif",
            "font-weight": "normal"
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
          },
          "price": {
            "font-family": "Open Sans, sans-serif",
            "font-weight": "bold"
          },
          "compareAt": {
            "font-family": "Open Sans, sans-serif",
            "font-weight": "bold"
          },
          "unitPrice": {
            "font-family": "Open Sans, sans-serif",
            "font-weight": "bold"
          }
        },
        "buttonDestination": "modal",
        "contents": {
          "options": false
        },
        "width": "580px",
        "text": {
          "button": "Produkt anzeigen"
        },
        "googleFonts": [
          "Quantico",
          "Open Sans"
        ]
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
          },
          "description": {
            "font-family": "Josefin Slab, sans-serif",
            "font-weight": "bold",
            "font-size": "15px"
          }
        },
        "googleFonts": [
          "Josefin Slab"
        ],
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
            id: '4828833153103',
            node: document.getElementById('product-component-1604921080372'),
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
          "title": {
            "font-family": "Quantico, sans-serif",
            "font-weight": "normal"
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
          },
          "price": {
            "font-family": "Open Sans, sans-serif",
            "font-weight": "bold"
          },
          "compareAt": {
            "font-family": "Open Sans, sans-serif",
            "font-weight": "bold"
          },
          "unitPrice": {
            "font-family": "Open Sans, sans-serif",
            "font-weight": "bold"
          }
        },
        "buttonDestination": "modal",
        "contents": {
          "options": false
        },
        "width": "580px",
        "text": {
          "button": "Produkt anzeigen"
        },
        "googleFonts": [
          "Quantico",
          "Open Sans"
        ]
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
          },
          "description": {
            "font-family": "Josefin Slab, sans-serif",
            "font-weight": "bold",
            "font-size": "15px"
          }
        },
        "googleFonts": [
          "Josefin Slab"
        ],
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
            id: '4828834758735',
            node: document.getElementById('product-component-1604921133983'),
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
          "title": {
            "font-family": "Quantico, sans-serif",
            "font-weight": "normal"
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
          },
          "price": {
            "font-family": "Open Sans, sans-serif",
            "font-weight": "bold"
          },
          "compareAt": {
            "font-family": "Open Sans, sans-serif",
            "font-weight": "bold"
          },
          "unitPrice": {
            "font-family": "Open Sans, sans-serif",
            "font-weight": "bold"
          }
        },
        "buttonDestination": "modal",
        "contents": {
          "options": false
        },
        "width": "580px",
        "text": {
          "button": "Produkt anzeigen"
        },
        "googleFonts": [
          "Quantico",
          "Open Sans"
        ]
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
          },
          "description": {
            "font-family": "Josefin Slab, sans-serif",
            "font-weight": "bold",
            "font-size": "15px"
          }
        },
        "googleFonts": [
          "Josefin Slab"
        ],
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
            id: '4828835151951',
            node: document.getElementById('product-component-1604921175033'),
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
          "title": {
            "font-family": "Quantico, sans-serif",
            "font-weight": "normal"
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
          },
          "price": {
            "font-family": "Open Sans, sans-serif",
            "font-weight": "bold"
          },
          "compareAt": {
            "font-family": "Open Sans, sans-serif",
            "font-weight": "bold"
          },
          "unitPrice": {
            "font-family": "Open Sans, sans-serif",
            "font-weight": "bold"
          }
        },
        "buttonDestination": "modal",
        "contents": {
          "options": false
        },
        "width": "580px",
        "text": {
          "button": "Produkt anzeigen"
        },
        "googleFonts": [
          "Quantico",
          "Open Sans"
        ]
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
          },
          "description": {
            "font-family": "Josefin Slab, sans-serif",
            "font-weight": "bold",
            "font-size": "15px"
          }
        },
        "googleFonts": [
          "Josefin Slab"
        ],
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
            id: '4828835676239',
            node: document.getElementById('product-component-1604921232354'),
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
          "title": {
            "font-family": "Quantico, sans-serif",
            "font-weight": "normal"
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
          },
          "price": {
            "font-family": "Open Sans, sans-serif",
            "font-weight": "bold"
          },
          "compareAt": {
            "font-family": "Open Sans, sans-serif",
            "font-weight": "bold"
          },
          "unitPrice": {
            "font-family": "Open Sans, sans-serif",
            "font-weight": "bold"
          }
        },
        "buttonDestination": "modal",
        "contents": {
          "options": false
        },
        "width": "580px",
        "text": {
          "button": "Produkt anzeigen"
        },
        "googleFonts": [
          "Quantico",
          "Open Sans"
        ]
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
          },
          "description": {
            "font-family": "Josefin Slab, sans-serif",
            "font-weight": "bold",
            "font-size": "15px"
          }
        },
        "googleFonts": [
          "Josefin Slab"
        ],
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
            id: '4828836364367',
            node: document.getElementById('product-component-1604921272565'),
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
          "title": {
            "font-family": "Quantico, sans-serif",
            "font-weight": "normal"
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
          },
          "price": {
            "font-family": "Open Sans, sans-serif",
            "font-weight": "bold"
          },
          "compareAt": {
            "font-family": "Open Sans, sans-serif",
            "font-weight": "bold"
          },
          "unitPrice": {
            "font-family": "Open Sans, sans-serif",
            "font-weight": "bold"
          }
        },
        "buttonDestination": "modal",
        "contents": {
          "options": false
        },
        "width": "580px",
        "text": {
          "button": "Produkt anzeigen"
        },
        "googleFonts": [
          "Quantico",
          "Open Sans"
        ]
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
          },
          "description": {
            "font-family": "Josefin Slab, sans-serif",
            "font-weight": "bold",
            "font-size": "15px"
          }
        },
        "googleFonts": [
          "Josefin Slab"
        ],
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
        id: '4828836364367',
        node: document.getElementById('product-component-1604921272565'),
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
      "title": {
        "font-family": "Quantico, sans-serif",
        "font-weight": "normal"
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
      },
      "price": {
        "font-family": "Open Sans, sans-serif",
        "font-weight": "bold"
      },
      "compareAt": {
        "font-family": "Open Sans, sans-serif",
        "font-weight": "bold"
      },
      "unitPrice": {
        "font-family": "Open Sans, sans-serif",
        "font-weight": "bold"
      }
    },
    "buttonDestination": "modal",
    "contents": {
      "options": false
    },
    "width": "580px",
    "text": {
      "button": "Produkt anzeigen"
    },
    "googleFonts": [
      "Quantico",
      "Open Sans"
    ]
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
      },
      "description": {
        "font-family": "Josefin Slab, sans-serif",
        "font-weight": "bold",
        "font-size": "15px"
      }
    },
    "googleFonts": [
      "Josefin Slab"
    ],
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
        id: '4828836560975',
        node: document.getElementById('product-component-1604921313606'),
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
      "title": {
        "font-family": "Quantico, sans-serif",
        "font-weight": "normal"
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
      },
      "price": {
        "font-family": "Open Sans, sans-serif",
        "font-weight": "bold"
      },
      "compareAt": {
        "font-family": "Open Sans, sans-serif",
        "font-weight": "bold"
      },
      "unitPrice": {
        "font-family": "Open Sans, sans-serif",
        "font-weight": "bold"
      }
    },
    "buttonDestination": "modal",
    "contents": {
      "options": false
    },
    "width": "580px",
    "text": {
      "button": "Produkt anzeigen"
    },
    "googleFonts": [
      "Quantico",
      "Open Sans"
    ]
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
      },
      "description": {
        "font-family": "Josefin Slab, sans-serif",
        "font-weight": "bold",
        "font-size": "15px"
      }
    },
    "googleFonts": [
      "Josefin Slab"
    ],
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
        id: '4828836790351',
        node: document.getElementById('product-component-1604922521847'),
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
      "title": {
        "font-family": "Quantico, sans-serif",
        "font-weight": "normal"
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
      },
      "price": {
        "font-family": "Open Sans, sans-serif",
        "font-weight": "bold"
      },
      "compareAt": {
        "font-family": "Open Sans, sans-serif",
        "font-weight": "bold"
      },
      "unitPrice": {
        "font-family": "Open Sans, sans-serif",
        "font-weight": "bold"
      }
    },
    "buttonDestination": "modal",
    "contents": {
      "options": false
    },
    "width": "580px",
    "text": {
      "button": "Produkt anzeigen"
    },
    "googleFonts": [
      "Quantico",
      "Open Sans"
    ]
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
      },
      "description": {
        "font-family": "Josefin Slab, sans-serif",
        "font-weight": "bold",
        "font-size": "15px"
      }
    },
    "googleFonts": [
      "Josefin Slab"
    ],
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
        id: '4828836954191',
        node: document.getElementById('product-component-1604922573564'),
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
      "title": {
        "font-family": "Quantico, sans-serif",
        "font-weight": "normal"
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
      },
      "price": {
        "font-family": "Open Sans, sans-serif",
        "font-weight": "bold"
      },
      "compareAt": {
        "font-family": "Open Sans, sans-serif",
        "font-weight": "bold"
      },
      "unitPrice": {
        "font-family": "Open Sans, sans-serif",
        "font-weight": "bold"
      }
    },
    "buttonDestination": "modal",
    "contents": {
      "options": false
    },
    "width": "580px",
    "text": {
      "button": "Produkt anzeigen"
    },
    "googleFonts": [
      "Quantico",
      "Open Sans"
    ]
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
      },
      "description": {
        "font-family": "Josefin Slab, sans-serif",
        "font-weight": "bold",
        "font-size": "15px"
      }
    },
    "googleFonts": [
      "Josefin Slab"
    ],
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
        id: '4828837052495',
        node: document.getElementById('product-component-1604922612667'),
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
      "title": {
        "font-family": "Quantico, sans-serif",
        "font-weight": "normal"
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
      },
      "price": {
        "font-family": "Open Sans, sans-serif",
        "font-weight": "bold"
      },
      "compareAt": {
        "font-family": "Open Sans, sans-serif",
        "font-weight": "bold"
      },
      "unitPrice": {
        "font-family": "Open Sans, sans-serif",
        "font-weight": "bold"
      }
    },
    "buttonDestination": "modal",
    "contents": {
      "options": false
    },
    "width": "580px",
    "text": {
      "button": "Produkt anzeigen"
    },
    "googleFonts": [
      "Quantico",
      "Open Sans"
    ]
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
      },
      "description": {
        "font-family": "Josefin Slab, sans-serif",
        "font-weight": "bold",
        "font-size": "15px"
      }
    },
    "googleFonts": [
      "Josefin Slab"
    ],
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
        id: '4828837281871',
        node: document.getElementById('product-component-1604922648559'),
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
      "title": {
        "font-family": "Quantico, sans-serif",
        "font-weight": "normal"
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
      },
      "price": {
        "font-family": "Open Sans, sans-serif",
        "font-weight": "bold"
      },
      "compareAt": {
        "font-family": "Open Sans, sans-serif",
        "font-weight": "bold"
      },
      "unitPrice": {
        "font-family": "Open Sans, sans-serif",
        "font-weight": "bold"
      }
    },
    "buttonDestination": "modal",
    "contents": {
      "options": false
    },
    "width": "580px",
    "text": {
      "button": "Produkt anzeigen"
    },
    "googleFonts": [
      "Quantico",
      "Open Sans"
    ]
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
      },
      "description": {
        "font-family": "Josefin Slab, sans-serif",
        "font-weight": "bold",
        "font-size": "15px"
      }
    },
    "googleFonts": [
      "Josefin Slab"
    ],
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
        id: '4828837937231',
        node: document.getElementById('product-component-1604922688017'),
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
      "title": {
        "font-family": "Quantico, sans-serif",
        "font-weight": "normal"
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
      },
      "price": {
        "font-family": "Open Sans, sans-serif",
        "font-weight": "bold"
      },
      "compareAt": {
        "font-family": "Open Sans, sans-serif",
        "font-weight": "bold"
      },
      "unitPrice": {
        "font-family": "Open Sans, sans-serif",
        "font-weight": "bold"
      }
    },
    "buttonDestination": "modal",
    "contents": {
      "options": false
    },
    "width": "580px",
    "text": {
      "button": "Produkt anzeigen"
    },
    "googleFonts": [
      "Quantico",
      "Open Sans"
    ]
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
      },
      "description": {
        "font-family": "Josefin Slab, sans-serif",
        "font-weight": "bold",
        "font-size": "15px"
      }
    },
    "googleFonts": [
      "Josefin Slab"
    ],
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
        id: '4828838199375',
        node: document.getElementById('product-component-1604922719210'),
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
      "title": {
        "font-family": "Quantico, sans-serif",
        "font-weight": "normal"
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
      },
      "price": {
        "font-family": "Open Sans, sans-serif",
        "font-weight": "bold"
      },
      "compareAt": {
        "font-family": "Open Sans, sans-serif",
        "font-weight": "bold"
      },
      "unitPrice": {
        "font-family": "Open Sans, sans-serif",
        "font-weight": "bold"
      }
    },
    "buttonDestination": "modal",
    "contents": {
      "options": false
    },
    "width": "580px",
    "text": {
      "button": "Produkt anzeigen"
    },
    "googleFonts": [
      "Quantico",
      "Open Sans"
    ]
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
      },
      "description": {
        "font-family": "Josefin Slab, sans-serif",
        "font-weight": "bold",
        "font-size": "15px"
      }
    },
    "googleFonts": [
      "Josefin Slab"
    ],
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
        id: '4828838395983',
        node: document.getElementById('product-component-1604922754596'),
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
      "title": {
        "font-family": "Quantico, sans-serif",
        "font-weight": "normal"
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
      },
      "price": {
        "font-family": "Open Sans, sans-serif",
        "font-weight": "bold"
      },
      "compareAt": {
        "font-family": "Open Sans, sans-serif",
        "font-weight": "bold"
      },
      "unitPrice": {
        "font-family": "Open Sans, sans-serif",
        "font-weight": "bold"
      }
    },
    "buttonDestination": "modal",
    "contents": {
      "options": false
    },
    "width": "580px",
    "text": {
      "button": "Produkt anzeigen"
    },
    "googleFonts": [
      "Quantico",
      "Open Sans"
    ]
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
      },
      "description": {
        "font-family": "Josefin Slab, sans-serif",
        "font-weight": "bold",
        "font-size": "15px"
      }
    },
    "googleFonts": [
      "Josefin Slab"
    ],
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
        id: '4828838592591',
        node: document.getElementById('product-component-1604922792719'),
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
      "title": {
        "font-family": "Quantico, sans-serif",
        "font-weight": "normal"
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
      },
      "price": {
        "font-family": "Open Sans, sans-serif",
        "font-weight": "bold"
      },
      "compareAt": {
        "font-family": "Open Sans, sans-serif",
        "font-weight": "bold"
      },
      "unitPrice": {
        "font-family": "Open Sans, sans-serif",
        "font-weight": "bold"
      }
    },
    "buttonDestination": "modal",
    "contents": {
      "options": false
    },
    "width": "580px",
    "text": {
      "button": "Produkt anzeigen"
    },
    "googleFonts": [
      "Quantico",
      "Open Sans"
    ]
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
      },
      "description": {
        "font-family": "Josefin Slab, sans-serif",
        "font-weight": "bold",
        "font-size": "15px"
      }
    },
    "googleFonts": [
      "Josefin Slab"
    ],
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
        id: '4828838821967',
        node: document.getElementById('product-component-1604922827002'),
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
      "title": {
        "font-family": "Quantico, sans-serif",
        "font-weight": "normal"
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
      },
      "price": {
        "font-family": "Open Sans, sans-serif",
        "font-weight": "bold"
      },
      "compareAt": {
        "font-family": "Open Sans, sans-serif",
        "font-weight": "bold"
      },
      "unitPrice": {
        "font-family": "Open Sans, sans-serif",
        "font-weight": "bold"
      }
    },
    "buttonDestination": "modal",
    "contents": {
      "options": false
    },
    "width": "580px",
    "text": {
      "button": "Produkt anzeigen"
    },
    "googleFonts": [
      "Quantico",
      "Open Sans"
    ]
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
      },
      "description": {
        "font-family": "Josefin Slab, sans-serif",
        "font-weight": "bold",
        "font-size": "15px"
      }
    },
    "googleFonts": [
      "Josefin Slab"
    ],
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
        id: '4828839084111',
        node: document.getElementById('product-component-1604922857278'),
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
      "title": {
        "font-family": "Quantico, sans-serif",
        "font-weight": "normal"
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
      },
      "price": {
        "font-family": "Open Sans, sans-serif",
        "font-weight": "bold"
      },
      "compareAt": {
        "font-family": "Open Sans, sans-serif",
        "font-weight": "bold"
      },
      "unitPrice": {
        "font-family": "Open Sans, sans-serif",
        "font-weight": "bold"
      }
    },
    "buttonDestination": "modal",
    "contents": {
      "options": false
    },
    "width": "580px",
    "text": {
      "button": "Produkt anzeigen"
    },
    "googleFonts": [
      "Quantico",
      "Open Sans"
    ]
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
      },
      "description": {
        "font-family": "Josefin Slab, sans-serif",
        "font-weight": "bold",
        "font-size": "15px"
      }
    },
    "googleFonts": [
      "Josefin Slab"
    ],
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
        id: '4828839608399',
        node: document.getElementById('product-component-1604922888496'),
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
      "title": {
        "font-family": "Quantico, sans-serif",
        "font-weight": "normal"
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
      },
      "price": {
        "font-family": "Open Sans, sans-serif",
        "font-weight": "bold"
      },
      "compareAt": {
        "font-family": "Open Sans, sans-serif",
        "font-weight": "bold"
      },
      "unitPrice": {
        "font-family": "Open Sans, sans-serif",
        "font-weight": "bold"
      }
    },
    "buttonDestination": "modal",
    "contents": {
      "options": false
    },
    "width": "580px",
    "text": {
      "button": "Produkt anzeigen"
    },
    "googleFonts": [
      "Quantico",
      "Open Sans"
    ]
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
      },
      "description": {
        "font-family": "Josefin Slab, sans-serif",
        "font-weight": "bold",
        "font-size": "15px"
      }
    },
    "googleFonts": [
      "Josefin Slab"
    ],
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
        id: '4828839903311',
        node: document.getElementById('product-component-1604922919329'),
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
      "title": {
        "font-family": "Quantico, sans-serif",
        "font-weight": "normal"
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
      },
      "price": {
        "font-family": "Open Sans, sans-serif",
        "font-weight": "bold"
      },
      "compareAt": {
        "font-family": "Open Sans, sans-serif",
        "font-weight": "bold"
      },
      "unitPrice": {
        "font-family": "Open Sans, sans-serif",
        "font-weight": "bold"
      }
    },
    "buttonDestination": "modal",
    "contents": {
      "options": false
    },
    "width": "580px",
    "text": {
      "button": "Produkt anzeigen"
    },
    "googleFonts": [
      "Quantico",
      "Open Sans"
    ]
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
      },
      "description": {
        "font-family": "Josefin Slab, sans-serif",
        "font-weight": "bold",
        "font-size": "15px"
      }
    },
    "googleFonts": [
      "Josefin Slab"
    ],
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
        id: '4828840132687',
        node: document.getElementById('product-component-1604922952388'),
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
      "title": {
        "font-family": "Quantico, sans-serif",
        "font-weight": "normal"
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
      },
      "price": {
        "font-family": "Open Sans, sans-serif",
        "font-weight": "bold"
      },
      "compareAt": {
        "font-family": "Open Sans, sans-serif",
        "font-weight": "bold"
      },
      "unitPrice": {
        "font-family": "Open Sans, sans-serif",
        "font-weight": "bold"
      }
    },
    "buttonDestination": "modal",
    "contents": {
      "options": false
    },
    "width": "580px",
    "text": {
      "button": "Produkt anzeigen"
    },
    "googleFonts": [
      "Quantico",
      "Open Sans"
    ]
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
      },
      "description": {
        "font-family": "Josefin Slab, sans-serif",
        "font-weight": "bold",
        "font-size": "15px"
      }
    },
    "googleFonts": [
      "Josefin Slab"
    ],
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
        id: '4828840263759',
        node: document.getElementById('product-component-1604922984805'),
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
      "title": {
        "font-family": "Quantico, sans-serif",
        "font-weight": "normal"
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
      },
      "price": {
        "font-family": "Open Sans, sans-serif",
        "font-weight": "bold"
      },
      "compareAt": {
        "font-family": "Open Sans, sans-serif",
        "font-weight": "bold"
      },
      "unitPrice": {
        "font-family": "Open Sans, sans-serif",
        "font-weight": "bold"
      }
    },
    "buttonDestination": "modal",
    "contents": {
      "options": false
    },
    "width": "580px",
    "text": {
      "button": "Produkt anzeigen"
    },
    "googleFonts": [
      "Quantico",
      "Open Sans"
    ]
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
      },
      "description": {
        "font-family": "Josefin Slab, sans-serif",
        "font-weight": "bold",
        "font-size": "15px"
      }
    },
    "googleFonts": [
      "Josefin Slab"
    ],
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
        id: '4828840427599',
        node: document.getElementById('product-component-1604923024259'),
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
      "title": {
        "font-family": "Quantico, sans-serif",
        "font-weight": "normal"
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
      },
      "price": {
        "font-family": "Open Sans, sans-serif",
        "font-weight": "bold"
      },
      "compareAt": {
        "font-family": "Open Sans, sans-serif",
        "font-weight": "bold"
      },
      "unitPrice": {
        "font-family": "Open Sans, sans-serif",
        "font-weight": "bold"
      }
    },
    "buttonDestination": "modal",
    "contents": {
      "options": false
    },
    "width": "580px",
    "text": {
      "button": "Produkt anzeigen"
    },
    "googleFonts": [
      "Quantico",
      "Open Sans"
    ]
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
      },
      "description": {
        "font-family": "Josefin Slab, sans-serif",
        "font-weight": "bold",
        "font-size": "15px"
      }
    },
    "googleFonts": [
      "Josefin Slab"
    ],
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
        id: '4828840525903',
        node: document.getElementById('product-component-1604923061941'),
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
      "title": {
        "font-family": "Quantico, sans-serif",
        "font-weight": "normal"
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
      },
      "price": {
        "font-family": "Open Sans, sans-serif",
        "font-weight": "bold"
      },
      "compareAt": {
        "font-family": "Open Sans, sans-serif",
        "font-weight": "bold"
      },
      "unitPrice": {
        "font-family": "Open Sans, sans-serif",
        "font-weight": "bold"
      }
    },
    "buttonDestination": "modal",
    "contents": {
      "options": false
    },
    "width": "580px",
    "text": {
      "button": "Produkt anzeigen"
    },
    "googleFonts": [
      "Quantico",
      "Open Sans"
    ]
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
      },
      "description": {
        "font-family": "Josefin Slab, sans-serif",
        "font-weight": "bold",
        "font-size": "15px"
      }
    },
    "googleFonts": [
      "Josefin Slab"
    ],
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
        id: '4828840689743',
        node: document.getElementById('product-component-1604923091929'),
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
      "title": {
        "font-family": "Quantico, sans-serif",
        "font-weight": "normal"
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
      },
      "price": {
        "font-family": "Open Sans, sans-serif",
        "font-weight": "bold"
      },
      "compareAt": {
        "font-family": "Open Sans, sans-serif",
        "font-weight": "bold"
      },
      "unitPrice": {
        "font-family": "Open Sans, sans-serif",
        "font-weight": "bold"
      }
    },
    "buttonDestination": "modal",
    "contents": {
      "options": false
    },
    "width": "580px",
    "text": {
      "button": "Produkt anzeigen"
    },
    "googleFonts": [
      "Quantico",
      "Open Sans"
    ]
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
      },
      "description": {
        "font-family": "Josefin Slab, sans-serif",
        "font-weight": "bold",
        "font-size": "15px"
      }
    },
    "googleFonts": [
      "Josefin Slab"
    ],
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
        id: '4828840886351',
        node: document.getElementById('product-component-1604923125434'),
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
      "title": {
        "font-family": "Quantico, sans-serif",
        "font-weight": "normal"
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
      },
      "price": {
        "font-family": "Open Sans, sans-serif",
        "font-weight": "bold"
      },
      "compareAt": {
        "font-family": "Open Sans, sans-serif",
        "font-weight": "bold"
      },
      "unitPrice": {
        "font-family": "Open Sans, sans-serif",
        "font-weight": "bold"
      }
    },
    "buttonDestination": "modal",
    "contents": {
      "options": false
    },
    "width": "580px",
    "text": {
      "button": "Produkt anzeigen"
    },
    "googleFonts": [
      "Quantico",
      "Open Sans"
    ]
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
      },
      "description": {
        "font-family": "Josefin Slab, sans-serif",
        "font-weight": "bold",
        "font-size": "15px"
      }
    },
    "googleFonts": [
      "Josefin Slab"
    ],
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
        id: '4828841115727',
        node: document.getElementById('product-component-1604923160674'),
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
      "title": {
        "font-family": "Quantico, sans-serif",
        "font-weight": "normal"
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
      },
      "price": {
        "font-family": "Open Sans, sans-serif",
        "font-weight": "bold"
      },
      "compareAt": {
        "font-family": "Open Sans, sans-serif",
        "font-weight": "bold"
      },
      "unitPrice": {
        "font-family": "Open Sans, sans-serif",
        "font-weight": "bold"
      }
    },
    "buttonDestination": "modal",
    "contents": {
      "options": false
    },
    "width": "580px",
    "text": {
      "button": "Produkt anzeigen"
    },
    "googleFonts": [
      "Quantico",
      "Open Sans"
    ]
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
      },
      "description": {
        "font-family": "Josefin Slab, sans-serif",
        "font-weight": "bold",
        "font-size": "15px"
      }
    },
    "googleFonts": [
      "Josefin Slab"
    ],
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
        id: '4828841181263',
        node: document.getElementById('product-component-1604923197825'),
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
      "title": {
        "font-family": "Quantico, sans-serif",
        "font-weight": "normal"
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
      },
      "price": {
        "font-family": "Open Sans, sans-serif",
        "font-weight": "bold"
      },
      "compareAt": {
        "font-family": "Open Sans, sans-serif",
        "font-weight": "bold"
      },
      "unitPrice": {
        "font-family": "Open Sans, sans-serif",
        "font-weight": "bold"
      }
    },
    "buttonDestination": "modal",
    "contents": {
      "options": false
    },
    "width": "580px",
    "text": {
      "button": "Produkt anzeigen"
    },
    "googleFonts": [
      "Quantico",
      "Open Sans"
    ]
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
      },
      "description": {
        "font-family": "Josefin Slab, sans-serif",
        "font-weight": "bold",
        "font-size": "15px"
      }
    },
    "googleFonts": [
      "Josefin Slab"
    ],
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
        id: '4828841476175',
        node: document.getElementById('product-component-1604923232345'),
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
      "title": {
        "font-family": "Quantico, sans-serif",
        "font-weight": "normal"
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
      },
      "price": {
        "font-family": "Open Sans, sans-serif",
        "font-weight": "bold"
      },
      "compareAt": {
        "font-family": "Open Sans, sans-serif",
        "font-weight": "bold"
      },
      "unitPrice": {
        "font-family": "Open Sans, sans-serif",
        "font-weight": "bold"
      }
    },
    "buttonDestination": "modal",
    "contents": {
      "options": false
    },
    "width": "580px",
    "text": {
      "button": "Produkt anzeigen"
    },
    "googleFonts": [
      "Quantico",
      "Open Sans"
    ]
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
      },
      "description": {
        "font-family": "Josefin Slab, sans-serif",
        "font-weight": "bold",
        "font-size": "15px"
      }
    },
    "googleFonts": [
      "Josefin Slab"
    ],
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
        id: '4828841640015',
        node: document.getElementById('product-component-1604923264294'),
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
      "title": {
        "font-family": "Quantico, sans-serif",
        "font-weight": "normal"
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
      },
      "price": {
        "font-family": "Open Sans, sans-serif",
        "font-weight": "bold"
      },
      "compareAt": {
        "font-family": "Open Sans, sans-serif",
        "font-weight": "bold"
      },
      "unitPrice": {
        "font-family": "Open Sans, sans-serif",
        "font-weight": "bold"
      }
    },
    "buttonDestination": "modal",
    "contents": {
      "options": false
    },
    "width": "580px",
    "text": {
      "button": "Produkt anzeigen"
    },
    "googleFonts": [
      "Quantico",
      "Open Sans"
    ]
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
      },
      "description": {
        "font-family": "Josefin Slab, sans-serif",
        "font-weight": "bold",
        "font-size": "15px"
      }
    },
    "googleFonts": [
      "Josefin Slab"
    ],
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
        id: '4828841902159',
        node: document.getElementById('product-component-1604923305970'),
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
      "title": {
        "font-family": "Quantico, sans-serif",
        "font-weight": "normal"
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
      },
      "price": {
        "font-family": "Open Sans, sans-serif",
        "font-weight": "bold"
      },
      "compareAt": {
        "font-family": "Open Sans, sans-serif",
        "font-weight": "bold"
      },
      "unitPrice": {
        "font-family": "Open Sans, sans-serif",
        "font-weight": "bold"
      }
    },
    "buttonDestination": "modal",
    "contents": {
      "options": false
    },
    "width": "580px",
    "text": {
      "button": "Produkt anzeigen"
    },
    "googleFonts": [
      "Quantico",
      "Open Sans"
    ]
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
      },
      "description": {
        "font-family": "Josefin Slab, sans-serif",
        "font-weight": "bold",
        "font-size": "15px"
      }
    },
    "googleFonts": [
      "Josefin Slab"
    ],
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
        id: '4828842033231',
        node: document.getElementById('product-component-1604923338729'),
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
      "title": {
        "font-family": "Quantico, sans-serif",
        "font-weight": "normal"
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
      },
      "price": {
        "font-family": "Open Sans, sans-serif",
        "font-weight": "bold"
      },
      "compareAt": {
        "font-family": "Open Sans, sans-serif",
        "font-weight": "bold"
      },
      "unitPrice": {
        "font-family": "Open Sans, sans-serif",
        "font-weight": "bold"
      }
    },
    "buttonDestination": "modal",
    "contents": {
      "options": false
    },
    "width": "580px",
    "text": {
      "button": "Produkt anzeigen"
    },
    "googleFonts": [
      "Quantico",
      "Open Sans"
    ]
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
      },
      "description": {
        "font-family": "Josefin Slab, sans-serif",
        "font-weight": "bold",
        "font-size": "15px"
      }
    },
    "googleFonts": [
      "Josefin Slab"
    ],
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
        id: '4828842623055',
        node: document.getElementById('product-component-1604923374896'),
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
      "title": {
        "font-family": "Quantico, sans-serif",
        "font-weight": "normal"
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
      },
      "price": {
        "font-family": "Open Sans, sans-serif",
        "font-weight": "bold"
      },
      "compareAt": {
        "font-family": "Open Sans, sans-serif",
        "font-weight": "bold"
      },
      "unitPrice": {
        "font-family": "Open Sans, sans-serif",
        "font-weight": "bold"
      }
    },
    "buttonDestination": "modal",
    "contents": {
      "options": false
    },
    "width": "580px",
    "text": {
      "button": "Produkt anzeigen"
    },
    "googleFonts": [
      "Quantico",
      "Open Sans"
    ]
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
      },
      "description": {
        "font-family": "Josefin Slab, sans-serif",
        "font-weight": "bold",
        "font-size": "15px"
      }
    },
    "googleFonts": [
      "Josefin Slab"
    ],
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
        id: '4828842819663',
        node: document.getElementById('product-component-1604923403904'),
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
      "title": {
        "font-family": "Quantico, sans-serif",
        "font-weight": "normal"
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
      },
      "price": {
        "font-family": "Open Sans, sans-serif",
        "font-weight": "bold"
      },
      "compareAt": {
        "font-family": "Open Sans, sans-serif",
        "font-weight": "bold"
      },
      "unitPrice": {
        "font-family": "Open Sans, sans-serif",
        "font-weight": "bold"
      }
    },
    "buttonDestination": "modal",
    "contents": {
      "options": false
    },
    "width": "580px",
    "text": {
      "button": "Produkt anzeigen"
    },
    "googleFonts": [
      "Quantico",
      "Open Sans"
    ]
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
      },
      "description": {
        "font-family": "Josefin Slab, sans-serif",
        "font-weight": "bold",
        "font-size": "15px"
      }
    },
    "googleFonts": [
      "Josefin Slab"
    ],
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
        id: '4828842950735',
        node: document.getElementById('product-component-1604923437509'),
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
      "title": {
        "font-family": "Quantico, sans-serif",
        "font-weight": "normal"
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
      },
      "price": {
        "font-family": "Open Sans, sans-serif",
        "font-weight": "bold"
      },
      "compareAt": {
        "font-family": "Open Sans, sans-serif",
        "font-weight": "bold"
      },
      "unitPrice": {
        "font-family": "Open Sans, sans-serif",
        "font-weight": "bold"
      }
    },
    "buttonDestination": "modal",
    "contents": {
      "options": false
    },
    "width": "580px",
    "text": {
      "button": "Produkt anzeigen"
    },
    "googleFonts": [
      "Quantico",
      "Open Sans"
    ]
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
      },
      "description": {
        "font-family": "Josefin Slab, sans-serif",
        "font-weight": "bold",
        "font-size": "15px"
      }
    },
    "googleFonts": [
      "Josefin Slab"
    ],
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
        id: '4828843114575',
        node: document.getElementById('product-component-1604923470923'),
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
      "title": {
        "font-family": "Quantico, sans-serif",
        "font-weight": "normal"
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
      },
      "price": {
        "font-family": "Open Sans, sans-serif",
        "font-weight": "bold"
      },
      "compareAt": {
        "font-family": "Open Sans, sans-serif",
        "font-weight": "bold"
      },
      "unitPrice": {
        "font-family": "Open Sans, sans-serif",
        "font-weight": "bold"
      }
    },
    "buttonDestination": "modal",
    "contents": {
      "options": false
    },
    "width": "580px",
    "text": {
      "button": "Produkt anzeigen"
    },
    "googleFonts": [
      "Quantico",
      "Open Sans"
    ]
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
      },
      "description": {
        "font-family": "Josefin Slab, sans-serif",
        "font-weight": "bold",
        "font-size": "15px"
      }
    },
    "googleFonts": [
      "Josefin Slab"
    ],
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
        id: '4828843311183',
        node: document.getElementById('product-component-1604923520536'),
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
      "title": {
        "font-family": "Quantico, sans-serif",
        "font-weight": "normal"
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
      },
      "price": {
        "font-family": "Open Sans, sans-serif",
        "font-weight": "bold"
      },
      "compareAt": {
        "font-family": "Open Sans, sans-serif",
        "font-weight": "bold"
      },
      "unitPrice": {
        "font-family": "Open Sans, sans-serif",
        "font-weight": "bold"
      }
    },
    "buttonDestination": "modal",
    "contents": {
      "options": false
    },
    "width": "580px",
    "text": {
      "button": "Produkt anzeigen"
    },
    "googleFonts": [
      "Quantico",
      "Open Sans"
    ]
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
      },
      "description": {
        "font-family": "Josefin Slab, sans-serif",
        "font-weight": "bold",
        "font-size": "15px"
      }
    },
    "googleFonts": [
      "Josefin Slab"
    ],
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
        id: '4828843376719',
        node: document.getElementById('product-component-1604923553962'),
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
      "title": {
        "font-family": "Quantico, sans-serif",
        "font-weight": "normal"
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
      },
      "price": {
        "font-family": "Open Sans, sans-serif",
        "font-weight": "bold"
      },
      "compareAt": {
        "font-family": "Open Sans, sans-serif",
        "font-weight": "bold"
      },
      "unitPrice": {
        "font-family": "Open Sans, sans-serif",
        "font-weight": "bold"
      }
    },
    "buttonDestination": "modal",
    "contents": {
      "options": false
    },
    "width": "580px",
    "text": {
      "button": "Produkt anzeigen"
    },
    "googleFonts": [
      "Quantico",
      "Open Sans"
    ]
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
      },
      "description": {
        "font-family": "Josefin Slab, sans-serif",
        "font-weight": "bold",
        "font-size": "15px"
      }
    },
    "googleFonts": [
      "Josefin Slab"
    ],
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
        id: '4828843671631',
        node: document.getElementById('product-component-1604923586932'),
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
      "title": {
        "font-family": "Quantico, sans-serif",
        "font-weight": "normal"
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
      },
      "price": {
        "font-family": "Open Sans, sans-serif",
        "font-weight": "bold"
      },
      "compareAt": {
        "font-family": "Open Sans, sans-serif",
        "font-weight": "bold"
      },
      "unitPrice": {
        "font-family": "Open Sans, sans-serif",
        "font-weight": "bold"
      }
    },
    "buttonDestination": "modal",
    "contents": {
      "options": false
    },
    "width": "580px",
    "text": {
      "button": "Produkt anzeigen"
    },
    "googleFonts": [
      "Quantico",
      "Open Sans"
    ]
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
      },
      "description": {
        "font-family": "Josefin Slab, sans-serif",
        "font-weight": "bold",
        "font-size": "15px"
      }
    },
    "googleFonts": [
      "Josefin Slab"
    ],
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
        id: '4828843868239',
        node: document.getElementById('product-component-1604923619525'),
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
      "title": {
        "font-family": "Quantico, sans-serif",
        "font-weight": "normal"
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
      },
      "price": {
        "font-family": "Open Sans, sans-serif",
        "font-weight": "bold"
      },
      "compareAt": {
        "font-family": "Open Sans, sans-serif",
        "font-weight": "bold"
      },
      "unitPrice": {
        "font-family": "Open Sans, sans-serif",
        "font-weight": "bold"
      }
    },
    "buttonDestination": "modal",
    "contents": {
      "options": false
    },
    "width": "580px",
    "text": {
      "button": "Produkt anzeigen"
    },
    "googleFonts": [
      "Quantico",
      "Open Sans"
    ]
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
      },
      "description": {
        "font-family": "Josefin Slab, sans-serif",
        "font-weight": "bold",
        "font-size": "15px"
      }
    },
    "googleFonts": [
      "Josefin Slab"
    ],
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
        id: '4828843999311',
        node: document.getElementById('product-component-1604923650086'),
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
      "title": {
        "font-family": "Quantico, sans-serif",
        "font-weight": "normal"
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
      },
      "price": {
        "font-family": "Open Sans, sans-serif",
        "font-weight": "bold"
      },
      "compareAt": {
        "font-family": "Open Sans, sans-serif",
        "font-weight": "bold"
      },
      "unitPrice": {
        "font-family": "Open Sans, sans-serif",
        "font-weight": "bold"
      }
    },
    "buttonDestination": "modal",
    "contents": {
      "options": false
    },
    "width": "580px",
    "text": {
      "button": "Produkt anzeigen"
    },
    "googleFonts": [
      "Quantico",
      "Open Sans"
    ]
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
      },
      "description": {
        "font-family": "Josefin Slab, sans-serif",
        "font-weight": "bold",
        "font-size": "15px"
      }
    },
    "googleFonts": [
      "Josefin Slab"
    ],
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
        id: '4828844523599',
        node: document.getElementById('product-component-1604923683112'),
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
      "title": {
        "font-family": "Quantico, sans-serif",
        "font-weight": "normal"
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
      },
      "price": {
        "font-family": "Open Sans, sans-serif",
        "font-weight": "bold"
      },
      "compareAt": {
        "font-family": "Open Sans, sans-serif",
        "font-weight": "bold"
      },
      "unitPrice": {
        "font-family": "Open Sans, sans-serif",
        "font-weight": "bold"
      }
    },
    "buttonDestination": "modal",
    "contents": {
      "options": false
    },
    "width": "580px",
    "text": {
      "button": "Produkt anzeigen"
    },
    "googleFonts": [
      "Quantico",
      "Open Sans"
    ]
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
      },
      "description": {
        "font-family": "Josefin Slab, sans-serif",
        "font-weight": "bold",
        "font-size": "15px"
      }
    },
    "googleFonts": [
      "Josefin Slab"
    ],
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
        id: '4828844752975',
        node: document.getElementById('product-component-1604923717181'),
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
      "title": {
        "font-family": "Quantico, sans-serif",
        "font-weight": "normal"
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
      },
      "price": {
        "font-family": "Open Sans, sans-serif",
        "font-weight": "bold"
      },
      "compareAt": {
        "font-family": "Open Sans, sans-serif",
        "font-weight": "bold"
      },
      "unitPrice": {
        "font-family": "Open Sans, sans-serif",
        "font-weight": "bold"
      }
    },
    "buttonDestination": "modal",
    "contents": {
      "options": false
    },
    "width": "580px",
    "text": {
      "button": "Produkt anzeigen"
    },
    "googleFonts": [
      "Quantico",
      "Open Sans"
    ]
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
      },
      "description": {
        "font-family": "Josefin Slab, sans-serif",
        "font-weight": "bold",
        "font-size": "15px"
      }
    },
    "googleFonts": [
      "Josefin Slab"
    ],
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
        id: '4828844916815',
        node: document.getElementById('product-component-1604923756789'),
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
      "title": {
        "font-family": "Quantico, sans-serif",
        "font-weight": "normal"
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
      },
      "price": {
        "font-family": "Open Sans, sans-serif",
        "font-weight": "bold"
      },
      "compareAt": {
        "font-family": "Open Sans, sans-serif",
        "font-weight": "bold"
      },
      "unitPrice": {
        "font-family": "Open Sans, sans-serif",
        "font-weight": "bold"
      }
    },
    "buttonDestination": "modal",
    "contents": {
      "options": false
    },
    "width": "580px",
    "text": {
      "button": "Produkt anzeigen"
    },
    "googleFonts": [
      "Quantico",
      "Open Sans"
    ]
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
      },
      "description": {
        "font-family": "Josefin Slab, sans-serif",
        "font-weight": "bold",
        "font-size": "15px"
      }
    },
    "googleFonts": [
      "Josefin Slab"
    ],
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
        id: '4828845015119',
        node: document.getElementById('product-component-1604923788939'),
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
      "title": {
        "font-family": "Quantico, sans-serif",
        "font-weight": "normal"
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
      },
      "price": {
        "font-family": "Open Sans, sans-serif",
        "font-weight": "bold"
      },
      "compareAt": {
        "font-family": "Open Sans, sans-serif",
        "font-weight": "bold"
      },
      "unitPrice": {
        "font-family": "Open Sans, sans-serif",
        "font-weight": "bold"
      }
    },
    "buttonDestination": "modal",
    "contents": {
      "options": false
    },
    "width": "580px",
    "text": {
      "button": "Produkt anzeigen"
    },
    "googleFonts": [
      "Quantico",
      "Open Sans"
    ]
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
      },
      "description": {
        "font-family": "Josefin Slab, sans-serif",
        "font-weight": "bold",
        "font-size": "15px"
      }
    },
    "googleFonts": [
      "Josefin Slab"
    ],
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
        id: '4828845178959',
        node: document.getElementById('product-component-1604923825276'),
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
      "title": {
        "font-family": "Quantico, sans-serif",
        "font-weight": "normal"
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
      },
      "price": {
        "font-family": "Open Sans, sans-serif",
        "font-weight": "bold"
      },
      "compareAt": {
        "font-family": "Open Sans, sans-serif",
        "font-weight": "bold"
      },
      "unitPrice": {
        "font-family": "Open Sans, sans-serif",
        "font-weight": "bold"
      }
    },
    "buttonDestination": "modal",
    "contents": {
      "options": false
    },
    "width": "580px",
    "text": {
      "button": "Produkt anzeigen"
    },
    "googleFonts": [
      "Quantico",
      "Open Sans"
    ]
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
      },
      "description": {
        "font-family": "Josefin Slab, sans-serif",
        "font-weight": "bold",
        "font-size": "15px"
      }
    },
    "googleFonts": [
      "Josefin Slab"
    ],
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