var readlineSync = require('readline-sync');
var figlet = require('figlet');

var Guess = false;
var wordAfterCorrectGuess;
var correctLetterCount = 0;
var indexArr = [];
var asteriskArr = [];
var guesses = 10;

function asterisk(originalWord) {// replace secret word with asterisk and make an array out of asterisk
    var asteriskStr = originalWord.replace(/\w/g, "*")
    for (var k = 0; k < asteriskStr.length; k++) {
        asteriskArr[k] = asteriskStr[k]
    }
}
function letterExsists(str, userGuess) {//makes an arr out of the secret word and an arr of the indexes of the correct letters
    var chosenWordArr = [];
    userGuess = userGuess.toLowerCase();
    for (var i = 0; i < str.length; i++) {
        chosenWordArr[i] = str[i];
    }
    for (var i = 0; i < chosenWordArr.length; i++) {
        if (chosenWordArr[i] == userGuess) {
            indexArr.push(i);
        }
    }
}

function replaceCorrectIndexes(guess) {
    guess = guess.toLowerCase();
    for (var j = 0; j < indexArr.length; j++) {
        asteriskArr.splice(indexArr[j], 1, guess)

    }
    if (indexArr.length == 0)
        guesses--;

    wordAfterCorrectGuess = asteriskArr.join('');
    noAsterisk(wordAfterCorrectGuess);
    indexArr.splice(0, indexArr.length)
    console.log(wordAfterCorrectGuess)
}
function noAsterisk(str) {
    if (str.indexOf('*') == -1)
        correctLetterCount = chosenWord.length
}
console.log(figlet.textSync('HangMan', {
    font: 'Standard',
    horizontalLayout: 'default',
    verticalLayout: 'default',
    width: 80,
    whitespaceBreak: true
}));
var wordBank = ["banana", "watermelon", "lemon", "strawberry", "jeans", "shirt", "glasses", "sandwich", "bottle", "water"]
var chosenWord = wordBank[Math.floor(Math.random() * wordBank.length)]
asterisk(chosenWord)

while (guesses > 0 && Guess == false) {
    console.log("you have ", guesses, "guesses left\n");
    var guess = readlineSync.question("please enter your guess: ");

    letterExsists(chosenWord, guess);
    replaceCorrectIndexes(guess);
    if (!/^[a-zA-Z]/.test(guess)) {
        console.log("invalid input");
    }
    else if (guess.length != 1) {
        console.log("You need to enter one letter");
    }
    if (correctLetterCount == chosenWord.length) {
        console.log("Wow You Are Good!!");
        Guess = true;
    }

}
if (guesses == 0) {
    console.log("You are out of guesses :(");
}