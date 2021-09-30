function add(a, b) {
    return (a + b);
}
(1, 2);

function subtract(a, b) {
    return (a - b);
}
(1, 2);

function multiply(a, b) {
    return (a * b);
}
(1, 2);

function divide(a, b) {
    return (a / b);
}
(1, 2);


let n = 1;
function increment(n) {
    return (n += 1);
}

let d = 10;
function decrement(d) {
    return (d -= 1);
}

function makeInt(string) {
    return parseInt(string, 10);
}
function preserveDecimal(string) {
    return parseFloat(string, 10);
}
    