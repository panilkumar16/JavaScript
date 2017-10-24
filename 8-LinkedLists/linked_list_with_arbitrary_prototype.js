// Function prototype to create a linked list node with next and arbitrary 
//     pointer
// Parameters: data to create the node
// Return: Address of the node
let NodeWithArbitraryPointer = function(data) {
    this.data = data;
    this.next = null;
    this.arb = null;
}

// Function for LinkedList with arbitrary pointer Prototype
// Parameter is head node
var LinkedListWithArbitraryPointer = function(head) {
    this.head = head;
    // if (head) {
    //     this.length = 1;
    // }
    // else {
    //     this.length = 0;
    // }
};

// Function Prototype to add a node at tail of LinkedList with arbitrary 
// pointer
LinkedListWithArbitraryPointer.prototype.add = function(new_data){
    var thisnode = new NodeWithArbitraryPointer(new_data);
    var currentNode = this.head;
    //this.length++;

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

// Function Prototype to add arbitrary pointer to the given node in Linked
// List having arbitrary pointer
LinkedListWithArbitraryPointer.prototype.addArb = function(node, arbNode) {
    if (!node) {
        return node;
    }

    node.arb = arbNode;
    return node;
}

// Function Prototype to print the data in linked list with arbitrary pointer
LinkedListWithArbitraryPointer.prototype.print = function() {
    var temp = this.head;
    while (temp) {
        
        if (!temp.arb) {
            console.log(temp.data + " -> " + "null");
            document.write(temp.data + " -> " + "null<br>");
        }
        else {
            console.log(" -> " + temp.arb.data);
            document.write(temp.data + " -> " + temp.arb.data + "<br>");
        }

        temp = temp.next;
    }
}