// Add
const add = (number1, number2) => {
    return number1 + number2;
}
const addition = () => {
number1 = parseFloat(document.getElementById('number1').value) || 0;
number2 = parseFloat(document.getElementById('number2').value) || 0;
result = add (number1, number2);
document.getElementById('calculation-result').textContent = result;
};

document.getElementById('add').addEventListener('click', addition);

// subtract
const subtract = (number1, number2) => {
    return number1 - number2;
}
const subtraction = () => {
number1 = parseFloat(document.getElementById('number1').value) || 0;
number2 = parseFloat(document.getElementById('number2').value) || 0;
result = subtract (number1, number2);
document.getElementById('calculation-result').textContent = result;
};

document.getElementById('subtract').addEventListener('click', subtraction);

// multiplie
const  multiply = (number1, number2) => {
    return number1 * number2;
}
const multiplication = () => {
number1 = parseFloat(document.getElementById('number1').value) || 0;
number2 = parseFloat(document.getElementById('number2').value) || 0;
result = multiply (number1, number2);
document.getElementById('calculation-result').textContent = result;
};

document.getElementById('multiply').addEventListener('click', multiplication);

// division
const  divide = (number1, number2) => {
    return number1 / number2;
}
const division = () => {
number1 = parseFloat(document.getElementById('number1').value) || 0;
number2 = parseFloat(document.getElementById('number2').value) || 0;
result = divide (number1, number2);
document.getElementById('calculation-result').textContent = result;
};

document.getElementById('divide').addEventListener('click', division);





