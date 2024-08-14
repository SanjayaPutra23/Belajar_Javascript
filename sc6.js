// ARRAYS

// Membuat array dengan beberapa elemen
let fruits = ["Apple", "Banana", "Mango", "Orange"];

// Mengakses elemen array
console.log("First fruit: " + fruits[0]); // Output: First fruit: Apple
console.log("Third fruit: " + fruits[2]); // Output: Third fruit: Mango

// Menambah elemen baru ke array
fruits.push("Pineapple");
console.log("Fruits after adding Pineapple: " + fruits); // Output: Fruits after adding Pineapple: Apple,Banana,Mango,Orange,Pineapple

// Menghapus elemen terakhir dari array
let lastFruit = fruits.pop();
console.log("Fruits after removing last element: " + fruits); // Output: Fruits after removing last element: Apple,Banana,Mango,Orange
console.log("Removed fruit: " + lastFruit); // Output: Removed fruit: Pineapple

// Menambah elemen baru ke awal array
fruits.unshift("Strawberry");
console.log("Fruits after adding Strawberry at the beginning: " + fruits); // Output: Fruits after adding Strawberry at the beginning: Strawberry,Apple,Banana,Mango,Orange

// Menghapus elemen pertama dari array
let firstFruit = fruits.shift();
console.log("Fruits after removing first element: " + fruits); // Output: Fruits after removing first element: Apple,Banana,Mango,Orange
console.log("Removed fruit: " + firstFruit); // Output: Removed fruit: Strawberry

// Menemukan indeks dari sebuah elemen
let indexOfMango = fruits.indexOf("Mango");
console.log("Index of Mango: " + indexOfMango); // Output: Index of Mango: 2

// Menghapus elemen dari tengah array
let removedFruit = fruits.splice(1, 1); // Menghapus elemen di indeks 1
console.log("Fruits after removing Banana: " + fruits); // Output: Fruits after removing Banana: Apple,Mango,Orange
console.log("Removed fruit: " + removedFruit); // Output: Removed fruit: Banana

// Menggabungkan dua array
let vegetables = ["Carrot", "Potato"];
let food = fruits.concat(vegetables);
console.log("Combined array (food): " + food); // Output: Combined array (food): Apple,Mango,Orange,Carrot,Potato

// Mengiterasi array dengan for loop
console.log("Iterating through the fruits array:");
for (let i = 0; i < fruits.length; i++) {
    console.log(fruits[i]);
}

// Mengiterasi array dengan forEach
console.log("Iterating through the fruits array with forEach:");
fruits.forEach(function(fruit) {
    console.log(fruit);
});

// Mengurutkan array
fruits.sort();
console.log("Sorted fruits: " + fruits); // Output: Sorted fruits: Apple,Mango,Orange
