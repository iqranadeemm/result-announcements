function submitResult() {
    // Get the roll number from the input field
    var rollNumber = document.getElementById('rollNumber').value;

    // Check if the roll number matches the specific case
    if (rollNumber === '582771') {
        // Open the local HTML file in a new tab
        window.open('b.html', '_blank');
    } else {
        // If roll number does not match, show an alert or handle differently
        alert("Roll number not found. Please try again.");
    }
}

