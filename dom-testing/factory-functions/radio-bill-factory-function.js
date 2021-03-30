function radioButtonBillFunction() {
    

    var theRadTotal = 0;
    var theCallTotal = 0;
    var theSmsTotal = 0;
    
    function callandSmsTotal(textInput) {

        if (textInput === "call") {

            theCallTotal += 2.75;
            theCallTotal.toFixed(2);
            

        } else if (textInput === "sms") {

            theSmsTotal += 0.75;
            theSmsTotal.toFixed(2);
        }
    }

    function radGrandTotal() {
        theRadTotal = theCallTotal + theSmsTotal;
        theRadTotal.toFixed(2);

        return {
            smsRadTot : theSmsTotal,
            callRadTot : theCallTotal,
            grandRadTot : theRadTotal
        }
    }
    
    return { callandSmsTotal,
             radGrandTotal
    }
    
}