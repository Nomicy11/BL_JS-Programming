const year = parseInt(process.argv[2]); // Get year from command line

if (isNaN(year) || year < 1000 || year > 9999) {
    console.log("Please enter a valid 4-digit year.");
    process.exit(1);
}

const isLeapYear = (year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0);

console.log(isLeapYear ? "Leap Year" : "Not a Leap Year");
