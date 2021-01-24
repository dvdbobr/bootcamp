
function joinStrings(arr1, arr2) {
    var joinedArr = new Array();
    for (var i = 0; i < arr1.length; i++) {
        joinedArr.push(arr1[i])
    }
    for (var k = 0; k < arr2.length; k++) {
        joinedArr.push(arr2[k])
    }
    console.log(joinedArr)
}

var arr1 = ["hello", "how"];
var arr2 = ["are", "you"]
joinStrings(arr1, arr2)
