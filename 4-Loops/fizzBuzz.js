/*
 * FizzBuzz Program:  Prints numbers in incremental order.  
 * If the number is divisible by both 3 and 5 it prints FizzBuzz.  
 * If it is divisible by 3 it prints Fizz.
 * If it is divisible by 5 it prints Buzz.  
 * If it is neither divisible by 3 or 5 the it prints the actual number itself.
 */

// Declare starting number
var x = 1;

// Loop till the ending number
while (x <= 20) {
    // Using trenary operator to solve in few lines of code
    var output = x % 3 === 0 && x % 5 === 0 ? 
        "FizzBuzz" : (x % 3 === 0 ? "Fizz" : (x % 5 === 0 ? "Buzz" : x)); 
    console.log(output);
    x += 1;
}
