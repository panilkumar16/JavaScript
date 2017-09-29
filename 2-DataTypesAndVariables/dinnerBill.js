/*
 * Calculate dinner bill with tip.  Total with 2 decimal points
 */

// Bill
var bill = 10.25 + 3.99 + 7.15;
// Tip 15%
var tip = bill * 0.15;
// Total
var total = bill + tip;
// Using toFixed function to display total with 2 decimal points
console.log("$" + total.toFixed(2));