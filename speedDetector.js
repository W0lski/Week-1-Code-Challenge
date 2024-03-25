// Speed Detector
// Import
const readline = require('readline');

let sp = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Prompt the user to input car speed
sp.question('Enter the speed of the car: ', (speed) => {
    speed = parseFloat(speed);

    // Declare speed limit and demerit points
    const speedLimit = 70;
    const kmPerDemeritPoint = 5;
    let demeritPoints = 0;

    // Calculate demerits if user 
    if (speed <= speedLimit) {
        console.log("OK");
    } else {
      // If speed exceeds the limit, calculate demerit points
        demeritPoints = Math.floor((speed - speedLimit) / kmPerDemeritPoint);
        console.log(`Demerit points: ${demeritPoints}`);
    }

    // Check if the demerit points exceed 12 
    if (demeritPoints >= 12)
    console.log('license suspended')

    // Close the interface to end the program
    sp.close();
});