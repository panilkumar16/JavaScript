/*
 * Umbrella open and close function using an object in JavaScript
 */

// Declaring and initializing umbrella object
var umbrella = {
    color: "pink",
    isOpen: true,
    open: function() {
        if (umbrella.isOpen === true) {
            return "The umbrella is already opened!";
        } else {
            umbrella.isOpen = true;
            return "The umbrella is opened!";
        }
    },
    close: function() {
        if (umbrella.isOpen === true) {
            umbrella.isOpen = false;
            return "The umbrella is closed!";
        } else {
            return "The umbrella is already closed!";
        }
    }
};

console.log(umbrella.close());
console.log(umbrella.open());