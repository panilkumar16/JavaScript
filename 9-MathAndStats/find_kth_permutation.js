/*
Given a set of n elements find their kth permutation.

Example:
Input : 123, find 3rd permutation
Ouput : 123, 132, 213, 231, 312, 321 out of these 3rd permutation is 213

Algorithm:
For a given n (no of elements) there will be n! (n factorial) permutations.  
For 3 elements 3! = 3 * 2 * 1 = 6 permutations.

123
132
---
213
231
---
312
321

Pass input, kth permutation, result into the function

If input is empty or input length is 0 return

If kth permutation passed is 0 or less than 0 or greater than no. of
permutations display message and return

Create a temp copy of the input temp_input = input, if you need to use
input later, or use input itself.
Example: temp_input = [1, 2, 3]

Find length of input array (n)

Create a result array to store kth permutation

If we have to find kth element in permutations first we find in which block
it is in.
Find out which block kth element is in and select the first element of that 
block (this can be done by doing (k-1)/block size )
block size = factorial of (n - 1)
which_block = (k - 1) / block size (< 1 is 0 block, 1 > 2 is 2nd block, so on)

Store this which_block number element of temp_input in result and 
remove that element from temp_input as we found the first element of
the kth permutation.

Calculate no. of permutations skipped = block size * which block

Now deduct from k the no. of permutations skipped
no. of permutations skipped depends on which block we got above.  For 1st 
block no. of permutations skipped is 0, for 2nd block no. of permutations 
skipped is 1 * block size, for 3rd block no. of permuations skipped is 
2 * block size, so on.
k = k - no. of permutations skipped

In recursion send the temp_input, k, result.  recursion stops when temp_input
length becomes 0. By then result will have the kth permutation.

Finally the result contains the kth permutation.


Runtime Complexity: Linear, O(n)
Memory Complexity: Linear, O(n) - because recursive function uses stack
*/

// Function to find the factorial of a given number
// Parameters: number to find its factorial
// Return: factorial of the given number
let factorial = function(n) {
    // The factorial of 0 or 1 is 1 so return 1
    if (n === 0 || n === 1) {
        return 1;
    }

    return n * factorial(n - 1);
};

// Function to find kth permutation of a given input set
// Parameters: input set, kth permutation to find, result
// Return: kth permutation combination order of given input
let find_kth_permutation = function(input, k, result) {
    // If input is empty or input length is 0 return
    if (!input || input.length === 0) {
        return;
    }

    let inputLength = input.length;
    let totalPermutations = factorial(inputLength);

    // Check for valid kth permutation value
    if (k <= 0  || k > totalPermutations) {
        console.log("kth permutation should be between 1 and " + 
            totalPermutations);
        document.write("kth permutation should be between 1 and " + 
            totalPermutations + "<br>");
        return;
    }

    // Block size is factorial of no. of input elements - 1
    let blockCount = factorial(inputLength - 1);
    
    // Which block = (k - 1) / block size integer floor
    let whichBlockSelected = Math.floor((k - 1) / blockCount);
    
    // Add this block element to result
    result[0] += '' + input[whichBlockSelected];
    
    // Remove this block element from input as we have found the element
    input.splice((whichBlockSelected), 1);
    
    // Deduce k with the number of permutations skipped
    k = k - (blockCount * whichBlockSelected);

    // Recursively call function to find other elements of the kth 
    // permutation
    find_kth_permutation(input, k, result);
}