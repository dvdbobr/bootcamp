var readlineSync = require('readline-sync');

function prime(num) {
    for (var i = 1; i <= num; i++) {
        isPrime = true;
        for (j = 2; j < i; j++) {
            if (i % j == 0) {
                isPrime = false;
            }
        }
        if (isPrime) {
            console.log(i);
        }
    }
}

var number = Number(readlineSync.question("please enter a positive number: "));
prime(number);