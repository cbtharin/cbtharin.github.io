
//Fucntion for pushing the buttoms up and down 
function press(btn) {
const activeButtons = document.querySelectorAll(".button.active");

    
if (btn.classList.contains("active")) {
      btn.classList.remove("active");
    } 
    // Otherwise, only activate if fewer than 4 are active
else if (activeButtons.length < 4) {
      btn.classList.add("active");
    } 
    }


//Lives 
var lives = 4;
var scoreElement = document.getElementById("lifeCount");
scoreElement.textContent = lives;
 
    
    function submit(btn) {
    	if (lives > 1){
        	lives = lives - 1;
        	scoreElement.textContent = lives;
            }
        else if (lives = 1){ 
    		lives = 'you lose';
            const sound = new Audio('losing-horn-313723.mp3');
        	scoreElement.textContent = lives;
		}
    }	

