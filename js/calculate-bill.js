var calculateBtnn = document.querySelector(".calculateBtn")//get a reference to the calculate button
var billTotalElement = document.querySelector(".billTotal");//get a reference to the billTotal element
var billStr = document.querySelector(".billString");//get a reference to the billString
var stringInt = billStr.value;




// function val() {
//     var n = document.querySelector(".billString").value;
//     alert(n);
// }

// calculateBtnn.addEventListener('click', val);

//create the function that will be called when the calculate button is pressed
//  * this function should read the string value entered - split it on a comma.
//  * loop over all the entries in the the resulting list
//  * check if it is a call or an sms and add the right amount to the overall total
//  * once done looping over all the entries - display the total onto the screen in the billTotal element


function totalPhoneBill() {
    var billStringVal = billStr.value;
    var arr = billStringVal.split(",");
    var callArr = [];
    var smsArr = [];
    
    for (var i = 0; i < arr.length; i++) {
      var newArr = arr[i];
      var split = newArr.trim();
      if (split.startsWith("call")) {
        callArr.push(split);
      } else if (split.startsWith("sms")) {
        smsArr.push(split);
      }
      
    }
    var newCallArr = callArr.length;
    var newSmsArr = smsArr.length;
    
    var total = newCallArr * 2.75 + newSmsArr * 0.75;
    var grandTotal = total.toFixed(2);
    
    
    billTotalElement.innerHTML = grandTotal;

    
    
    if (grandTotal <= 20) {
      

        document.querySelector(".total").classList.remove("danger");
        document.querySelector(".total").classList.remove("warning");

     } else if (grandTotal > 20 && grandTotal < 30) {
    
        
        document.querySelector(".total").classList.remove("danger");
        document.querySelector(".total").classList.add("warning");

     } else if (grandTotal > 30) {
    
        
        document.querySelector(".total").classList.remove("warning");
        document.querySelector(".total").classList.add("danger");
     }
}   






//link the function to a click event on the calculate button
calculateBtnn.addEventListener('click', totalPhoneBill);
