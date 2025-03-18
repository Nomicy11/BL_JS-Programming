const a = parseFloat(process.argv[2]); 
const b = parseFloat(process.argv[3]); 
const c = parseFloat(process.argv[4]); 

if (isNaN(a) || isNaN(b) || isNaN(c)) {
    console.log("Please enter three valid numbers.");
    process.exit(1);
}

// Perform arithmetic operations
const result1 = a + b * c;
const result2 = a % b + c;
const result3 = c + a / b;
const result4 = a * b + c;

// Store results in an array
const results = [result1, result2, result3, result4];

// Find maximum and minimum values
const maxValue = Math.max(...results);
const minValue = Math.min(...results);

// Display results
console.log(`Results:`);
console.log(`1. a + b * c = ${result1}`);
console.log(`2. a % b + c = ${result2}`);
console.log(`3. c + a / b = ${result3}`);
console.log(`4. a * b + c = ${result4}`);
console.log(`Maximum Value: ${maxValue}`);
console.log(`Minimum Value: ${minValue}`);
