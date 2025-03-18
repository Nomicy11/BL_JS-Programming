const choice = parseInt(process.argv[2]);
const value = parseFloat(process.argv[3]);

switch (choice) {
    case 1:
        console.log(`${value} Feet = ${value * 12} Inches`);
        break;
    case 2:
        console.log(`${value} Feet = ${(value * 0.3048).toFixed(4)} Meters`);
        break;
    case 3:
        console.log(`${value} Inches = ${(value / 12).toFixed(4)} Feet`);
        break;
    case 4:
        console.log(`${value} Meters = ${(value * 3.2808).toFixed(4)} Feet`);
        break;
    default:
        console.log("Invalid choice! Enter 1 (Feet to Inch), 2 (Feet to Meter), 3 (Inch to Feet), or 4 (Meter to Feet).");
}
