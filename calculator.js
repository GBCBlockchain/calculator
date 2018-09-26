// Code for providing functionality for our html calculator

window.addEventListener("load", () => {
	calculator();
	// alert("Page is loaded")
})

function calculator() {
  function calculateIt(first, op, second) {
    switch (op) {
      case "add":
        return first + second
      case "subtract":
        return first - second
      case "multi":
        return first * second
      case "divide":
        return first / second
    }
  }

	// Listen for key presses

	let keys = document.querySelector(".calculator")
  let operator;
  let opAction;
  let firstNum;
  let display = document.querySelector(".display").firstChild
  
	keys.addEventListener("click", (event) => {
    let key = event.target;
    let action = key.dataset.action;
		if (event.target.matches("button")) {
      // action = "add", "subtract" etc - store in variable
      if (action === "add" ||
      action === "subtract" || 
      action === "divide" || 
      action === "multi") {
        opAction = action
        operator = true
        console.log('operator detected', opAction)
        
        if (firstNum === undefined && display.textContent !== "") {
          firstNum = parseFloat(display.textContent) 
          display.textContent = ""         
        }
      } else if (action === "=") {
        
        if (firstNum !== undefined && opAction !== undefined) {
          let secondNum = parseFloat(display.textContent)
          let result  = calculateIt(firstNum, opAction, secondNum)
          console.log("Result", result)
          display.textContent = result
        }

        // Perform a calculation - calculation function - if there are numbers!
      } else {
        // Must be a number - so we probably need to display it
        console.log(display.textContent)
        if (!display.textContent.includes(".")){
          display.textContent += action
        } else {
          if (action !== ".") {
            display.textContent += action
          }
        }
      }
		}
	})

	// If number key - add to the display
	// If operator key - save displayed number zero display - save operator
	// If operator key - no number - reset
	// if = key - calculate 




}
