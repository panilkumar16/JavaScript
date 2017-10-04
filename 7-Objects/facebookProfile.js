/*
 * Facebook Profile using JS object.  Stores Name, No. of Friends, Messages.
 * Also has functions to Post Message, Delete Message, Add Friend, Remove Friend.
 */

// Object to store related values and required basic functions
var facebookProfile = {
    name: "Kumar",
    friends: 50,
    messages: [ "Message1", "Message2", "Message3" ],
    // Function to add new message to messages at ending
    postMessage: function(message) {
        if (message !== "") {
            return facebookProfile.messages.push(message);
        }
    },
    // Function to delete a message based on index, using splice method
    deleteMessage: function(index) {
        if (index < facebookProfile.messages.length) {
            return facebookProfile.messages.splice(index, 1);
        }
    },
    // Function to increment the no. of friends
    addFriend: function() {
        facebookProfile.friends += 1;
        return facebookProfile.friends;
    },
    // Function to decrement the no. of friends
    removeFriend: function() {
        facebookProfile.friends -= 1;
        return facebookProfile.friends;
    }
};

// Display name
console.log(facebookProfile.name);
// Display no. of friends
console.log(facebookProfile.friends);
// Display messages
console.log(facebookProfile.messages);
// Add new message and display total no. of messages after adding
console.log(facebookProfile.postMessage("Message4"));
// Delete message and display that message
console.log(facebookProfile.deleteMessage(3));
// Add a friend to count and display total count of friends
console.log(facebookProfile.addFriend());
// Delete a friend from count and display total cout of friends
console.log(facebookProfile.removeFriend());