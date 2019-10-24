/*
accept sorted array
find  unique values in array using the pointer approach
array is sorted and can contain -neg numbers

[1,1,1,2] // 2
[1,2,3,4,4,4,7,12,12,] // 7
[] // 0
*/

function findUnique(arr){

    if(arr.length === 0) return 0

    let p1 = 0
    let p2 = 1
    let len = arr.length
    let unique = []
    let currIndex = 0

    while(p2 < len){
        let val1 = arr[p1]
        let val2 = arr[p2]
        if(val1 === val2){
            p2 +=1
            if(unique.length){
                unique[currIndex] = null
            }
        }else{
            unique.push(val2)
            currIndex = unique.length
            p1 = p2
            p2 +=1
        }

    }

    return unique.length > 0 ? unique.filter( o => o !== null) : []
}

findUnique([1,1,1,2])