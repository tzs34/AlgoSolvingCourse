/* Apply frequency counter pattern to an anagram
validAnagram('', '') // true
validAnagram('azz', 'zza') // true
validAnagram('azz', 'zaa') // false
validAnagram('cinema', 'iceman') // true
*/

// ALAWAYS CHECK EDGE CASES - no spaces or no characters and all lowercase

isEven = (value) => value % 2 === 0


function isAnagram(str1, str2) {

    if(str1.length !== str2.length){
        return false
    }

    let strArr= str1.split('').concat( str2.split('')) /// O(1)

    let counts = strArr.reduce( (acc, letter) => {
        if(acc[letter]){
            acc[letter] += 1
        } else{
            acc[letter] = 1
        } 

        return acc
    }, {}) // O(n)

    return Object.values(counts).every(isEven) // O(n)
}


// Or course suggestion - might be more verbose but better ?

function suggested (first, second) {
    let firstLen  = first.length
    let secondLen = second.length
    let lookup = {}

    for(let i = 0; i < firstLen; i++){
            let letter = first[i]
            lookup[letter] ? lookup[letter] += 1 : lookup[letter] = 1

    }

    for(let i = 0; i < secondLen; i++){
        let letter = first[i]
        if(!lookup[letter]){
            return false
        }else{
            lookup[letter] -= 1
        }
    }   
    return true
}

// here looup[letter] = 0 is falsey