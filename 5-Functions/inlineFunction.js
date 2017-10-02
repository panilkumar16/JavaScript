/*
 * Inline Function: Calling a function and passing an inline function expression
 */

// Emotions function with parameters string and function expression
function emotions(myString, myFunc) {
    console.log("I am " + myString + ", " + myFunc(2));
}

// Calling the emotions function here and passing in 
// inline function expression laugh with a parameter to print that many "ha"
emotions("happy", function laugh(num) {
    var msg = "";
    // Loop till num times and add that many "ha" to the message
    for (var i = 1; i <= num; i++) {
        msg = msg + "ha"
    }
    // Including ! at the end of the message and returning
    return (msg + "!");
});