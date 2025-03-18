const number = parseInt(process.argv[2]); // Get the input number from the command line

if (isNaN(number) || number < 0 || number > 9) {
    console.log("Please enter a valid single-digit number (0-9).");
    process.exit(1);
}

const numberWords = ["Zero", "One", "Two", "Three", "Four", "Five", "Six", "Seven", "Eight", "Nine"];

console.log("Number in words:", numberWords[number]);
