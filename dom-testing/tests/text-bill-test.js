describe('The Text Bill Function', function(){
    
    it('Should be able to return total calls cost for three calls', function(){
        var callsTotal = textBillFactory();

        callsTotal.callandSmsTotal('call');
        callsTotal.callandSmsTotal('call');
        callsTotal.callandSmsTotal('call');

        assert.equal(8.25, callsTotal.textGrandTotal().callTextTot);
    });

    it('Should be able to return total sms cost for three sms', function(){
        var smssTotal = textBillFactory();

        smssTotal.callandSmsTotal('sms');
        smssTotal.callandSmsTotal('sms');
        smssTotal.callandSmsTotal('sms');

        assert.equal(2.25, smssTotal.textGrandTotal().smsTextTot);
    });

    it('Should be able to return overall total for both calls and sms', function(){
        var grandTextTotal = textBillFactory();

        grandTextTotal.callandSmsTotal('call');
        grandTextTotal.callandSmsTotal('call');
        grandTextTotal.callandSmsTotal('call');

        grandTextTotal.callandSmsTotal('sms');
        grandTextTotal.callandSmsTotal('sms');
        grandTextTotal.callandSmsTotal('sms');

        assert.equal(10.50, grandTextTotal.textGrandTotal().grandTextTot);
    });

    it('Should be able to return 0 for no input', function(){
        var grandTextTotal = textBillFactory();

        grandTextTotal.callandSmsTotal('');

        assert.equal(0, grandTextTotal.textGrandTotal().grandTextTot);
    });

});
