var input=0;//stores the value on the display
var answer=0;//stores the previous value to be calculated on with the display value
var decimalpoints=0; //-1 means # buttons are locked
var lastop =0; //0-equals 1-plus 2-minus 3-multiple 4-divide

//clears all values and resets the display
function resetvalues(){input=0;answer=0;decimalpoints=0;lastop=0; document.getElementById("display").innerHTML="ready";}

//sets the system for a new input
function newinput()
{decimalpoints=0;input=0;}

//adds a decimal place to the input if applicable
function btndecimal(){
    console.log(".");
  //-1 signifies the input is a result and a positive number signifies a decimal already exists in the input
  if (decimalpoints==0){
  document.getElementById("display").innerHTML=input+".";
  decimalpoints=1;//signify where the decimal place now is
  }
}

//update the answer variable, resets lastop, disallow numerical changes to result, set the input to the result
function btnequals(){
    console.log("=");
  if (lastop==0) {answer=input;}
  if (lastop==1) {answer+=input;}
  if (lastop==2) {answer-=input}
  if (lastop==3) {answer*=input}
  if (lastop==4) {answer/=input}
  lastop=0;//makes sure repeated equal button presses don't keep calculating
  decimalpoints=-1;//disallow digit changes
  input=answer;//use this result in subsequent operations
  document.getElementById("display").innerHTML=answer;
}

//calculates any previous operations and displays resusult with new operator
function btnplus(){
    console.log("+");
  btnequals();//calculate previous operation
  document.getElementById("display").innerHTML=input+"+";
  newinput();
  lastop=1;//next time a calc is done, this will signify how answer will operate with input
}
function btnminus(){
    console.log("-");
  btnequals();
  document.getElementById("display").innerHTML=input+"-";
  newinput();
  lastop=2;
}
function btnmultiply(){
    console.log("*");
  btnequals();
  document.getElementById("display").innerHTML=input+"x";
  newinput();
  lastop=3;
}
function btndivide(){
    console.log("÷");
  btnequals();
  document.getElementById("display").innerHTML=input+"÷";
  newinput();
  lastop=4;
}
//add the digit to the display as applicable
function putdigit(digit){
    console.log(digit);
    if (decimalpoints>=0){//don't do anything if decimalpoints indicates input is a result
      if (decimalpoints==0){//if no decimals have been used on input yet
        input = input*10+digit;//scale the existing input by ten and add the digit
      }
      else{
        input+=digit/math.pow(10,decimalpoints);//add on the decimal
         decimalpoints++;
      }
      //update display -- with a stupid joke
      if (input==80085) document.getElementById("display").innerHTML="BOOBS";
      else document.getElementById("display").innerHTML=input;
  }
}
//reset the calculator
function btnAC(){
  resetvalues();
}