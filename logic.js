var winsCount = 0;
var lossesCount = 0;
var guessesCount = 8;

var computerChoices = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
// var computerChoices = ["a"]
    
function pushGuess() {
    guessesSoFar.push(event.key+", ");
}

var guessesSoFar = [];

function clearGuesses() {
    guessesSoFar.length=0;
}

document.onkeyup = function (event) {

    pushGuess();

    var userGuess = event.key;
    var computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];

    myGuess.textContent = event.key;
    computers.textContent = computerGuess;

    var wins = document.getElementById("wins");
    var losses = document.getElementById("losses");

    console.log(guessesSoFar.join(''));
    document.getElementById("previousGuesses").innerText = guessesSoFar.join('');
             
    
    
    if (userGuess == computerGuess) {
        wins.textContent = ++winsCount;
        guesses.textContent = guessesCount = 8;
        clearGuesses();
        document.getElementById("previousGuesses").innerText ="";
        alert("You Win!")

    }

    else if (guessesCount == 1) {
        losses.textContent = ++lossesCount;
        guesses.textContent = guessesCount += 7;
        clearGuesses();
        document.getElementById("previousGuesses").innerText ="";
        alert("You Lose!")

    }

    else if (userGuess !== computerGuess) {
        guesses.textContent = --guessesCount;
        previousGuesses[previousGuesses.length] = userGuess;
        
        
    }




}