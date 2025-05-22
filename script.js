const num1 = document.getElementById('num1');
const num2 = document.getElementById('num2');
const operator = document.getElementById('operator');
const result = document.getElementById('result');

document.getElementById('calc').addEventListener('click', () => {
    const a = parseFloat(num1.value);
    const b = parseFloat(num2.value);
    const op = operator.value;

    if (isNaN(a) || isNaN(b)) {
        result.textContent = 'Please enter valid numbers';
        return;
    }

    let res;
    switch (op) {
        case '+':
            res = a + b;
            break;
        case '-':
            res = a - b;
            break;
        case '*':
            res = a * b;
            break;
        case '/':
            res = b !== 0 ? a / b : 'Cannot divide by zero';
            break;
        default:
            res = 'Invalid operation';
    }

    result.textContent = `Result: ${res}`;
});
