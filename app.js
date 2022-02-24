console.log("Proof of Life!");

// var we are going to use mostly in 102
// let we are going to use if the variable is going to change values
// const we awre going to use if the value will never change
// changing values is not the same as updating a value

let userName = "Kenney";
console.log(userName);

// At least one dynamic component should be based on user input.
var myName = prompt("Welcome to Funkoland, what is your name?");
console.log("myName: ", myName);

// At least one dynamic component should use a conditional statement to determine the output.
if (myName == 'Roger') {
    document.write(`Welcome Funko lover, ${myName}`)
} else {
    document.write("Welcome, " + myName)
}

let myAge = 33;
console.log(typeof myAge);

// document.write(myName);