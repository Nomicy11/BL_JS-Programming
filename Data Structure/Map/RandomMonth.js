// Function to generate a random birth month (1 to 12)
function getRandomMonth() {
    return Math.floor(Math.random() * 12) + 1;
}

// Dictionary to store individuals based on birth month
let birthMonthData = {};

// Generate birth months for 50 individuals
for (let i = 1; i <= 50; i++) {
    let month = getRandomMonth();

    // Store individuals in an array under the respective month
    if (!birthMonthData[month]) {
        birthMonthData[month] = [];
    }
    birthMonthData[month].push(`Person${i}`);
}

// Print individuals grouped by birth month
console.log("Individuals having birthdays in the same month:");
for (let month in birthMonthData) {
    console.log(`Month ${month}:`, birthMonthData[month]);
}
