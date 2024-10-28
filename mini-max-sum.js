function miniMaxSum(arr) {
    const sortedArr = arr.sort((a, b) => a - b);
    const minSum = sortedArr.slice(0, 4).reduce((a, c) => a + c, 0)
    const maxSum = sortedArr.slice(1).reduce((a, c) => a + c, 0)
    console.log(`${minSum} ${maxSum}`);
}