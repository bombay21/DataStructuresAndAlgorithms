function AveTwoSortedArr(nums1,nums2){
    let result = 0
    let i = 0, j = 0
    let sortedArr = []

    while( i < nums1.length && j < nums2.length){
        if(nums1[i] < nums2[j]){
            sortedArr.push(nums1[i])
            i++
        }else{
            sortedArr.push(nums2[j])
            j++
        }
    }
    while(i < nums1.length){
        sortedArr.push(nums1[i]);
        i++
    }
    while (j < nums2.length) {
      sortedArr.push(nums2[j]);
      j++;
    }
    
    let lA = sortedArr.length
    if(lA < 1) return 0
    let isEven = lA % 2 === 0 ? true : false
    let mil = Math.floor(lA / 2)
    
    result = !isEven ? sortedArr[mil] : (sortedArr[mil-1] + sortedArr[mil]) / 2
    
    // return sortedArr
    return result
}

console.log(AveTwoSortedArr([],[]));