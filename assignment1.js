var readlineSync = require('readline-sync');
var pointArray = [0, 0, 0, 0];
var sum = 0;
console.log(" -------------------------------------")
console.log("| WHICH CARTOON CHARACTER ARE YOU QUIZ|")
console.log(" -------------------------------------")

console.log(" -----------FIRST QUESTION------------")
let choice = ["WILD", "FUNNY", "CHATTY", "QUIET"];
let index = readlineSync.keyInSelect(choice, 'Which one of these words describes you best? ');
if (index == -1)
    console.log("You chose to cancel")
else {
    pointArray[index] += 1
    console.log('You chose ' + choice[index]);
}
console.log(" --------------------------------------")

console.log(" -----------SECOND QUESTION------------")
choice = ["ADVENTURE", "ACTION", "COMEDY", "ROMANTIC"];
index = readlineSync.keyInSelect(choice, 'Which one of these words describes you best? ');
if (index == -1)
    console.log("You chose to cancel")
else {
    pointArray[index] += 1
    console.log('You chose ' + choice[index]);
}
console.log(" -------------------------------------")

console.log(" -----------THIRD QUESTION------------")
choice = ["LANGAUAGES", "MATHS", "SCIENCES", "HISTORY"];
index = readlineSync.keyInSelect(choice, 'What kind of subjects do you prefer ');
if (index == -1)
    console.log("You chose to cancel")
else {
    pointArray[index] += 1
    console.log('You chose ' + choice[index]);
}
console.log(" --------------------------------------")

console.log(" -----------FOURTH QUESTION------------")
choice = ["A HOUSE WITH A NICE GARDEN", "AN APARTMENT IN A BIG CITY", "A LARGE MODERN CARAVAN", "A FANCY HOTEL ROOM"];
index = readlineSync.keyInSelect(choice, 'In which of these places would you like to live in? ');
if (index == -1)
    console.log("You chose to cancel")
else {
    pointArray[index] += 1
    console.log('You chose ' + choice[index]);
}
console.log(" -------------------------------------")

console.log(" -----------FIFTH QUESTION------------")
choice = ["LOYAL", "EMOTIONAL", "INDEPENDENT", "KIND"];
index = readlineSync.keyInSelect(choice, 'Which of these adjectives best describes your personality? ');
if (index == -1)
    console.log("You chose to cancel")
else {
    pointArray[index] += 1
    console.log('You chose ' + choice[index]);
}
for (var i = 0; i < pointArray.length; i++) {
    if (i == 0)
        sum = sum + pointArray[i] * 30;
    if (i == 1)
        sum = sum + pointArray[i] * 10;
    if (i == 2)
        sum = sum + pointArray[i] * 20;
    if (i == 3)
        sum = sum + pointArray[i] * 40;
}
if (sum < 50)
    console.log("your inputs were incorrect")
if (sum >= 50 && sum <= 70)
    console.log("YOUR CHARACTER IS: SNOOPY")
if (sum > 70 && sum <= 100)
    console.log("YOUR CHARACTER IS: BUGS BUNNY")
if (sum > 100 && sum <= 150)
    console.log("YOUR CHARACTER IS: PATRICK STAR")
if (sum > 150 && sum <= 200)
    console.log("YOUR CHARACTER IS: GARFIELD")