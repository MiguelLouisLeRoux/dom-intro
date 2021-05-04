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

//Referencing Text Bill Factory Function
document.addEventListener('DOMContentLoaded', function(){
    var templateSource = document.querySelector(".userTemplate").innerHTML;
    var userTemplate = Handlebars.compile(templateSource);

    var textFactFunc = textBillFactory();

    function PhoneBill() {

        textFactFunc.callandSmsTotal(textIn.value);

        var callTotalData = userTemplate({
            call : textFactFunc.textGrandTotal().callTextTot.toFixed(2),
        });

        var smsTotalData = userTemplate({
            sms : textFactFunc.textGrandTotal().smsTextTot.toFixed(2),
        });

        var totalData = userTemplate({
            count : textFactFunc.textGrandTotal().grandTextTot.toFixed(2),
        });

        callTot.innerHTML = callTotalData;
        smsTot.innerHTML = smsTotalData;
        grandTotal.innerHTML = totalData;

        
        if (textFactFunc.textGrandTotal().grandTextTot >= 30 && textFactFunc.textGrandTotal().grandTextTot < 50) {
            document.querySelector(".red").classList.add("warning"); 
        } else if (textFactFunc.textGrandTotal().grandTextTot >= 50) {
            document.querySelector(".red").classList.remove("warning");
            document.querySelector(".red").classList.add("danger");
        }

        
    }

    addBtn.addEventListener('click', PhoneBill);
})