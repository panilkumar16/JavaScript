// Given three integer arrays sorted in ascending order, find the smallest 
// number that is common in all three arrays.

// Runtime Complexity is Linear, O(n) where n is length of smallest array
// Memory Complexity is Constant, O(1)

// Function to find smallest common number in 3 sorted arrays
// Arguments passed are 3 sorted arrays
// Returns smallest common number in those 3 sorted arrays
let find_smallest_common_no = function(arr1, arr2, arr3) {
    let cur1 = 0;
    let cur2 = 0;
    let cur3 = 0;

    // Loop till atleast one array reaches to the end
    while (cur1 < arr1.length && 
        cur2 < arr2.length && 
        cur3 < arr3.length) {

        // Found smallest common number
        if (arr1[cur1] == arr2[cur2] && arr2[cur2] == arr3[cur3]) {
            alert(arr1[cur1]);
            return arr1[cur1];
        }

        // Iterate the array with smallest number to find smallest common no
        if (arr1[cur1] < arr2[cur2] && arr1[cur1] < arr3[cur3]) {
            cur1 += 1;
        }
        else if (arr2[cur2] < arr1[cur1] && arr2[cur2] < arr3[cur3]) {
            cur2 += 1;
        }
        else {
            cur3 += 1;
        }
    }

    alert(-1);
    return -1;
};