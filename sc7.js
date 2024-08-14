// FUNCTION

// 1. Fungsi Sederhana tanpa Parameter
// Definisi fungsi sederhana
function greet() {
    console.log("Hello, world!");
}

// Memanggil fungsi
greet(); // Output: Hello, world!


// 2. Fungsi dengan Parameter
// Definisi fungsi dengan parameter
function greetWithName(name) {
    console.log("Hello, " + name + "!");
}

// Memanggil fungsi dengan argumen
greetWithName("Alice"); // Output: Hello, Alice!
greetWithName("Bob");   // Output: Hello, Bob!


// 3. Fungsi dengan Return Value
// Definisi fungsi dengan nilai kembali
function add(a, b) {
    return a + b;
}

// Memanggil fungsi dan menyimpan hasilnya
let result = add(5, 3);
console.log("Sum: " + result); // Output: Sum: 8


// 4. Fungsi sebagai Ekspresi (Function Expression)
// Mendefinisikan fungsi sebagai ekspresi
let multiply = function(x, y) {
    return x * y;
};

// Memanggil fungsi ekspresi
console.log("Product: " + multiply(4, 5)); // Output: Product: 20


// 5. Fungsi Anonim (Anonymous Function) dan Callback
// Mendefinisikan fungsi dengan arrow function
let divide = (a, b) => {
    return a / b;
};

// Fungsi arrow dengan satu baris kode (implisit return)
let square = x => x * x;

// Memanggil fungsi arrow
console.log("Division: " + divide(10, 2)); // Output: Division: 5
console.log("Square: " + square(4));       // Output: Square: 16



// 6. Fungsi Rekursif
// Definisi fungsi rekursif untuk menghitung faktorial
function factorial(n) {
    if (n === 0) {
        return 1;
    } else {
        return n * factorial(n - 1);
    }
}

// Memanggil fungsi rekursif
console.log("Factorial of 5: " + factorial(5)); // Output: Factorial of 5: 120

