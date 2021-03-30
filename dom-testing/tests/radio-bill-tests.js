describe('The Radio Button Bill Function', function(){
    
    it('Should be able to return total calls cost for three calls', function(){
        var radioTotal = radioButtonBillFunction();

        radioTotal.callandSmsTotal('call');
        radioTotal.callandSmsTotal('call');
        radioTotal.callandSmsTotal('call');

        assert.equal(8.25, radioTotal.radGrandTotal().callRadTot);
    });

    it('Should be able to return total sms cost for three sms', function(){
        var radioTotal = radioButtonBillFunction();

        radioTotal.callandSmsTotal('sms');
        radioTotal.callandSmsTotal('sms');
        radioTotal.callandSmsTotal('sms');

        assert.equal(2.25, radioTotal.radGrandTotal().smsRadTot)
    });

    it('Should be able to return overall total for both calls and sms', function(){
        var radioTotal = radioButtonBillFunction();

        radioTotal.callandSmsTotal('call');
        radioTotal.callandSmsTotal('call');
        radioTotal.callandSmsTotal('call');

        radioTotal.callandSmsTotal('sms');
        radioTotal.callandSmsTotal('sms');
        radioTotal.callandSmsTotal('sms');

        assert.equal(10.50, radioTotal.radGrandTotal().grandRadTot);
    });

    it('Should be able to return 0 for no input', function(){
        var radioTotal = radioButtonBillFunction();

        radioTotal.callandSmsTotal('');

        assert.equal(0, radioTotal.radGrandTotal().grandRadTot);
    });

});