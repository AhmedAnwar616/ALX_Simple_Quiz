// Function Declaration

const checkAnswer = () => {
    correctAnswer = '4';  // Correct Answer      
    userAnswer = document.querySelector('input[name=quiz]:checked').value; //Retrieve the User’s Answer
    if (userAnswer === correctAnswer) {
        document.querySelector('feedback').textContent = 'Correct! Well done.';
    } else {
        document.querySelector('feedback').textContent = "That's incorrect. Try again!";
    }
};

// Add an Event Listener to the Submit Button

document.getElementById("submit-answer").addEventListener('click' , 'checkAnswer');