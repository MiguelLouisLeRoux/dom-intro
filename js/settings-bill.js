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
// var switch1 = false;

// var warnSetting = 0;
// var critSetting = 0;

// var callTotall = 0;
// var smsTotall = 0;
// var gTotall = 0;


// var callSetNo = 0;
// var smsSetNo = 0;

//Setting and getting values from factory function
var settingss = theSettingsBillFunction();
// var settingCall = settingss.setCallCost();
// var gettingCall = settingss.getCallCost();
// var settingSms = settingss.setSmsCost();
// var gettingSms = settingss.getSmsCost();
// var settingWarning = settingss.setWarningLevel();
// var gettingWarning = settingss.getWarningLevel();
// var settingCritical = settingss.setCriticalLevel();
// var gettingCritical = settingss.getCriticalLevel();

//Calculating values from factory function
// var calculatingTot = settingss.callandSmsTotal(radio.value);
// var calculatingGrand = settingss.setGrandTotal();

//Warning and Critical Levels
// var crit = settingss.isCriticalOrMore();
// var warnOrCrit = settingss.settingsLevels();

//Setting Values Function
function settingsFunc() {
    callSetNo = callCostSet.value;
    smsSetNo = smsCostSet.value;
    warnSetting = warnSet.value;
    critSetting = critSet.value;

    settingss.setCallCost(callCostSet.value);
    settingss.getCallCost();
    settingss.setSmsCost(smsCostSet.value);
    settingss.getSmsCost();
    settingss.setWarningLevel(warnSet.value);
    settingss.getWarningLevel();
    settingss.setCriticalLevel(critSet.value);
    settingss.getCriticalLevel();
    console.log(settingss.getCallCost());


    if (gTotall < warnSetting) {
        document.querySelector(".totalSettingss").classList.remove("warning");
        document.querySelector(".totalSettingss").classList.remove("danger");
    }
    if (gTotall >= warnSetting && gTotall < critSetting) {
        document.querySelector(".totalSettingss").classList.remove("danger");
        document.querySelector(".totalSettingss").classList.add("warning");
    } else if (gTotall >= critSetting) {
        document.querySelector(".totalSettingss").classList.remove("warning");
        document.querySelector(".totalSettingss").classList.add("danger");


    }

}

upSetBtn.addEventListener('click', settingsFunc);




//Calculating Values Function
function settingsBill() {
    var radio = document.querySelector("input[name='billItemTypeWithSettings']:checked");

    if (radio) {

        // if (radio.value === 'call') {
        //     if ((gTotall + parseFloat(callSetNo)) <= critSetting ) {

        //       callTotall += parseFloat(callSetNo);
        //       gTotall += parseFloat(callSetNo)
            
        //     }

        // } else if (radio.value === 'sms') {
        //     if ((gTotall + parseFloat(smsSetNo)) <= critSetting ) {
        //     smsTotall += parseFloat(smsSetNo);
        //     gTotall += parseFloat(smsSetNo)
        //     }

        // }

        settingss.callandSmsTotal(radio.value);

    }

    

        if (gTotall < warnSetting) {
            document.querySelector(".totalSettingss").classList.remove("warning");
            document.querySelector(".totalSettingss").classList.remove("danger");
        }
        if (gTotall >= warnSetting && gTotall < critSetting) {
            document.querySelector(".totalSettingss").classList.remove("danger");
            document.querySelector(".totalSettingss").classList.add("warning");
        } else if (gTotall >= critSetting) {
            document.querySelector(".totalSettingss").classList.remove("warning");
            document.querySelector(".totalSettingss").classList.add("danger");


        }

        callTot3.innerHTML = callTotall.toFixed(2);
        smsTot3.innerHTML = smsTotall.toFixed(2);
        gTotal3.innerHTML = gTotall.toFixed(2);
    


}


setAdd.addEventListener('click', settingsBill);


