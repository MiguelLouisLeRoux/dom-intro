// get a reference to the sms or call radio buttons

var callTot3 = document.querySelector(".callTotalSettings"); // get refences to all the settings fields
var smsTot3 = document.querySelector(".smsTotalSettings");
var gTotal3 = document.querySelector(".totalSettings");
var setAdd = document.querySelector(".button-primaryy"); //get a reference to the add button

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


var callSetNo = 0;
var smsSetNo = 0;

function settingsFunc() {
    callSetNo = callCostSet.value;
    smsSetNo = smsCostSet.value;
    warnSetting = warnSet.value;
    critSetting = critSet.value;

    function settingsBill() {
        var radio = document.querySelector("input[name='billItemTypeWithSettings']:checked");
        
        if (radio) {
            
            if (radio.value === 'call') {
    
                callArrSet.push(radio.value);
            } else if (radio.value === 'sms') {
        
                smsArrSet.push(radio.value);
            }
     
        }
    
        var newCallArr = callArrSet.length;
        var newSmsArr = smsArrSet.length;
    
        //call total calculation
        var callTotal = newCallArr * callSetNo;
        callTot3.innerHTML = callTotal;
    
        //sms total calculation
        var smsTotal = newSmsArr * smsSetNo;
        smsTot3.innerHTML = smsTotal
        
        var total = newCallArr * callSetNo + newSmsArr * smsSetNo;
        var gTotal = total.toFixed(2);
    
        // return grandTotal;
        gTotal3.innerHTML = gTotal;
        
        if (gTotal < warnSetting) {
            document.querySelector(".totalSettingss").style.color = "black";
    
         } 
        if (gTotal >= warnSetting && gTotal < critSetting) {
            document.querySelector(".totalSettingss").style.color = "orange"; 
         } 
        if (gTotal >= critSetting) {
            document.querySelector(".totalSettingss").style.color = "crimson";
            newGTotal = gTotal;
            
         }


        
    }
    
    setAdd.addEventListener('click', settingsBill);
    
}

upSetBtn.addEventListener('click', settingsFunc);

var warnSetting = 0;
var critSetting = 0;

var callArrSet = [];
var smsArrSet = [];

// function settingsBill() {
//     var radio = document.querySelector("input[name='billItemTypeWithSettings']:checked");
    
//     if (radio) {
        
//         if (radio.value === 'call') {

//             callArrSet.push(radio.value);
//         } else if (radio.value === 'sms') {
    
//             smsArrSet.push(radio.value);
//         }
 
//     }

//     var newCallArr = callArrSet.length;
//     var newSmsArr = smsArrSet.length;

//     //call total calculation
//     var callTotal = newCallArr * callSetNo;
//     callTot3.innerHTML = callTotal;

//     //sms total calculation
//     var smsTotal = newSmsArr * smsSetNo;
//     smsTot3.innerHTML = smsTotal
    
//     var total = newCallArr * callSetNo + newSmsArr * smsSetNo;
//     var gTotal = total.toFixed(2);

//     // return grandTotal;
//     gTotal3.innerHTML = gTotal;
    
//     if (gTotal < warnSetting) {
//         document.querySelector(".totalSettingss").style.color = "black";

//      } else if (gTotal >= warnSetting && gTotal < critSetting) {
//         document.querySelector(".totalSettingss").style.color = "orange"; 
//      } else if (gTotal >= critSetting) {
//         document.querySelector(".totalSettingss").style.color = "crimson";
        
//      }
// }

// setAdd.addEventListener('click', settingsBill);
