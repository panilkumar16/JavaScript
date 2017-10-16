// Given an array of integers, rotate the array by 'N' elements.
// Here, N is an integer.

// For example: [1, 2, 3, 4, 5] where no of rotations = 2
// First reverse the array
// [5, 4, 3, 2, 1]
// Second reverse 0 to no of rotations -1 elements i.e. 0 to 1
// [4, 5, 3, 2, 1]
// Third reverse no. of rotations to array length -1 elements i.e. 2 to end
// [4, 5, 1, 2, 3]

// Runtime Complexity is Linear O(n)
// Memory Complexity is Constant O(1)

// Function to reverse an array
// Arguments passed are array, start and end points to reverse
let reverse_arr = function(arr, st, end) {
    while (st < end) {
        let temp = arr[st];
        arr[st] = arr[end];
        arr[end] = temp;
        st += 1;
        end -= 1;
    }

    return arr;
};

// Function to rotate an array by n elements
// Arguments taken are array and number to rotate that many times
// Returns rotation completed array
let rotate_arr = function(arr, no_of_rotates) {
    let arr_length = arr.length;

    // Let's normalize no of rotation, when it is > arr length or negative
    no_of_rotates = no_of_rotates % arr_length;
    if (no_of_rotates < 0) {
        no_of_rotates = no_of_rotates + arr_length;
    }

    // Displaying original array
    document.write(arr);
    document.write("<br>");
    // First reverse the array
    arr = reverse_arr(arr, 0, arr_length - 1);

    // Second reverse 0 to no of rotations -1 elements
    arr = reverse_arr(arr, 0, no_of_rotates - 1);

    // Third reverse no. of rotations to array length -1 elements
    arr = reverse_arr(arr, no_of_rotates, arr_length - 1);

    // Displaying rotated array
    //alert(arr);
    document.write(arr);
};