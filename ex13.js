var readlineSync = require('readline-sync');

var string = readlineSync.question("please enter a sentence ");

function longestWord(str) {
    var max = 0;
    var index = 0;
    var words = str.split(" ")
    //words = str.replace(/\W/, '');
    for (var i = 0; i < words.length; i++) {
        if (words[i].length > max && (!/[^a-zA-Z]/.test(words[i]))) {
            max = words[i].length;
            index = i
        }
    }
    console.log(words[index]);
}
longestWord(string)