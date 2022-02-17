//Wait for the DOM to finish loading before running the game
//Get the button elements and add event listener to them

document.addEventListener("DOMContentLoaded", function() {
    let buttons = document.getElementsByTagName("button");

    for (let button of buttons) {
        button.addEventListener("click", function() {
            if(this.getAttribute("data-type") === "submit") {
                checkAnswer();
            } else {
                let gameType = this.getAttribute("data-type");
                runGame(gameType);
            }
        })
    }

    runGame("addition");
})

/**
 * The main game "loop", called when the script is first loaded
 * and after the user's answer has been processed
 */

function runGame(gameType) {

    //Create two random numbers between 1 and 25
    let num1 = Math.floor(Math.random() * 25) + 1;
    let num2 = Math.floor(Math.random() * 25) + 1;

    if (gameType === "addition") {
        displayAdditionQuestion(num1, num2);
    } else {
        alert(`Unknown game type: ${gameType}`);
        throw `Unknown game type: ${gameType}. Aborting!`
    }
}

/**
 * Check the user's answer directly from the DOM (input), and returns
 * a message telling if the user got it right
 */
function checkAnswer() {

    let userAnswer = parseInt(document.getElementById('answer-box').value); //is used 'value' because is an input
    let calculatedAnswer = calculateCorrectAnswer();
    let isCorrect = userAnswer === calculatedAnswer[0]; //it returns true or false

    if (isCorrect) {
        alert("Hey! You got it right!");
    } else {
        alert(`I'm sorry... the answer you submitted: ${userAnswer} is not correct. The answer is: ${calculatedAnswer[0]}`);
    }
    runGame(calculatedAnswer[1]); 
}

/**
 * Gets the operands (the numbers) and the operator (plus, minus, etc) 
 * directly from the DOM, and returns the correct answer.
 */

function calculateCorrectAnswer() {

    let operand1 = parseInt(document.getElementById('operand1').innerText);
    let operand2 = parseInt(document.getElementById('operand2').innerText);
    let operator = document.getElementById('operator').innerText; //it's not a number, it doesn't need parseInt

    if (operator === "+") {
        return [operand1 + operand2, "addition"]; 
    } else {
        alert(`Unimplemented operator ${operator}`);
        throw `Unimplemented operator ${operator}. Aborting!`;
    }
}

function incrementScore() {


}

function incrementWrongAnswer() {


}

function displayAdditionQuestion(operand1, operand2) {
    document.getElementById('operand1').textContent = operand1;
    document.getElementById('operand2').textContent = operand2;
    document.getElementById('operator').textContent = "+";

}

function displaySubtractQuestion() {


}

function displayMultiplyQuestion() {


}