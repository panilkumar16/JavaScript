// Given the pointer/reference to the head of a singly linked list, reverse 
// it and return the pointer/reference to the head of reversed linked list.
// 
// Example:
// input = head is 7 -> 14 -> 21 -> 28 -> NULL
// output = head is 28 -> 21 -> 14 -> 7 -> NULL
// 
// Algorithm:
//   if head is NULL or head.next is NULL (i.e. has 1 node)
//       return head as there is no need to reverse empty on 1 node
//   
//   current = head
//   reversed = NULL
//   while current is not equal to NULL
//       temp = current
//       current = current.next
// 
//       temp.next = reversed
//       reversed = temp
// 
//   return reversed
// 
// Runtime Complexity: Linear, O(n)
//   As we can reverse the linked list in a single pass.
// Memory Complexity: Constant, O(1)
//   As no extra memory is required for the iterative solution.

// Function for Node Prototype
var Node = function(data) {
    this.data = data;
    this.next = null;
};

// Function for LinkedList Prototype
// Parameter is head node
var LinkedList = function(head) {
    this.head = head;
    if (head) {
        this.length = 1;
    }
    else {
        this.length = 0;
    }
};

// Function for LinkedList Prototype to add a node at tail
LinkedList.prototype.add = function(new_data){
    var thisnode = new Node(new_data);
    var currentNode = this.head;
    this.length++;

    // If current is empty thisnode will be head
    if (!currentNode) {
        this.head = thisnode;
        return thisnode;
    }
    // Else go to the last node and add this node to last.next as we are
    // adding new node at tail
    else {
        while(currentNode.next) {
            currentNode = currentNode.next;
        }

        // Here currentNode is last node, so assign thisnode to 
        // currentNode.next 
        currentNode.next = thisnode;
        return thisnode;
    }
}

// Function for LinkedList Prototype to reverse the linked list
LinkedList.prototype.reverse = function(){
    // if head is NULL or head.next is NULL (i.e. has 1 node)
    // return head as there is no need to reverse empty on 1 node
    
    if (!this.head || !this.head.next) {
        return this.head;
    }

    //   current = head.next
    var current_head = this.head;
    //   reversed.next = NULL
    var reverse_head = null;

    // while current is not equal to NULL do reverse
    while (current_head) {
        // Save current in temp and move current to next
        var temp = current_head;
        current_head = current_head.next;

        // temp will be reverse, temp next is previous reverse
        temp.next = reverse_head;
        reverse_head = temp;
    }

    // Now head should point to head of reverse
    this.head = reverse_head;
    return reverse_head;

    // // Another way to reverse
    // // For reverse 
    // var prev = null;
    // // For current 
    // var curr = this.head;
    // // For current next
    // var next = null;
    // console.log("Reversing");

    // while (curr) {
    //     // Store next current
    //     next = curr.next;
    //     // Now curr is used as temp to store reverse
    //     // Present reverse need to be reverse next
    //     curr.next = prev;
    //     // current is new reverse head
    //     prev = curr;
    //     // Now current is next
    //     curr = next;
    // }
    // this.head = prev;
    // return prev;
}

// Function for LinkedList Prototype to print the data in linked list
LinkedList.prototype.print = function(){
    var temp = this.head;
    while (temp) {
        console.log(temp.data);
        document.write(temp.data + "<br>");
        temp = temp.next;
    }
}