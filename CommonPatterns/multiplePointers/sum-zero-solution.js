
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

sumZero([-4,-3,-2,0,1,2,5])