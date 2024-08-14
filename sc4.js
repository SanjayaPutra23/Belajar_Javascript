// CONTROL STRUCTURES

// IF and ELSE
let name = "kittens";
if (name === "puppies") {
    name += " woof";
} else if (name === "kittens") {
    name += " meow";
} else {
    name += "!";
}
name === "kittens meow";


// WHILE and DO WHILE
let attempts = 0;
let maxAttempts = 5;
let input;

// Loop pertama: Memastikan program berhenti setelah sejumlah percobaan tertentu
while (attempts < maxAttempts) {
    console.log("Attempt number: " + (attempts + 1));

  // Loop kedua: Memastikan input adalah angka yang valid
do {
    input = prompt("Enter a number between 1 and 10:");
    input = parseInt(input, 10); // Mengubah input menjadi angka
} while (isNaN(input) || input < 1 || input > 10);

    console.log("You entered a valid number: " + input);

    attempts++;
}

console.log("Program finished after " + attempts + " attempts.");


