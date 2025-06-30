 // Get the button element
const startBtn = document.getElementById('startBtn');

const selectAudio = document.getElementById('selectAudio');

// Add a click event to go to level_select.html
startBtn.addEventListener('click', function() {
    // Go to the level select page
    //window.location.href = 'level_select.html';
    selectAudio.currentTime = 0; // Rewind to start
            selectAudio.play();

            // Wait for the audio to finish, then go to the next page
            selectAudio.onended = function() {
                window.location.href = 'level_select.html';
            };
});

// This function will run when a level is selected
function selectLevel(level) {
    // For now, just show an alert with the selected level
    // You can change this to load the actual level page
    window.location.href = `levels/level${level}.html`;
}