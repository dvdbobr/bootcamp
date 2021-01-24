var readlineSync = require('readline-sync');
var number;

do {
    number = Number(readlineSync.question("please choose a number larger than 10: "));
    console.log("User answer : ", number);
}
while (number <= 10)
console.log("thank you");