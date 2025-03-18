const number = parseInt(process.argv[2]); // Get input from command line

if (isNaN(number) || number < 1) {
    console.log("Please enter a valid positive number like 1, 10, 100, 1000, ...");
    process.exit(1);
}

const placeValues = {
    1: "Unit",
    10: "Ten",
    100: "Hundred",
    1000: "Thousand",
    10000: "Ten Thousand",
    100000: "Lakh",
    1000000: "Ten Lakh",
    10000000: "Crore"
};

console.log(placeValues[number] || "Invalid input! Please enter a valid place value like 1, 10, 100, 1000, ...");
