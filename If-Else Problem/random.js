function getRandomThreeDigitNumber() {
    return Math.floor(Math.random() * 900) + 100; // Generates a number between 100 and 999
}

let numbers = [];
for (let i = 0; i < 5; i++) {
    numbers.push(getRandomThreeDigitNumber());
}

let min = Math.min(...numbers);
let max = Math.max(...numbers);

console.log("Generated numbers:", numbers);
console.log("Minimum value:", min);
console.log("Maximum value:", max);
