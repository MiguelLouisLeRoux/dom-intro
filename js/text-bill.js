var textIn = document.querySelector(".billTypeText"); // get a reference to the textbox where the bill type is to be entered
var addBtn = document.querySelector(".addToBillBtn"); //get a reference to the add button
var callTot = document.querySelector(".callTotalOne");
var smsTot = document.querySelector(".smsTotalOne");
var grandTotal = document.querySelector(".totalOne");

//create a variable that will keep track of the total bill
//add an event listener for when the add button is pressed
//in the event listener check if the value in the bill type textbox is 'sms' or 'call'
// * add the appropriate value to the running total
// * add nothing for invalid values that is not 'call' or 'sms'.
// * display the latest total on the screen
var callArr = [];
var smsArr = [];

function PhoneBill() {
    var input = textIn.value;
    var trimIn = input.trim();
    // var arr = billStringVal.split(",");
    // var callArr = [];
    // var smsArr = [];
    
    // for (var i = 0; i < arr.length; i++) {
    //   var newArr = arr[i];
    //   var split = newArr.trim();
    //   if (split.startsWith("call")) {
    //     callArr.push(split);
    //   } else if (split.startsWith("sms")) {
    //     smsArr.push(split);
    //   }
      
    // }

    if (trimIn === "call") {
        callArr.push(trimIn);
    } else if (trimIn === "sms") {
        smsArr.push(trimIn);
    }

    var newCallArr = callArr.length;
    var newSmsArr = smsArr.length;

    //call total calculation
    var callTotal = newCallArr * 2.75;
    callTot.innerHTML = callTotal;

    //sms total calculation
    var smsTotal = newSmsArr * 0.75;
    smsTot.innerHTML = smsTotal
    
    var total = newCallArr * 2.75 + newSmsArr * 0.75;
    var gTotal = total.toFixed(2);
    // return grandTotal;
    
    grandTotal.innerHTML = gTotal;
    
    if (gTotal < 30) {
        document.querySelector(".red").style.color = "black";

     } else if (gTotal >= 30 && gTotal < 50) {
        document.querySelector(".red").style.color = "orange"; 
     } else if (gTotal >= 50) {
        document.querySelector(".red").style.color = "crimson";
     }
}

addBtn.addEventListener('click', PhoneBill);