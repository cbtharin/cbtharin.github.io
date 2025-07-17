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
 
