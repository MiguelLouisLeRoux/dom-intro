var calculateBtnn = document.querySelector(".calculateBtn")//get a reference to the calculate button
var billTotalElement = document.querySelector(".billTotal");//get a reference to the billTotal element
var billStr = document.querySelector(".billString");//get a reference to the billString

//create the function that will be called when the calculate button is pressed
//  * this function should read the string value entered - split it on a comma.
//  * loop over all the entries in the the resulting list
//  * check if it is a call or an sms and add the right amount to the overall total
//  * once done looping over all the entries - display the total onto the screen in the billTotal element


function totalPhoneBill(stringInt) {
    stringInt = billStr.value;
    var calcFactFunc = calculateBill(stringInt);
    calcFactFunc;

    billTotalElement.innerHTML = calcFactFunc.toFixed(2);
  
  if (calcFactFunc < 20) {
      document.querySelector(".total").classList.remove("warning");
      document.querySelector(".total").classList.remove("danger");
  } else if (calcFactFunc > 20 && calcFactFunc < 30) {
      document.querySelector(".total").classList.remove("danger");
      document.querySelector(".total").classList.add("warning");
  } else if (calcFactFunc > 30) {
      document.querySelector(".total").classList.remove("warning");
      document.querySelector(".total").classList.add("danger");
  }
}   

//link the function to a click event on the calculate button
calculateBtnn.addEventListener('click', totalPhoneBill);
