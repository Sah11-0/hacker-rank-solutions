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