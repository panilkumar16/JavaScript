/*
 * Testing the array forEach loop
 *
 * Use a `test` array variable and write a `forEach` loop
 * that adds 100 to each number that is divisible by 3.
 *
 */

var test = [12, 929, 11, 3, 199, 1000, 7, 1, 24, 37, 4,
    19, 300, 3775, 299, 36, 209, 148, 169, 299,
    6, 109, 20, 58, 139, 59, 3, 1, 139
];

// Result array declaration
var newTest = [];
// Using array's forEach to get each array element and add 100 if element is 
// divisible by 3
test = test.forEach(function(element) {
    if (element % 3 === 0) {
        element += 100;
        newTest.push(element);
    } else {
        newTest.push(element);
    }
});

// Update the test array and display
test = newTest;
console.log(test);