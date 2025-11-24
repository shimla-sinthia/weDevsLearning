function greet(name, callback) {
    console.log("Hello, " + name);
    // callback();
    console.log("Greet function execution completed");
}

function sayBye() {
setTimeout(() => {
        console.log("Goodbye!");
        // callback();
    }, 3000);
}

greet("Ajay", sayBye);
console.log("End of script");