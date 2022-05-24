function binarySearch(arr, target){
    
    let left = 0;
    let right = arr.length - 1;
  
    // array should be always sorted
    let sortedArray = arr.sort((a, b) => a - b);
    
  
    while (left <= right){
  
      // use math.floor() because the value received won't be a float index, so we have to convert the float point value to a int one. 
      let mid = Math.floor((left + right) / 2);
      if (sortedArray[mid] === target) return mid;
  
      if (sortedArray[mid] < target){
        left = mid + 1;
      } else {
        right = mid - 1;
      }
    }
  
    return null;
  }
  
  let array = [5, 3, 3, 4, 1, 6, 7];
  console.log(binarySearch(array, 1))