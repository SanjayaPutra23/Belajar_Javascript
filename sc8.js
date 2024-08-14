// CLASSES

// Mendefinisikan kelas 'Person'
class Person {
    // Constructor untuk inisialisasi properti objek
    constructor(firstName, lastName, age, job) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
        this.job = job;
    }

    // Method untuk memperkenalkan diri
    introduce() {
        console.log(`Hello, my name is ${this.firstName} ${this.lastName}. I am ${this.age} years old and I work as a ${this.job}.`);
    }

    // Method untuk menghitung tahun lahir
    calculateBirthYear() {
        const currentYear = new Date().getFullYear();
        return currentYear - this.age;
    }
}

// Membuat instance dari kelas 'Person'
let person1 = new Person("John", "Doe", 30, "Software Developer");
let person2 = new Person("Jane", "Smith", 25, "Graphic Designer");

// Mengakses dan memanggil method dari instance
person1.introduce(); // Output: Hello, my name is John Doe. I am 30 years old and I work as a Software Developer.
console.log("John's Birth Year: " + person1.calculateBirthYear()); // Output: John's Birth Year: (current year - 30)

person2.introduce(); // Output: Hello, my name is Jane Smith. I am 25 years old and I work as a Graphic Designer.
console.log("Jane's Birth Year: " + person2.calculateBirthYear()); // Output: Jane's Birth Year: (current year - 25)
