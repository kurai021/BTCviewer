// Manual conversion example
$(document).on('marketdataavailable', function () {
    'use strict';
    var inputAmount = $('#input-amount');
    var outputAmount = $('#output-amount');
    var inputCurrency = $('#input-currency');
    var outputCurrency = $('#output-currency');
    
    function updateConversion() {
        // Reset output in the case we run into exception
        outputAmount.val('');
        
        var input = inputCurrency.val();
        var output = outputCurrency.val();
        var amount = parseFloat(inputAmount.val(), 10);
        try {
            var val = bitcoinprices.convert(amount, input, output);
            val = bitcoinprices.formatPrice(val, output, false);
            outputAmount.val(val);
        } catch (e) {
            throw e;
        }
    }
    
    inputAmount.change(updateConversion);
    inputAmount.on("keyup", updateConversion);
    inputCurrency.change(updateConversion);
    outputCurrency.change(updateConversion);

    // Initial take off
    updateConversion();

});