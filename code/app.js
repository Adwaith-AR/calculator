const addBtn = document.getElementById("addBtn");
const subtractingBtn = document.getElementById("subtractingBtn");
const productBtn = document.getElementById("productBtn");
const divideBtn = document.getElementById("divideBtn");
const Btn1 = document.getElementById("Btn1");
const clearBtn = document.getElementById("clearBtn");
const Btn2 = document.getElementById("Btn2");
const Btn3 = document.getElementById("Btn3");
const Btn4 = document.getElementById("Btn4");
const Btn5 = document.getElementById("Btn5");
const Btn6 = document.getElementById("Btn6");
const Btn7 = document.getElementById("Btn7");
const Btn8 = document.getElementById("Btn8");
const Btn9 = document.getElementById("Btn9");
const Btn0 = document.getElementById("Btn0");
const decimalBtn = document.getElementById("decimalBtn");
const ansBtn = document.getElementById("ansBtn");
const Display = document.getElementById("inputContainer");


let displayString , Ans ;

addBtn.onclick = function(){
          displayString = String(Display.value) + "+";
          Display.value = displayString;
          
}
subtractingBtn.onclick = function () {
          displayString = String(Display.value) + "-";
          Display.value = displayString;

}
productBtn.onclick = function () {
          displayString = String(Display.value) + "*";
          Display.value = displayString;

}
divideBtn.onclick = function () {
          displayString = String(Display.value) + "/";
          Display.value = displayString;

}
clearBtn.onclick = function () {
          displayString = "";
          Display.value = displayString;

}
Btn0.onclick = function () {
          displayString = String(Display.value) + "0";
          Display.value = displayString;

}

Btn1.onclick = function () {
          displayString = String(Display.value) + "1";
          Display.value = displayString;

}
Btn2.onclick = function () {
          displayString = String(Display.value) + "2";
          Display.value = displayString;

}
Btn3.onclick = function () {
          displayString = String(Display.value) + "3";
          Display.value = displayString;

}
Btn4.onclick = function () {
          displayString = String(Display.value) + "4";
          Display.value = displayString;

}
Btn5.onclick = function () {
          displayString = String(Display.value) + "5";
          Display.value = displayString;

}
Btn6.onclick = function () {
          displayString = String(Display.value) + "6";
          Display.value = displayString;

}
Btn7.onclick = function () {
          displayString = String(Display.value) + "7";
          Display.value = displayString;

}
Btn8.onclick = function () {
          displayString = String(Display.value) + "8";
          Display.value = displayString;

}
Btn9.onclick = function () {
          displayString = String(Display.value) + "9";
          Display.value = displayString;

}
decimalBtn.onclick = function () {
          displayString = String(Display.value) + ".";
          Display.value = displayString;

}
ansBtn.onclick = function () {
          try {
                    
                    Display.value = eval(Display.value);
          } catch (error) {
                    
                    Display.value = "Error";
          }
}



