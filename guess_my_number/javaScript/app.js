const guessingNumber = document.querySelector(".guessing-number");
const guessedNumber = document.querySelector(".guessed-number");
const againButton = document.querySelector(".again-btn");
const checkButton = document.querySelector(".check-btn");
const gif = document.querySelector(".gif");
const result = document.querySelector(".result");
const score = document.querySelector(".score");
const highScore = document.querySelector(".highScore");

let secretNumber = Math.floor(Math.random() * 20) + 1;

let Score = 20;
let HighScore = 0;

checkButton.addEventListener("click", () => {
  const guess = guessedNumber.value;

  if (!guess) {
    alert("please enter the number !");
  } else if (guess < secretNumber) {
    if (Score > 1) {
      result.textContent = "To Low !";
      gif.src =
        "https://c.tenor.com/cS2qG03JR_sAAAAC/thats-too-low-too-low.gif";
      Score--;
      score.textContent = Score;
    } else {
      result.textContent = "You Lose The Game !";
      score.textContent = 0;
      document.querySelector(".left-content_guessing-no").style.background =
        "#d40000";
      document.querySelector(".left-content_guessing-no span").style.color =
        "rgba(0, 0, 0, 0.815)";
      gif.src = "https://c.tenor.com/c4Ie5Q4u5IYAAAAC/i-lose-the-six.gif";
    }
  } else if (guess > secretNumber) {
    if (Score > 1) {
      result.textContent = "To High !";
      gif.src = "https://c.tenor.com/6k-VJp84mMoAAAAC/elon-musk-too-much.gif";
      Score--;
      score.textContent = Score;
    } else {
      result.textContent = "You Lose The Game !";
      score.textContent = 0;
      document.querySelector(".left-content_guessing-no").style.background =
        "#d40000";
      document.querySelector(".left-content_guessing-no span").style.color =
        "rgba(0, 0, 0, 0.815)";
      gif.src = "https://c.tenor.com/c4Ie5Q4u5IYAAAAC/i-lose-the-six.gif";
    }
  } else if (guess == secretNumber) {
    guessingNumber.innerHTML = secretNumber;
    result.textContent = "Correct !";
    gif.src =
      "https://c.tenor.com/E0U2t9n_7p0AAAAC/congratulations-graduate-congratulations.gif";

    document.querySelector(".left-content_guessing-no").style.background =
      "#1ae200";
    document.querySelector(".left-content_guessing-no span").style.color =
      "rgba(0, 0, 0, 0.815)";

    HighScore = Score;
    highScore.textContent = HighScore;
  }
});


againButton.addEventListener('click', () => {
  secretNumber = Math.floor(Math.random() * 20) + 1;
  Score = 20;
guessedNumber.value = "";
score.textContent = 20;
highScore.textContent = HighScore;
document.querySelector(".left-content_guessing-no").style.background =
"#001629";
document.querySelector(".left-content_guessing-no span").style.color =
"rgba(255, 255, 255, 0.5)";
guessingNumber.textContent = "?"
result.textContent = "Guess Number between (1 and 20)";
})






