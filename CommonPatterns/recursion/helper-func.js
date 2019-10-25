/*
A common pattern is to use a helper function called
Helper method recursion . Usually inside the function another function is declared 
It avoids resetting a collection which collects values / objects 
If the result array in function below was called recursively 
it would always be reset to empty '[]' , so nest the recursive helper function within the function
*/
function collectEvenNumbers( arr ){

    let result = []
    function helper(input){
        if(input.length === 0 ) return 

        if(input[0] % 2 === 0){
            result.push(input[0])
        }
        helper(input.slice(1))
    }

    helper(arr)

    return result
}

