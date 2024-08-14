// Asynchronous Programming

// 1. Menggunanakan `setTimeout`
console.log("Step 1: Start");

setTimeout(() => {
    console.log("Step 2: This runs after 2 seconds");
}, 2000); // Menunggu 2 detik

console.log("Step 3: End");


// 2. Menggunakan `Promise`
function fetchData() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
        resolve("Data fetched successfully!");
        }, 3000); // Menunggu 3 detik untuk mensimulasikan pengambilan data
    });
}

console.log("Start fetching data...");

fetchData().then((message) => {
    console.log(message);
})
.catch((error) => {
    console.log("Error:", error);
});

console.log("End of program");


// 3. Menggunakan `async/await`
function fetchData() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Data fetched successfully!");
        }, 3000);
    });
}

async function processData() {
    console.log("Start fetching data...");

    try {
        let result = await fetchData();
        console.log(result);
    } catch (error) {
        console.log("Error:", error);
    }

    console.log("End of data processing");
}

processData();

