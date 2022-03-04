const readline = require ("readline")

const reader = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

reader.question("Welcome to the password validator tool. Please enter a password to validate.", function (input) {
    person = input.substring(" ");

    if (person.length >= 10){
        console.log("Password accepted")
    } else {
        console.log("Password declined")
    }

    reader.close()
})