function findTriplets(arr) {
    let triplets = [];
    let n = arr.length;

    // Check all possible triplets
    for (let i = 0; i < n - 2; i++) {
        for (let j = i + 1; j < n - 1; j++) {
            for (let k = j + 1; k < n; k++) {
                if (arr[i] + arr[j] + arr[k] === 0) {
                    triplets.push([arr[i], arr[j], arr[k]]);
                }
            }
        }
    }

    return triplets;
}

// Read input numbers from command line
const numbers = process.argv.slice(2).map(Number);

if (numbers.length < 3) {
    console.log("Please enter at least 3 numbers.");
} else {
    const result = findTriplets(numbers);
    if (result.length === 0) {
        console.log("No triplets found that sum to zero.");
    } else {
        console.log("Triplets that sum to zero:", result);
    }
}
