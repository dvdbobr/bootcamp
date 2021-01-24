var readlineSync = require('readline-sync');
function checkNumber(num) {
    if (isNaN(num))
        throw 'your input was incorrect';
}
function checkString(str) {
    if (!isNaN(parseFloat(str)) && isFinite(str) || (str != "yes" && str != "no"))
        throw 'your input was incorrect';
}

try {
    var people = Number(readlineSync.question("How many people are you going with? "));
    checkNumber(people);
    var kosher = readlineSync.question("Should it be Kosher? ");
    checkString(kosher);
    if (kosher == "yes") {
        console.log("You chose kosher")
        var kashrutLM = readlineSync.question("should it be Kashrut Lemehadrin? ");
        checkString(kashrutLM)
    }
}
catch (e) {
    console.error(e)
}
if (kashrutLM == 'yes') {
    console.log("You chose Kashrut Lemehadrin")
    let foodKind = ["meat", "pizza", "vegan"];
    let index = readlineSync.keyInSelect(foodKind, 'What kind of food do you want? ');
    console.log(index);
    if (index == -1)
        console.log("You chose to CANCEL");
    else {
        console.log('You chose ' + foodKind[index]);
        if (index == 0)
            console.log("I recommend: EVE restaurant or MEATOS restaurant");
        if (index == 1)
            console.log("I recommend: pizza HASHEMESH or pizza HUT");
        if (index == 2)
            console.log("I recommend: Papaya restaurant or Hertzog restaurant");
    }
}

if (kashrutLM == 'no') {
    console.log("You have chose regular kashrut");
    let foodKind = ["meat", "pizza", "vegan"];
    let index = readlineSync.keyInSelect(foodKind, 'What kind of food do you want? ');
    if (index == -1)
        console.log("You chose to CANCEL");
    else {
        console.log('You chose ' + foodKind[index]);
        if (index == 0)
            console.log("I recommend: Yosef restaurant or West Side restaurant");
        if (index == 1)
            console.log("I recommend: pizza PINO or pizza AGVANYA");
        if (index == 2)
            console.log("I recommend: Florentina restaurant or Nature Boys restaurant");
    }
}
if (kosher == "no") {
    console.log("You chose non kosher")
    let foodKind = ["meat", "pizza", "vegan"]
    let index = readlineSync.keyInSelect(foodKind, 'What kind of food do you want? ');
    if (index == -1)
        console.log("You chose to CANCEL");
    else {
        console.log('You chose ' + foodKind[index]);
        if (index == 0)
            console.log("I recommend: AGADIR restaurant or BUTCHERY DE BARLIOCHE restaurant");
        if (index == 1)
            console.log("I recommend: pizza PHILIPPE or pizza DOMINO'S");
        if (index == 2)
            console.log("I recommend: FOUR ONE SIX restaurant or VIVIDA restaurant");
    }
}





