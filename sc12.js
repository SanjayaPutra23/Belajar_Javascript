// FYRTHER EXPLORATION


// 1. pembukaan
console.log("Hello, World!");

// 2. Fungsi
function greet(name) {
    return `Hello, ${name}!`;
}

console.log(greet("Alice"));

// 3. Pengulangan (Loop)
for (let i = 0; i < 5; i++) {
    console.log(i);
}

// 4. array
let fruits = ["apple", "banana", "cherry"];
fruits.forEach((fruit) => {
    console.log(fruit);
});

// 5. Objek
let person = {
    name: "John",
    age: 30,
    greet: function () {
        return `Hello, my name is ${this.name}`;
    },
};

console.log(person.greet());

// 6. Asynchronous (Promise)
function fetchData() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
        resolve("Data fetched!");
        }, 2000);
    });
}

fetchData().then((message) => {
    console.log(message);
});
