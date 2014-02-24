(function() {
    installPrompt = mozmarket.receipts.Prompter({
        storeURL: "https://marketplace.firefox.com/app/btcviewer/",
        supportHTML: '<a href="mailto:alexanderarmuelles@riseup.net">email alexanderarmuelles@riseup.net</a>',
        verify: true,
        verifierOptions: {onlog: mozmarket.receipts.Verifier.consoleLogger}
    });
})();