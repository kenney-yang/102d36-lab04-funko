console.log("Proof of Life!");

// var we are going to use mostly in 102
// let we are going to use if the variable is going to change values
// const we awre going to use if the value will never change
// changing values is not the same as updating a value

let userName = "Kenney";
console.log(userName);

function askTheUser() {


    
    
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
}

// askTheUser(); 


// document.write(myName);

function displayRating() {
    let output ="";
    let rating = prompt('Number of rings from 1-5, how urgent is your request?');
    for (let i = 0; i < rating; i++) {
        // output = output + "🛎️";
        output = output + "🛎️";
    }
    return document.write(output);
}

// while loop
// create a user guessing game
// guess a number between 1 and 100
// the correct answer
// handle incorrect guesses
// number of attempts then they lose

// function guessingGame() {
//     let userGuess = prompt("Please guess a number between 1 and 100...");
//     let correctAnswer = 42;
//     let attempt = 4;

//     for (let i = 0; i < attempt; i++) {
//         while (userGuess < 1 || userGuess > 100 || parseInt(userGuess) != typeof "string") {
//             userGuess = prompt("Please try again...! A number between 1 and 100");
//         }
//         if (userGuess == correctAnswer) {
//             alert('DING DING DING!! We have ourselves a WINNER!');
//             document.write("Game Winner!");
//             break;
//         }   else if (userGuess > correctAnswer) {
//             userGuess = prompt("Sorry, too high!! Please try to guess lower...");
//         }   else if (userGuess < correctAnswer) {
//             userGuess = prompt("Sorry, too low!! Please try to guess higher...");
//         }
//         if (i == 3) {
//             alert("The correct answer was " + correctAnswer);
//             document.write("Game Loser!");
//         }
//     }
// }


function guessingGame() {
    let userGuess = prompt("Please guess how many Funko Pops have been given out between 1 and 100...");
    let correctAnswer = 88;
    let attempts = 4;

    for (let i = 0; i < attempts; i++) {
        while (userGuess < 1 || userGuess > 100) {
            userGuess = prompt("Please try again...! A number between 1 and 100");
        }
        if (userGuess == correctAnswer) {
            alert('Hooray! You won yourself a trip to Funkoland!');
            document.write("Game Winner!");
            break;
        }   else if (userGuess > correctAnswer) {
            userGuess = prompt("Funkoland wishes we could have that many winners!! Please try to guess lower...");
        }   else if (userGuess < correctAnswer) {
            userGuess = prompt("Funkoland isn't that cheap!! Please try to guess higher...");
        }
        if (i == 3) {
            alert("The correct answer was " + correctAnswer);
            document.write("Good luck for our next challenge!");
        }
    }
}