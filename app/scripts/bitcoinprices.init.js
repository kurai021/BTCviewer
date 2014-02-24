$(document).ready(function() {
            bitcoinprices.init({

                // Where we get bitcoinaverage data
                // or null if we run headless (not in browser)
                url: "https://api.bitcoinaverage.com/ticker/all",

                // Which of bitcoinaverages value we use to present prices
                marketRateVariable: "24h_avg",

                // Which currencies are in shown to the user
                currencies: ["BTC", "USD", "EUR", "CNY", "GBP", "JPY"],

                // Special currency symbol artwork
                symbols: {
                    "BTC": "<i class='fa fa-btc'></i>"
                },

                // Which currency we show user by the default if
                // no currency is selected
                defaultCurrency: "BTC",

                // How the user is able to interact with the prices
                ux : {
                    // Make everything with data-btc-price HTML attribute clickable
                    clickPrices : true,

                    // Build Bootstrap dropdown menu for currency switching
                    menu : true
                },

                // Allows passing the explicit jQuery version to bitcoinprices.
                // This is useful if you are using modular javascript (AMD/UMD/require()),
                // but for most normal usage you don't need this
                jQuery: jQuery
            });
        });