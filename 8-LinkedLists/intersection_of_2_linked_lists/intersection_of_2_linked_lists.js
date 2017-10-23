/*
Given head nodes of two linked lists that may or may not intersect, find out
if they intersect and return the point of intersection; return null otherwise.

Example:
head1 is 29 -> 23 -> 82 -> 11 -> 12
                                   ------->27
head2 is 13 -> 4 ----------------12

Algorithm:
- Find lengths of both linked lists: L1 and L2
- Calculate difference in length of both linked lists: d = |L1 - L2|
- Move head pointer of longer list 'd' steps forward
- Now traverse both lists, comparing nodes until we find a match or 
  reach the end of lists
*/

// Function to find the length of a linked list
// Parameter: head of linked list
// Return: length of the linked list
let get_length_of_linked_list = function(head) {
    let llist_length = 0;

    while (head) {
        head = head.next;
        llist_length++;
    }

    return llist_length;
};

// Function to check all next nodes of two equal length linked lists are same
// Parameters: node1, node2 of two linked lists both should be equal length
// Return: true if all next nodes are equal, else false
let all_next_nodes_are_same = function(list1, list2) {
    // Loop till end of list1 as list1 and list2 are same length here
    while (list1) {
        document.write("Log: list1node is at " + list1 + " " + list1.data
            + "<br>");
        document.write("Log: list2node is at " + list1 + " " + list2.data 
            + "<br>");
        // if list1 data and list2 data are not equal then atleast one of the
        // node does not match so return false
        if (list1.data != list2.data) {
            return false;
        }
        list1 = list1.next;
        list2 = list2.next;
    }

    // Here both the lists reached to end, and all nodes of both lists
    // are same, as above return false did not execute.  So return true
    return true;
};

// Function to find out if there is intersection in two given linked lists
// Parameters: head1, head2 of two linked lists
// Return: node value of the found intersection or null if not found
let intersection_of_two_linked_lists = function(head1, head2) {
    if (!head1 || !head2) {
        return null;
    }

    // Get length of linked lists to see which one is longer
    let list1node = null;;
    let list1length = get_length_of_linked_list(head1);
    document.write("<br>Log: list1 length = " + list1length);
    let list2node = null;;
    let list2length = get_length_of_linked_list(head2);
    document.write(" list2 length = " + list2length);

    // Keep longer one in list1node and calculate the different for moving
    // that many nodes on longer list, then compare 2 lists data for
    // intersection
    let length_diff = 0;
    if (list1length >= list2length) {
        length_diff = list1length - list2length;
        list1node = head1;
        list2node = head2;
    }
    else {
        length_diff = list2length - list1length;
        list1node = head2;
        list2node = head1;
    }

    // Move next length difference times on longer list
    while (length_diff > 0) {
        document.write("<br>Log: list1node is at " + list1node.data + 
            "<br><br>");
        list1node = list1node.next;
        length_diff--;
    }

    // Now compare longer list node data with shorter list node data to
    // see if they are same i.e. have intersection
    while (list1node) {
        document.write("Log: list1node is at " + list1node + " " + 
            list1node.data + "<br>");
        document.write("Log: list2node is at " + list1node + " " + 
            list2node.data + "<br>");
        if (list1node.data === list2node.data) {
            // See all the next nodes data of both lists are same
            // If same it is intersection return list1node.data or continue
            if (all_next_nodes_are_same(list1node.next, list2node.next)) {
                return list1node.data;
            }
        }
        list1node = list1node.next;
        list2node = list2node.next;
    }

    return null;
};