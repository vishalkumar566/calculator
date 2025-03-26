// script.js
let display = document.getElementById('display');
let currentInput = '';

function appendToDisplay(value) {
    if (currentInput === '0' && !isNaN(value)) {
        currentInput = value; // Replace '0' with the new number
    } else {
        currentInput += value; // Append the new value
    }
    display.innerText = currentInput;
}

function clearDisplay() {
    currentInput = '0';
    display.innerText = currentInput;
}

function calculateResult() {
    try {
        // Evaluate the expression in the display
        currentInput = eval(currentInput).toString();
        display.innerText = currentInput;
    } catch (error) {
        display.innerText = 'Error';
        currentInput = '0'; // Reset after error
    }
}
