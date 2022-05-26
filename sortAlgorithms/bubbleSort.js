function bubbleSort(arr){
    let noSwap;
    do {
      // if no boolean is variable is set (noSwap), then the algorithm will continue ordering the elements
      noSwap = false
      for (let i = 0; i < arr.length; i++){
        if (arr[i] > arr[i + 1]){
          let swapValues = arr[i];
          arr[i] = arr[i + 1];
          arr[i + 1] = swapValues;
          noSwap = true;
        }
      }    
    } while (noSwap);
  
    return arr;
  }
  
  console.log(bubbleSort([2, 1, 4, 5, 3]));