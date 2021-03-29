describe('The Text Bill Function', function(){
    
    it('Should be able to get total calls cost for three calls', function(){
        var ex = textBillFactory();

        ex.callandSmsTotal('call');
        ex.callandSmsTotal('call');
        ex.callandSmsTotal('call');

        assert.equal(8.25, ex.textGrandTotal().callTextTot);
    });

});
