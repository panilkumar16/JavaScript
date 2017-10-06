/*
 * Finding factorials of a given number
 * Loops number from 1 to the given number, increments by 1 and multiplies each
 * to get the factorial of the given number.
 */

// Factorial number
var num = 12
// Initially solution with value 1
var solution = 1;

// Loop from 2 as factorial of lower number is 1, saves one extra loop
for (var fac = 2; fac <= num; fac++) {
    solution = solution * fac;
}

console.log(solution);