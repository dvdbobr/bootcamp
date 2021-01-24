var readlineSync = require('readline-sync');

var sentence = readlineSync.question("please enter a sentence ");
function asterisk(str) {
    for (var i = 0; i < str.length; i++) {
        str = str.replace(" ", "*");
    }
    console.log(str)
}

asterisk(sentence)
