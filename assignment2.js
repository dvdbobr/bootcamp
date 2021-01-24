var readlineSync = require('readline-sync');

function checkNumber(num) {
    choiceIndex = 1;
    if (isNaN(num))
        throw 'your input was incorrect';
    if (num < 0)
        throw 'you have entered a negative number';
    if (num > money)
        throw "I said between 1 to "+money+ " And you typed " + bet + "!!" +
        "\nI don't play with liars!!! Bye";
    if (num == "")
        throw 'no input detected';
}

var choiceIndex = 0;
var money = 50;
var pcCard = Math.floor(Math.random() * (12 - 1 + 1) + 1);
var playerCard = Math.floor(Math.random() * (12 - 1 + 1) + 1);
var suitArr = ["♣", "♦", "♥", "♠"];
var playerCardsuit = suitArr[Math.floor(Math.random() * (3 - 0 + 1) + 0)];
var pcCardsuit = suitArr[Math.floor(Math.random() * (3 - 0 + 1) + 0)];
var name = readlineSync.question("please enter your name: ");
console.log(" ------------------------");
console.log("|    Welocome To War     |");
console.log(" ------------------------");

console.log("Hello", name + " You currently have", money + " dollars");


while (choiceIndex == 0 && money > 0) {
    try {
        var bet = Number(readlineSync.question("Place your bet for the next round: 1 to " + money + "\n"));
        checkNumber(bet);
        pcCard = Math.floor(Math.random() * (12 - 1 + 1) + 1);
        playerCard = Math.floor(Math.random() * (12 - 1 + 1) + 1);
        playerCardsuit = suitArr[Math.floor(Math.random() * (3 - 0 + 1) + 0)];
        pcCardsuit = suitArr[Math.floor(Math.random() * (3 - 0 + 1) + 0)];
        if (playerCard > pcCard) {
            console.log("Your card is", playerCard, playerCardsuit, " And my card is", pcCard, pcCardsuit);
            money += bet;
            console.log("You Won", bet, "!!" + "and now you have", money);
            choice = ["Play another round", "leave with my money :-)"]
            choiceIndex = readlineSync.keyInSelect(choice, 'what would you like to do?');
        }
        else if (playerCard == pcCard) {
            console.log("Your card is", playerCard, playerCardsuit, " And my card is", pcCard, pcCardsuit);
            console.log("WOW a DRAW how about another round");
            choice = ["Play another round", "leave with my money :-)"];
            choiceIndex = readlineSync.keyInSelect(choice, 'what would you like to do?');
        }
        else if (playerCard < pcCard) {
            console.log("Your card is", playerCard, playerCardsuit, " And my card is", pcCard, pcCardsuit);
            money -= bet;
            if (money <= 0) {
                console.log("You lost", bet, "and now you have", money);
                console.log("You are broke... Bye Bye");
            }
            else {
                console.log("You lost", bet, "and now you have", money);
                choice = ["Play another round", "leave with my money :-)"];
                choiceIndex = readlineSync.keyInSelect(choice, 'what would you like to do?');
            }
        }
    }
    catch (e) {
        console.error(e)
    }
}




