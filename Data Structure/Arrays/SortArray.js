// Function to generate a random 3-digit number
function getRandomNumber() {
    return Math.floor(Math.random() * 900) + 100; // 100 to 999
}

// Generate 10 random numbers and store them in an array
const numbers = Array.from({ length: 10 }, getRandomNumber);

console.log("Generated Numbers:", numbers);

// Function to find the second largest and second smallest without sorting
function findSecondLargestAndSmallest(arr) {
    let largest = -Infinity, secondLargest = -Infinity;
    let smallest = Infinity, secondSmallest = Infinity;

    for (let num of arr) {
        // Finding the largest and second largest
        if (num > largest) {
            secondLargest = largest;
            largest = num;
        } else if (num > secondLargest && num !== largest) {
            secondLargest = num;
        }

        // Finding the smallest and second smallest
        if (num < smallest) {
            secondSmallest = smallest;
            smallest = num;
        } else if (num < secondSmallest && num !== smallest) {
            secondSmallest = num;
        }
    }

    return { secondLargest, secondSmallest };
}

// Find 2nd largest and 2nd smallest without sorting
const { secondLargest, secondSmallest } = findSecondLargestAndSmallest(numbers);
console.log("\nWithout Sorting:");
console.log("Second Largest Number:", secondLargest);
console.log("Second Smallest Number:", secondSmallest);

// Sort the array
const sortedNumbers = [...numbers].sort((a, b) => a - b);
console.log("\nSorted Numbers:", sortedNumbers);

// Find 2nd largest & 2nd smallest using sorting
const secondSmallestSorted = sortedNumbers[1];
const secondLargestSorted = sortedNumbers[sortedNumbers.length - 2];

console.log("\nUsing Sorting:");
console.log("Second Largest Number:", secondLargestSorted);
console.log("Second Smallest Number:", secondSmallestSorted);
