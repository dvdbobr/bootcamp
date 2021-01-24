for (var i = 1; i <= 100; i++) {
    if (i % 7 == 0 || (Math.floor(i / 10) % 10) == 7 || (Math.floor(i / 1) % 10) == 7)
        console.log("BOOM");
    else
        console.log(i);
}
