/*
Given head pointer of a linked list, sort linked list (in ascending order) 
using merge sort and return new head pointer of sorted linked list.

Example: 
Input : 3 -> 1 -> 5 -> 7 -> 3 -> NULL
Output: 1 -> 3 -> 3 -> 5 -> 7 -> NULL

Algorithm:
Divide and Conquer
In the dividing step, we split our input linked list into two halves and 
keep doing it until there is a linked list of size 1 or 0. 
Linked lists of size 1 and 0 are always sorted. 
In the combining step, we sort lists in ascending order and merge sorted lists
Keep doing this until we have a completely sorted list. 

Runtime Complexity: Linear Arithmatic, O(n * log n)
    Recurrence relation for this merge sort algorithm will be:
    T(n)=2T(n/2)+n
    At each step, we divide our problem into two sub-problems and size of 
    each sub-problem is n/2 and total cost of combining step (sort and 
    merging sorted lists) is n.
    If we solve this recurrence relation, the result will be O(n * log n) 
    which is the time complexity of merge sort.
Memory Complexity : Logarithmic, O(log n) - Recursive solution has O(log n) 
                    memory complexity as it will consume memory on the stack
*/

// Function to split linked list in half
// Parameters: head of linked list, object to store first split head and 
//             second split head
// Returns: returns nothing, the function splits linked list and updates the
//          first_second object passed.
let split_linked_list_in_half = function(head, first_second) {
    // If head is null, no spliting both first and second head is null
    if (!head) {
        first_second.first = null;
        first_second.first = null;
        return;
    }

    // If head has only one element first is head and second is null
    if (!head.next) {
        first_second.first = head;
        first_second.second = null;
    }
    else {
        // To find the mid point of linked list lets use two pointers
        // fast and slow.  The fast pointer will move 2 nodes at a time
        // where are slow will move 1 node at a time.  At the point fast
        // pointer reaches end i.e. null slow pointer is at the mid of the
        // linked list.  Since fast pointer is moving 2 nodes at a time
        // in a loop, in that one loop we first to one fast.next then check
        // if it null, if not null then we do second fast.next
        let slow = head;
        let fast = head.next;
        while (fast) {
            fast = fast.next;
            if (fast) {
                fast = fast.next;
                slow = slow.next;
            }
        }

        // At this point slow is in the middle, so lets split linked list
        // head will be the head of first half of linked list
        first_second.first = head;
        // slow.next is head of second half of linked list
        first_second.second = slow.next;
        // Divide first and second linked list by making slow.next null
        slow.next = null;
    }
};


// Function to merge two sorted linked lists
// Parameters: head1, head2 of two sorted linked lists
// Return: head of merged linked list of two sorted linked lists
let merge_two_sorted_linked_lists = function(head1, head2) {
    // if head1 is null return head2 else if head2 is null return head1
    if (!head1) {
        return head2;
    }
    else if (!head2) {
        return head1;
    }

    // Create pointer for merge head
    let mergedHead = null;

    // Take lowest of head1 and head2 data to make it as merge head
    // Also move the lowest head to next
    if (head1.data <= head2.data) {
        mergedHead = head1;
        head1 = head1.next;
    }   
    else {
        mergedHead = head2;
        head2 = head2.next;
    }
    
    // Another pointer to add nodes to merged linked list
    let mergedTail = mergedHead;

    // Loop while head1 is not null or head2 is not null
    while (head1 && head2) {
        // Compare head1 and head2 data to find lowest
        // Then move the lowest head next
        if (head1.data <= head2.data) {
            mergedTail.next = head1;
            head1 = head1.next;
        }   
        else {
            mergedTail.next = head2;
            head2 = head2.next;
        }

        mergedTail = mergedTail.next;
    }
    
    // if head1 is not null, add remaining nodes to next of merged tail
    // else if head2 is not null, add remaining nodes to next of merged tail
    if (head1) {
        mergedTail.next = head1;
    }

    if (head2) {
        mergedTail.next = head2;
    }
    
    return mergedHead;
}


// Function to sort a linked list using merge sort
// Parameters: head of a unsorted linked list
// Returns: head of linked list after sorting
let merge_sort = function(head) {
    // Linked list with 0 or 1 node is already sorted, so return head
    if (!head || !head.next) {
        return head;
    }

    let first = null;
    let second = null;
    let first_second = {
        first,
        second
    };

    // Split linked list in half to divide and conquer
    split_linked_list_in_half(head, first_second);

    // Sort the sub linked lists
    first_second.first = merge_sort(first_second.first);
    first_second.second = merge_sort(first_second.second);

    // Merge the sorted linked lists
    return merge_two_sorted_linked_lists(first_second.first,
        first_second.second);
};