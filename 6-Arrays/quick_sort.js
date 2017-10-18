// Given an integer array, sort it in ascending order using quicksort.

// Here is an overview of how the quicksort algorithm works.
// Select a pivot element from the array. We can pick the first element as 
//   the pivot (following Hoare's algorithm). Another common approach is to 
//   select a random element as the pivot.
// Reorder the array by comparing with the pivot element such that smaller 
//   values end up at the left side, and the larger values end up at the 
//   right side of the pivot.
// Now, the pivot element is in its correct sorted position.
// select arr[low] as pivot i=low, j= high-1, move index right i++ till 
//   arr[i] is <= pivot, move index left j-- till arr[j] is > pivot 
//   then do swap of arr[i] and arr[j].  Finally arr[low] = arr[j],
//   arr[j] = pivot i.e. bringing large numbers to right, partition is j
// Applying the above steps, we can recursively sort the sublists on the 
//   right and left sides of the pivot.

// Runtime Complexity: Linearithmic, O(nlogn).
// Memory Complexity: Logarithmic, O(logn).  Recursive solution has O(logn) 
//   memory complexity as it will consume memory on the stack.


// Function to partition the array after moving higher values to right and
// lower values to left using pivot.  Used by quick sort recursive function
let partition = function(arr, low, high) {
    // Use pivot value as first element of array
    pivot_value = arr[low];
    // Left index is low
    i = low;
    // Right index is high
    j = high;

    while (i < j) {
        // Move index from left to right till you find value greater than pivot
        while (i <= high && arr[i] <= pivot_value) {
            i++;
        }

        // Move index from right to left till you find value less than pivot
        while (arr[j] > pivot_value) {
            j--;
        }

        // At this point left index will be having value greater than pivot
        // and right index will be having value less than pivot.  Swap values
        // if left index is less than right index to have lower values 
        // on left and higher values on right
        if (i < j) {
            let temp = arr[i];
            arr[i] = arr[j];
            arr[j] = temp;
        }
        else {
            // Left index checked all the greater values than pivot
            break;
        }
    }

    // At this poin right index will be having low value than pivot and
    // right index is at a place for pivot value as after that values are
    // bigger than pivot.  Swap value at right index and pivot so low value
    // will be at left and pivot is at its place.
    arr[low] = arr[j];
    arr[j] = pivot_value;

    // Pivot index is j, so partition at j for quick sort recursive
    return j;
};

// Function to do quick sort recursively of given array, low and high index
// Arguments passed are array, low index, and high index
// Returns part of array that is sorted based on low and high index given
let quick_sort_rec = function(arr, l, h) {
    if (l < h) {
        let pivot_index = partition(arr, l, h);
        // pivot_index is at it position so do not include pivot_index,
        // from low index to pivot_index -1 for 1st partition
        quick_sort_rec(arr, l, pivot_index - 1);
        // from pivot_index + 1 to high index for 2nd partition
        quick_sort_rec(arr, pivot_index + 1, h);
    }
};

// Function to do quick sort of the given array
// Arguments need to pass is array of integers
// Returns array that is sorted in ascending order
let quick_sort = function(arr) {
    console.log(arr);
    quick_sort_rec(arr, 0, arr.length - 1);
    console.log(arr);
};