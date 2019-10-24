Frequency counting pattern good for counting the occurrence of values.
Useful when multiple inputs which are compared , or anagrams of each other.
Usually 0(n)

Question 
write a function called same which accepts 2 arrays and returns true if every value 
in array one has a corresponding bvalue (at same index) which is the squared value of it.

e.g
[1,2,3] [2,4,9] // true
[1,2,3] [2,4,100] // false

A naive approach: Loop and nested indexOf ensure 0(n2)

function same(arr1, arr2){
    if(arr1.length !== arr2.length){
        return false;
    }
    for(let i = 0; i < arr1.length; i++){
        let correctIndex = arr2.indexOf(arr1[i] ** 2)
        if(correctIndex === -1) {
            return false;
        }
        arr2.splice(correctIndex,1) 
    }
    return true;
}

same([1,2,3,2], [9,1,4,4])

But 
function same = (arrOne, arrTwo) {
    
    if(arrOne.length !== arrTwo.length){
            return false;
    }
    return arrOne.reduce((acc, value, index) =>{
        arrTwo[index] === value ** 2 // this is quickest way to square a number
        }, true)
}

Note gertting an element by inex is o(1) , and comparing is a const so ignore . Reduce isequivilent to one loop . 
Therefore o(n)

Can avoid O(n2) , like nested loops for strings or arrays
