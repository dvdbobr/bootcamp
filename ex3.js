var input = require('readline-sync');

let dict = new Object();
dict = {
    0: "ZERO",
    1: "ONE",
    2: "TWO",
    3: "THREE",
    4: "FOUR",
    5: "FIVE",
    6: "SIX",
    7: "SEVEN",
    8: "EIGHT",
    9: "NINE"
}

let number = input.question("Enter a number between 0-9: ");
console.log(dict[number])