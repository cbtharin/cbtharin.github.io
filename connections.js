<script>
function press(btn) {
  const activeButtons = document.querySelectorAll(".button.active");

  // If already active, allow toggle off
  if (btn.classList.contains("active")) {
    btn.classList.remove("active");
  } 
  // Otherwise, only activate if fewer than 4 are active
  else if (activeButtons.length < 4) {
    btn.classList.add("active");
  } 
}

var lives = 4;
var scoreElement = document.getElementById("lifeCount");
scoreElement.textContent = lives;

function submit(btn) {
  if (lives > 1) {
    lives = lives - 1;
    scoreElement.textContent = lives;
  } 
  else if (lives === 1) { 
    lives = 'you lose';
    const sound = new Audio('path/to/your/sound.mp3');
    scoreElement.textContent = lives;
    sound.play(); // Don't forget to play it!
  } 
}
</script>   
    

