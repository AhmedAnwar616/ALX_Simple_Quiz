// Add
const add = (number1, number2) => {
    return number1 + number2;
}
const addition = () => {
number1 = parseFloat(document.querySelector('number1').value) || 0;
number2 = parseFloat(document.querySelector('number2').value) || 0;
result = add (number1, number2);
document.querySelector('calculation-result').textContent = result;
};

document.querySelector('add').addEventListener('click', addition);

