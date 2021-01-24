var readlineSync = require('readline-sync');

var number = Number(readlineSync.question("enter a number: "));

function minMax(num) {
    var arr = new Array(num);
    var max = 0;
    var min = 51;
    for (var i = 0; i < arr.length; i++) {
        arr[i] = Math.floor(Math.random() * (50 - 1 + 1) + 1)
    }
    for (var j = 0; j < arr.length; j++) {
        if (arr[j] > max)
            max = arr[j]
        if (arr[j] < min)
            min = arr[j]
    }
    console.log("min is", min)
    console.log("max is", max)
}
minMax(number)