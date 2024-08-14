// OBJECTS

// Mendefinisikan objek 'person'
let person = {
    firstName: "John",
    lastName: "Doe",
    age: 30,
    job: "Software Developer",
    // Method untuk memperkenalkan diri
    introduce: function () {
    console.log("Hello, my name is " + this.firstName + " " + this.lastName + ".");
    },
    // Method untuk menghitung tahun lahir
    calculateBirthYear: function () {
        let currentYear = new Date().getFullYear();
        return currentYear - this.age;
    },
};

// Mengakses properti objek
console.log("First Name: " + person.firstName); // Output: First Name: John
console.log("Last Name: " + person.lastName); // Output: Last Name: Doe
console.log("Age: " + person.age); // Output: Age: 30
console.log("Job: " + person.job); // Output: Job: Software Developer

// Memanggil method objek
person.introduce(); // Output: Hello, my name is John Doe.
console.log("Birth Year: " + person.calculateBirthYear()); // Output: Birth Year: (current year - 30)

// Menambahkan properti baru ke objek
person.nationality = "American";
console.log("Nationality: " + person.nationality); // Output: Nationality: American

// Mengubah nilai properti objek
person.age = 35;
console.log("Updated Age: " + person.age); // Output: Updated Age: 35

// Menghapus properti dari objek
delete person.job;
console.log("Job after deletion: " + person.job); // Output: Job after deletion: undefined
