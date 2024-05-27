let firstNumberElement = document.getElementById("firstNumber");
let secondNumberElement = document.getElementById("secondNumber");
let userInputElement = document.getElementById("userInput");
let gameResultElement = document.getElementById("gameResult");

let successMessage = "Congratulations! You got it right.";
let tryAgainMessage = "Please Try Again!";

function restartGame() {
    let firstRandomNumber = Math.random() * 100;
    let secondRandomNumber = Math.random() * 100;

    firstNumberElement.textContent = Math.ceil(firstRandomNumber);
    secondNumberElement.textContent = Math.ceil(secondRandomNumber);
    gameResultElement.textContent = "";
    userInputElement.value = "";
}

restartGame();

function checkResult() {
    let firstRandomInteger = parseInt(firstNumberElement.textContent);
    let secondRandomInteger = parseInt(secondNumberElement.textContent);
    let input = parseInt(userInputElement.value);

    let sumOfTwoRandomIntegers = firstRandomInteger + secondRandomInteger;

    if (input === sumOfTwoRandomIntegers) {
        gameResultElement.textContent = successMessage;
        gameResultElement.style.backgroundColor = "green";
    } else {
        gameResultElement.textContent = tryAgainMessage;
        gameResultElement.style.backgroundColor = "red";
    }
}