const day = parseInt(process.argv[2]); // Get day from command line
const month = parseInt(process.argv[3]); // Get month from command line

if (isNaN(day) || isNaN(month)) {
    console.log("Please provide valid numeric inputs for day and month.");
    process.exit(1);
}

const isValid = (month === 3 && day >= 20) ||  // March 20 or later
                (month === 4) ||               // Entire April
                (month === 5) ||               // Entire May
                (month === 6 && day <= 20);    // June 20 or earlier

console.log(isValid);
