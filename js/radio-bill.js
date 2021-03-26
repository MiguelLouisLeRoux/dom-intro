// var radio = document.querySelector("input[name='billItemType']");// get a reference to the sms or call radio buttons
var addButton2 = document.querySelector(".radioBillAddBtn");//get a reference to the add button
var callTotal2 = document.querySelector(".callTotalTwo");
var smsTotal2 = document.querySelector(".smsTotalTwo");
var gTotal2 = document.querySelector(".totalTwo");
//create a variable that will keep track of the total bill


//add an event listener for when the add button is pressed

//in the event listener get the value from the billItemTypeRadio radio buttons
// * add the appropriate value to the running total
// * add nothing for invalid values that is not 'call' or 'sms'.
// * display the latest total on the screen

var callArrRadio = [];
var smsArrRadio = [];

function radioBill() {
    var radio = document.querySelector("input[name='billItemType']:checked");

    if (radio) {
        var radVal = radio.value;
        
        if (radio.value === 'call') {

            callArrRadio.push(radio.value);
        } else if (radio.value === 'sms') {
    
            smsArrRadio.push(radio.value);
        }
 
    }

    var newCallArr = callArrRadio.length;
    var newSmsArr = smsArrRadio.length;

    //call total calculation
    var callTotal = newCallArr * 2.75;
    callTotal2.innerHTML = callTotal.toFixed(2);

    //sms total calculation
    var smsTotal = newSmsArr * 0.75;
    smsTotal2.innerHTML = smsTotal.toFixed(2);
    
    var total = newCallArr * 2.75 + newSmsArr * 0.75;
    var gTotal = total.toFixed(2);

    // return grandTotal;
    gTotal2.innerHTML = gTotal;
    
    if (gTotal >= 30 && gTotal < 50) {
        document.querySelector(".orange").classList.add("warning"); 
    } else if (gTotal >= 50) {
        document.querySelector(".orange").classList.add("danger");
    }
}

addButton2.addEventListener('click', radioBill);