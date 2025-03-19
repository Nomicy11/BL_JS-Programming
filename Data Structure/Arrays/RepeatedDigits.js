function findRepeatedDigits() {
    let repeatedNumbers = [];

    for (let i = 11; i < 100; i += 11) {
        repeatedNumbers.push(i);
    }

    return repeatedNumbers;
}

// Store and display the repeated digit numbers
const repeatedNumbers = findRepeatedDigits();
console.log("Numbers with repeated digits (0-100):", repeatedNumbers);
