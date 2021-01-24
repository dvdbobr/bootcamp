var input = require('readline-sync');
let num1 = Number(input.question("Enter a number: "));
let num2 = Number(input.question("Enter another number: "));

function ten(x, y) {

    result = x + y;
    if (result == 10) {
        console.log("makes 10");
    }

    else { console.log("nope") }
}
ten(num1, num2)