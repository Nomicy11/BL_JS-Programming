// Function to find prime factors of a number
function getPrimeFactors(n) {
    let factors = [];

    // Divide by 2 until n is odd
    while (n % 2 === 0) {
        factors.push(2);
        n = n / 2;
    }

    // Check for odd factors from 3 to sqrt(n)
    for (let i = 3; i * i <= n; i += 2) {
        while (n % i === 0) {
            factors.push(i);
            n = n / i;
        }
    }

    // If n is still a prime number greater than 2
    if (n > 2) {
        factors.push(n);
    }

    return factors;
}

// Read input number from command line
const n = parseInt(process.argv[2]);

if (isNaN(n) || n <= 1) {
    console.log("Please enter a valid integer greater than 1.");
} else {
    const primeFactors = getPrimeFactors(n);
    console.log(`Prime Factors of ${n}:`, primeFactors);
}
