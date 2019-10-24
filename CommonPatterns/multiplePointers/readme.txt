Create pointers of values that correspond to an index or position and move towards 
begining , middle or end based on a certain condition.

Very efficient for solving problems with minimal time and space complexity.

So you have a string 'sfdgeysbhg'
We search for something that meets a condition (i.e. a pair)

Examples 

ZeroSum
Write a function zeroSum which accepts a sorted array of intergers
Th function should find the first apir where sum is zeroSumReurn array of pair or undefined if no sum zeroSum
sumZero([-3, -2, -1, 0, 1, 2, 3]) //[-3, 3]
sumZero([-2, 0, 1]) //undefined

WARNING - ARRAY MUST BE SORTED
Solution use two pointers starting at beginning and end orf array
let example = [-4,-3,-2,-1,0,1,2,5]

function sumZero(arr){
    let left = 0
    let right = arr.length

    while(left < right){
        let sum = arr[left] + arr[right]
        if(sum === 0){
            return [arr[left] , arr[right]]
        }else if( sum > 0){
            right--  /// bring right down one
        }else{
            left++ // move left up one
        }
    }
}

O(n) time
O(1) Space