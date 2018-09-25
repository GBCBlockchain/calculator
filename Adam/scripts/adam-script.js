function add (num1, num2) {
    var z = num1 + num2;
    return z;
}

function subtract (num1, num2) {
    var z = num1 - num2;
    return z;
}

function multiply (num1, num2) {
    var z = num1 * num2;
    return z;
}

function divide (num1, num2) {
    var z = num1 / num2;
    return z;
}

console.log(add(1, 2));
console.log(subtract(2,1));
console.log(multiply(2,2));
console.log(divide(4,2));

var x = 100;
var y = 150;

var sum = add(x,y);
var dif = subtract(y,x);
var prod = multiply(x,y);
var quo = divide(y,x);

if (sum == 250) {
    console.log("Correct. Sum is 250");
} else {
    console.log("Sum function is not working.");
}

if (dif == 50) {
    console.log("Correct. Difference is 50.");
} else {
    console.log("Difference function is not working.");
}

if (prod == 15000) {
    console.log("Correct. Product is 15,000.");
} else {
    console.log("Product function is not working.");
}

if (quo == 1.5) {
    console.log("Correct. Quotient is 1.5.");
} else {
    console.log("Quotient function is not working.");
}


var x = Math.random();
var y = Math.random();

var sum = add(x,y);
var dif = subtract(y,x);
var prod = multiply(x,y);
var quo = divide(y,x);

if (sum > dif) {
    console.log("Sum is greater then Dif");
} else if (sum < dif) {
    console.log("Sum is less than Dif");
} else {
    console.log("Sum is equal to Dif");
}

if (prod > quo) {
    console.log("Product is greater then Quotient");
} else if (prod < quo) {
    console.log("Product is less than Quotient");
} else {
    console.log("Product is equal to Quotient");
}

