function bubbleSort(arr) {
  //[4, 20, 12, 10, 7, 9]
  for (let i = arr.length; i > 0; i--) {
    for (let j = 0; j < i - 1; j++) {
      if(arr[j]>arr[j+1]){
        [arr[j],arr[j+1]]= [arr[j+1],arr[j]]
      }
    }
  }
  return arr
}

module.exports = bubbleSort;
