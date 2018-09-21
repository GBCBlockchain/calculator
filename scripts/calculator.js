function add(x, y) {
    var z = x + y
    return z
}

function sub(x, y) {
    var z = x - y
    return z
}

function mul(x, y) {
    var z = x * y
    return z
}

function div(x, y) {
    var z = x / y
    return z
}

var sum = add(11, 22)
console.log(sum)

var diff = sub(99, 11)
console.log(diff)

var mul = mul(5, 5)


if (sum > diff) {
    console.log(true)
} else if (sum == diff) {
    console.log("correct")
} else if (sum < mul) {
    console.log(false)
}
else {
    console.log("confused")
}

console.log(sub(44, 2))
console.log(mul(5, 6))

const div2 = div(40, 5)
console.log(div2)

