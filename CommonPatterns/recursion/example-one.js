function countDown (num) {
    if(num === 0) return num

    console.log(num)

    num--

    countDown(num)

}

countDown(9)