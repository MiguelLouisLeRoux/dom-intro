describe('The Settings Bill Function', function(){

    describe('Setting Values', function() {
    
        it('Should be able to set call cost', function(){
            var setBillFunc = theSettingsBillFunction();
            setBillFunc.setCallCost(5.22);
            assert.equal(5.22, setBillFunc.getCallCost());
        });

        it('Should be able to set call cost', function(){
            var setBillFunc = theSettingsBillFunction();
            setBillFunc.setCallCost(8.66);
            assert.equal(8.66, setBillFunc.getCallCost());
        });

        it('Should be able to set sms cost', function(){
            var setBillFunc = theSettingsBillFunction();
            setBillFunc.setSmsCost(0.85);
            assert.equal(0.85, setBillFunc.getSmsCost());
        });

        it('Should be able to set sms cost', function(){
            var setBillFunc = theSettingsBillFunction();
            setBillFunc.setSmsCost(1.55);
            assert.equal(1.55, setBillFunc.getSmsCost());
        });

        it('Should be able to set warning level', function(){
            var setBillFunc = theSettingsBillFunction();
            setBillFunc.setWarningLevel(30);
            assert.equal(30, setBillFunc.getWarningLevel());
        });

        it('Should be able to set warning level', function(){
            var setBillFunc = theSettingsBillFunction();
            setBillFunc.setWarningLevel(40);
            assert.equal(40, setBillFunc.getWarningLevel());
        });

        it('Should be able to set critical level', function(){
            var setBillFunc = theSettingsBillFunction();
            setBillFunc.setCriticalLevel(55);
            assert.equal(55, setBillFunc.getCriticalLevel());
        });

        it('Should be able to set critical level', function(){
            var setBillFunc = theSettingsBillFunction();
            setBillFunc.setCriticalLevel(65);
            assert.equal(65, setBillFunc.getCriticalLevel());
        });

    });

    describe ('Calculating Values', function () {
        it('Should be able to return total calls cost for three calls set at R5 each', function(){
            var setBillFunc = theSettingsBillFunction();

            setBillFunc.setCallCost(5.00);

            setBillFunc.callandSmsTotal('call');
            setBillFunc.callandSmsTotal('call');
            setBillFunc.callandSmsTotal('call');

            assert.equal(15, setBillFunc.setGrandTotal().callSetTot);
        });

        it('Should be able to return total sms cost for three sms set at R1.77 each', function(){
            var setBillFunc = theSettingsBillFunction();

            setBillFunc.setSmsCost(1.77);

            setBillFunc.callandSmsTotal('sms');
            setBillFunc.callandSmsTotal('sms');
            setBillFunc.callandSmsTotal('sms');

            assert.equal(5.31, setBillFunc.setGrandTotal().smsSetTot);
        });

        it('Should be able to return the grand total for three calls set at R6.33 and three sms set at R0.85', function(){
            var setBillFunc = theSettingsBillFunction();

            setBillFunc.setCallCost(5.00);
            setBillFunc.setSmsCost(0.85);

            setBillFunc.callandSmsTotal('sms');
            setBillFunc.callandSmsTotal('sms');
            setBillFunc.callandSmsTotal('sms');

            setBillFunc.callandSmsTotal('call');
            setBillFunc.callandSmsTotal('call');
            setBillFunc.callandSmsTotal('call');

            assert.equal(17.55, setBillFunc.setGrandTotal().grandSetTot);
        });
    });

    describe ('Warning level and Critical level', function() {

        it("Should return a class name of 'warning' if warninglevel is reached", function() {
            var setBillFunc = theSettingsBillFunction();

            setBillFunc.setCallCost(5.00);
            setBillFunc.setSmsCost(0.85);
            setBillFunc.setWarningLevel(30);

        });

        it('Should be able to stop incrementing if the total is equal to/more than the critical value set', function(){
            var setBillFunc = theSettingsBillFunction();

            setBillFunc.setCallCost(5.00);
            setBillFunc.setSmsCost(1.00);
            setBillFunc.setCriticalLevel(20);


            setBillFunc.callandSmsTotal('sms');
            setBillFunc.callandSmsTotal('sms');
            setBillFunc.callandSmsTotal('sms');
            setBillFunc.callandSmsTotal('sms');
            setBillFunc.callandSmsTotal('sms');

            setBillFunc.callandSmsTotal('call');
            setBillFunc.callandSmsTotal('call');
            setBillFunc.callandSmsTotal('call');
            setBillFunc.callandSmsTotal('call');
            setBillFunc.callandSmsTotal('call');
            setBillFunc.callandSmsTotal('call');

            assert.equal(20, setBillFunc.setGrandTotal().grandSetTot);
        });
    });

});