/* 11.. Write a program to print the given 3 numbers in descending orders? 
*/
let a = 25;
let b = 10;
let c = 15;

if (a >= b && a >= c) {
    if (b >= c) {
        console.log(a, b, c);
    } else {
        console.log(a, c, b);
    }
} else if (b >= a && b >= c) {
    if (a >= c) {
        console.log(b, a, c);
    } else {
        console.log(b, c, a);
    }
} else {
    if (a >= b) {
        console.log(c, a, b);
    } else {
        console.log(c, b, a);
    }
}