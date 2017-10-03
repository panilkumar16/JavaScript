/*
 * Given bills calculating the totals with 15% tip added.
 *
 * Using the .map() method to take the bills array and create a second array
 * of numbers called totals. The totals array contains each amount from the
 * bills array but with a 15% tip added. Logging the totals array to the console.
 *
 * Each total number adjusted to have accuracy of two decimal points
 */

// All bills in array
var bills = [50.23, 19.12, 34.01,
    100.11, 12.15, 9.90, 29.11, 12.99,
    10.00, 99.22, 102.20, 100.10, 6.77, 2.22
];

// Using map method to create new array totals by adding 15% tip
var totals = bills.map(function(bill) {
    // Multiplying with 1.15 to get bill + 15% tip
    bill *= 1.15;
    // Rounding the value to have accuracy of two decimal points using toFixed method
    bill = Number(bill.toFixed(2));
    return bill;
});

// Display totals that is bill + 15% tip
console.log(totals);