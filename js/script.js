var percentButton = document.getElementById("percent");
percentButton.disabled = true;

var display = document.getElementById("screen");
display.value = "0";
display.disabled = true;


/* Reset screen font-size to original size  */
function resetFontSize() {
    display.style.fontSize = "53px";
}

/* Add numbers and operations to screen */
function addToScreen(button) {
    
    var memoryValue = display.value;
    var buttonValue = button.value;
    
    if (buttonValue === " ÷ ") { 
        buttonValue = "/";
    } else if(buttonValue == " x ") {
        buttonValue = "*";
    }
    
    if(memoryValue === "0") {memoryValue = ""}
    
    memoryValue += buttonValue.trim();
    if(memoryValue.length > 9) {display.style.fontSize = "35px"}
    display.value = memoryValue.slice(0,14);
};


/* Clear Screen pressing "AC" button  */
function clearScreen() {
    resetFontSize();
    display.value = "0";
};


/* Calculate result pressing "=" button  */
function calculate() {
    
    var memoryValue = "";
    var displayValue = (display.value).replace(/ /g,'');
    
    resetFontSize();
    
    try {
        memoryValue = eval(displayValue).toString();
        if(memoryValue.length > 8) {
            display.style.fontSize = "35px";
            memoryValue = parseFloat(memoryValue).toExponential();
            display.value = memoryValue.toString().slice(0,13)
        } else {
            display.value = memoryValue;
        }
        
    }
    catch(err) {
        display.value = display.value = "Error";
    }
};


/* Switch displayed number from positive to negative 
   pressing "+/-" button  */
function plusMinus() {
    display.value = -display.value
}


/* Allow usage of keboard for entering numbers and 
   clearing the screen */
function listenToKeys() {
    document.addEventListener("keydown", function(){

        // event.keyCode is used for IE8 and earlier
        var x = event.which || event.keyCode; 

        switch(x) {
                case 48:
                    addToScreen({value: "0"})
                    break;
                case 49:
                    addToScreen({value: "1"})
                    break;
                case 50:
                    addToScreen({value: "2"})
                    break;
                case 51:
                    addToScreen({value: "3"})
                    break;
                case 52:
                    addToScreen({value: "4"})
                    break;
                case 53:
                    addToScreen({value: "5"})
                    break;
                case 54:
                    addToScreen({value: "6"})
                    break;
                case 55:
                    addToScreen({value: "7"})
                    break;
                case 56:
                    addToScreen({value: "8"})
                    break;
                case 57:
                    addToScreen({value: "9"})
                    break;
                case 67:
                    clearScreen();
                    break;
        }
    })
}

window.onload = function() {
  listenToKeys();
};
