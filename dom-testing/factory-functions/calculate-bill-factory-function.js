function theName(){
    // name is only visible inside the function
    var name = "Jo Bloggs";
    console.log('The name is: ' + name);
    return {
        uppercaseName : function(){
            return name.toUpperCase();
        }
    }
};

console.log(theName().name);
var nameObj = theName();
console.log(nameObj.uppercaseName());
