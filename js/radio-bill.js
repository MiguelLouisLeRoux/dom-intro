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

document.addEventListener('DOMContentLoaded', function(){

    var templateSource = document.querySelector(".userTemplate").innerHTML;
    var userTemplate = Handlebars.compile(templateSource);

    var radioFactFunc = radioButtonBillFunction();

    function radioBill() {
        var radio = document.querySelector("input[name='billItemType']:checked");

        if (radio) {
            radioFactFunc.callandSmsTotal(radio.value);
        }

        var callTotalData = userTemplate({
            call : radioFactFunc.radGrandTotal().callRadTot.toFixed(2),
        });

        var smsTotalData = userTemplate({
            sms : radioFactFunc.radGrandTotal().smsRadTot.toFixed(2),
        });

        var totalData = userTemplate({
            count : radioFactFunc.radGrandTotal().grandRadTot.toFixed(2),
        });
        
        callTotal2.innerHTML = callTotalData;
        smsTotal2.innerHTML = smsTotalData;
        gTotal2.innerHTML = totalData;

        if (radioFactFunc.radGrandTotal().grandRadTot >= 30 && radioFactFunc.radGrandTotal().grandRadTot < 50) {
            document.querySelector(".orange").classList.add("warning"); 
        } else if (radioFactFunc.radGrandTotal().grandRadTot >= 50) {
            document.querySelector(".orange").classList.add("danger");
        }
    }

    addButton2.addEventListener('click', radioBill);

})