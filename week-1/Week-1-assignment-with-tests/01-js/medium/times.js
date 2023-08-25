/*
Write a function that calculates the time (in seconds) it takes for the JS code to calculate sum from 1 to n, given n as the input.
Try running it for
1. Sum from 1-100
2. Sum from 1-100000
3. Sum from 1-1000000000
Hint - use Date class exposed in JS
*/

function sum(s, e) {
    let total = 0;
    for (let i = s; i <= e; i++) {
        total += i;
    }
    return total;
}

function calculateTime(n) {
    console.log(Date.now() / 1000);
    let start = (Date.now()).toLocaleString('fullwide', {
        useGrouping: false
    });
    console.log(sum(1, n));
    let end = (Date.now()).toLocaleString('fullwide', {
        useGrouping: false
    });
    console.log(start + "                " + end);
    return ((end - start) / 1000).toPrecision(5);
}

console.log(calculateTime(10000));