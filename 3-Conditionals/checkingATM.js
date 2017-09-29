/*
 * Simulator - Using ATM to check your balance
 */

// Change the values of `balance`, `checkBalance`, and `isActive` to test code
var balance = 325;
var checkBalance = true;
var isActive = false;

// If asked to check balance
if (checkBalance) {
    // If account is active and have balance display balance
    if (isActive && balance > 0) {
        console.log("Your balance is $" + balance + ".");
    } else {
        // If account is not active display as no longer active
        if (!isActive) {
            console.log("Your account is no longer active.");
        } else {
            // If account is active but balance 0 then display account is empty
            if (balance === 0) {
                console.log("Your account is empty.");
            // else account is negative display to contact bank
            } else {
                console.log("Your balance is negative. Please contact bank.");
            }
        }
    }
// check balance not requested then display thank you
} else {
    console.log("Thank you. Have a nice day!");
}
