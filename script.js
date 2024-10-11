function updateClock() {
    const now = new Date();
    const hours = now.getHours();
    const minutes = now.getMinutes();
    const seconds = now.getSeconds();
    const amPm = hours >= 12 ? 'PM' : 'AM';

    // Convert to 12-hour format
    const displayHour = hours % 12 || 12;  // Convert '0' to '12' for midnight

    // Add leading zeros
    const displayMinutes = minutes < 10 ? '0' + minutes : minutes;
    const displaySeconds = seconds < 10 ? '0' + seconds : seconds;

    // Display time in HH:MM:SS AM/PM format
    const timeString = `${displayHour}:${displayMinutes}:${displaySeconds} ${amPm}`;
    document.getElementById('time').textContent = timeString;

    // Get and display the date
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    const dateString = now.toLocaleDateString(undefined, options);
    document.getElementById('date').textContent = dateString;
}

// Update the clock every second
setInterval(updateClock, 1000);

// Initialize clock on page load
updateClock();
