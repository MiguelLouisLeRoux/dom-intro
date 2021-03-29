function calculateBill(stringInt) {
   
    
    var theTotal = 0;

    var splitString = stringInt.split(",");
    
    for (var i = 0; i < splitString.length; i++) {
        var itt1 = splitString[i];
        var trim1 = itt1.trim();
        
        if (trim1 === "call") {
            theTotal += 2.75;
        } else if (trim1 === "sms") {
            theTotal += 0.75;
        }
        
    }
    
    theTotal.toFixed(2);

    return theTotal;
        
    
}
