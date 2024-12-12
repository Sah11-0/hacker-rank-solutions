// Given an array of integers, calculate the ratios of its elements that are positive, negative, and zero. Print the decimal value of each fraction on a new line with  places after the decimal. Print the ratios of positive, negative and zero values in the array. Each value should be printed on a separate line with  digits after the decimal. The function should not return a value.

function plusMinus(arr) {
    let positiveCount = 0
    let negativeCount = 0
    let zeroCount = 0;
    const n = arr.length;

    for (let num of arr) {
        if (num > 0) positiveCount += 1;
        else if (num < 0) negativeCount += 1;
        else zeroCount += 1;
    }

    const positiveRatio = (positiveCount / n).toFixed(6);
    const negativeRatio = (negativeCount / n).toFixed(6);
    const zeroRatio = (zeroCount / n).toFixed(6);

    console.log(`${positiveRatio}\n${negativeRatio}\n${zeroRatio}`);
}