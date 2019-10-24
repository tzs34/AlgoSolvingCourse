/*
Divide the dataset into chunks and carry out an operation on the chunks
Notes 
Only on sorted array
If value very high start at the end perhaps

1. Divide in half is mid point higher of lower than searched for value
2. If higher divider upper half in two repeat
3. Lower do same to first half.
*/

function findIndexOfValInArray(array, value){

    let min = 0;
    let max = array.length -1;

    while(min <= max){

        let mid = Math.floor((min+max) /2)
        let current = array[mid]

        if(current < value){
            min = middle + 1
        }else if (current > value){
            max = middle -1
        }else{
            return mid
        }
    }
    return -1
}