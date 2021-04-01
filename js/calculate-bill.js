var calculateBtnn = document.querySelector(".calculateBtn")//get a reference to the calculate button
var billTotalElement = document.querySelector(".billTotal");//get a reference to the billTotal element
var billStr = document.querySelector(".billString");//get a reference to the billString

//create the function that will be called when the calculate button is pressed
//  * this function should read the string value entered - split it on a comma.
//  * loop over all the entries in the the resulting list
//  * check if it is a call or an sms and add the right amount to the overall total
//  * once done looping over all the entries - display the total onto the screen in the billTotal element

var example = calculateBill();

function totalPhoneBill(stringInt) {
  stringInt = billStr.value;

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
     
  billTotalElement.innerHTML = theTotal.toFixed(2);
  
  if (theTotal < 20) {
      document.querySelector(".total").classList.remove("warning");
  } else if (theTotal > 20 && theTotal < 30) {
      document.querySelector(".total").classList.remove("danger");
      document.querySelector(".total").classList.add("warning");
  } else if (theTotal > 30) {
      document.querySelector(".total").classList.remove("warning");
      document.querySelector(".total").classList.add("danger");
  }
}   

//link the function to a click event on the calculate button
calculateBtnn.addEventListener('click', totalPhoneBill);
