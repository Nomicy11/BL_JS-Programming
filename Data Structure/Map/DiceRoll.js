// Function to roll a die (1-6)
function rollDie() {
    return Math.floor(Math.random() * 6) + 1;
}

// Dictionary to store die roll frequencies
let rollResults = { 1: 0, 2: 0, 3: 0, 4: 0, 5: 0, 6: 0 };

// Keep rolling until one number appears 10 times
let maxRolls = 10;
let reachedMax = false;

while (!reachedMax) {
    let roll = rollDie();
    rollResults[roll]++;

    // Check if any number has reached the max count
    if (rollResults[roll] === maxRolls) {
        reachedMax = true;
    }
}

// Display roll results
console.log("Final Roll Counts:", rollResults);

// Find number with maximum and minimum occurrences
let maxNumber = Object.keys(rollResults).reduce((a, b) => rollResults[a] > rollResults[b] ? a : b);
let minNumber = Object.keys(rollResults).reduce((a, b) => rollResults[a] < rollResults[b] ? a : b);

console.log(`\nNumber that appeared 10 times first: ${maxNumber}`);
console.log(`Number that appeared least times: ${minNumber} (${rollResults[minNumber]} times)`);
