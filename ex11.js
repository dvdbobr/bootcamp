var readlineSync = require('readline-sync');

var string = readlineSync.question("please enter a sentence ");

function palindrome(str) {
    isPali = false;
    str = str.toLowerCase();
    for (var i = 0; i < str.length / 2; i++) {
        if (str[i] == str[str.length - i - 1])
            isPali = true;
        else
            isPali = false;
    }

    if (isPali)
        console.log("string is palindrome")
    if (!isPali)
        console.log("string is not palindrome")

}
palindrome(string)