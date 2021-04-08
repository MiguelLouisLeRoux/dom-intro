// get a reference to the sms or call radio buttons

var callTot3 = document.querySelector(".callTotalSettings"); // get refences to all the settings fields
var smsTot3 = document.querySelector(".smsTotalSettings");
var gTotal3 = document.querySelector(".totalSettings");
var setAdd = document.querySelector(".button-primaryy"); //get a reference to the add button
var totSetCol = document.querySelector(".totalSettingss").value;

var callCostSet = document.querySelector(".callCostSetting");
var smsCostSet = document.querySelector(".smsCostSetting");
var warnSet = document.querySelector(".warningLevelSetting");
var critSet = document.querySelector(".criticalLevelSetting");
var upSetBtn = document.querySelector(".updateSettings");


//get a reference to the 'Update settings' button

// create a variables that will keep track of all the settings

// create a variables that will keep track of all three totals.

//add an event listener for when the 'Update settings' button is pressed

//add an event listener for when the add button is pressed

//in the event listener get the value from the billItemTypeRadio radio buttons
// * add the appropriate value to the call / sms total
// * add the appropriate value to the overall total
// * add nothing for invalid values that is not 'call' or 'sms'.
// * display the latest total on the screen.
// * check the value thresholds and display the total value in the right color.

//Referencing Factory function
var settingss = theSettingsBillFunction();

//Setting Values Function
function settingsFunc() {

    settingss.setCallCost(callCostSet.value);
    settingss.getCallCost();
    settingss.setSmsCost(smsCostSet.value);
    settingss.getSmsCost();
    settingss.setWarningLevel(warnSet.value);
    settingss.getWarningLevel();
    settingss.setCriticalLevel(critSet.value);
    settingss.getCriticalLevel();

    settingss.changingLevels();
    
}

upSetBtn.addEventListener('click', settingsFunc);


//Calculating Values Function
function settingsBill() {
    var radio = document.querySelector("input[name='billItemTypeWithSettings']:checked");

    if (radio) {
        settingss.callandSmsTotal(radio.value);
        
    }

    settingss.changingLevels();
    
    callTot3.innerHTML = settingss.setGrandTotal().callSetTot.toFixed(2);
    smsTot3.innerHTML = settingss.setGrandTotal().smsSetTot.toFixed(2);
    gTotal3.innerHTML = settingss.setGrandTotal().grandSetTot.toFixed(2);

}

setAdd.addEventListener('click', settingsBill);


