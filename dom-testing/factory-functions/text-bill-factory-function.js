function textBillFactory() {
    

    var theCalcTotal = 0;
    var theCallTotal = 0;
    var theSmsTotal = 0;
    
    function callandSmsTotal(textInput) {
        var trim2 = textInput.trim();

        if (trim2 === "call") {

            theCallTotal += 2.75;
            theCallTotal.toFixed(2);
            

        } else if (trim2 === "sms") {

            theSmsTotal += 0.75;
            theSmsTotal.toFixed(2);
        }
    }

    function textGrandTotal() {
        theCalcTotal = theCallTotal + theSmsTotal;
        theCalcTotal.toFixed(2);

        return {
            smsTextTot : theSmsTotal,
            callTextTot : theCallTotal,
            grandTextTot : theCalcTotal
        }
    }
    
    return { callandSmsTotal,
             textGrandTotal
    }
    
}





