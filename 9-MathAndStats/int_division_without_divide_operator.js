/*
Problem Description:
===================
Divide two integers without using '/' (division) or '*' (multiplication) 
operators.

Example:
=======
dividend / divisor = ?
6 / 3 = 2
7 / 3 = 2
1 / 3 = 0

Algorithm 1 (Inefficient one using + operator):
==============================================
if divisor is 0 return -1

if dividend is less than divisor return 0

if dividend is equal to divisor return 1

if dividend is greater than divisor then do below
    sum = divisor
    count = 0

    while sum is less than or equal to dividend
        sum = sum + divisor
        count = count + 1
    
    return count

This is inefficient because if dividend is really big than divisor then it
takes quotient loops.  For example: 1000 / 2 takes 500 loops.

Runtime Complexity: O(n) - where n is result of division
Memory Complexity : Constant, O(1) - We are using variable and no recursive


Algorithm 2 (Efficient one using Bitwise operators.  Implemented in code):
=========================================================================
if divisor is 0 return -1

if dividend is less than divisor return 0

if dividend is equal to divisor return 1

if dividend is greater than divisor then do below
    quotient = 1
    tempDivisor = divisor

    while tempDivisor is less than dividend
        tempDivisor = tempDivisor << 1 (left bit shift by 1, which is x 2)
        quotient = quotient << 1 (left bit shift by 1, which is x 2)

    if tempDivisor is greater than dividend
        take tempDivisor and quotient back by doing right shift i.e. / 2
        tempDivisor = tempDivisor >> 1 (right bit shift by 1, which is / 2)
        quotient = quotient >> 1 (right bit shift by 1, which is / 2)
        return (quotient + function(dividend - tempDivisor, divisor))

    return quotient

Runtime Complexity: O(logn) - where n is quotient
Memory Complexity : O(1ogn) - we need recursive when divisor becomes bigger
                                than dividend in the iterative loop

*/

// Function to do integer division without using / divide and * multiply
// operators
// Parameters: dividend, divisor
// Return: quotient
let int_division_without_divide_operator = function(dividend, divisor) {
    // if divisor is 0 it is infinite, we return -1
    if (divisor === 0) {
        return -1;
    }

    let dividendNegative = false;
    let divisorNegative = false;

    // if dividend is negative numbers
    if (dividend < 0) {
        dividendNegative = true;
        dividend = -dividend;
    }

    // if divisor is negative numbers
    if (divisor < 0) {
        divisorNegative = true;
        divisor = -divisor;
    }
    
    if (dividend < divisor) {
        return 0;
    } else if (dividend === divisor) {
        return 1;
    } else if (divisor === 1) {
        return dividend;
    }

    let quotient = 1;
    let tempDivisor = divisor;

    // Till temp divisor is less we do left shift that is multiply by 2
    while (tempDivisor < dividend) {
        tempDivisor <<= 1;
        quotient <<= 1;
    }

    // After above loop if tempDivisor is bigger than dividend we do right
    // shift i.e. divide by 2 then to find quotient we add quotient to 
    // the remaining number dividend - tempDivisor division with divisor
    if (tempDivisor > dividend) {
        tempDivisor >>= 1;
        quotient >>= 1;
        quotient += int_division_without_divide_operator(
            (dividend - tempDivisor), divisor);
    }

    // Return quotient based on negative or positive of dividend or divisor
    if ((dividendNegative && divisorNegative) || 
        (!dividendNegative && !divisorNegative)) {
        return quotient;
    } else if (dividendNegative || divisorNegative) {
        return -quotient;
    }
    
};