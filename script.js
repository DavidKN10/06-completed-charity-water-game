 // Get the button element
const startBtn = document.getElementById('startBtn');
// Add a click event to go to level_select.html
startBtn.addEventListener('click', function() {
    // Go to the level select page
    window.location.href = 'level_select.html';
});

// This function will run when a level is selected
function selectLevel(level) {
    // For now, just show an alert with the selected level
    // You can change this to load the actual level page
    window.location.href = `levels/level${level}.html`;
}