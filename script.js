console.log("Ready to play?");
var count = 0;
var numberWins = 0;
var numberTies = 0;
var numberLosses = 0;
var array = ["R", "P", "S"];
var userPick = "";
var playAgain = true;

console.log(userPick);

var runGame = function() {
    userPick = prompt("Pick R, P, or S")
    var randomNumber = Math.floor(Math.random() * 3);
    computer = array[randomNumber];
    document.write("The computer chose " + computer + " and you chose " + userPick + ".");
    count ++;
    
    if (userPick === "S" && computer === "P") {
        console.log("You won!!");
        numberWins ++;
    
    }
    if (userPick === "R" && computer === "P") {
        document.write("You lose :(")
        numberLosses ++;
    }
    if (userPick === "P" && computer === "P") {
        document.write("You tied...")
        numberTies ++;
    }
    if (userPick === "S" && computer === "R") {
        document.write("You lose :(")
        numberLosses ++;
    }
    if (userPick === "R" && computer === "R") {
        document.write("You tied...")
        numberTies ++;
    }
    if (userPick === "P" && computer === "R") {
        document.write("You won!!")
        numberWins ++;
    }
    if (userPick === "S" && computer === "S") {
        document.write("You tied...")
        numberTies ++;
    }
    if (userPick === "R" && computer === "S") {
        document.write("You won!!")
        numberWins ++;
    }
    if (userPick === "P" && computer === "S") {
        document.write("You lose :(")
        numberLosses ++;
    }
    
    document.write("Here are your results:");
    document.write("You won " + numberWins + " times");
    document.write("You lost " + numberLosses + " times");
    document.write("You tied " + numberTies + " times");
    playAgain = confirm("Play again!");
}

while (playAgain) {
    runGame();
}