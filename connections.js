document.addEventListener("DOMContentLoaded", function () {
  function press(btn) {
    const activeButtons = document.querySelectorAll(".button.active");

    if (btn.classList.contains("active")) {
      btn.classList.remove("active");
    } else if (activeButtons.length < 4) {
      btn.classList.add("active");
    }
  }

  var lives = 4;
  var scoreElement = document.getElementById("lifeCount");
  scoreElement.textContent = lives;

  window.submit = function (btn) {
    if (lives > 1) {
      lives -= 1;
      scoreElement.textContent = lives;
    } else if (lives === 1) {
      lives = 'you lose';
      const sound = new Audio('path/to/your/sound.mp3');
      scoreElement.textContent = lives;
      sound.play();
    }
  };
});
