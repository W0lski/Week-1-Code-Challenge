// Student Grade Generator function

// Import readline module
const readline = require('readline');

// Create an interface to read user input
let grade = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Prompts user to enter student marks btn 0 & 100
grade.question('Enter student marks btn 0 & 100: ', (marks) => {
  
  // Check marks and print corresponding message
  if(marks > 79 ) {
        console.log('Student grade is A');
  
      }  else if (marks >= 60) {
        console.log('Student grade is B');
  
      }  else if (marks >= 50) {
        console.log('Student grade is C');
  
      } else if (marks >= 40) {
        console.log('Student grade is D');
  
      } else {
        console.log('Student grade is E');
      } 
    
    // Close the interface to end the program
    grade.close();
});
