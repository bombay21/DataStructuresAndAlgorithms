let countUniqueValues = (arr) => {
    // arr is sorted
    let count = 0
    
    if (arr.length == 0) {
      // return 0 if array is empty
      count = 0;
    } else if (arr.length == 1){
      // return 1 if there's only 1 item in the array
      count = 1;
    } else {
        count = 1
        let left = 0,
        right = arr.length - 1;

        while (arr[left] < arr[right]) {
        if (arr[left] < arr[left + 1]) count++;
        left++;
        }
    }
    
    console.log(count)
    return count
}

countUniqueValues([-2,-2,0])