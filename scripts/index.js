/* Math Functions */
function addition(x,y) {
    var z = x + y
    console.log(z)
}

function subtraction(x,y) {
    var z = x - y
    console.log(z)
}

function multiplication(x,y) {
    var z = x * y
    console.log(z)
}

function division(x,y) {
    var z = x / y
    console.log(z)
}

var sum = addition(10,12)
var dif = subtraction(10,8) 
var prod = multiplication(6,3)
var div = division(100,5)

if (sum>dif) {
    console.log("the sum is greater than the difference")
}
else {
    console.log("the difference is greater than the sum")
}
