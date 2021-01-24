var readlineSync = require('readline-sync');

function factorial(num) {
    var result = 1;
    for (var i = 1; i <= num; i++) {
        result *= i;
    }
    if (num == 0)
        console.log("The factorial of your number is: ", 1);
    else console.log("The factorial of your number is: ", result);
}
var number = Number(readlineSync.question("please enter a positive number: "));
factorial(number);