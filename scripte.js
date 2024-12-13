const countdownElement = document.getElementById('countdown');
let timeLeft = 30;

const timer = setInterval(() => {
  timeLeft--;
  countdownElement.textContent = timeLeft;

  if (timeLeft <= 0) {
    clearInterval(timer);
    countdownElement.textContent = "Time's Up!";
  }
}, 1000);
// Optional: Dynamic background adjustment