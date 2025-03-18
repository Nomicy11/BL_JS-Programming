const number = parseInt(process.argv[2]); // Get input from the command line

if (isNaN(number) || number < 1 || number > 7) {
    console.log("Please enter a valid number between 1 and 7.");
    process.exit(1);
}

const weekDays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

console.log("Day of the week:", weekDays[number - 1]); // Array index starts from 0
