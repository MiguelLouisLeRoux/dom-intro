describe('The Calculate Bill Function', function(){

    it('Should be able to return the correct total amount', function(){
    
        assert.equal(7.75, calculateBill("call, sms, call, sms, sms"));
    });

    it('Should be able to return the correct total amount', function(){
    
        assert.equal(23.25, calculateBill("call, sms, call, sms, sms, call, sms, call, sms, sms, call, sms, call, sms, sms"));
    });

    it('Should be able to return the correct total amount', function(){
    
        assert.equal(31.00, calculateBill("call, sms, call, sms, sms, call, sms, call, sms, sms, call, sms, call, sms, sms, call, sms, call, sms, sms"));
    });



});