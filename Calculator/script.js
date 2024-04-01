const display = document.getElementById('display');
const buttons = Array.from(document.getElementsByClassName('num'));
const operators = Array.from(document.getElementsByClassName('operator'));
const clear = document.getElementById('clear');
const equals = document.getElementById('equals');
let currentNum = '';
let prevNum = '';
let result = null;
let currentOperator = null;

buttons.map( button => {
    button.addEventListener('click', (e) => {
        currentNum += e.target.value;
        display.value = currentNum;
    });
});

operators.map( operator => {
    operator.addEventListener('click', (e) => {
        if (currentOperator !== null) calculate();
        currentOperator = e.target.value;
        prevNum = currentNum;
        currentNum = '';
    });
});

equals.addEventListener('click', () => {
    if (currentOperator === null || currentNum === '') return;
    calculate();
});

clear.addEventListener('click', () => {
    currentNum = '';
    prevNum = '';
    currentOperator = null;
    result = null;
    display.value = '';
});

function calculate() {
    const prev = parseFloat(prevNum);
    const current = parseFloat(currentNum);
    switch (currentOperator) {
        case '+':
            result = prev + current;
            break;
        case '-':
            result = prev - current;
            break;
        case '*':
result = prev * current;
            break;
        case '/':
            result = prev / current;
            break;
    }
    currentNum = result.toString();
    display.value = currentNum;
    currentOperator = null;
    result = null;
}