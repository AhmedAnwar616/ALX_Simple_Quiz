// Add
const add = () => {
number1 = document.querySelector('number1').value || 0;
number2 = document.querySelector('number2').value || 0;
result = number1 + number2;
document.querySelector('calculation-result').textContent = result;
};

document.querySelector('add').addEventListener('click', add);