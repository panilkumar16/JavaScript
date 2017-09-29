/*
 * Finding the Shirt Size S, M, L, XL, 2XL, or 3XL from given sizes of shirt width,
 * length, and Sleeve sizes.
 * 
 */

// change the values of `shirtWidth`, `shirtLength`, and `shirtSleeve` to test code
var shirtWidth = 23;
var shirtLength = 30;
var shirtSleeve = 8.71;
// var shirtWidth = 18;
// var shirtLength = 28;
// var shirtSleeve = 8.13;

// Comparing each range of shirt width, lenght, and sleeve size for respective size.
// If sizes matches displays the size S, M, L, XL, 2XL, or 3XL
// If size does not match then displays N/A
if ((shirtWidth >= 18 && shirtWidth < 20 ) && 
    (shirtLength >= 28 && shirtLength < 29) && (shirtSleeve >= 8.13 && shirtSleeve < 8.38)) {
    console.log("S");
} else if ((shirtWidth >= 20 && shirtWidth < 22 ) && 
    (shirtLength >= 29 && shirtLength < 30) && (shirtSleeve >= 8.38 && shirtSleeve < 8.63)) {
    console.log("M");
} else if ((shirtWidth >= 22 && shirtWidth < 24 ) && 
    (shirtLength >= 30 && shirtLength < 31) && (shirtSleeve >= 8.63 && shirtSleeve < 8.88)) {
    console.log("L");
} else if ((shirtWidth >= 24 && shirtWidth < 26 ) && 
    (shirtLength >= 31 && shirtLength < 33) && (shirtSleeve >= 8.88 && shirtSleeve < 9.63)) {
    console.log("XL");
} else if ((shirtWidth >= 26 && shirtWidth < 28 ) && 
    (shirtLength >= 33 && shirtLength < 34) && (shirtSleeve >= 9.63 && shirtSleeve < 10.13)) {
    console.log("2XL");
} else if (shirtWidth === 28 && shirtLength === 34 && shirtSleeve === 10.13) {
    console.log("3XL");
} else {
    console.log("N/A");
}
