// Initialize score
let score = 0;

// Select elements
const scoreDisplay = document.getElementById('score');
const clickButton = document.getElementById('clickButton');

// Update score function
function updateScore() {
  score++;
  scoreDisplay.textContent = score;
}

// Click event listener for button
clickButton.addEventListener('click', updateScore);
