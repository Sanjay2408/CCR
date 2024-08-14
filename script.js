// script.js

// Function to handle the "Join Us Now" button click
function joinUs() {
    alert("Thank you for your interest in joining Sandy School of Technology! We will guide you through the application process.");
}

// Attach the joinUs function to the button click event
document.addEventListener("DOMContentLoaded", function() {
    const joinButton = document.querySelector("button");
    if (joinButton) {
        joinButton.addEventListener("click", joinUs);
    }
});
