function theSettingsBillFunction() {
    
    //Setting Costs and Values Variables
    var theCallCost = 0;
    var theSmsCost = 0;
    var theWarningVal = 0;
    var theCriticalVal = 0;
    
    //Calculating Totals Variables
    var theSetTotal = 0;
    var theCallTotal = 0;
    var theSmsTotal = 0;

    //Setting Costs and Values
    function setCallCost(callCostInput) {
        theCallCost = callCostInput;
    }

    function getCallCost() {
        return theCallCost;
    }

    function setSmsCost(smsCostInput) {
        theSmsCost = smsCostInput;
        
    }

    function getSmsCost() {
        return theSmsCost;
    }

    function setWarningLevel(warningLevel) {
        theWarningVal = warningLevel;
    }

    function getWarningLevel() {
        return theWarningVal;
    }

    function setCriticalLevel(criticalLevel) {
        theCriticalVal = criticalLevel
    }

    function getCriticalLevel() {
        return theCriticalVal;
    }

    
    //Calculating Totals
    function callandSmsTotal(textInput) {
        
        if (textInput === 'call') {

            if ((setGrandTotal().grandSetTot + parseFloat(theCallCost)) <= theCriticalVal ) {

                theCallTotal += parseFloat(theCallCost);
                theSetTotal += parseFloat(theCallCost);
            
            }

        } else if (textInput === 'sms') {
            if ((setGrandTotal().grandSetTot + parseFloat(theSmsCost)) <= theCriticalVal ) {

                theSmsTotal += parseFloat(theSmsCost);
                theSetTotal += parseFloat(theSmsCost);
            }

        }
        
    
    }
    

    function setGrandTotal() {
        
        theSetTotal = theCallTotal + theSmsTotal;
        // parseFloat(theSetTotal.toFixed(2));

        return {
            smsSetTot : parseFloat(theSmsTotal.toFixed(2)),
            callSetTot : parseFloat(theCallTotal.toFixed(2)),
            grandSetTot : parseFloat(theSetTotal.toFixed(2))
        }
        
    }

    function isCriticalOrMore() {
        return setGrandTotal().grandSetTot >= theCriticalVal;
    }

    function settingsLevels() {
        
        if (setGrandTotal().grandSetTot >= theWarningVal && setGrandTotal().grandSetTot < theCriticalVal) {
            return 'warning';
        }

        if (isCriticalOrMore) {
            return 'critical';
        }
    }

    function changingLevels() {
        
        if (settingss.setGrandTotal().grandSetTot < settingss.getWarningLevel() && settingss.setGrandTotal().grandSetTot < settingss.getCriticalLevel()) {
            document.querySelector(".totalSettingss").classList.remove("warning");
            document.querySelector(".totalSettingss").classList.remove("danger");
        } else if (settingss.settingsLevels()) {
            if (settingss.setGrandTotal().grandSetTot >= settingss.getWarningLevel() && settingss.setGrandTotal().grandSetTot < settingss.getCriticalLevel()) {
                document.querySelector(".totalSettingss").classList.remove("danger");
                document.querySelector(".totalSettingss").classList.add("warning");
            } else if (settingss.isCriticalOrMore()) {
                document.querySelector(".totalSettingss").classList.remove("warning");
                document.querySelector(".totalSettingss").classList.add("danger");
            }
        } 
    }
    


    return { callandSmsTotal,
             setGrandTotal,
             setCallCost,
             getCallCost,
             setSmsCost,
             getSmsCost,
             setWarningLevel,
             getWarningLevel,
             setCriticalLevel,
             getCriticalLevel,
             settingsLevels,
             isCriticalOrMore,
             changingLevels
            
    }
    
}
