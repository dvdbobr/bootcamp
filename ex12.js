var readlineSync = require('readline-sync');

var string = readlineSync.question("please enter a sentence ");

function changeVowels(str) {
    var arr = [];
    for (var i = 0; i < str.length; i++) {
        if ('aeiouyAEIOUY'.indexOf(str[i]) == -1)
            arr.push(str[i])
        else
            arr.push(str[i].toUpperCase());
    }
    console.log(arr.join(""));
}
changeVowels(string)