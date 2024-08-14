// VARIABLES

// Let
let a;
let name = "Simon";

for (let myLetVariable = 0; myLetVariable < 5; myLetVariable++) {
    console.log(myLetVariable);
}

// Const
const Pi = 3.14; // Declare variable Pi
console.log(Pi); // 3.14
// const Pi = 3.14;
// Pi = 1; // will throw an error because you cannot change a constant variable.
const obj = {};
obj.a = 1; // no error
console.log(obj); // { a: 1 }


function foo(x, condition) {
    if (condition) {
        console.log(x);
        const x = 2;
        console.log(x);
    }
}

foo(1, true);
