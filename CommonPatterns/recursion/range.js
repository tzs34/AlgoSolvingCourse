function recursiveRange(){
   if(num === 0 ) return 1
   return num + recursiveRange(num - 1)
}