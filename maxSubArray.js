let maxSubArray = (arr, n) => {
    let maxSum = 0
    let tempSum = 0
    if(arr.length < n) return null
    for(let i=0;i<n;i++){
        maxSum += arr[i]
    }
    tempSum = maxSum
    for(let i=n;i<arr.length;i++){
        tempSum += arr[i] - arr[i - n];
        maxSum=Math.max(maxSum,tempSum)
    }
    console.log(maxSum)
    return maxSum
}

maxSubArray([2,4,7,1,4,5,9,1],1);