// JUDUL DATA TYPES


// Numbers
console.log(3 / 2); // 1.5, not 1
console.log(0.1 + 0.2); // 0.30000000000000004

// Number Literals
console.log(0b111110111); // 503
console.log(0o767); // 503
console.log(0x1f7); // 503
console.log(5.03e2); // 503

// Big Integers
console.log(-3n / 2n); // -1n

// Arithmetic Operators
Math.sin(3.5);
const circumference = 2 * Math.PI * r;

// NAN (Not a Number)
// Mencoba mengkonversi string yang bukan angka ke angka
let result = Number("Hello World");
console.log(result);  // Output: NaN
// Melakukan operasi matematika yang tidak valid
let division = 0 / 0;
console.log(division);  // Output: NaN
// Menggunakan NaN dalam perhitungan
let invalidCalculation = Math.sqrt(-1);
console.log(invalidCalculation);  // Output: NaN
// Memeriksa apakah nilai adalah NaN
if (isNaN(result)) {
    console.log("Result is Not a Number (NaN)");
}

// STRING
console.log("Hello, world");
console.log("你好，世界！");

// BOOLEAN
Boolean(""); // false
Boolean(234); // true
