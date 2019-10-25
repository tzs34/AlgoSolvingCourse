function search(arr, item){
    let len = arr.length
    for(let i = 0; i < len; i++){
        if(item === arr[i]){
            return i
        }
    }

    return i-1
}