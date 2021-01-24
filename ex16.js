function reverse(arr) {
    for (var i = 0; i <= Math.floor((arr.length - 1) / 2); i++) {
        let temp = arr[i];
        arr[i] = arr[arr.length - 1 - i];
        arr[arr.length - 1 - i] = temp;
    }
    console.log(arr)
}
var arr = [1, 2, 3, 4, 5]
reverse(arr);