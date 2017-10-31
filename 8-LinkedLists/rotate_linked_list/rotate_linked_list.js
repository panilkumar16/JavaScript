/*
Given head node of a singly linked list and an integer 'n', rotate 
linked list by 'n'.

Example: 
Input : 1 -> 2 -> 3 -> 4 -> 5 -> NULL, rotate 2 times
Output: 4 -> 5 -> 1 -> 2 -> 3 -> NULL

The no. of rotations n passed can be greater than length of the linked list,
in that case we still need to rotate that many times.

The rotations are from left to right
If we need n right to left rotations then that is equal to:
length of linked list - n left to right rotations
N Right to Left rotations = Length of Linked List - N Left to Right Rotations


Algorithm 1 (Inefficient one):
=============================
Rotating by one node is just find the last node of linked list and move it 
to the head of linked list. One way of solving is to rotate by one node 
(i.e. last node of linked list) n times. Getting to the last node of 
linked list requires a linear scan, so this algorithm requires n scans of 
the linked list. The time complexity of this algorithm will be O(mn) 
where m is the length of linked list and n is the number of rotations needed. 


Algorithm 2 (Efficient one):
===========================
Performing n rotations (if n > 0) of the last node is equivalent to 
performing one rotation of last n nodes of linked list. 
So this algorithm gives O(n).

If head or head.next is null return head as it remains head no matter how many
    rotations we do.  Return head if n = 0 as head will remain same

Find length of linked list

Optimize the no. of rotations, avoid rotations greater than length of 
    linked list
If no. of rotations (n) is not between 1 and length of list (L) then bring it
    If n is negative add to length to bring n between 1 and length of list
    Else if n is positive do length - n to bring n between 1 and length

Now n should be between 1 to length of linked list
If n is 0 return head as 0 means no rotations
If n is equal to length of linked list then return head as if we do
    length no. of rotations we get same head.

Find nth node from last node of linked list. As we have length of linked list, 
it is basically L - n = x. Store x.next in 'new_head' as this will be new head.
x.next should point to NULL as this will be last node after rotation.

Start from 'new_head' and move to the last node of the linked list. Update next 
pointer of last node to point to the head node.

Make 'new_head' as the new head node. Now 'new_head' is the head of linked 
list after performing n rotations. 


Algorithm3 (Efficient one, but only if no. of rotations given is always 
    within length of linked list):
=================================
If head or head.next is null return head as it remains head no matter how many
    rotations we do.  Return head if n = 0 as head will remain same

Create two pointers p1 and p2

Move p2 N steps forward from head

Start p1 from head and move both p1 and p2 simultaneously until p2 reaches 
at last node of linked list. At this point p1 is pointing to the (L-N)th node
i.e. Length of linked list - No. of rotations, from the tail of linked list.

Store p1.next in 'new_head' as this will be new head.
p1.next should point to NULL as this will be last node after rotation.

Start from 'new_head' and move to the last node of the linked list. Update next 
pointer of last node to point to the head node.

Make 'new_head' as the new head node. Now 'new_head' is the head of linked 
list after performing n rotations.
*/

// Function to find length of given linked list
// Parameters: head of linked list
// Return: length of linked list
let length_of_linked_list = function(head) {
    let len = 0;
    while (head) {
        len++;
        head = head.next;
    }

    return len;
};

// Function to adjust no. of rotations to optimize, so we don't make 
// unnecessary rotations.  Keep rotations within lenght of linked list
let adjust_rotations_to_optimize = function(n, len) {
    // Optimize the no. of rotations, avoid rotations greater than length of 
    // linked list
    // If no. of rotations (n) is not between 1 and length of list (L) then 
    // bring it
    //  If n is negative add to length to bring n between 1 and length of list
    //  Else if n is positive do length - n to bring n between 1 and length
    n = n % len;

    if (n < 0) {
        n = n + len;
    }
    
    return n;
};

// Function to rotate linked list for n no. of rotations given.
// Parameters: head of linked list, no. of rotations
// Return: head of linked list after n rotations
let rotate_linked_list = function(head, n) {
    // If head or head.next is null return head as it remains head no matter how many
    // rotations we do.  Return head if n = 0 as head will remain same
    if (!head || !head.next || n === 0) {
        return head;
    }

    // Find length of linked list
    let len = length_of_linked_list(head);


    // Optimize the no. of rotations, avoid rotations greater than length of 
    // linked list
    // If no. of rotations (n) is not between 1 and length of list (L) then bring it
    //     If n is negative add to length to bring n between 1 and length of list
    //     Else if n is positive do length - n to bring n between 1 and length
    n = adjust_rotations_to_optimize(n, len);

    // Now n should be between 1 to length of linked list
    // If n is 0 return head as 0 means no rotations
    // If n is equal to length of linked list then return head as if we do
    // length no. of rotations we get same head.
    // If you are doing n = n % len above then if n is 5 it will become 0
    // If you are not doing n = n % len above, then n == len will help
    if (n == 0 || n == len) {
        return head;
    }

    // Find nth node from last node of linked list. As we have length of list, 
    // it is basically L - n = x. Store x.next in 'new_head' as this will be 
    // new head. x.next should be NULL as this is last node after rotation.
    let last_node_after_rotation = head;
    let last_node_after_rotation_index = len - n;
    document.write("last node after rotation indes is " +
        last_node_after_rotation_index + "<br>");
    while (last_node_after_rotation_index > 1) {
        last_node_after_rotation = last_node_after_rotation.next;
        document.write(" Finding last node after rotation: " +
            last_node_after_rotation.data + "<br>");
        last_node_after_rotation_index--;
    }

    let new_head = last_node_after_rotation.next;
    last_node_after_rotation.next = null;

    

    // Start from 'new_head' and move to the last node of the linked list. 
    // Update next pointer of this last node to point to the head node.
    let temp = new_head;
    while (temp.next) {
        temp = temp.next;
    }
    temp.next = head;

    // Make 'new_head' as the new head node. Now 'new_head' is the head of 
    // linked list after performing n rotations.
    return new_head;
};